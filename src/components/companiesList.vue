<template>
  <div>
    <!-- Card -->
    <div class="flex flex-col rounded shadow-sm bg-white overflow-hidden">
      <!-- Card Header -->
      <div
        class="py-4 px-5 lg:px-6 w-full bg-gray-50 sm:flex sm:justify-between sm:items-center"
      >
        <div class="flex justify-center sm:justify-left">
          <h3 class="inline-flex items-center space-x-2 font-semibold">
            <svg
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              class="opacity-50 hi-solid hi-briefcase inline-block w-5 h-5"
            >
              <path
                fill-rule="evenodd"
                d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
              <path
                d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"
              ></path>
            </svg>
            <span>Tüm Fabrikalar</span>
          </h3>
        </div>
        <div class="mt-3 sm:mt-0 text-center sm:text-right">
          <a
            href="javascript:void(0)"
            @click="addCompanies"
            class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-5 text-sm rounded border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white active:shadow-none"
          >
            <svg
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              class="hi-solid hi-plus inline-block w-4 h-4"
            >
              <path
                fill-rule="evenodd"
                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span @click="addCompanies">Yeni Ekle</span>
          </a>
          <a
            href="javascript:void(0)"
            @click="openDeleteModal"
            class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-5 text-sm rounded border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white active:shadow-none"
          >
            <svg
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              class="hi-solid hi-users inline-block w-4 h-4"
            >
              <path
                d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"
              ></path>
            </svg>
            <span @click="openDeleteModal">Sil</span>
          </a>
          <a
            href="javascript:void(0)"
            class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-5 text-sm rounded border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white active:shadow-none"
          >
            <svg
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              class="hi-solid hi-users inline-block w-4 h-4"
            >
              <path
                d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"
              ></path>
            </svg>
            <span>Düzenle</span>
          </a>
        </div>
      </div>
      <!-- END Card Header -->

      <!-- Card Body -->
      <div class="p-5 lg:p-6 flex-grow w-full">
        <div
          class="container flex flex-col mx-auto w-full items-center justify-center"
        >
          <ul
            class="flex flex-col"
            v-for="i in $store.state.allFactory"
            :key="i.id"
          >
            <li class="border-gray-400 flex flex-row mb-2">
              <div
                class="transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4"
                @click="$router.push('/factories/'+i.factorytid )"
              >
                <div class="flex-1 pl-1 md:mr-16">
                  <div class="font-medium dark:text-white">
                    {{ i.factoryname }}
                  </div>
                  <div class="text-gray-600 dark:text-gray-200 text-sm">
                    {{ i.factoryworker }}
                  </div>
                  
                </div>
                <div class="flex-1 pl-1 md:mr-16">
                  <div class="font-medium dark:text-white">
                    Fabrika ID: {{ i.factorytid }}
                  </div>
                 
                  
                </div>
                <div class="text-gray-600 dark:text-gray-200 text-xs">
                  {{ i.factoryenddate }}
                </div>
                
                <button class="w-24 text-right flex justify-end">
                  <svg
                    width="12"
                    fill="currentColor"
                    height="12"
                    class="hover:text-gray-800 dark:hover:text-white dark:text-gray-200 text-gray-500"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"
                    ></path>
                  </svg>
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <!-- END Card Body -->
    </div>
    <!-- END Card -->
    <companisListModalVue />
    <deleteCompaniesModal/>
  </div>
</template>

<script>
import companisListModalVue from "./companisListModal.vue";
import deleteCompaniesModal from "./deleteCompaniesModal.vue";

export default {
  components: {
    companisListModalVue,
    deleteCompaniesModal,
  },

  created() {
    this.getCompaniesList();
  },
  methods: {
    getCompaniesList() {
      this.$store.dispatch("getCompaniesList");
    },
    addCompanies() {
      this.$store.commit("setcompaniesListModal", true);
    },
    openDeleteModal() {
      this.$store.commit("setdeleteCompaniesModal", true);
    },
  },
};
</script>

<style></style>
