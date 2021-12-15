<template>
  <header
    id="page-header"
    class="flex flex-none items-center h-16 bg-white shadow-sm fixed top-0 right-0 left-0 z-30"
  >
    <div
      class="flex justify-between container xl:max-w-7xl mx-auto px-4 lg:px-8"
    >
      <!-- Left Section -->
      <div class="flex items-center">
        <a
          href="javascript:void(0)"
          class="inline-flex items-center space-x-2 font-bold text-lg tracking-wide text-indigo-600 hover:text-indigo-400"
        >
          <svg
            class="hi-outline hi-cube-transparent inline-block w-5 h-5 opacity-90"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
            />
          </svg>
          <span @click="$router.push('/dashboard')">Firma Bul</span>
        </a>
      </div>
      <!-- Left Section -->

      <!-- Right Section -->
      <div class="flex items-center space-x-2 lg:space-x-5">
        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex lg:items-center lg:space-x-1 lg:space-x-2">
          <a
            href="javascript:void(0)"
            @click="$router.push('/dashboard')"
            class="font-medium flex items-center space-x-2 px-4 py-2 rounded text-gray-500 hover:text-indigo-500 hover:bg-indigo-100 active:bg-transparent"
          >
            <svg
              class="hi-solid hi-home inline-block w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
              />
            </svg>
            <span @click="$router.push('/dashboard')">Ana Sayfa</span>
          </a>
          <a
            href="javascript:void(0)"
            @click="$router.push('/userlist')"
            class="font-medium flex items-center space-x-2 px-4 py-2 rounded text-gray-500 hover:text-indigo-500 hover:bg-indigo-100 active:bg-transparent"
          >
            <svg
              class="hi-solid hi-user-circle inline-block w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                clip-rule="evenodd"
              />
            </svg>
            <span @click="$router.push('/userlist')">Kullanıcı Listesi</span>
          </a>
          <a
            href="javascript:void(0)"
            @click="$router.push('/factories')"
            class="font-medium flex items-center space-x-2 px-4 py-2 rounded text-gray-500 hover:text-indigo-500 hover:bg-indigo-100 active:bg-transparent"
          >
            <svg
              class="hi-solid hi-briefcase inline-block w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                clip-rule="evenodd"
              />
              <path
                d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"
              />
            </svg>
            <span @click="$router.push('/factories')">Fabrikalar</span>
          </a>
          <a
            href="javascript:void(0)"
            @click="$router.push('/settings')"
            class="font-medium flex items-center space-x-2 px-4 py-2 rounded text-gray-500 hover:text-indigo-500 hover:bg-indigo-100 active:bg-transparent"
          >
            <svg
              class="hi-solid hi-cog inline-block w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                clip-rule="evenodd"
              />
            </svg>
            <span @click="$router.push('/settings')">Ayarlar</span>
          </a>
        </nav>
        <!-- END Desktop Navigation -->

        <!-- User Dropdown -->
        <div class="relative inline-block">
          <!-- Dropdown Toggle Button -->
          <button
            @click="toggleStatus = !toggleStatus"
            type="button"
            class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-5 text-sm rounded border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white active:shadow-none"
            id="tk-dropdown-layouts-user"
            aria-haspopup="true"
            aria-expanded="true"
          >
            <span>{{ email }}</span>
            <svg
              class="hi-solid hi-chevron-down inline-block w-5 h-5 opacity-50"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>

          <div
            v-if="toggleStatus"
            role="menu"
            aria-labelledby="tk-dropdown-layouts-user"
            class="absolute right-0 origin-top-right mt-2 w-48 shadow-xl rounded z-1"
          >
            <div
              class="bg-white ring-1 ring-black ring-opacity-5 rounded divide-y divide-gray-100"
            >
              <div class="p-2 space-y-1">
                <a
                  role="menuitem"
                  href="javascript:void(0)"
                  class="flex items-center space-x-2 rounded py-2 px-3 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700"
                >
                  <svg
                    class="hi-solid hi-cog inline-block w-5 h-5 opacity-50"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span @click="$router.push('/settings')">Ayarlar</span>
                </a>
              </div>
              <div class="p-2 space-y-1">
                <form onsubmit="return false;">
                  <button
                    @click="signOut"
                    type="submit"
                    role="menuitem"
                    class="w-full text-left flex items-center space-x-2 rounded py-2 px-3 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700"
                  >
                    <svg
                      class="hi-solid hi-lock-closed inline-block w-5 h-5 opacity-50"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span>Çıkış</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
          <!-- END Dropdown -->
        </div>
        <!-- END User Dropdown -->

        <!-- Toggle Mobile Navigation -->
        <div class="lg:hidden">
          <button
            type="button"
            class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white active:shadow-none"
          >
            <svg
              class="hi-solid hi-menu-alt-4 inline-block w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
        <!-- END Toggle Mobile Navigation -->
      </div>
      <!-- END Right Section -->
    </div>
  </header>
</template>

<script>
const jwt = require("jsonwebtoken");
import Cookies from "js-cookie";

export default {
  data() {
    return {
      toggleStatus: false,
      email: "",
    };
  },

  created() {
    const getToken = Cookies.get("token");
    const tokenResult = jwt.verify(getToken, "secretkey");
    this.email = tokenResult.email;
  },

  methods: {
    signOut() {
      Cookies.remove("token");
      this.$router.push("/");
    },
  },
};
</script>

<style></style>
