import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import type { ComponentType } from 'react';
import { ToastProvider } from '@albin/ui';
import * as UI from '@albin/ui';

/**
 * Smoke coverage: every atom and view has a `*.showcase.tsx`. Rendering each one
 * (with the real, prop-complete examples) asserts nothing throws on mount. New
 * components are covered automatically once a showcase file is added.
 */
const showcases = import.meta.glob<{ default: ComponentType; meta: { name: string } }>(
  '../packages/showcase/src/showcases/**/*.showcase.tsx',
  { eager: true },
);

describe('showcase render smoke', () => {
  const entries = Object.entries(showcases);

  it('discovers showcase files', () => {
    expect(entries.length).toBeGreaterThan(50);
  });

  for (const [path, mod] of entries) {
    const name = mod.meta?.name ?? path;
    it(`renders ${name} without throwing`, () => {
      const Showcase = mod.default;
      expect(() =>
        render(
          <ToastProvider>
            <Showcase />
          </ToastProvider>,
        ),
      ).not.toThrow();
    });
  }
});

describe('public barrel', () => {
  const expectedComponents = [
    'Button',
    'IconButton',
    'Card',
    'Input',
    'Modal',
    'Tabs',
    'Timer',
    'ToastProvider',
    'AppShell',
    'DashboardView',
    'LoginView',
    'NotFoundView',
  ];

  for (const name of expectedComponents) {
    it(`exports ${name}`, () => {
      expect(UI[name as keyof typeof UI]).toBeDefined();
    });
  }
});
