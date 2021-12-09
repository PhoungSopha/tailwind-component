<template>
  <button
    :disabled="disabled || loading"
    :class="[
      `bg-${type}`,
      'rounded-md',
      size ? `p-${size}` : 'p-2',
      `text-${color}`,
      'border-2',
    ]"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: "SdButton",
  props: {
    loading: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    type: { type: String, default: "" },
    size: { type: String, default: "p-2" },
    color: { type: String, default: "" },
  },
};
</script>
