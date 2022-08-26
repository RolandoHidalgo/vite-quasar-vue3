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

        <q-page-container>
            <q-page>
                <router-link to="/modules/admin">admin</router-link>
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

</script>

<style scoped>

</style>
