<template>
  <!-- Responsive Table Container -->
  <div
    class="border border-gray-200 rounded overflow-x-auto min-w-full bg-white"
  >
    <!-- Striped Table -->
    <table class="min-w-full text-sm align-middle whitespace-nowrap">
      <!-- Table Header -->
      <thead>
        <tr>
          <th
            class="p-3 text-gray-700 bg-gray-100 font-semibold text-sm tracking-wider uppercase text-left"
          >
            Ad
          </th>
          <th
            class="p-3 text-gray-700 bg-gray-100 font-semibold text-sm tracking-wider uppercase text-left"
          >
            Email
          </th>
          <th
            class="p-3 text-gray-700 bg-gray-100 font-semibold text-sm tracking-wider uppercase text-center"
          >
            Rol
          </th>
          <th
            class="p-3 text-gray-700 bg-gray-100 font-semibold text-sm tracking-wider uppercase text-center"
          >
            İşlemler
          </th>
          <th
            class="p-3 text-gray-700 bg-gray-100 font-semibold text-sm tracking-wider uppercase text-center"
          >
            Durum
          </th>
        </tr>
      </thead>
      <!-- END Table Header -->

      <!-- Table Body -->
      <tbody v-for="i in user" :key="i.id">
        <tr>
          <td class="p-3">
            <p class="font-medium">{{ i.username }}</p>
            <p class="text-gray-500">{{ i._id }}</p>
          </td>
          <td class="p-3 text-gray-500">{{ i.email }}</td>

          <td class="p-3 text-center" v-if="i.roles[0] === 'admin'">
            <div
              class="font-semibold inline-flex px-2 py-1 leading-4 text-xs rounded-full text-green-700 bg-green-200"
            >
              {{ i.roles[0] }}
            </div>
          </td>

          <td class="p-3 text-center" v-else>
            <div
              class="font-semibold inline-flex px-2 py-1 leading-4 text-xs rounded-full text-green-700 bg-red-200"
            >
              {{ i.roles[0] }}
            </div>
          </td>

          <td class="p-3 text-center">
            <button
              v-if="i.roles[0] === 'user' && i.isActive === false"
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
              <span @click="verified(i._id)">Onayla</span>
            </button>
          </td>

          <td
            class="p-3 font-semibold text-green-700"
            v-if="i.isActive === true"
          >
            Onaylı
          </td>
          <td class="p-3 font-semibold text-red-500" v-else>Onaysız</td>
        </tr>
      </tbody>
      <!-- END Table Body -->
    </table>

    <div
      class="bg-green-200 border-green-600 text-green-600 border-l-4 p-4"
      role="alert"
      v-if="checkUserAlert"
    >
      <p class="font-bold">Başarılı İşlem!</p>
      <p>Tebrikler, kullanıcıyı onayladınız.</p>
    </div>

    <!-- END Striped Table -->
  </div>

  <!-- END Responsive Table Container -->
</template>

<script>
import axios from "axios";
import Cookies from "js-cookie";

export default {
  data() {
    return {
      user: [],
      checkUserAlert: false,
    };
  },
  async created() {
    await this.getinitialdata();
  },

  methods: {
    async verified(id) {
      const token = Cookies.get("token");

      await axios
        .post("http://3.16.214.155/api/updateuser", {
          Authorization: "Bearer " + token,
          userId: id,
        })
        .then((res) => {
          console.log(res.data);
          this.getinitialdata();
          this.checkUserAlert = true;

          setTimeout(() => {
            this.checkUserAlert = false;
          }, 2000);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async getinitialdata() {
      const token = Cookies.get("token");

      await axios
        .post("http://3.16.214.155/api/getallusers", {
          Authorization: "Bearer " + token,
        })
        .then((res) => {
          this.user = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style></style>
