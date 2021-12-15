<template>
  <!-- Warning Alert -->
  <div class="p-4 md:p-5 rounded text-orange-700 bg-yellow-300" v-if="$store.state.infoModel">
    <div class="flex items-center">
      <svg
        class="hi-solid hi-exclamation inline-block w-5 h-5 mr-3 flex-none text-orange-500"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
          clip-rule="evenodd"
        />
      </svg>
      <h3 class="font-semibold flex-grow">Yönetici hesabınızı henüz onaylamadı!</h3>
      <button
        type="button"
        class="inline-flex justify-center items-center space-x-2 rounded border font-semibold focus:outline-none ml-3 px-2 py-1 leading-5 text-sm border-transparent text-red-600 hover:text-red-400 focus:ring focus:ring-red-500 focus:ring-opacity-50 active:text-red-600"
      >
        <svg
          class="hi-solid hi-x inline-block w-5 h-5"
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
  <!-- END Warning Alert -->
</template>

<script>
export default {};
</script>

<style></style>
