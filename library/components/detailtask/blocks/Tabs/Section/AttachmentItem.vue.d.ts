import { ClassComponent } from 'lib/components/ts-helpers';

export type FileType =
  | 'image'
  | 'link'
  | 'video'
  | 'doc'
  | 'xls'
  | 'pdf'
  | 'csv'
  | 'unknown';

export interface AttachmentItemData {
  displayName?: string;
  url?: string;
  type?: FileType;
  caption?: string;
  createdAt: string;
  updatedAt: string;
  createdBy: { fullName: string; nickName: string; _id: string };
  _id: string;
}

/**
 * Attachment item component props
 */
export interface AttachmentItemProps {
  item?: AttachmentItemData;
}

/**
 * Attachment item component emits
 */
export type AttachmentItemEmits = {
  updateCaption: [];
  deleted: [];
};

/**
 * **WangsVue - AttachmentItem**
 *
 * --- ---
 * ![WangsVue](https://ik.imagekit.io/kurniadev/TS-HEAD-BLACK.png)
 *
 * @group Component
 *
 * @experimental
 */
declare class AttachmentItem extends ClassComponent<
  AttachmentItemProps,
  AttachmentItemEmits,
  unknown
> {}

export default AttachmentItem;
