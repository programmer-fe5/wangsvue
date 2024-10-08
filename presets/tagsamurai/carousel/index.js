export default {
  root: {
    class: [
      // Flexbox
      'flex flex-col',
    ],
  },
  content: {
    class: [
      // Flexbox & Overflow
      'flex flex-col overflow-auto',
    ],
  },
  container: ({ props }) => ({
    class: [
      // // Flexbox
      'flex',

      // // Orientation
      {
        'flex-row': props.orientation !== 'vertical',
        'flex-col': props.orientation == 'vertical',
      },
    ],
  }),
  previousbutton: {
    class: [
      // Flexbox & Alignment
      'flex justify-center items-center self-center',

      // Sizing & Overflow
      'overflow-hidden w-8 h-8',

      // Spacing
      'mx-2',

      // Shape
      'rounded-full',

      // Border & Background
      'border-0 bg-transparent',

      // Color
      'text-surface-600',

      // Transitions
      'transition duration-200 ease-in-out',
    ],
  },
  nextbutton: {
    class: [
      // Flexbox & Alignment
      'flex justify-center items-center self-center',

      // Sizing & Overflow
      'overflow-hidden w-8 h-8',

      // Spacing
      'mx-2',

      // Shape
      'rounded-full',

      // Border & Background
      'border-0 bg-transparent',

      // Color
      'text-surface-600',

      // Transitions
      'transition duration-200 ease-in-out',
    ],
  },
  itemscontent: {
    class: [
      // Overflow & Width
      // 'overflow-hidden w-full',
    ],
  },
  itemscontainer: ({ props }) => ({
    class: [
      // Flexbox
      // 'flex',

      // Orientation & Sizing
      // {
      //   'flex-row': props.orientation !== 'vertical',
      //   'flex-col h-full': props.orientation == 'vertical',
      // },
    ],
  }),
  item: ({ props }) => ({
    class: [
      // Flexbox
      // 'flex',

      // Width
      // {
      //   'w-1/3': props.orientation !== 'vertical',
      //   'w-full': props.orientation == 'vertical',
      // },
    ],
  }),
  indicators: {
    class: [
      // Flexbox & Alignment
      'flex flex-row justify-center flex-wrap gap-1',
    ],
  },
  indicator: {
    class: [
      // Spacing
    ],
  },
  indicatorbutton: ({ context }) => ({
    class: [
      // Sizing & Shape
      'w-1.5 h-1.5 rounded-full',

      // Transitions
      'transition duration-200',

      // Focus Styles
      'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50',

      // Color & Background
      {
        'bg-surface-200 hover:bg-surface-300':
          !context.highlighted,
        'bg-primary-500 hover:bg-primary-600': context.highlighted,
      },
    ],
  }),
};
