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
        <base-button color="success" @click="Show">
          <template>
            <span class="flex items-center">
              <i class="bx bx-plus-circle pr-1 text-xl"></i>
              <span class="font-white font-medium tracking-wide p-1"
                >Click me</span
              >
            </span>
          </template>
        </base-button>
        <div class="mt-4">
          <BaseNotification color="warning" :description="msg" />
        </div>
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

    <div class="mt-5">
      <nuxt-link to="/user">User Link</nuxt-link>
    </div>
  </div>
</template>

<script>
import CaptionContent from "../components/CaptionContent.vue";
import BaseButton from "../components/BaseButton.vue";
import BaseNotification from "../components/BaseNotification.vue";
export default {
  components: { CaptionContent, BaseButton, BaseNotification },
  data() {
    return {
      msg: "Welcome to Mobile Legend Welcome to Mobile Legend Welcome to Mobile Legend Welcome to Mobile Legend",
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
        ...this.users.address,
        status: "Active",
      };
      user.status = { village: "KL" };
      console.log(user);
      console.log(user.status);
      // console.log(this.users.address.city);
      // console.log([...user.city]);
    },
  },
};
</script>
