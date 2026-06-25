import { useState } from 'react';
import { Tab, TabList, TabPanel, Tabs, Text } from '@albin/ui';
import { ShowcaseSection } from '../../components/ShowcaseSection';

export const meta = { name: 'Tabs', category: 'atoms', order: 33 } as const;

export default function Demo() {
  const [tab, setTab] = useState('overview');
  return (
    <ShowcaseSection title="Tablist (arrow-key navigable)">
      <div className="w-full max-w-md">
        <Tabs value={tab} onValueChange={setTab}>
          <TabList>
            <Tab value="overview">Overview</Tab>
            <Tab value="history">History</Tab>
            <Tab value="records">Records</Tab>
          </TabList>
          <TabPanel value="overview">
            <Text tone="muted">Your training overview at a glance.</Text>
          </TabPanel>
          <TabPanel value="history">
            <Text tone="muted">Past sessions and trends.</Text>
          </TabPanel>
          <TabPanel value="records">
            <Text tone="muted">Personal records across lifts.</Text>
          </TabPanel>
        </Tabs>
      </div>
    </ShowcaseSection>
  );
}
