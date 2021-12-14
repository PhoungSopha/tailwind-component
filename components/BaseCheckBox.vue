<template>
  <div>
    <div class="max-w-md p-2">
      <label v-if="label || optional" class=""
        >{{ label }}
        <span v-if="!optional" class="text-danger">*</span>
        <span v-if="description">{{ description }}</span></label
      >
      <slot name="optional">
        <span v-if="optional" class="text-gray-400 text-md">optional</span>
      </slot>
      <div :class="checkboxClass">
        <el-checkbox-group v-model="inputVal" :class="checkBoxCls">
        </el-checkbox-group>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "base-checkbox",
  props: {
    value: {
      type: [Array, String],
      default() {
        return [];
      },
    },
    source: {
      type: Array,
      default() {
        return [];
      },
    },
    checkBoxCls: { type: String, default: "flex gap-x-2" },
    optional: { type: Boolean, default: false },
    label: { type: String, default: false },
    description: { type: String, default: "" },
    errorMessage: { type: String, default: "" },
  },

  computed: {
    checkboxClass() {
      return {
        "border-danger text-danger": this.errorMessage,
      };
    },
    inputVal: {
      get() {
        return this.value;
      },
      set(val) {
        return this.$emit("input", val);
      },
    },
  },
};
</script>
