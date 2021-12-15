<template>
  <!-- Page Container -->
  <div class="flex flex-col mx-auto w-full min-h-screen bg-gray-100">
    <!-- Page Header -->
    <dashboardHeader />
    <!-- END Page Header -->

    <!-- Page Content -->
    <main id="page-content" class="flex flex-auto flex-col max-w-full pt-16">
      <div class="container xl:max-w-7xl mx-auto p-4 lg:p-8">
        <!-- Page Heading with Actions and Breadcrumb -->
        <div
          class="text-center sm:text-left sm:flex sm:items-center sm:justify-between sm:border-b-2 sm:border-gray-200 mb-4 lg:mb-8"
        >
          <div class="py-3 space-y-1">
            <!-- Breadcrumb -->
            <nav>
              <ol class="flex items-center justify-center sm:justify-start">
                <li>
                  <a
                    href="javascript:void(0)"
                    class="text-gray-600 hover:text-gray-500"
                    >Ana Sayfa</a
                  >
                </li>
                <li class="flex items-center px-1 sm:px-2 opacity-25">
                  <svg
                    class="hi-solid hi-chevron-right inline-block w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    class="text-gray-600 hover:text-gray-500"
                    >Fabrikalar</a
                  >
                </li>
                <li class="flex items-center px-1 sm:px-2 opacity-25">
                  <svg
                    class="hi-solid hi-chevron-right inline-block w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    class="text-gray-600 hover:text-gray-500"
                    >Detay</a
                  >
                </li>
              </ol>
            </nav>
            <!-- END Breadcrumb -->

            <h2 class="text-2xl font-bold">
              Düzenle: {{ comingData[0].factoryname }}
            </h2>
          </div>

          <!-- Actions -->
          <div
            class="flex items-center justify-between sm:justify-end space-x-2 py-3 bg-gray-50 rounded sm:bg-transparent px-2 sm:px-0"
          >
            <button
              type="button"
              @click="$router.go(-1)"
              class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded border-transparent text-indigo-600 hover:text-indigo-400 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 active:text-indigo-600"
            >
              <svg
                class="hi-solid hi-arrow-left inline-block w-5 h-5 opacity-75 transform rotate-45"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>Geri</span>
            </button>
            <button
              type="button"
              @click="edited = !edited"
              class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded border-transparent text-indigo-600 hover:text-indigo-400 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 active:text-indigo-600"
            >
              <svg
                class="hi-solid hi-dots-horizontal inline-block w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"
                />
              </svg>
              <span>Düzenle</span>
            </button>
            <button
              type="button"
              :disabled="edited"
              @click="data"
              class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded border-indigo-700 bg-indigo-700 text-white hover:text-white hover:bg-indigo-800 hover:border-indigo-800 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 active:bg-indigo-700 active:border-indigo-700"
            >
              <svg
                class="hi-solid hi-save inline-block w-5 h-5 opacity-75"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V6h5a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h5v5.586l-1.293-1.293zM9 4a1 1 0 012 0v2H9V4z"
                />
              </svg>
              <span>Kaydet</span>
            </button>
            <button
              @click="$router.push('/details/' + comingData[0].factoryname)"
              type="button"
              class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded border-transparent text-indigo-600 hover:text-indigo-400 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 active:text-indigo-600"
            >
              <svg
                class="hi-solid hi-trending-up inline-block w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>Detaylar</span>
            </button>
          </div>
          <!-- END Actions -->
        </div>
        <!-- END Page Heading with Actions and Breadcrumb -->

        <!-- Placeholder -->
        <div
          class="flex items-center justify-center rounded-lg bg-gray-50 border-2 border-dashed border-gray-300 text-gray-500 text-lg py-32"
        >
          <div class="space-y-1">
            <label class="font-medium" for="tk-form-elements-lg-name"
              >Fabrika ADI</label
            >

            <input
              :disabled="edited"
              class="w-full block border border-gray-200 rounded px-5 py-3 leading-6 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              type="text"
              id="tk-form-elements-lg-name"
              v-model="comingData[0].factoryname"
            />
            <label class="font-medium" for="tk-form-elements-lg-name"
              >Tarih</label
            >

            <input
              :disabled="edited"
              class="w-full block border border-gray-200 rounded px-5 py-3 leading-6 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              type="text"
              id="tk-form-elements-lg-name"
              v-model="comingData[0].factorydate"
            />
            <label class="font-medium" for="tk-form-elements-lg-name"
              >Bitiş Tarihi</label
            >

            <input
              :disabled="edited"
              class="w-full block border border-gray-200 rounded px-5 py-3 leading-6 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              type="text"
              id="tk-form-elements-lg-name"
              v-model="comingData[0].factoryenddate"
            />
            <label class="font-medium" for="tk-form-elements-lg-name"
              >Çalışan Sayısı</label
            >

            <input
              :disabled="edited"
              class="w-full block border border-gray-200 rounded px-5 py-3 leading-6 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              type="text"
              id="tk-form-elements-lg-name"
              v-model="comingData[0].factoryworker"
            />
          </div>
        </div>
      </div>

      <!-- END Page Section -->
    </main>
    <!-- END Page Content -->

    <!-- Page Footer -->
    <footerVue />
    <!-- END Page Footer -->
  </div>
  <!-- END Page Container -->
</template>

<script>
import axios from "axios";
import dashboardHeader from "../components/dashboardHeader.vue";
import footerVue from "../components/footer.vue";

export default {
  components: {
    dashboardHeader,
    footerVue,
  },
  data() {
    return {
      comingData: [],
      edited: true,
    };
  },
  methods: {
    async data() {
      await axios
        .put("http://localhost:3060/updatefactory", {
          id: this.$route.params.id,
          factoryname: this.comingData[0].factoryname,
          factorydate: this.comingData[0].factorydate,
          factoryenddate: this.comingData[0].factoryenddate,
          factoryworker: this.comingData[0].factoryworker,
          factoryspecial: false,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    },
  },
  async created() {
    await axios
      .post("http://localhost:3060/findfactoriesbyid", {
        id: this.$route.params.id,
      })
      .then((res) => {
        this.comingData = res.data;
      })
      .catch((err) => console.log(err));
  },
};
</script>

<style></style>
