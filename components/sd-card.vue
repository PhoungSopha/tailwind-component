<template>
  <div>
    <div
      class="flex flex-col justify-center mx-auto mb-5 overflow-hidden bg-gray-200 md:flex-row"
    >
      <div class="flex">
        <img
          class="self-center object-cover rounded"
          :src="imgUrl"
          :alt="imgAlt"
        />
      </div>
      <div class="flex flex-col justify-center p-4 mt-2 md:items-start">
        <div class="md:ml-5">
          <div class="text-xs font-bold text-gray-600 uppercase">
            {{ eyebrow }}
          </div>
          <div class="font-bold leading-snug text-gray-700">
            <a :href="url" class="hover:underline">{{ title }}</a>
          </div>
          <div class="mt-2 text-sm text-gray-600">{{ pricing }}</div>
          <div class="mt-2"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Card",
  props: {
    imgUrl: { type: String },
    title: String,
    eyebrow: String,
    url: String,
    pricing: String,
    imgAlt: { type: String },
  },
};
</script>
