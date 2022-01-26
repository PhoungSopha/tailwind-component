<template>
  <div class="max-w-2xl mx-auto p-7 w-lg">
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
        <div>
          <BaseDatePicker
            v-model="eventParty.date"
            label="Join date"
            :disabledDate="pickerOptions"
          />
        </div>

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
        <div>
          <BaseSwitcher1
            v-model="eventParty.partner"
            label="Can drink alcohol in the party"
          />
        </div>

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
        <!-- <div class="flex gap-5">
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
        </div> -->

        <BaseRadio
          :source="petAvailable"
          v-model="eventParty.pets"
          @change="
            (radio) => {
              eventParty.pets = radio;
            }
          "
        />

        <h2
          class="text-xl font-bold antialiased text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-purple-500"
        >
          Extras
        </h2>
        <!-- <div class="flex items-center gap-2">
          <input type="checkbox" v-model="eventParty.extras.catering" />
          <label>Catering</label>
        </div>
        <div class="flex items-center gap-2">
          <input type="checkbox" v-model="eventParty.extras.music" />
          <label>Live music</label>
        </div> -->
    
        <BaseCheckBox
          :source="extrasOption"
          v-model="eventParty.extras"
          @change="
            (checked) => {
              eventParty.extras = checked;
            }
          "
        ></BaseCheckBox>
        <div class="my-5">
          <SdSelect :options="categories"></SdSelect>
        </div>

        <div class="mt-5 flex flex-wrap items-end justify-center gap-x-2">
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
            <base-button type="warning" size="sm">Click me</base-button>
            <!-- <el-button type="primary" icon="el-icon-edit" circle></el-button -->
            ></el-tooltip
          >

          <!-- <button
              class="block mx-auto py-2 px-3 text-white font-medium rounded-md bg-gradient-to-r from-green-500 to-purple-500"
            >
              Submit
            </button> -->
          <base-button disabled>Click me</base-button>
          <base-button loading>Click me</base-button>
          <!-- <el-button type="primary" icon="el-icon-edit" circle></el-button -->
        </div>
        <div>
          <base-switch v-model="toggleValue" label="Mode"></base-switch>
        </div>
        <div></div>
      </div>
    </form>
    <div>{{ eventParty }}</div>
    <div>{{ House }}</div>
  </div>
</template>
<script>
import BaseButton from "../ui/BaseButton.vue";
import BaseInput from "../ui/BaseInput.vue";
import BaseDatePicker from "../ui/BaseDatePicker.vue";
import BaseCheckBox from "../ui/BaseCheckBox.vue";
import BaseRadio from "../ui/BaseRadio.vue";
import BaseSwitcher1 from "../ui/BaseSwitcher1.vue";
import BaseSelect from "../ui/BaseSelect.vue";
import BaseSwitch from "../ui/BaseSwitch.vue";
import SdSelect from "../ui/SdSelect.vue";
export default {
  components: {
    BaseInput,
    BaseButton,
    BaseDatePicker,
    BaseCheckBox,
    BaseRadio,
    BaseSwitcher1,
    BaseCheckBox,
    BaseSelect,
    BaseSwitch,
    SdSelect,
  },
  data() {
    return {
      disabled: true,
      toggleValue: false,
      pickerOptions(time) {
        return time.getTime() < Date.now();
      },

      House: [],

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
        drinkAlcohol: false,
        description: "",
        category: "",
        title: "",
        location: "",
        pets: "1",
        extras: [],
      },
    };
  },
  computed: {
    extrasOption() {
      return [
        { value: "catering", label: "Catering" },
        { value: "music", label: "Live music" },
      ];
    },
    petAvailable() {
      return [
        { value: "1", label: "Yes" },
        { value: "0", label: "No" },
      ];
    },
    // housing() {
    //   return [
    //     { value: "Villa", label: "Villa" },
    //     { value: "Link House", label: "Link House" },
    //     { value: "Twin Villa", label: "Twin Villa" },
    //   ];
    // },
  },
};
</script>
