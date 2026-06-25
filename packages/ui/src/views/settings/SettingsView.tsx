import { ChevronRight, Download, Upload } from 'lucide-react';
import { DemoAppShell } from '../shared/DemoAppShell';
import { Container } from '../../components/Container/Container';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { Card, CardHeader } from '../../components/Card/Card';
import { List } from '../../components/List/List';
import { ListItem } from '../../components/ListItem/ListItem';
import { Switch } from '../../components/Switch/Switch';
import { Select } from '../../components/Select/Select';
import { Button } from '../../components/Button/Button';

export interface SettingsViewProps {
  onDeleteAccount?: () => void;
  onChangePassword?: () => void;
}

/** Grouped settings cards: account, notifications, units, appearance, data. */
export function SettingsView({ onDeleteAccount, onChangePassword }: SettingsViewProps) {
  return (
    <DemoAppShell active="settings" title="Settings">
      <Container size="md" className="py-6">
        <PageHeader title="Settings" />

        <div className="mt-6 flex flex-col gap-6">
          <Card>
            <CardHeader>
              <span className="text-label font-semibold text-text">Account</span>
            </CardHeader>
            <List variant="flush">
              <ListItem right={<span className="text-label-sm text-text-muted">alex@example.com</span>}>
                Email
              </ListItem>
              <ListItem
                interactive
                onClick={onChangePassword}
                right={<ChevronRight className="h-5 w-5 text-text-subtle" />}
              >
                Change password
              </ListItem>
              <ListItem interactive onClick={onDeleteAccount}>
                <span className="font-medium text-danger">Delete account</span>
              </ListItem>
            </List>
          </Card>

          <Card>
            <CardHeader>
              <span className="text-label font-semibold text-text">Notifications</span>
            </CardHeader>
            <List variant="flush">
              <ListItem right={<Switch defaultChecked aria-label="Workout reminders" />}>
                Workout reminders
              </ListItem>
              <ListItem right={<Switch defaultChecked aria-label="Weekly summary" />}>
                Weekly summary
              </ListItem>
              <ListItem right={<Switch aria-label="Product updates" />}>Product updates</ListItem>
            </List>
          </Card>

          <Card>
            <CardHeader>
              <span className="text-label font-semibold text-text">Units</span>
            </CardHeader>
            <List variant="flush">
              <ListItem
                right={
                  <Select defaultValue="kg" aria-label="Weight unit" className="h-9 w-28">
                    <option value="kg">Kilograms</option>
                    <option value="lb">Pounds</option>
                  </Select>
                }
              >
                Weight
              </ListItem>
              <ListItem
                right={
                  <Select defaultValue="cm" aria-label="Height unit" className="h-9 w-28">
                    <option value="cm">Centimeters</option>
                    <option value="in">Inches</option>
                  </Select>
                }
              >
                Height
              </ListItem>
            </List>
          </Card>

          <Card>
            <CardHeader>
              <span className="text-label font-semibold text-text">Appearance</span>
            </CardHeader>
            <List variant="flush">
              <ListItem right={<span className="text-label-sm text-text-muted">Light</span>}>
                Theme
              </ListItem>
            </List>
          </Card>

          <Card>
            <CardHeader>
              <span className="text-label font-semibold text-text">Data</span>
            </CardHeader>
            <List variant="flush">
              <ListItem
                right={
                  <Button variant="outline" size="sm" leftIcon={<Download className="h-4 w-4" />}>
                    Export
                  </Button>
                }
              >
                Export data
              </ListItem>
              <ListItem
                right={
                  <Button variant="outline" size="sm" leftIcon={<Upload className="h-4 w-4" />}>
                    Import
                  </Button>
                }
              >
                Import data
              </ListItem>
            </List>
          </Card>
        </div>
      </Container>
    </DemoAppShell>
  );
}
