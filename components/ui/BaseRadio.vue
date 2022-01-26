<template>
  <div>
    <div class="base-radio">
      <label v-if="label || optional" class=""
        >{{ label }} <span v-if="!optional" class="text-danger">*</span>
        <span v-if="description" class="block text-current">{{
          description
        }}</span>
        <slot name="optional">
          <span v-if="optional" class="text-current text-sm">optional</span>
        </slot>
      </label>
      <div :class="radioContainer">
        <el-radio-group
          v-model="radio"
          :disabled="disabled"
          :class="radioCls"
          @change="handleRadioEvent()"
        >
          <el-radio
            v-for="item in source"
            :key="item.value"
            :label="item.value"
          >
            {{ item.label }}
          </el-radio>
        </el-radio-group>
      </div>
    </div>
    <div v-if="errorMessage" class="text-danger text-md mt-2">
      {{ errorMessage }}
    </div>
  </div>
</template>
<script>
export default {
  props: {
    source: {
      type: Array,
      default() {
        return [];
      },
    },
    value: { type: [Boolean, String], default: "" },
    disabled: { type: Boolean, default: false },
    description: { type: String, default: "" },
    label: { type: String, default: "" },
    optional: { type: Boolean, default: false },
    errorMessage: { type: String, default: "" },
    radioCls: {
      type: String,
      default: "flex flex-wrap",
    },
  },
  data() {
    return {
      radio: null,
    };
  },
  computed: {
    radioContainer() {
      return {
        "rounded-md p-2": true,
        "border-2 border-danger": this.errorMessage,
      };
    },
  },
  watch: {
    value() {
      this.radio = this.value;
    },
  },
  mounted() {
    this.radio = this.value;
  },
  methods: {
    handleRadioEvent() {
      this.$emit("change", this.radio);
    },
  },
};
</script>
