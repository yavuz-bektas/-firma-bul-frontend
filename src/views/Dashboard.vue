<template>
  <div class="flex flex-col mx-auto w-full min-h-screen bg-gray-100">
    <dashboardHeader />

    <main id="page-content" class="flex flex-auto flex-col max-w-full pt-16">
      <div class="container xl:max-w-7xl mx-auto p-4 lg:p-8">

        <h2
          class="text-2xl font-bold py-2 border-b-2 border-gray-200 mb-4 lg:mb-8"
        >
          Ana Sayfa - 
          <span class="block sm:inline-block text-xl text-gray-600 font-normal"
            >Firma Bul'a hoş geldiniz!</span
          >
        </h2>
        <!--

      ADD YOUR MAIN CONTENT BELOW

      -->

     
          <statisticForDashboardVue/>

        <!--
      
      ADD YOUR MAIN CONTENT ABOVE
      
      --></div>
      <!-- END Page Section -->
    </main>
    <!-- END Page Content -->

    <!-- Page Footer -->
    <footerVue/>
    <!-- END Page Footer -->
  </div>
  <!-- END Page Container -->
</template>

<script>
import dashboardHeader from "../components/dashboardHeader.vue";
import statisticForDashboardVue from "../components/statisticForDashboard.vue";
import footerVue from "../components/footer.vue";
export default {
  components: {
    dashboardHeader,
    statisticForDashboardVue,
    footerVue
  },
};
</script>

<style></style>
