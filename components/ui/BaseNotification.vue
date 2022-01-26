<template>
  <div
    class="px-4 py-2 rounded-md border-2 text-white w-full"
    :class="NotificationColor"
  >
    <div class="w-full grid grid-flow-row">
      <span class="text-xl p-1">{{ description }}</span>
    </div>
  </div>
</template>
<script>
// import { Notification } from "../src/BaseStyle";
export default {
  name: "base-notification",
  props: {
    description: { type: String, require: false },
    color: {
      require: false,
      type: String,
      default: "default",
      validator: (value) => {
        return !!Notification[value];
      },
    },
  },
  computed: {
    NotificationColor() {
      return Notification[this.color];
    },
    text() {
      return this.description.toLowerCase();
    },
  },
};
</script>
