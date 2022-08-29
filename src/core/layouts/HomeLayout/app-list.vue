<template>


  <div class="row items-center justify-center full-height q-gutter-md">
    <q-card v-ripple v-for="module in modules" class="my-card q-hoverable cursor-pointer"
            @click="goToModule(module.url)">
      <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
        <div class="absolute-bottom text-h6">
          {{ module.nombre }}
        </div>
      </q-img>


    </q-card>

  </div>


</template>

<script setup>

defineProps({
  modules: {
    required: true,
    type: Array

  }
})


import {useRouter, useRoute} from 'vue-router'


const router = useRouter();
const goToModule = (url) => {
  router.push('modules/' + url);
}
</script>

<style scoped>
.my-card {
  width: 100%;
  max-width: 250px;
}
</style>