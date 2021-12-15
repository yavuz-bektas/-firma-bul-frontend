<template>
  <!-- Page Container -->
  <div class="flex flex-col mx-auto w-full min-h-screen bg-gray-100">
    <!-- Page Header -->
    <dashboardHeader />
    <!-- END Page Header -->

    <!-- Page Content -->
    <main id="page-content" class="flex flex-auto flex-col max-w-full pt-16">
      <div class="container xl:max-w-7xl mx-auto p-4 lg:p-8">
        <!-- Responsive Table Container -->
        <!-- Page Heading with Actions -->
        <div
          class="text-center sm:text-left sm:flex sm:items-center sm:justify-between sm:border-b-2 sm:border-gray-200 mb-4 lg:mb-8"
        >
          <h2 class="text-2xl font-bold py-3">
            Fabrika Verilerinin Detayları
            <span class="block text-lg text-gray-600 font-normal"
              >Yeni Veri Ekleyebilirsiniz</span
            >
          </h2>

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
              <span>Geri Dön</span>
            </button>
            <button
              type="button"
              @click="openBar(true)"
              class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded border-indigo-700 bg-indigo-700 text-white hover:text-white hover:bg-indigo-800 hover:border-indigo-800 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 active:bg-indigo-700 active:border-indigo-700"
            >
              <svg
                class="hi-solid hi-check inline-block w-5 h-5 opacity-75"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>Ekle</span>
            </button>
          </div>
          <!-- END Actions -->
        </div>
        <!-- END Page Heading with Actions -->

        <!-- Placeholder -->
        <div
          class="border border-gray-200 rounded overflow-x-auto min-w-full bg-white"
        >
          <!-- Alternate Responsive Table -->
          <table class="min-w-full text-sm align-middle">
            <!-- Table Header -->
            <thead>
              <tr class="bg-gray-50">
                <th
                  class="p-3 text-gray-700 bg-gray-100 font-semibold text-sm tracking-wider uppercase hidden md:table-cell text-center"
                >
                  Fabrika Adı
                </th>
                <th
                  class="p-3 text-gray-700 bg-gray-100 font-semibold text-sm tracking-wider uppercase text-left"
                >
                  Başlangıc Tarihi
                </th>
                <th
                  class="p-3 text-gray-700 bg-gray-100 font-semibold text-sm tracking-wider uppercase hidden md:table-cell text-left"
                >
                  Bitiş Tarihi
                </th>
                <th
                  class="p-3 text-gray-700 bg-gray-100 font-semibold text-sm tracking-wider uppercase text-center"
                >
                  Kullanılan KW
                </th>
                <th
                  class="p-3 text-gray-700 bg-gray-100 font-semibold text-sm tracking-wider uppercase text-center"
                >
                  Kullanım Bedeli
                </th>

                <th
                  class="p-3 text-gray-700 bg-gray-100 font-semibold text-sm tracking-wider uppercase text-center"
                >
                  ındirimli Fiyat
                </th>

                <th
                  class="p-3 text-gray-700 bg-gray-100 font-semibold text-sm tracking-wider uppercase text-center"
                >
                  ISLEM
                </th>
              </tr>
            </thead>
            <!-- END Table Header -->

            <!-- Table Body -->
            <tbody>
              <tr v-for="i in $store.state.CompaniesListDetails" :key="i.id">
                <td class="p-3">
                  <p class="font-medium">{{ i.factoryname }}</p>
                  <p class="text-gray-500">ID:{{ i.factorynameid }}</p>
                </td>
                <td class="p-3 hidden md:table-cell text-gray-500">
                  {{ i.fromdate }}
                </td>

                <td class="p-3 hidden md:table-cell text-gray-500">
                  {{ i.todate }}
                </td>

                <td class="p-3 hidden md:table-cell text-gray-500">
                  {{ i.usingkw }}
                </td>

                <td class="p-3 hidden md:table-cell text-gray-500">
                  {{ i.usingsalary }}
                </td>

                <td class="p-3 hidden md:table-cell text-gray-500">
                  {{ i.discountedprice }}
                </td>

                <td class="p-3 text-center">
                  <button
                    @click="openEditButtonBar(i.factorynameid)"
                    type="button"
                    class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-2 py-1 leading-5 text-sm rounded border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white active:shadow-none"
                  >
                    <svg
                      class="hi-solid hi-pencil inline-block w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
                      />
                    </svg>
                    <span class="hidden sm:inline">Düzenle</span>
                  </button>
                  <button
                    @click="deleteattr(i.factorynameid)"
                    type="button"
                    class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-2 py-1 leading-5 text-sm rounded border-gray-300 bg-yellow-200 text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white active:shadow-none"
                  >
                    <svg
                      class="hi-solid hi-pencil inline-block w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
                      />
                    </svg>
                    <span class="hidden sm:inline">Sil</span>
                  </button>
                </td>
              </tr>
            </tbody>
            <!-- END Table Body -->
          </table>
          <!-- END Alternate Responsive Table -->
        </div>
        <!-- END Responsive Table Container -->
        <companiesListDetailsModalsVue />
        <ListDetailsModalsVue />
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
import dashboardHeader from "../components/dashboardHeader.vue";
import companiesListDetailsModalsVue from "../components/companiesListDetailsModals.vue";
import ListDetailsModalsVue from "../components/ListDetailsModals.vue";
import footerVue from "../components/footer.vue";

import axios from "axios";
export default {
  data() {
    return {
      allData: [],
    };
  },
  components: {
    dashboardHeader,
    companiesListDetailsModalsVue,
    ListDetailsModalsVue,
    footerVue,
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      this.$store.dispatch("getCompaniesListDetails", this.$route.params.id);
    },
    openBar(value) {
      this.$store.commit("setcompaniesListDetailsModal", value);
    },
    openEditButtonBar(value) {
      this.$store.commit("seteditButtonModal", true);
      this.$store.dispatch("ListDetailsModals", value);
    },
    deleteattr(payload) {
      axios
        .post("http://localhost:3060/deletefactoriesattr", { id: payload })
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
