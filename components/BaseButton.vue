<template>
  <button
    :disabled="disabled || loading"
    @click="$emit('click')"
    :class="buttonColor"
    class="base__button"
  >
    <span v-if="!loading"> <slot /></span>
    <span v-show="loading">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        class="animate-spin fill-current text-white"
        viewBox="0 0 24 24"
      >
        <path
          d="M2 11h5v2H2zm15 0h5v2h-5zm-6 6h2v5h-2zm0-15h2v5h-2zM4.222 5.636l1.414-1.414 3.536 3.536-1.414 1.414zm15.556 12.728-1.414 1.414-3.536-3.536 1.414-1.414zm-12.02-3.536 1.414 1.414-3.536 3.536-1.414-1.414zm7.07-7.071 3.536-3.535 1.414 1.415-3.536 3.535z"
        ></path>
      </svg>
      <!-- <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        class="animate-spin"
        viewBox="0 0 24 24"
        style="fill: rgba(0, 0, 0, 1)"
      >
        <path
          d="M12 22c5.421 0 10-4.579 10-10h-2c0 4.337-3.663 8-8 8s-8-3.663-8-8c0-4.336 3.663-8 8-8V2C6.579 2 2 6.58 2 12c0 5.421 4.579 10 10 10z"
        ></path>
      </svg> -->
    </span>
    <span>{{ label }}</span>
  </button>
</template>
<script>
import { ButtonColors } from "../src/BaseStyle";

export default {
  name: "base-button",
  props: {
    loading: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    label: { type: String, default: "" },
    type: {
      type: String,
      default: "secondary",
      require: false,
      validator: (value) => {
        return !!ButtonColors[value];
      },
    },
  },

  computed: {
    buttonColor() {
      return ButtonColors[this.type];
    },
  },
};
</script>
