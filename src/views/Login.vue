<template>
  <!-- Page Container -->
  <div
    id="page-container"
    class="flex flex-col mx-auto w-full min-h-screen bg-gray-100"
  >
    <!-- Page Content -->
    <main id="page-content" class="flex flex-auto flex-col max-w-full">
      <div
        class="min-h-screen flex flex-col bg-cover bg-bottom"
        style="
          background-image: url('https://source.unsplash.com/wQLAGv4_OYs/1920x1200');
        "
      >
        <!-- Sign In Section -->
        <div
          class="flex flex-grow md:w-8/12 lg:w-5/12 xl:w-4/12 bg-white shadow-xl"
        >
          <div class="flex flex-col p-8 lg:p-16 xl:p-20 w-full">
            <!-- Sign In Content -->
            <div class="flex-grow flex items-center">
              <div class="w-full max-w-lg mx-auto space-y-10">
                <infoModel/>
                <!-- Header -->
                <div>
                  <h1
                    class="text-4xl font-bold inline-flex items-center mb-1 space-x-3"
                  >
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      class="text-indigo-500 hi-solid hi-cube-transparent inline-block w-8 h-8"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>Firma Sorgula</span>
                  </h1>
                  <p class="text-gray-500">
                    Hoş geldiniz, lütfen kontrol panelinizde oturum açın
                  </p>
                </div>
                <!-- END Header -->

                <div class="text-sm text-gray-500">
                  Henüz bir hesabın yok mu?
                  <router-link
                    class="font-medium text-indigo-600 hover:text-indigo-400"
                    to="/register"
                    >Kayıt Ol</router-link
                  >
                </div>
                <loginForm />
              </div>
            </div>

            <br><br><br>
            <dangerAlerts />

            <!-- END Sign In Content -->

            <!-- Footer -->
            <div class="text-sm text-gray-500 text- pt-20">
              <a
                href="https://github.com/yavuz-bektas"
                class="font-medium text-indigo-600 hover:text-indigo-400"
                target="_blank"
                >Firma Sorgula</a
              >
              by
              <a
                href="https://github.com/yavuz-bektas"
                class="font-medium text-indigo-600 hover:text-indigo-400"
                target="_blank"
                >Yavuz Bektaş</a
              >
            </div>
            <!-- END Footer -->
          </div>
        </div>
        <!-- END Sign In Section -->
      </div>
    </main>
    <!-- END Page Content -->
  </div>
  <!-- END Page Container -->
</template>

<script>
import loginForm from "../components/loginForm.vue";
import dangerAlerts from "../components/dangerAlerts.vue";
import infoModel from "../components/infoModel";

export default {
  components: {
    loginForm,
    dangerAlerts,
    infoModel
  },
};
</script>

<style></style>
