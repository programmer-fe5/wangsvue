import type { MaybeRef, MaybeRefOrGetter } from 'vue';
import { getImageURL } from 'wangsit-api-services';
import eventBus from './event-bus';

// Style
import './assets/css/main.css';
import 'highlight.js/styles/stackoverflow-light.css';

// PrimeVue
import WangsVue from 'primevue/config';
import ToastService from 'primevue/toastservice';

// Vee-validate
import {
  FormContext as VeeFormContext,
  useForm as veeUseForm,
  useField as veeUseField,
  FieldContext,
  RuleExpression,
  FieldOptions,
} from 'vee-validate';

interface FormContext<T> {
  values: T;
  handleSubmit: VeeFormContext['handleSubmit'];
  setValues: VeeFormContext['setValues'];
  setFieldValue: VeeFormContext['setFieldValue'];
}

/**
 * TODO: create config multi build-entry for each project
 */
const useForm = <T>(): FormContext<T> => {
  const { values, handleSubmit, setValues, setFieldValue } = veeUseForm();
  return {
    values: values as unknown as T,
    handleSubmit,
    setValues,
    setFieldValue,
  };
};

const useField = <T>(
  path: MaybeRefOrGetter<string>,
  rules?: MaybeRef<RuleExpression<T>>,
  opts?: Partial<FieldOptions<T>>,
): FieldContext<T> => {
  const context = veeUseField<T>(path, rules, opts);

  return context;
};

// Utils
import {
  useToast,
  getNestedProperyValue,
  checkRouteAccess,
  getUser,
  getProjectPermission,
  getUserType,
  getSalesRole,
  convertJsonImage,
  isEmptyObject,
  isIntersect,
  formatDate,
  formatISODate,
  formatDateReadable,
  queryParamsStringfy,
  useI18n,
} from 'lib/utils';

import { formatCurrency } from './components/inputcurrency/helpers/currency.helper';

// Directives
import Tooltip from 'primevue/tooltip';
import Focus from './directives/focus';

import useLoadingStore from './components/loading/store/loading.store';

import {
  Badge,
  BadgeGroup,
  Button,
  ButtonToggle,
  ButtonBulkAction,
  Breadcrumb,
  Card,
  Changelog,
  DataTable,
  Dropdown,
  MultiSelect,
  TabMenu,
  Toast,
  UserName,
  Icon,
  ButtonDownload,
  OverlayPanel,
  ButtonFilter,
  FilterContainer,
  DialogConfirm,
  Checkbox,
  QuickFilter,
  Menu,
  ButtonSearch,
  InputRangeNumber,
  Calendar,
  InputText,
  Form,
  DialogForm,
  InputNumber,
  InputEmail,
  WorkCalendar,
  Dialog,
  InputInitialName,
  ImageCompressor,
  InputPhoneNumber,
  InputPassword,
  Loading,
  InputURL,
  Timeline,
  SummaryAccordion,
  ButtonRadio,
  InputRepositoryName,
  Textarea,
  LiteDropdown,
  ChangelogPage,
  Editor,
  Image,
  Animation,
  Comment,
  ProgressBar,
  InputBadge,
  FileUpload,
  UserGroup,
  CodeSnippet,
  InvisibleField,
  DialogDetailPbi,
  TaskDetailPbi,
  ApproverInfo,
  DetailMember,
  DetailSprint,
  DialogAdjustmentTask,
  TaskDetail,
  TaskTable,
  NotificationItem,
  DialogImprovementTask,
  PDFViewer,
  TooltipSpan,
} from './components';

export {
  // Config
  WangsVue,
  ToastService,
  eventBus,

  // Directives
  Focus,
  Tooltip,
  useForm,
  useField,

  // Utils
  getNestedProperyValue,
  useToast,
  checkRouteAccess,
  getImageURL,
  getUser,
  getProjectPermission,
  getUserType,
  getSalesRole,
  convertJsonImage,
  isEmptyObject,
  isIntersect,
  formatDate,
  formatISODate,
  formatDateReadable,
  formatCurrency,
  queryParamsStringfy,
  useI18n,

  // Components
  Badge,
  BadgeGroup,
  Button,
  ButtonToggle,
  ButtonBulkAction,
  Breadcrumb,
  Card,
  Changelog,
  InputInitialName,
  Dialog,
  Dropdown,
  MultiSelect,
  TabMenu,
  Toast,
  UserName,
  Icon,
  InputPassword,
  InputBadge,
  OverlayPanel,
  ButtonDownload,
  ButtonFilter,
  InputPhoneNumber,
  FilterContainer,
  Image,
  ImageCompressor,
  Timeline,
  DialogConfirm,
  Checkbox,
  Menu,
  QuickFilter,
  ButtonSearch,
  InputRangeNumber,
  Calendar,
  WorkCalendar,
  InputText,
  Form,
  DialogForm,
  InputNumber,
  InputEmail,
  DataTable,
  Loading,
  SummaryAccordion,
  InputURL,
  InputRepositoryName,
  ButtonRadio,
  Textarea,
  LiteDropdown,
  ChangelogPage,
  Editor,
  Animation,
  Comment,
  ProgressBar,
  FileUpload,
  UserGroup,
  CodeSnippet,
  InvisibleField,
  DialogDetailPbi,
  TaskDetailPbi,
  ApproverInfo,
  DetailMember,
  DetailSprint,
  DialogAdjustmentTask,
  TaskDetail,
  TaskTable,
  NotificationItem,
  DialogImprovementTask,
  PDFViewer,
  TooltipSpan,

  // Component store
  useLoadingStore,
};
