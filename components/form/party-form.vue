<template>
  <div class="max-w-lg mx-auto p-7 w-lg">
    <form action="#" submit.prevent="" class="mx-auto p-2 w-full">
      <h2
        class="text-3xl font-bold antialiased text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-purple-500"
      >
        Create an event
      </h2>
      <div class="mt-5 flex flex-col gap-5">
        <!-- <div class="grid gap-2">
          <label for="">Select a category</label>
          <select
            v-model="event.category"
            class="rounded-md w-full cursor-pointer"
          > -->
        <!-- <option value="" disabled hidden selected>Choose</option> -->
        <!-- <option
              v-for="option in categories"
              :key="option"
              :value="option"
              :selected="option === event.category"
            >
              {{ option }}
            </option>
          </select>
        </div> -->

        <BaseSelect
          :data-source="categories"
          label="Category"
          v-model="event.category"
          placeholder="Choose a category"
        />

        <h2
          class="text-xl font-bold antialiased text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-purple-500"
        >
          Name & describe your event
        </h2>

        <BaseInput label="Title" v-model="event.title" type="text" />

        <BaseInput
          label="Description"
          v-model="event.description"
          type="text"
        />

        <h2
          class="text-xl font-bold antialiased text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-purple-500"
        >
          Where is your event?
        </h2>

        <BaseInput type="text" v-model="event.location" label="Location" />

        <h2
          class="text-xl font-bold antialiased text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-purple-500"
        >
          Are pets allowed?
        </h2>
        <div class="flex gap-5">
          <div class="flex items-center gap-2">
            <input type="radio" v-model="event.pets" :value="1" name="pets" />
            <label for="yes">Yes</label>
          </div>
          <div class="flex items-center gap-2">
            <input type="radio" v-model="event.pets" :value="0" name="pets" />
            <label for="no">No</label>
          </div>
        </div>
        <h2
          class="text-xl font-bold antialiased text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-purple-500"
        >
          Extras
        </h2>
        <div class="flex items-center gap-2">
          <input type="checkbox" v-model="event.extras.catering" />
          <label>Catering</label>
        </div>
        <div class="flex items-center gap-2">
          <input type="checkbox" v-model="event.extras.music" />
          <label>Live music</label>
        </div>
        <div class="mt-5">
          <el-tooltip
            class="item"
            effect="dark"
            content="Submit to the party"
            placement="bottom"
          >
            <!-- <button
              class="block mx-auto py-2 px-3 text-white font-medium rounded-md bg-gradient-to-r from-green-500 to-purple-500"
            >
              Submit
            </button> -->
            <base-button type="success" label="Click me"></base-button>
            <!-- <el-button type="primary" icon="el-icon-edit" circle></el-button -->
            ></el-tooltip
          >
        </div>
      </div>
    </form>
    {{ event }}
    {{ event.title }} 
  </div>
</template>
<script>
import BaseButton from "../BaseButton.vue";
import BaseInput from "../BaseInput.vue";
export default {
  components: { BaseInput, BaseButton },
  data() {
    return {
      categories: [
        "sustainability",
        "nature",
        "animal warfare",
        "housing",
        "education",
        "food",
        "community",
      ],
      event: {
        description: "",
        category: "",
        title: "",
        location: "",
        pets: 1,
        extras: {
          catering: false,
          music: false,
        },
      },
    };
  },
  computed: {},
};
</script>
