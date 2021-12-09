<template>
  <!-- <Login /> -->
  <div class="mx-auto max-w-xl p-10">
    <caption-content>
      <template #content><img src="../assets/img/beach.jpg" alt="" /></template>

      <template #caption
        >Source:
        <a href="https://learnvue.co" class="text-green-500 pr-5"
          >Learnvue.co</a
        >
        <button-vue color="primary" @click="Show">Click</button-vue>
      </template>
    </caption-content>

    <caption-content>
      <template #content>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/v=mkTrbmr9TOg&list=RDMMV-tA4y2hfHM&index=6"
          frameborder="0"
          title="YT player"
          allowfullscreen
          allow="accelerometer; autoplay; clipboard-write"
        ></iframe>
      </template>
      <template #caption="{ source }">
        Source:
        <a href="https://learnvue.co" class="text-green-500">{{ source }} </a>
      </template>
    </caption-content>
    <div class="mt-6">{{ users }}</div>
  </div>
</template>

<script>
import CaptionContent from "../components/CaptionContent.vue";
import ButtonVue from "../components/ButtonVue.vue";
export default {
  components: { CaptionContent, ButtonVue },
  data() {
    return {
      message: "Hi",
      users: {
        name: "vicheka",
        age: 21,
        address: { id: 1, sangkat: "7Makara", city: "Phnom Penh" },
      },
    };
  },
  methods: {
    Show() {
      const user = {
        ...this.users,
      };
      user.address = { village: "KL" };
      console.log(user);
      // console.log(this.users.address.city);
      // console.log([...user.city]);
    },
  },
};
</script>
