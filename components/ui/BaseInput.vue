<template>
  <div>
    <label v-if="label" :class="labelClass"
      >{{ label }} <span v-if="!optional" class="text-danger">*</span></label
    >
    <input
      disabled="disabled"
      v-bind="$attrs"
      :class="inputClass"
      :placeholder="label"
      :value="value"
      :type="type"
      @input="$emit('input', $event.target.value)"
    />
    <div v-if="errorMessage" class="mt-2 text-danger text-md leading-normal">
      {{ errorMessage }}
    </div>
  </div>
</template>
<script>
export default {
  name: "base-input",
  inheritAttrs: false,
  props: {
    disabled: { type: Boolean, default: false },
    label: {
      type: String,
      default: "",
    },
    value: {
      type: [String, Number],
      default: "",
    },
    type: {
      type: String,
      default: "",
    },
    optional: { type: Boolean, default: false },
    placeholder: {
      type: String,
      default: "",
    },
    errorMessage: { type: String, default: "" },
  },
  computed: {
    inputClass() {
      return {
        "rounded-md w-full text-gray-500 text-md leading-none p-3 placeholder-gray-300 placeholder-text-xs border mt-2 border-gray-200 focus:border-1 focus:border-blue-500": true,
        "outline ring-2 ring-danger": this.errorMessage,
      };
    },
    labelClass() {
      return { "text-md tracking-wide": true };
    },
  },
};
</script>
