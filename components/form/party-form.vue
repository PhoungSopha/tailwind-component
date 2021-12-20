<template>
  <div class="max-w-lg mx-auto p-7 w-lg">
    <form action="#" class="mx-auto p-5 w-full shadow-lg rounded-md">
      <h2
        class="text-3xl font-bold antialiased text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-purple-500"
      >
        Create an eventParty
      </h2>
      <div class="mt-5 flex flex-col gap-5">
        <!-- <div class="grid gap-2">
          <label for="">Select a category</label>
          <select
            v-model="eventParty.category"
            class="rounded-md w-full cursor-pointer"
          > -->
        <!-- <option value="" disabled hidden selected>Choose</option> -->
        <!-- <option
              v-for="option in categories"
              :key="option"
              :value="option"
              :selected="option === eventParty.category"
            >
              {{ option }}
            </option>
          </select>
        </div> -->
        <BaseDatePicker
          v-model="eventParty.date"
          :disabled-date="disableFutureDate"
          label="Join date"
        />

        <BaseSelect
          :data-source="categories"
          label="Category"
          v-model="eventParty.category"
          placeholder="Choose a category"
        />

        <h2
          class="text-xl font-bold antialiased text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-purple-500"
        >
          Name & describe your eventParty
        </h2>

        <BaseInput label="Title" v-model="eventParty.title" type="text" />

        <BaseInput
          label="Description"
          v-model="eventParty.description"
          type="text"
        />

        <h2
          class="text-xl font-bold antialiased text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-purple-500"
        >
          Where is your eventParty?
        </h2>

        <!-- <BaseInput type="text" v-model="eventParty.location" label="Location" /> -->
        <BaseSelect
          :data-source="Location"
          label="Location"
          v-model="eventParty.location"
          placeholder="Choose a location"
        />
        <h2
          class="text-xl font-bold antialiased text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-purple-500"
        >
          Are pets allowed?
        </h2>
        <div class="flex gap-5">
          <div class="flex items-center gap-2">
            <input
              type="radio"
              v-model="eventParty.pets"
              :value="1"
              name="pets"
            />
            <label for="yes">Yes</label>
          </div>
          <div class="flex items-center gap-2">
            <input
              type="radio"
              v-model="eventParty.pets"
              :value="0"
              name="pets"
            />
            <label for="no">No</label>
          </div>
        </div>
        <h2
          class="text-xl font-bold antialiased text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-purple-500"
        >
          Extras
        </h2>
        <div class="flex items-center gap-2">
          <input type="checkbox" v-model="eventParty.extras.catering" />
          <label>Catering</label>
        </div>
        <div class="flex items-center gap-2">
          <input type="checkbox" v-model="eventParty.extras.music" />
          <label>Live music</label>
        </div>
        <div class="mt-5 flex items-end justify-center gap-x-2">
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
            <base-button type="success">Click me</base-button>
            <!-- <el-button type="primary" icon="el-icon-edit" circle></el-button -->
            ></el-tooltip
          >

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
            <base-button type="danger">Click me</base-button>
            <!-- <el-button type="primary" icon="el-icon-edit" circle></el-button -->
            ></el-tooltip
          >
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
            <base-button type="warning">Click me</base-button>
            <!-- <el-button type="primary" icon="el-icon-edit" circle></el-button -->
            ></el-tooltip
          >
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
            <base-button type="warning" loading>Click me</base-button>
            <!-- <el-button type="primary" icon="el-icon-edit" circle></el-button -->
            ></el-tooltip
          >
        </div>
        <div>
          <base-switch v-model="toggleValue"></base-switch>
        </div>
      </div>
    </form>
    {{ eventParty }}
  </div>
</template>
<script>
import BaseButton from "../BaseButton.vue";
import BaseInput from "../BaseInput.vue";
import BaseDatePicker from "../BaseDatePicker.vue"; 
export default {
  components: { BaseInput, BaseButton, BaseDatePicker },
  data() {
    return {
      toggleValue: false,
      disableFutureDate(time) {
        return time.getTime() > Date.now();
      },
      Location: [
        "Moung Roessei",
        "Phnom Penh",
        "Phumi Boeng (1)",
        "Phumi Chhuk",
        "Phumi Preah Haoh",
        "Phumi Prei",
        "Phumi Prek Mrinh",
        "Phumi Siem Reab",
        "Phumi Thmei",
        "Phumi Thnal",
        "Phumi Vott Phnum",
        "Sihanoukville",
        "Tuol Kok",
        "Vott Kampong Svay",
      ],
      categories: [
        "sustainability",
        "nature",
        "animal warfare",
        "housing",
        "education",
        "food",
        "community",
      ],
      eventParty: {
        date: null,
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
