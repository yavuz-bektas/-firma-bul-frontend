<template>
  <!-- Page Container -->
  <div class="flex flex-col mx-auto w-full min-h-screen bg-gray-100">
    <!-- Page Header -->
    <dashboardHeader/>
    <!-- END Page Header -->

    <!-- Page Content -->
    <main id="page-content" class="flex flex-auto flex-col max-w-full pt-16">
     
      <div class="container xl:max-w-7xl mx-auto p-4 lg:p-8">


     
       
          <companiesListVue/>

       
      </div>
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
import dashboardHeader from "../components/dashboardHeader.vue"
import companiesListVue from "../components/companiesList.vue";
import footerVue from "../components/footer.vue";

export default {
  components: {
    dashboardHeader,
    companiesListVue,
    footerVue
  }
};
</script>

<style></style>
