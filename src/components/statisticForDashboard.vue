<template>
  <!-- Stats Section: Bubble With Title -->
  <div class="bg-gray-100 overflow-hidden">
    <div class="container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
      <!-- Heading -->
      <div class="text-center mb-16">
        <div
          class="text-sm uppercase font-bold tracking-wider mb-1 text-indigo-700"
        >
          İşletmenizi büyütmeye bugün başlayın!
        </div>
        <h2 class="text-3xl md:text-4xl font-extrabold mb-4">
          Binlerce profesyonel tarafından güvenilen
        </h2>
        <h3
          class="text-lg md:text-xl md:leading-relaxed font-medium text-gray-600 lg:w-2/3 mx-auto"
        >
          Dünyanın her yerinden işletmeler ürünümüzü kullanıyor. Onlara katılın
          ve verimlilik raporlarını takip edin!
        </h3>
      </div>
      <!-- END Heading -->

      <!-- Stats -->
      <div class="relative">
        <div
          class="pattern-dots-md text-gray-300 absolute top-0 right-0 w-32 h-32 transform -translate-y-12 translate-x-12"
        ></div>
        <div
          class="pattern-dots-md text-gray-300 absolute bottom-0 left-0 w-32 h-32 transform translate-y-12 -translate-x-12"
        ></div>
        <div
          class="grid grid-cols-1 sm:grid-cols-3 text-center rounded-xl shadow-md bg-white divide-y sm:divide-y-0 sm:divide-x divide-gray-100 overflow-hidden relative"
        >
          <dl class="space-y-1 px-5 py-12 hover:bg-gray-50 hover:bg-opacity-50">
            <dt class="text-4xl font-extrabold text-indigo-600">
              {{ totalFactory }}+
            </dt>
            <dd class="text-sm uppercase tracking-wide font-semibold">
              Fabrika
            </dd>
          </dl>
          <dl class="space-y-1 px-5 py-12 hover:bg-gray-50 hover:bg-opacity-50">
            <dt class="text-4xl font-extrabold text-indigo-600">
              {{ totalWorker }}+
            </dt>
            <dd class="text-sm uppercase tracking-wide font-semibold">
              Çalışan
            </dd>
          </dl>
          <dl class="space-y-1 px-5 py-12 hover:bg-gray-50 hover:bg-opacity-50">
            <dt class="text-4xl font-extrabold text-indigo-600">175k+</dt>
            <dd class="text-sm uppercase tracking-wide font-semibold">
              KAZANÇ
            </dd>
          </dl>
        </div>
      </div>
      <!-- END Stats -->
    </div>
  </div>
  <!-- Stats Section: Bubble With Title -->
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      totalFactory: "",
      totalWorker: "",
    };
  },
  created() {
    this.getFactories();
  },
  methods: {
    async getFactories() {
      await axios
        .get("http://localhost:3060/getallfactory")
        .then((res) => {
          this.totalFactory = res.data.length;
          var total = 0;
          for (let i = 0; i < res.data.length; i++) {
            total += res.data[i].factoryworker;
          }
          this.totalWorker = total;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style></style>
