<script setup lang="ts">
import { shallowRef } from 'vue';
import Card from 'lib/components/card/Card.vue';
import DocTitle from '../DocTitle.vue';
import Button from 'lib/components/button/Button.vue';
import DialogAdjustmentTask from 'lib/components/dialogAdjustmentTask/DialogAdjustmentTask.vue';

const customQueryParams = {
  subModule: '["6706211e872d8431a33e68b4"]',
};
const visibility = shallowRef<boolean>(true);
</script>
<template>
  <Card>
    <template #header>
      <DocTitle name="Dialog Adjusment Task" />
    </template>
    <template #content>
      <Button
        @click="
          () => {
            visibility = true;
          }
        "
        label="Show Dialog"
      />
      <DialogAdjustmentTask
        v-model:visibility="visibility"
        :custom-query-params="customQueryParams"
        :custom-status-filter="[
          {
            label: 'asd',
            value: 'asd',
          },
        ]"
        :members="[
          {
            _id: '66d1771c1ebe5344bc2b9dab',
            nickName: 'Super Admin',
            key: 24,
          },
        ]"
        prevent-appear
      />
    </template>
  </Card>
</template>
