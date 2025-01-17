export type UserStatus = 'Aktif' | 'Nonaktif';
export type ProjectStatus = 'Sprint' | 'Backlog' | 'Selesai';
export type TaskStatus =
  | 'Waiting for Approval'
  | 'Backlog'
  | 'Sprint'
  | 'Pending Review Leader'
  | 'Reported Bug'
  | 'Fixing Bug'
  | 'Penyesuaian'
  | 'Selesai';

export type ProductBacklogItemStatus =
  | DevelopmentStatus
  | 'Overdue'
  | 'Pending E2E Testing';

export type DeploymentStatus =
  | 'Not Ready Yet'
  | 'Ready to Deploy'
  | 'Finish Deployment'
  | 'On Deployment';

export type DevelopmentStatus =
  | ProjectStatus
  | 'Pending E2E Testing Dev'
  | 'Selesai Dev'
  | 'Pending E2E Testing Staging'
  | 'Selesai Staging'
  | 'Reported Bug';

export type StatusSeverity =
  | 'success'
  | 'primary'
  | 'dark'
  | 'warning'
  | 'danger'
  | 'info';

export type WangsitStatus =
  | ProjectStatus
  | UserStatus
  | TaskStatus
  | DeploymentStatus
  | DevelopmentStatus
  | ProductBacklogItemStatus;
