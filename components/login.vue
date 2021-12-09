<template>
  <div class="max-w-xl mobile:max-w-lg p-5 mx-auto">
    <form
      class="p-4 bg-glass backdrop-filter backdrop-blur-lg border border-border-shadow rounded shadow-box-shadow mobile:p-6"
    >
      <h1
        class="text-center text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 font-semibold uppercase"
      >
        sleeping owl
      </h1>
      <div class="mt-4">
        <div
          class="mobile:flex mobile:flex-row mobile:items-center mobile:justify-between mobile:gap-5"
        >
          <label
            class="text-md text-blue-500 tracking-wide antialiased font-medium"
            >Username</label
          >
          <input
            type="text"
            class="w-full mt-2 text-white bg-transparent border border-blue-400 placeholder-gray-400 rounded placeholder-opacity-80 text-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:shadow-md focus:text-white"
            placeholder="Enter username"
          />
        </div>
        <div
          class="mt-4 mobile:flex mobile:flex-row mobile:gap-6 mobile:justify-between mobile:items-center"
        >
          <label
            class="text-md text-blue-500 tracking-wide antialiased font-medium"
            >Password</label
          >
          <div class="w-full relative">
            <input
              type="password"
              class="w-full mt-2 text-white bg-transparent border border-blue-400 placeholder-gray-400 rounded placeholder-opacity-80 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:shadow-md focus:text-white"
              placeholder="Enter password"
            />
          </div>
        </div>
        <a href="#" class="block mt-3 hover:underline hover:text-blue-500"
          >Forget password?</a
        >
        <box-icon name="docker" type="logo"></box-icon>
        <button
          class="block mx-auto mt-3 py-2 px-4 bg-blue-500 rounded text-white antialiased font-medium hover:bg-blue-600"
        >
          Sign in
        </button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "Login",
};
</script>
