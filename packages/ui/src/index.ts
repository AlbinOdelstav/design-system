// PUBLIC BARREL — explicit re-exports of every component, view and its types.

// lib + tokens
export { cn } from './lib/cn';
export { cssVar, cssVarName } from './tokens/css-var-name';
export { tokens } from './tokens/tokens';
export type { TokenCategory } from './tokens/tokens';

// --- Layout / Shell ---
export { AppShell } from './components/AppShell/AppShell';
export type { AppShellProps } from './components/AppShell/AppShell';
export { Sidebar } from './components/Sidebar/Sidebar';
export type { SidebarProps } from './components/Sidebar/Sidebar';
export { TopBar } from './components/TopBar/TopBar';
export type { TopBarProps } from './components/TopBar/TopBar';
export { BottomNav } from './components/BottomNav/BottomNav';
export type { BottomNavProps, BottomNavItem } from './components/BottomNav/BottomNav';
export { Container } from './components/Container/Container';
export type { ContainerProps } from './components/Container/Container';
export { PageHeader } from './components/PageHeader/PageHeader';
export type { PageHeaderProps } from './components/PageHeader/PageHeader';
export { Divider } from './components/Divider/Divider';
export type { DividerProps } from './components/Divider/Divider';

// --- Typography ---
export { Heading } from './components/Heading/Heading';
export type { HeadingProps } from './components/Heading/Heading';
export { Text } from './components/Text/Text';
export type { TextProps } from './components/Text/Text';
export { Label } from './components/Label/Label';
export type { LabelProps } from './components/Label/Label';
export { Caption } from './components/Caption/Caption';
export type { CaptionProps } from './components/Caption/Caption';

// --- Form ---
export { FormField, useFormField } from './components/FormField/FormField';
export type { FormFieldProps } from './components/FormField/FormField';
export { Input } from './components/Input/Input';
export type { InputProps } from './components/Input/Input';
export { Textarea } from './components/Textarea/Textarea';
export type { TextareaProps } from './components/Textarea/Textarea';
export { Select } from './components/Select/Select';
export type { SelectProps } from './components/Select/Select';
export { Checkbox } from './components/Checkbox/Checkbox';
export type { CheckboxProps } from './components/Checkbox/Checkbox';
export { Radio, RadioGroup } from './components/Radio/Radio';
export type { RadioProps, RadioGroupProps } from './components/Radio/Radio';
export { Switch } from './components/Switch/Switch';
export type { SwitchProps } from './components/Switch/Switch';
export { Slider } from './components/Slider/Slider';
export type { SliderProps } from './components/Slider/Slider';

// --- Actions ---
export { Button } from './components/Button/Button';
export type { ButtonProps } from './components/Button/Button';
export { IconButton } from './components/IconButton/IconButton';
export type { IconButtonProps } from './components/IconButton/IconButton';
export { ButtonGroup } from './components/ButtonGroup/ButtonGroup';
export type { ButtonGroupProps } from './components/ButtonGroup/ButtonGroup';

// --- Data display ---
export { Card, CardHeader, CardBody, CardFooter } from './components/Card/Card';
export type { CardProps } from './components/Card/Card';
export { Badge } from './components/Badge/Badge';
export type { BadgeProps } from './components/Badge/Badge';
export { Avatar } from './components/Avatar/Avatar';
export type { AvatarProps } from './components/Avatar/Avatar';
export { Stat, StatLabel, StatValue, StatDelta } from './components/Stat/Stat';
export type { StatDeltaProps } from './components/Stat/Stat';
export { List } from './components/List/List';
export type { ListProps } from './components/List/List';
export { ListItem } from './components/ListItem/ListItem';
export type { ListItemProps } from './components/ListItem/ListItem';
export { Table, TableHead, TableBody, TableRow, TableCell } from './components/Table/Table';
export type { TableCellProps } from './components/Table/Table';
export { Chip } from './components/Chip/Chip';
export type { ChipProps } from './components/Chip/Chip';

// --- Feedback / overlay ---
export { Modal } from './components/Modal/Modal';
export type { ModalProps } from './components/Modal/Modal';
export { ToastProvider, useToast } from './components/Toast/Toast';
export type { ToastOptions, ToastVariant, ToastProviderProps } from './components/Toast/Toast';
export { Tooltip } from './components/Tooltip/Tooltip';
export type { TooltipProps } from './components/Tooltip/Tooltip';
export { ProgressBar } from './components/ProgressBar/ProgressBar';
export type { ProgressBarProps } from './components/ProgressBar/ProgressBar';
export { ProgressRing } from './components/ProgressRing/ProgressRing';
export type { ProgressRingProps } from './components/ProgressRing/ProgressRing';
export { Skeleton } from './components/Skeleton/Skeleton';
export type { SkeletonProps } from './components/Skeleton/Skeleton';
export { Spinner } from './components/Spinner/Spinner';
export type { SpinnerProps } from './components/Spinner/Spinner';
export { Alert } from './components/Alert/Alert';
export type { AlertProps } from './components/Alert/Alert';
export { EmptyState } from './components/EmptyState/EmptyState';
export type { EmptyStateProps } from './components/EmptyState/EmptyState';
export { ErrorState } from './components/ErrorState/ErrorState';
export type { ErrorStateProps } from './components/ErrorState/ErrorState';

// --- Navigation ---
export { Tabs, TabList, Tab, TabPanel } from './components/Tabs/Tabs';
export type { TabsProps, TabProps, TabPanelProps } from './components/Tabs/Tabs';
export { Breadcrumb } from './components/Breadcrumb/Breadcrumb';
export type { BreadcrumbProps, BreadcrumbItem } from './components/Breadcrumb/Breadcrumb';
export { Pagination } from './components/Pagination/Pagination';
export type { PaginationProps } from './components/Pagination/Pagination';
export { NavItem } from './components/NavItem/NavItem';
export type { NavItemProps } from './components/NavItem/NavItem';
export { Stepper } from './components/Stepper/Stepper';
export type { StepperProps, Step } from './components/Stepper/Stepper';

// --- Domain ---
export { Timer, formatTime } from './components/Timer/Timer';
export type { TimerProps } from './components/Timer/Timer';
export { SetLoggerRow } from './components/SetLoggerRow/SetLoggerRow';
export type { SetLoggerRowProps } from './components/SetLoggerRow/SetLoggerRow';
export { ChartPlaceholder } from './components/ChartPlaceholder/ChartPlaceholder';
export type { ChartPlaceholderProps } from './components/ChartPlaceholder/ChartPlaceholder';

// --- Icon ---
export { Icon } from './components/Icon/Icon';
export type { IconProps, IconSize } from './components/Icon/Icon';

// --- Views ---
export { LoginView } from './views/auth/LoginView';
export type { LoginViewProps } from './views/auth/LoginView';
export { RegisterView } from './views/auth/RegisterView';
export type { RegisterViewProps } from './views/auth/RegisterView';
export { ForgotPasswordView } from './views/auth/ForgotPasswordView';
export type { ForgotPasswordViewProps } from './views/auth/ForgotPasswordView';
export { WelcomeView } from './views/onboarding/WelcomeView';
export type { WelcomeViewProps } from './views/onboarding/WelcomeView';
export { OnboardingStepView } from './views/onboarding/OnboardingStepView';
export type { OnboardingStepViewProps } from './views/onboarding/OnboardingStepView';
export { ProfileSetupView } from './views/onboarding/ProfileSetupView';
export type { ProfileSetupViewProps } from './views/onboarding/ProfileSetupView';
export { DashboardView } from './views/core/DashboardView';
export type { DashboardViewProps } from './views/core/DashboardView';
export { WorkoutHistoryView } from './views/core/WorkoutHistoryView';
export type { WorkoutHistoryViewProps } from './views/core/WorkoutHistoryView';
export { ActiveWorkoutView } from './views/core/ActiveWorkoutView';
export type { ActiveWorkoutViewProps } from './views/core/ActiveWorkoutView';
export { ExerciseLibraryView } from './views/core/ExerciseLibraryView';
export type { ExerciseLibraryViewProps } from './views/core/ExerciseLibraryView';
export { ExerciseDetailView } from './views/core/ExerciseDetailView';
export type { ExerciseDetailViewProps } from './views/core/ExerciseDetailView';
export { ProgressStatsView } from './views/core/ProgressStatsView';
export type { ProgressStatsViewProps } from './views/core/ProgressStatsView';
export { SettingsView } from './views/settings/SettingsView';
export type { SettingsViewProps } from './views/settings/SettingsView';
export { ProfileView } from './views/settings/ProfileView';
export type { ProfileViewProps } from './views/settings/ProfileView';
export { EmptyStateView } from './views/states/EmptyStateView';
export type { EmptyStateViewProps } from './views/states/EmptyStateView';
export { LoadingSkeletonView } from './views/states/LoadingSkeletonView';
export type { LoadingSkeletonViewProps } from './views/states/LoadingSkeletonView';
export { ErrorView } from './views/states/ErrorView';
export type { ErrorViewProps } from './views/states/ErrorView';
export { NotFoundView } from './views/states/NotFoundView';
export type { NotFoundViewProps } from './views/states/NotFoundView';
