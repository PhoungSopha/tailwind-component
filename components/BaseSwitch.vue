<template>
  <div>
    <div :class="toggleContainer">
      <label v-if="label" class="tracking-wide font-semibold"
        >{{ label }} <span v-if="!optional" class="text-danger">*</span></label
      >
      <span
        class="w-10 h-5 bg-gray-300 p-1 rounded-full flex items-center cursor-pointer vml-5"
        :class="toggleCls"
        @click="toggle"
      >
        <span
          class="w-4 h-4 bg-white rounded-full transition duration-300 ease-out"
          :class="toggleIndicator"
        ></span>
      </span>
    </div>
    <div v-if="errorMessage" class="text-danger text-md leading-normal mt-2">
      {{ errorMessage }}
    </div>
  </div>
</template>
<script>
export default {
  props: {
    value: { type: Boolean, default: false },
    label: { type: String, default: "" },
    optional: { type: Boolean, default: false },
    errorMessage: { type: String, default: "" },
  },
  computed: {
    toggleCls() {
      return { "bg-green-500": this.value };
    },
    toggleIndicator() {
      return { "transform translate-x-4": this.value };
    },
    toggleContainer() {
      return {
        "flex items-center gap-5 py-3 px-2": true,
        "border-2 border-danger": this.errorMessage,
      };
    },
  },
  methods: {
    toggle() {
      this.$emit("input", !this.value);
    },
  },
};
</script>
