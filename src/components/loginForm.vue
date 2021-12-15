<template>
  <!-- Sign In Form -->
  <form onsubmit="return false;" class="space-y-6">
    <div class="space-y-1">
      <label for="tk-pages-sign-in-email" class="font-medium">Email</label>
      <input
        v-model="email"
        class="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
        type="email"
        id="tk-pages-sign-in-email"
        placeholder="Email Adresiniz"
      />
    </div>
    <div class="space-y-1">
      <label for="tk-pages-sign-in-password" class="font-medium">Şifre</label>
      <input
        v-model="password"
        class="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
        type="password"
        id="tk-pages-sign-in-password"
        placeholder="Şifreniz"
      />
    </div>
    <div>
      <button
        @click="loginForm"
        type="submit"
        class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none w-full px-4 py-3 leading-6 rounded border-indigo-700 bg-indigo-700 text-white hover:text-white hover:bg-indigo-800 hover:border-indigo-800 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 active:bg-indigo-700 active:border-indigo-700"
      >
        Giriş Yap
      </button>
      <div
        class="space-y-2 sm:flex sm:items-center sm:justify-between sm:space-x-2 sm:space-y-0 mt-4"
      >
        <label class="flex items-center">
          <input
            type="checkbox"
            class="border border-gray-300 rounded h-4 w-4 text-indigo-500 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
          />
          <span class="ml-2"> Beni Hatırla</span>
        </label>
        <a
          href="javascript:void(0)"
          class="font-medium inline-block text-indigo-600 hover:text-indigo-400"
          >Şifreni mi unuttun?</a
        >
      </div>
    </div>
  </form>
  <!-- END Sign In Form -->
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    loginForm() {
      let posts = {
        email: this.email,
        password: this.password,
      };
      this.$store.dispatch("login", posts);
    },
  },
};
</script>

<style></style>
