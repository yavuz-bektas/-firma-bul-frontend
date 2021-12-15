<template>
  <!-- Page Container -->
  <div
    id="page-container"
    class="flex flex-col mx-auto w-full min-h-screen bg-gray-100"
  >
    <!-- Page Content -->
    <main id="page-content" class="flex flex-auto flex-col max-w-full">
      <!-- Hero -->
      <div class="bg-white overflow-hidden">
        <!-- Header -->
        <DashBoardHeader />
      </div>
      <!-- END Hero -->

      <!-- Contact Section: With Image Cover Brand -->
      <div
        class="bg-cover"
        style="
          background-image: url('https://source.unsplash.com/wpU4veNGnHg/1280x800');
        "
      >
        <div class="bg-indigo-900 bg-opacity-95">
          <div
            class="container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32"
          >
            <div
              class="flex flex-col lg:flex-row lg:items-center space-y-16 lg:space-y-0 lg:space-x-16"
            >
              <!-- Heading and Company Info -->
              <div class="lg:w-2/5 text-white">
                <div
                  class="text-sm uppercase font-bold tracking-wider mb-1 text-indigo-400"
                >
                  Genel Tercihler
                </div>
                <h2 class="text-3xl md:text-4xl font-extrabold mb-4">
                  Üyelik Bilgilerini Düzenle
                </h2>
                <h3
                  class="text-lg md:text-xl md:leading-relaxed font-medium text-indigo-200"
                >
                  Bir şey mantıklı değilse, bizimle iletişime geçmekten
                  çekinmeyin; mümkün olan en kısa sürede size geri döneceğiz.
                </h3>
                <div class="text-indigo-200 mt-10">
                  <h4 class="uppercase font-semibold tracking-wider mb-4">
                    Firma Bul Inc.
                  </h4>
                  <div class="leading-relaxed">
                    Bursa 1616<br />
                    San Francisco, CA 85214<br />
                    <abbr title="Phone">P:</abbr> (123) 456-7890
                  </div>
                </div>
              </div>
              <!-- END Heading and Company Info -->

              <!-- Contact Form -->
              <div class="lg:w-3/5 p-2 bg-white bg-opacity-10 rounded-xl">
                <form
                  onsubmit="return false;"
                  class="bg-white rounded-lg p-6 space-y-6"
                >
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div class="space-y-1">
                      <label for="tk-contact-firstname" class="font-medium"
                        >Ad</label
                      >
                      <input
                        class="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                        type="text"
                        id="tk-contact-firstname"
                        :value="this.user.username"
                      />
                    </div>
                    <div class="space-y-1">
                      <label for="tk-contact-lastname" class="font-medium"
                        >Hesap ID
                      </label>
                      <input
                        class="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                        type="email"
                        id="tk-contact-uid"
                        :value="this.user._id"
                        disabled="disabled"
                      />
                    </div>
                  </div>

                  <div class="space-y-1">
                    <label for="tk-contact-email" class="font-medium"
                      >Email</label
                    >
                    <input
                      class="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                      type="email"
                      id="tk-contact-email"
                      :value="this.user.email"
                    />
                  </div>

                  <div class="space-y-1">
                    <label
                      for="tk-form-input-groups-append-button-small"
                      class="font-medium"
                      >Şifre</label
                    >
                    <div class="flex items-center">
                      <input
                        class="block border border-gray-200 rounded-l z-1 py-2 leading-5 text-sm w-full active:z-1 focus:z-1 -mr-px focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                        type="text"
                        id="tk-form-input-groups-append-button-small"
                      />
                      <button
                        type="button"
                        class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none flex-none px-3 py-2 leading-5 text-sm rounded-r active:z-1 focus:z-1 border-indigo-700 bg-indigo-700 text-white hover:text-white hover:bg-indigo-800 hover:border-indigo-800 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 active:bg-indigo-700 active:border-indigo-700"
                      >
                        Şifre
                      </button>
                    </div>
                  </div>

                  <button
                    type="submit"
                    class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-4 py-3 leading-6 rounded border-indigo-700 bg-indigo-700 text-white hover:text-white hover:bg-indigo-800 hover:border-indigo-800 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 active:bg-indigo-700 active:border-indigo-700"
                  >
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      class="opacity-50 hi-solid hi-paper-airplane inline-block w-5 h-5"
                    >
                      <path
                        d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"
                      ></path>
                    </svg>
                    <span>Güncelle</span>
                  </button>
                </form>
              </div>
              <!-- END Contact Form -->
            </div>
          </div>
        </div>
      </div>
      <!-- END Contact Section: With Image Cover Brand -->
    </main>
    <footerVue />

    <!-- END Page Content -->
  </div>
  <!-- END Page Container -->
</template>

<script>
import Cookies from "js-cookie";
const jwt = require("jsonwebtoken");
import footerVue from "../components/footer.vue";

import DashBoardHeader from "../components/dashboardHeader.vue";
export default {
  data() {
    return {
      user: "",
    };
  },
  components: {
    DashBoardHeader,
    footerVue,
  },
  created() {
    const token = Cookies.get("token");
    const tokenResult = jwt.verify(token, "secretkey");
    this.user = tokenResult;
  },
};
</script>

<style></style>
