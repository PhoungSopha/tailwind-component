<template>
  <button
    @click="$emit('click')"
    class="px-4 py-2 font-medium tracking-wide text-center transition-colors duration-150 ease-in-out border border-solid rounded shadow-md"
    :class="buttonColor"
  >
    <slot></slot>
  </button>
</template>
<script>
import { ButtonColors } from "../src/Button";
export default {
  name: "button-vue",
  props: {
    color: {
      type: String,
      default: "secondary",
      require: false,
      validator: (value) => {
        return Object.keys(ButtonColors).includes(value);
      },
    },
  },

  computed: {
    buttonColor() {
      return ButtonColors[this.color];
    },
  },
};
</script>
