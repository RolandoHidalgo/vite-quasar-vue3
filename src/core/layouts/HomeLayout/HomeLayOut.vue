<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          Title
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container class="no-padding">
      <q-page :style-fn="styleFunct">

        <AppList :modules="modules"></AppList>


      </q-page>
    </q-page-container>

    <q-footer class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>

          <div>pepe</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script setup>
import AppList from './app-list.vue'
import {modules} from "./../../../modules/modulesConfig";

const styleFunct = (offset, height) => {

  return {
    height: offset ? `calc(100vh - ${34}px)` : '100vh',
    paddingTop: '50px'
  }
}
</script>

<style scoped>

</style>
