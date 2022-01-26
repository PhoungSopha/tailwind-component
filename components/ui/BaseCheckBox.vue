<template>
  <div>
    <div
      class="base-checkbox p-2 rounded-lg"
      :class="{ 'border-2 border-danger': this.errorMessage }"
    >
      <label v-if="label || optional" class="text-lg text-black tracking-wide"
        >{{ label }}
        <span v-if="!optional" class="text-danger">*</span>
        <span v-if="description">{{ description }}</span></label
      >
      <slot name="optional">
        <span v-if="optional" class="text-gray-400 text-md">optional</span>
      </slot>
      <div :class="checkboxClass">
        <el-checkbox-group v-model="inputVal" :class="checkBoxCls">
          <el-checkbox
            v-for="item in source"
            :key="item.value"
            :label="returnValue ? item[returnValue] : item.value"
          >
            {{ item.label }}
          </el-checkbox>
        </el-checkbox-group>
      </div>
    </div>
    <div v-if="errorMessage" class="text-danger text-md mt-2">
      {{ errorMessage }}
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
    checkBoxCls: { type: String, default: "flex flex-col gap-y-2" },
    returnValue: { type: String, default: "value" },
    disabled: { type: Boolean, default: false },
    optional: { type: Boolean, default: false },
    label: { type: String, default: "" },
    description: { type: String, default: "" },
    errorMessage: { type: String, default: "" },
  },

  computed: {
    checkboxClass() {
      return {
        "border-1 border-danger text-danger": this.errorMessage,
      };
    },
    inputVal: {
      get() {
        return this.value;
      },
      set(val) {
        return this.$emit("change", val);
      },
    },
  },
};
</script>

<style>
.base-checkbox .el-checkbox__label {
  font-size: 16px;
  color: black;
  font-weight: 400;
}

.base-checkbox .el-checkbox__inner {
  width: 18px;
  height: 18px;
  border: 1px solid rgb(114, 111, 111);
}
.base-checkbox .el-checkbox__inner::after {
  width: 3px;
  top: 2px;
  left: 6px;
  /* border: 2px solid #fff; */
}
</style>
