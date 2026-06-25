import { describe, it, expect } from 'vitest';
import { useState } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Tab, TabList, TabPanel, Tabs } from '@albin/ui';

function Harness() {
  const [tab, setTab] = useState('a');
  return (
    <Tabs value={tab} onValueChange={setTab}>
      <TabList>
        <Tab value="a">Tab A</Tab>
        <Tab value="b">Tab B</Tab>
        <Tab value="c">Tab C</Tab>
      </TabList>
      <TabPanel value="a">Panel A</TabPanel>
      <TabPanel value="b">Panel B</TabPanel>
      <TabPanel value="c">Panel C</TabPanel>
    </Tabs>
  );
}

describe('Tabs', () => {
  it('switches the visible panel on click', async () => {
    const user = userEvent.setup();
    render(<Harness />);

    expect(screen.getByText('Panel A')).toBeInTheDocument();
    expect(screen.queryByText('Panel B')).not.toBeInTheDocument();

    await user.click(screen.getByRole('tab', { name: 'Tab B' }));
    expect(screen.getByText('Panel B')).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: 'Tab B' })).toHaveAttribute('aria-selected', 'true');
  });

  it('navigates with the arrow keys', async () => {
    const user = userEvent.setup();
    render(<Harness />);

    const tabA = screen.getByRole('tab', { name: 'Tab A' });
    tabA.focus();
    await user.keyboard('{ArrowRight}');

    expect(screen.getByRole('tab', { name: 'Tab B' })).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByText('Panel B')).toBeInTheDocument();
  });
});
