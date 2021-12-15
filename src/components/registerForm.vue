<template>
  <form onsubmit="return false;" class="space-y-6">
    <div class="space-y-1">
      <div v-if="$store.state.modalBarStatus">
        <modalBar />
      </div>

      <label for="tk-pages-sign-up-name" class="font-medium">Ad</label>
      <input
        v-model="name"
        class="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
        type="text"
        id="tk-pages-sign-up-name"
        placeholder="İsim Soyisim"
      />
    </div>
    <div class="space-y-1">
      <label for="tk-pages-sign-up-email" class="font-medium">Email</label>
      <input
        v-model="email"
        class="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
        type="email"
        id="tk-pages-sign-up-email"
        placeholder="Email Adresiniz"
      />
    </div>
    <div class="space-y-1">
      <label for="tk-pages-sign-up-password" class="font-medium"
        >Şifreniz</label
      >
      <input
        v-model="password"
        class="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
        type="password"
        id="tk-pages-sign-up-password"
        placeholder="Güçlü bir şifre seçiniz"
      />
    </div>
    <div class="flex items-center">
      <input
        type="checkbox"
        class="border border-gray-300 rounded h-4 w-4 text-indigo-500 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
      />
      <span class="ml-2">
        <a
          href="javascript:void(0)"
          class="font-medium underline text-gray-600 hover:text-gray-500"
          >Şartlar &amp; Koşulları</a
        >
        kabul ettim
      </span>
    </div>
    <button
      @click="registerForm"
      type="submit"
      class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none w-full px-4 py-3 leading-6 rounded border-indigo-700 bg-indigo-700 text-white hover:text-white hover:bg-indigo-800 hover:border-indigo-800 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 active:bg-indigo-700 active:border-indigo-700"
    >
      Gönder
    </button>
  </form>
</template>

<script>
import modalBar from "../components/modalBar.vue";

export default {
  components: {
    modalBar,
  },
  data() {
    return {
      name: "",
      email: "",
      password: "",
      modalBarStatus: false,
    };
  },
  methods: {
    async registerForm() {
      let posts = {
        name: this.name,
        email: this.email,
        password: this.password,
      };
      this.$store.dispatch("register", posts);
    },
  },
};
</script>

<style></style>
