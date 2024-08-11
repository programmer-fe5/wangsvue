export default {
  root: ({ props }) => ({
    class: [
      'inputgroupaddon', // Removing this class will causes bug style.
      // Flex
      'inline-flex items-center justify-center',

      // Shape
      'first:rounded-tl first:rounded-bl',
      'last:rounded-tr last:rounded-br',
      'ring-inset',
      // 'border-y',
      // 'border-l',

      // Space
      'px-3 gap-3',

      // Size
      'w-max',

      // Font
      'text-general-800 dark:text-general-50',
      'text-xs font-medium leading-none tracking-tight',

      // Color
      'bg-general-50 dark:bg-grayscale-600',
    ],
  })
};