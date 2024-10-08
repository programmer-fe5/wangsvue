<script setup lang="ts">
import { computed, ref, watch, onMounted, onUnmounted, shallowRef } from 'vue';

import Menu from 'lib/components/menu/Menu.vue';
import {
  ButtonBulkActionEmits,
  ButtonBulkActionProps,
} from './ButtonBulkAction.vue.d';
import { MenuItem } from '../menuitem';
import { filterVisibleMenu } from '../helpers';
import { Data } from '../datatable/DataTable.vue.d';

import Button from '../button/Button.vue';
import eventBus, { Events } from 'lib/event-bus';

const props = withDefaults(defineProps<ButtonBulkActionProps>(), {
  tableName: 'datatable',
  useButton: true,
});

const emit = defineEmits<ButtonBulkActionEmits>();

onMounted(() => {
  window.addEventListener('disableBulkAction', disableBulkAction);

  eventBus.on('data-table:update-selected-data', handleUpdateSelectedData);
  eventBus.on('data-table:update-total-record', updateTotalRecordsHandler);
});

onUnmounted(() => {
  window.removeEventListener('disableBulkAction', disableBulkAction);
  eventBus.off('data-table:update-total-record');
  eventBus.off('data-table:update-selected-data');
});

const menu = ref();
const selectedOption = shallowRef<MenuItem>();
const totalRecords = shallowRef<number>(0);
const isAllDataSelected = shallowRef<boolean>(false);
const isDisabled = shallowRef<boolean>(false);
const dataSelected = ref<Data[] | undefined>(props.selectedData);

const bulkOptions = computed(() => {
  return filterVisibleMenu(props.options);
});

const showSelectAllButton = computed(
  () =>
    dataSelected.value?.length && !isDisabled.value && totalRecords.value > 0,
);

const selectAllData = (): void => {
  /**
   * Trigger fetch all data from data table.
   *
   */
  window.dispatchEvent(
    new CustomEvent('fetchAllData', { detail: props.tableName }),
  );

  eventBus.emit('data-table:select-all-record', { tableName: props.tableName });
};

const unSelectAllData = (): void => {
  emit('update:selectedData', []);
  eventBus.emit('data-table:clear-selected-data', {
    tableName: props.tableName,
  });
};

const disableBulkAction = (event: CustomEvent): void => {
  if (props.tableName === event.detail.tableName)
    isDisabled.value = event.detail.value;
};

const toggleMenu = (e: Event): void => {
  menu.value?.toggle(e);
};

/**
 * Handle the event when the total records is updated from the data table.
 * @param event custom event with totalRecords data.
 */
const updateTotalRecordsHandler = (
  event: Events['data-table:update-total-record'],
): void => {
  if (props.tableName === event?.tableName) {
    totalRecords.value = event?.total;
  }
};

const handleUpdateSelectedData = (
  e: Events['data-table:update-selected-data'],
): void => {
  if (e.tableName === props.tableName) {
    dataSelected.value = e.data;
    emit('update:selectedData', e.data ?? []);
  }
};

watch(
  [dataSelected, totalRecords],
  ([datas, total]) => {
    if (!datas?.length) selectedOption.value = undefined;
    isAllDataSelected.value = datas?.length === total;
  },
  { deep: true },
);

watch(
  () => props.totalRecords,
  (total) => (totalRecords.value = total ?? 0),
  { immediate: true },
);
</script>

<template>
  <div
    v-show="dataSelected?.length"
    class="flex gap-2 items-center"
    data-wv-name="bulkaction"
    data-wv-section="root"
  >
    <Menu
      id="bulkaction-overlay-menu"
      ref="menu"
      v-if="dataSelected?.length"
      :model="bulkOptions"
      :popup="true"
      data-wv-section="bulkactionmenu"
    />

    <span
      v-show="dataSelected?.length"
      class="text-xs text-grayscale-900 cursor-default whitespace-nowrap"
      data-wv-section="selection-message"
    >
      {{ dataSelected?.length }} data dipilih
    </span>

    <Button
      v-show="showSelectAllButton"
      :class="[
        '!px-1.5 !py-1 -ml-1.5 -mr-1.5 !text-xs',
        { 'pointer-events-none': isAllDataSelected },
      ]"
      @click="selectAllData"
      data-wv-section="buttonselectall"
      text
    >
      <template v-if="!isAllDataSelected">
        Pilih semua ({{ totalRecords }} data)
      </template>
      <template v-else> Semua data terpilih </template>
    </Button>

    <Button
      @click="toggleMenu"
      data-wv-section="bulkactiontoggle"
      icon="ellipsis-h"
      outlined
      severity="secondary"
      size="small"
    />
    <Button
      @click="unSelectAllData"
      class="!p-0 !w-6 !h-6 [&_.icon]:!w-5 [&_.icon]:!h-5"
      data-wv-section="clearselection"
      icon="close"
      severity="danger"
      text
    />
  </div>
</template>
