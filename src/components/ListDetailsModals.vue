<template>
  <div v-if="$store.state.editButtonModal">
    <div
      class="z-90 fixed inset-0 overflow-y-auto overflow-x-hidden bg-gray-900 bg-opacity-75 p-4 lg:p-8"
      tabindex="-1"
      role="dialog"
      aria-labelledby="tk-modal-with-form"
      aria-hidden="false"
    >
      <br /><br /><br />

      <div
        class="flex flex-col rounded shadow-sm bg-white overflow-hidden w-full max-w-md mx-auto"
        role="document"
      >
        <div
          class="py-4 px-5 lg:px-6 w-full bg-gray-50 flex justify-between items-center"
        >
          <h3 class="font-medium flex items-center space-x-2">
            <svg
              class="hi-solid hi-user-add inline-block w-5 h-5 opacity-50"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"
              />
            </svg>
            <span>Fabrika detay düzenle</span>
          </h3>
          <div class="-my-4">
            <button
              @click="closeBar"
              type="button"
              class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-2 py-1 leading-5 text-sm rounded border-transparent text-gray-600 hover:text-gray-400 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:text-gray-600"
            >
              <svg
                class="hi-solid hi-x inline-block w-4 h-4 -mx-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
        <div class="p-5 lg:p-6 flex-grow w-full">
          <p class="text-gray-600 mb-5">
            Fabrikanız ile alakalı detayları düzenleyiniz
          </p>

          <div class="space-y-1">
            <label
              for="tk-form-input-groups-prepend-text-addon-large"
              class="font-medium"
              >Fabrika Adı</label
            >
            <div class="relative">
              <div
                class="absolute inset-y-0 left-0 w-16 my-px ml-px flex items-center justify-center pointer-events-none rounded-l text-gray-500 bg-gray-100 border-r border-gray-200"
              >
                Fabrika
              </div>
              <input
                v-model="$store.state.ListDetailsModalsresponse[0].factoryname"
                class="block border border-gray-200 rounded pl-20 pr-5 py-3 leading-6 w-full focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                type="text"
                id="tk-form-input-groups-prepend-large--iconaddon"
              />
            </div>
          </div>

          <div class="space-y-1">
            <label
              for="tk-form-input-groups-prepend-text-addon-large"
              class="font-medium"
              >Üyelik Tarihi</label
            >
            <div class="relative">
              <div
                class="absolute inset-y-0 left-0 w-16 my-px ml-px flex items-center justify-center pointer-events-none rounded-l text-gray-500 bg-gray-100 border-r border-gray-200"
              >
                Tarih
              </div>
              <input
                v-model="$store.state.ListDetailsModalsresponse[0].fromdate"
                class="block border border-gray-200 rounded pl-20 pr-5 py-3 leading-6 w-full focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                type="text"
                id="tk-form-input-groups-prepend-large--iconaddon"
              />
            </div>
          </div>

          <div class="space-y-1">
            <label
              for="tk-form-input-groups-prepend-text-addon-large"
              class="font-medium"
              >Üyelik Bitiş Tarihi</label
            >
            <div class="relative">
              <div
                class="absolute inset-y-0 left-0 w-16 my-px ml-px flex items-center justify-center pointer-events-none rounded-l text-gray-500 bg-gray-100 border-r border-gray-200"
              >
                Tarih
              </div>
              <input
                v-model="$store.state.ListDetailsModalsresponse[0].todate"
                class="block border border-gray-200 rounded pl-20 pr-5 py-3 leading-6 w-full focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                type="text"
                id="tk-form-input-groups-prepend-large--iconaddon"
              />
            </div>
          </div>

          <div class="space-y-1">
            <label
              for="tk-form-input-groups-prepend-text-addon-large"
              class="font-medium"
              >Kullanım(KW)</label
            >
            <div class="relative">
              <div
                class="absolute inset-y-0 left-0 w-16 my-px ml-px flex items-center justify-center pointer-events-none rounded-l text-gray-500 bg-gray-100 border-r border-gray-200"
              >
                KW
              </div>
              <input
                v-model="$store.state.ListDetailsModalsresponse[0].usingkw"
                class="block border border-gray-200 rounded pl-20 pr-5 py-3 leading-6 w-full focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                type="text"
                id="tk-form-input-groups-prepend-large--iconaddon"
              />
            </div>
          </div>

          <div class="space-y-1">
            <label
              for="tk-form-input-groups-prepend-text-addon-large"
              class="font-medium"
              >Kullanım Bedeli</label
            >
            <div class="relative">
              <div
                class="absolute inset-y-0 left-0 w-16 my-px ml-px flex items-center justify-center pointer-events-none rounded-l text-gray-500 bg-gray-100 border-r border-gray-200"
              >
                Bedel
              </div>
              <input
                v-model="$store.state.ListDetailsModalsresponse[0].usingsalary"
                class="block border border-gray-200 rounded pl-20 pr-5 py-3 leading-6 w-full focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                type="text"
                id="tk-form-input-groups-prepend-large--iconaddon"
              />
            </div>
          </div>

          <div class="space-y-1">
            <label
              for="tk-form-input-groups-prepend-text-addon-large"
              class="font-medium"
              >İndirimli Fiyat</label
            >
            <div class="relative">
              <div
                class="absolute inset-y-0 left-0 w-16 my-px ml-px flex items-center justify-center pointer-events-none rounded-l text-gray-500 bg-gray-100 border-r border-gray-200"
              >
                Fiyat
              </div>
              <input
                v-model="
                  $store.state.ListDetailsModalsresponse[0].discountedprice
                "
                class="block border border-gray-200 rounded pl-20 pr-5 py-3 leading-6 w-full focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                type="text"
                id="tk-form-input-groups-prepend-large--iconaddon"
              />
            </div>
          </div>
        </div>
        <div class="py-4 px-5 lg:px-6 w-full bg-gray-50 text-right space-x-1">
          <button
            @click="closeBar()"
            type="button"
            class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-5 text-sm rounded border-transparent text-indigo-600 hover:text-indigo-400 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 active:text-indigo-600"
          >
            İptal Et
          </button>
          <button
            @click="submitNewData()"
            type="button"
            class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-5 text-sm rounded border-indigo-700 bg-indigo-700 text-white hover:text-white hover:bg-indigo-800 hover:border-indigo-800 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 active:bg-indigo-700 active:border-indigo-700"
          >
            Gönder
          </button>
        </div>
      </div>
      <!-- END Modal Dialog -->
    </div>

    <!-- END Modal Backdrop -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  methods: {
    closeBar() {
      this.$store.commit("seteditButtonModal", false);
    },
    async submitNewData() {
      await axios
        .put("http://localhost:3060/updateByName", {
          id: this.$store.state.ListDetailsModalsresponse[0].factorynameid,
          factoryname:
            this.$store.state.ListDetailsModalsresponse[0].factoryname,
          fromdate: this.$store.state.ListDetailsModalsresponse[0].fromdate,
          todate: this.$store.state.ListDetailsModalsresponse[0].todate,
          usingkw: this.$store.state.ListDetailsModalsresponse[0].usingkw,
          usingsalary:
            this.$store.state.ListDetailsModalsresponse[0].usingsalary,
          discountedprice:
            this.$store.state.ListDetailsModalsresponse[0].discountedprice,
        })
        .then((res) => {
          if (res.status === 200) {
            this.$store.dispatch(
              "getCompaniesListDetails",
              this.$route.params.id
            );
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style></style>
