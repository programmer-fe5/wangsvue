import { FormDataBody } from 'lib/dto/taskApi.dto';
import { Member } from './member.type';
import { DropdownOption, MultiSelectOption } from './options.type';
import { Project } from './project.type';
import { ProjectModule } from './projectModule.type';
import { ProjectProcess } from './projectProcess.type';
import { ProjectSubModule } from './projectSubmodule.type';
import { WangsitStatus } from './wangsStatus.type';
import { JSONContent } from 'lib/components/editor/Editor.vue.d';
import { ChildGroup } from 'lib/components/datatable/DataTable.vue.d';
import { FileType } from 'lib/components/taskdetail/blocks/sections/Attachment/AttachmentItem.vue.d';
import { Pbi } from 'lib/components/dialogdetailpbi/DialogDetailPbi.vue.d';

export type TaskDetailData = {
  _id: string;
  project: Project;
  process: ProjectProcess;
  module: ProjectModule;
  subModule: ProjectSubModule;
  productBacklogItem?: Pick<Pbi, '_id' | 'name'>;
  repository: string;
  sonarqube?: string;
  name: string;
  assignedTo: Member[];
  team: string[]; // Team Initial
  status: WangsitStatus;
  priority: number | null;
  timeReportedBug: number;
  startDate: Date | null;
  finishedDate: Date | null;
  duration: number | null;
  timerStartedAt: string | null;
  timerStartedValue: number | null;
  approvalStatus: string;
  isInActiveSprint: boolean;
};

export type TaskDescription = {
  _id: string;
  description: string | null;
  updatedBy: Member | null;
  updatedAt: string | Date | null;
};

export type TaskChildren = {
  process?: Pick<ProjectProcess, '_id' | 'name'>;
  module?: Pick<ProjectModule, '_id' | 'name'>;
  subModule?: Pick<ProjectSubModule, '_id' | 'name'>;
  tasks?: TaskDependencyDetail[];
  options?: DropdownOption[];
  selectedOptions?: string[];
};

export type TaskDependency = {
  process?: Pick<ProjectProcess, '_id' | 'name'>;
  module?: Pick<ProjectModule, '_id' | 'name' | 'initial'>;
  subModule?: Pick<ProjectSubModule, '_id' | 'name'>;
  task?: TaskDependencyDetail[];
  options?: DropdownOption[];
  selectedOptions?: string[];
  loading?: boolean;
  custom?: boolean;
  processOptions?: DropdownOption[] | MultiSelectOption[];
  moduleOptions?: DropdownOption[] | MultiSelectOption[];
  subModuleOptions?: DropdownOption[] | MultiSelectOption[];
  subModuleVisibility?: boolean;
};

export type TaskDependencyDetail = {
  _id: string;
  name: string;
  assignedTo: Member[];
  status: WangsitStatus;
  taskLink: TaskLink;
  caption: string;
  showCaption?: boolean;
};

export type TaskLinkType = 'task' | 'service';
export type TaskLinkURLType = 'url' | 'embedded';

export type TaskLink = {
  _id: string;
  type: TaskLinkType;
  link: string;
  linkType: TaskLinkURLType;
  updatedBy: Member;
  createdAt: string | Date;
  updatedAt: string | Date;
};

export type TaskChecklist = {
  _id: string;
  name: string;
  task: string;
  caption?: string;
  checklistItems?: TaskChecklistItem[];
  showRenameChecklist?: boolean;
  showAddItem?: boolean;
  isRequested?: boolean;
};

export type TaskChecklistItem = {
  _id: string;
  name: string;
  checked: boolean;
  updatedBy?: {
    _id: string;
    fullName: string;
    nickName: string;
  };
  isRequested: boolean;
  checkedAt?: string;
  caption?: string;
  createdAt: string;
  updatedAt: string;
  attachments: any[];
  showRenameItem?: boolean;
  showCaptionItem?: boolean;
  content?: JSONContent;
  key?: number;
};

export type TaskChecklistTemplate = {
  _id: string;
  project: string;
  name: string;
  module: string;
  subModule: string;
  task: string;
  items: string[];
  createdBy: Member;
  createdAt: string;
  updatedAt: string;
};

export interface TaskAPI {
  _id: string;
  name: string;
  header?: string;
  url?: string;
  method?: string;
  query?: string[];
  contentType: string;
  jsonBody?: string;
  formDataBody?: FormDataBody[];
  response?: string;
  isIntact?: boolean;
  isSuccess?: boolean;
  updatedBy: Member;
  updatedAt: string;
  anyChanges?: boolean; // Custom field for indicator if there is any changes in the data
  taskStatus?: WangsitStatus;
}

export type FormDataBodyCustom = Omit<FormDataBody, 'isMandatory'> & {
  isMandatory: 'ya' | 'tidak';
};

export type TaskAPIFormDataCustom = Omit<TaskAPI, 'formDataBody'> & {
  formDataBody: FormDataBodyCustom[];
};

export interface TaskReview {
  _id: string;
  task: string;
  user: Member;
  title: string;
  content?: string;
  checklists?: TaskReviewChecklist[];
  createdAt: string;
  updatedAt: string;
}

interface TaskReviewChecklist {
  name: string;
  items: TaskReviewChecklistItem[];
}

interface TaskReviewChecklistItem {
  name: string;
  result: 'Ok' | 'Bug';
  content?: string;
}

export type TaskType = 'parent' | 'child' | 'dependency';

export interface TaskTableItem {
  _id: string;
  project: Project;
  process: ProjectProcess;
  module: ProjectModule;
  subModule: ProjectSubModule;
  name: string;
  assignedTo: Member[];
  team: string[];
  status: WangsitStatus;
  priority?: number;
  timeReportedBug: number;
  childTask: number;
  dependency: TaskTableItemDependency;
  exportDependencyField?: string;
  lastUpdatedAt: string;
  children?: ChildGroup[];
  hasChildren?: boolean;
  taskType?: TaskType;
  isProjectManager?: boolean;
  isTeamLeader?: boolean;
  duration?: number;
}

export interface TaskTableItemDependency {
  done: number;
  onProgress: number;
}

export interface TaskTableOptionQuery {
  projectOptions?: boolean;
  moduleOptions?: boolean;
  subModuleOptions?: boolean;
  memberOptions?: boolean;
  taskOptions?: boolean;
  processOptions?: boolean;
  project?: string;
  module?: string;
  subModule?: string;
}

export interface TaskTableFamily {
  dependencies: TaskTableItem[];
  children: TaskTableItem[];
}

export interface TaskTableFamilyResponse {
  status: number;
  message: string;
  data: TaskTableFamily;
}

export interface TaskAttachmentChangelogItem {
  _id: string;
  type: FileType;
  attachmentSrc: string;
  attachment: string;
  action: string;
  user: Member;
  createdAt: string;
  updatedAt: string;
}

export interface TaskLinkChangelogItem {
  _id: string;
  type: TaskLinkType;
  action: string;
  oldValue: TaskLinkChangelogItemValue;
  newValue: TaskLinkChangelogItemValue;
  user: Member;
  createdAt: string;
  updatedAt: string;
}

export interface TaskLinkChangelogItemValue {
  type: TaskLinkURLType;
  link: string;
}

export interface TaskChecklistChangelogItem {
  _id: string;
  task: string;
  action: string;
  oldValue: string;
  newValue: string;
  attachment: {
    type: FileType;
    name: string;
    src: string;
  };
  user: Member;
  createdAt: string;
  updatedAt: string;
}
