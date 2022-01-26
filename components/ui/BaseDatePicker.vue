<template>
  <div>
    <div class="sd-date-picker flex items-center gap-x-10 justify-between">
      <label v-if="label || optional" :class="classLabel">
        {{ label }}
        <span v-if="!optional" class="text-danger">*</span>
      </label>

      <el-date-picker
        :class="{ 'border-2 border-danger rounded-md': this.errorMessage }"
        v-model="selectedDate"
        :disabled="disabled"
        :pick-option="dateOptions"
        :placeholder="placeholder"
        :value-format="valueFormat"
        :format="format"
        @change="handleEmitInput"
      ></el-date-picker>
    </div>
    <span v-if="errorMessage" class="text-danger mt-2 text-md">{{
      errorMessage
    }}</span>
  </div>
</template>
<script>
export default {
  name: "sd-date-picker",
  props: {
    size: { type: String, default: "large" },
    label: { type: String, default: "" },
    disabled: { type: Boolean, default: false },
    disabledDate: { type: Function, default: null },
    description: { type: String, default: "" },
    placeholder: { type: String, default: "Pick a day" },
    type: { type: String, default: "date" },
    optional: { type: Boolean, default: false },
    errorMessage: { type: String, default: "" },
    value: {
      type: [Array, Object, Date],
      default: null,
    },
    // require: { type: Boolean, default: false },
    valueFormat: { type: String, default: "yyyy-MM-dd" },
    format: { type: String, default: "dd-MM-yyyy" },
  },
  data() {
    return {
      dateOptions: { disabledDate: this.disabledDate },
      selectedDate: "",
    };
  },
  computed: {
    classLabel() {
      return {
        "tracking-wide text-gray-800 w-full": true,
      };
    },
  },
  methods: {
    handleEmitInput(value) {
      this.$emit("input", value);
      this.$emit("change", value);
    },
  },
};
</script>
<style scoped>
.sd-date-picker .el-date-editor.el-input {
  width: 100%;
}
</style>
