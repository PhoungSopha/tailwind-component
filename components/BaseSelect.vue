<template>
  <div>
    <div>
      <label v-if="label" :class="labelClass"
        >{{ label }} <span v-if="!optional" class="text-danger">*</span></label
      >
      <el-select
        :class="selectClass"
        :value="value"
        :disabled="disabled"
        :placeholder="placeholder"
        @input="$emit('input', $event)"
      >
        <el-option
          v-for="(item, index) in dataSource"
          class="text-2xl"
          :key="index"
          :label="item.name"
          :value="item.value"
          @click.native="$emit('input', item)"
        >
          {{ item }}
        </el-option>
      </el-select>
    </div>
  </div>
</template>
<script>
export default {
  name: "base-select",
  props: {
    label: { type: String, default: "" },
    placeholder: { type: String, default: "" },
    disabled: { type: Boolean, default: false },
    optional: { type: Boolean, default: false },

    dataSource: {
      type: Array,
      default() {
        return [];
      },
    },
    value: {
      type: [Array, Object, String, Number],
      default() {
        return [];
      },
    },
  },

  computed: {
    selectClass() {
      return {
        "w-full rounded-md mt-2 cursor-pointer uppercase text-xl font-medium": true,
      };
    },
    labelClass() {
      return {
        "tracking-normal": true,
      };
    },
  },
};
</script>
