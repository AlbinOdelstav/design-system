/**
 * Post-build smoke check for the published library. Run AFTER
 * `npm run build -w @albin/ui`. Verifies the dist entry imports and that the
 * key export + token stylesheets exist. Wired as `npm run verify:dist`.
 */
import { access } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { pathToFileURL } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = resolve(__dirname, '..', 'packages', 'ui', 'dist');

async function exists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

async function main() {
  const errors = [];

  const entry = resolve(distDir, 'index.js');
  if (!(await exists(entry))) {
    errors.push(`Missing dist entry: ${entry}`);
  } else {
    const mod = await import(pathToFileURL(entry).href);
    // Button is a forwardRef exotic component (an object), so just assert it's
    // a defined, renderable export.
    if (mod.Button == null) {
      errors.push('Expected `Button` export to be present in dist/index.js');
    }
    if (typeof mod.DashboardView !== 'function') {
      errors.push('Expected `DashboardView` view export to be a function in dist/index.js');
    }
  }

  for (const file of ['styles.css', 'base.css', 'tailwind-preset.js']) {
    if (!(await exists(resolve(distDir, file)))) {
      errors.push(`Missing dist file: ${file}`);
    }
  }

  if (errors.length > 0) {
    console.error('check-dist FAILED:');
    for (const e of errors) console.error('  - ' + e);
    process.exit(1);
  }

  console.log('check-dist OK: Button export + styles.css + base.css + preset present');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
