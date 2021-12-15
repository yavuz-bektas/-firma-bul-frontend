<template>
  <div
    class="z-90 fixed inset-0 overflow-y-auto overflow-x-hidden bg-gray-900 bg-opacity-75 p-4 lg:p-8"
    tabindex="-1"
    role="dialog"
    aria-labelledby="tk-modal-simple"
    aria-hidden="false"
  >
    <!-- Modal Dialog -->
    <!--
    Show/Hide with transitions
      enter         'transition ease-out duration-200'
      enter-start   'transform opacity-0 scale-125'
      enter-end     'transform opacity-100 scale-100'
      leave         'transition ease-in duration-100'
      leave-start   'transform opacity-100 scale-100'
      leave-end     'transform opacity-0 scale-125'
  -->
    <div
      class="flex flex-col rounded shadow-sm bg-white overflow-hidden w-full max-w-md mx-auto"
      role="document"
    >
      <div class="p-5 lg:p-6 flex-grow w-full text-center">
        <div
          class="w-16 h-16 mx-auto mb-5 flex items-center justify-center rounded-full bg-green-100"
        >
          <svg
            class="hi-solid hi-check inline-block w-8 h-8 text-green-500"
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
        </div>
        <div>
          <h4 class="text-xl font-semibold mb-1">Hesap Başarıyla Yaratıldı</h4>
          <p class="text-gray-600">
            Bu harika, aramıza hoş geldiniz! Yönetici hesabınızı onaylayana kadar lütfen sabrediniz..
          </p>
        </div>
      </div>
      <div class="py-4 px-5 lg:px-6 w-full">
        <button
          @click="push()"
          type="button"
          class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none w-full px-3 py-2 leading-6 rounded border-indigo-700 bg-indigo-700 text-white hover:text-white hover:bg-indigo-800 hover:border-indigo-800 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 active:bg-indigo-700 active:border-indigo-700"
        >
          Hadi Başlayalım!
        </button>
      </div>
    </div>
    <!-- END Modal Dialog -->
  </div>
</template>

<script>
export default {
  methods: {
    push(){
      this.$router.push('/')
    }
  }
};
</script>

<style></style>
