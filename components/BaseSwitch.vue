<template>
  <div
    class="w-10 h-5 bg-gray-300 p-1 rounded-full flex items-center"
    :class="toggleCls"
    @click="toggle"
  >
    <span
      class="w-4 h-4 bg-white rounded-full transition duration-500 ease-out"
      :class="toggleIndicator"
    ></span>
  </div>
</template>
<script>
export default {
  props: {
    value: { type: Boolean, default: false },
  },
  computed: {
    toggleCls() {
      return { "bg-green-500": this.value };
    },
    toggleIndicator() {
      return { "transform translate-x-4": this.value };
    },
  },
  methods: {
    toggle() {
      this.$emit("input", !this.value);
    },
  },
};
</script>
