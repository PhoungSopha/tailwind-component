<template>
  <button
    :disabled="disabled || loading"
    @click="$emit('click')"
    :class="buttonColor"
    class="base__button"
  >
    <span v-if="!loading"> <slot>Click me</slot></span>
    <span v-show="loading">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        class="animate-spin fill-current text-black"
        viewBox="0 0 24 24"
      >
        <path
          d="M2 11h5v2H2zm15 0h5v2h-5zm-6 6h2v5h-2zm0-15h2v5h-2zM4.222 5.636l1.414-1.414 3.536 3.536-1.414 1.414zm15.556 12.728-1.414 1.414-3.536-3.536 1.414-1.414zm-12.02-3.536 1.414 1.414-3.536 3.536-1.414-1.414zm7.07-7.071 3.536-3.535 1.414 1.415-3.536 3.535z"
        ></path>
      </svg>
    </span>
    <span>{{ label }}</span>
  </button>
</template>
<script>
const sizeCls = {
  sm: "text-[12px] py-[10px] px-[16px]",
  normal: "text-[14px] py-[11px] px-[20px]",
  lg: "text-[16px] py-[12px] px-[24px]",
};
const ButtonColors = {
  disabled: "bg-gray-300 cursor-not-allowed text-gray-400 ",
  success:
    "bg-success text-white border-success-lighten hover:bg-success-lighten hover:border-success",

  danger:
    "bg-danger text-white border-danger-lighten hover:bg-danger-lighten hover:border-danger",

  primary:
    "bg-primary text-white border-primary-lighten hover:bg-primary-lighten hover:border-primary",

  secondary:
    "bg-transparent text-blue-800 border-blue-800 hover:bg-blue-800 hover:text-white hover:border-blue-800",

  warning:
    "bg-warning text-white border-warning-lighten hover:bg-warning-lighten hover:border-warning",
};
export default {
  name: "base-button",
  props: {
    loading: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    label: { type: String, default: "" },
    size: { type: String, default: "normal" },
    type: {
      type: String,
      default: "secondary",
    },
  },

  computed: {
    buttonColor() {
      let btnType = this.type;
      if (this.disabled || this.loading) {
        btnType = "disabled";
      }
      return {
        [ButtonColors[btnType]]: true,
        [sizeCls[this.size]]: true,
      };
    },
  },
};
</script>
