<script lang="ts" setup>
import { computed, inject, ref, watch } from 'vue';
import InputSwitch from 'primevue/inputswitch';
import type {
  ButtonToggleProps,
  ButtonToggleEmits,
} from 'lib/components/buttontoggle/ButtonToggle.vue.d';

const InputSwitchPresets = inject<Record<string, any>>('preset').inputswitch;

const props = withDefaults(defineProps<ButtonToggleProps>(), {
  triState: false,
});

defineEmits<ButtonToggleEmits>();

const computedVal = computed(() => props.modelValue);

const model = ref(props.modelValue);

watch(computedVal, (val) => (model.value = val));
</script>

<template>
  <InputSwitch
    v-if="triState"
    v-model="model"
    :pt="{
      ...InputSwitchPresets,
      slider: ({ props: inputSwitchProps }) => ({
        class: [
          ...InputSwitchPresets.slider({ props: inputSwitchProps }).class,
          {
            'before:!bg-general-100': props.modelValue === undefined,
            'before:!bg-white':
              props.modelValue === true || props.modelValue === false,
          },
          '!border',
          {
            '!border-general-100': props.modelValue === undefined,
            '!border-transparent':
              props.modelValue === true || props.modelValue === false,
          },
          {
            '!bg-white':
              props.modelValue === undefined && !inputSwitchProps.disabled,
            '!bg-danger-500':
              props.modelValue === false && !inputSwitchProps.disabled,
            '!bg-success-500':
              props.modelValue === true && !inputSwitchProps.disabled,
            '!bg-general-200': inputSwitchProps.disabled,
          },
        ],
      }),
    }"
    @change="$emit('update:modelValue', model)"
  />
  <InputSwitch
    v-else
    v-model="model"
    @change="$emit('update:modelValue', model)"
  />
</template>
