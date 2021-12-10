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
import { ButtonColors } from "../src/BaseStyle";

export default {
  name: "base-button",
  props: {
    color: {
      type: String,
      default: "secondary",
      require: false,
      validator: (value) => {
        return ButtonColors[value];
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
