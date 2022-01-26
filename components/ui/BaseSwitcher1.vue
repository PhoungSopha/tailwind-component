<template>
  <div>
    <div class="base-switcher flex space-x-3">
      <label v-if="label">
        <div class="flex flex-wrap gap-x-4">
          <span
            >{{ label }}
            <span v-if="!optional" class="text-danger mt-2 text-md">*</span>
          </span>
        </div>
        <slot name="optional" />
      </label>
      <div>
        <el-switch
          v-model="inputValue"
          @change="$emit('change', inputValue)"
        ></el-switch>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "base-switcher1",
  props: {
    label: { type: String, default: "" },
    optional: { type: String, default: "" },
    value: { type: Boolean, default: true },
    reverse: { type: Boolean, default: false },
  },
  computed: {
    inputValue: {
      get() {
        return this.reverse ? !this.value : this.value;
      },
      set(val) {
        return this.$emit("input", this.reverse ? !val : val);
      },
    },
  },
};
</script>
