<template>
  <div>
    <slot name="content"
      ><img src="https://i.stack.imgur.com/y9DpT.jpg" alt=""
    /></slot>
    <p class="text-center mt-2">
      <slot name="caption" v-bind:source="source">Caption</slot>
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      source: "Learnvue.co",
    };
  },
};
</script>
