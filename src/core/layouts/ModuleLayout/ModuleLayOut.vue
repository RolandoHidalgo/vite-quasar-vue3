<template>
    <q-layout view="hHh lpR fFf">

        <q-header elevated class="bg-primary text-white">
            <q-toolbar>
                <q-toolbar-title>
                    <q-avatar>
                        <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
                    </q-avatar>
                    module
                </q-toolbar-title>
                <q-btn flat round dense icon="home" to="/"/>
            </q-toolbar>
            <q-tabs v-model="tab">
                <q-route-tab
                        name="images"
                        icon="mail"
                        to="admin/users"
                        exact
                        label="Images"
                />
                <q-route-tab
                        name="articles"
                        icon="mail"
                        to="/mails"
                        exact
                        label="Articles"
                />
                <q-route-tab
                        name="videos"
                        icon="mail"
                        to="/other"
                        exact
                        label="Videos"
                />
            </q-tabs>
        </q-header>

        <q-page-container>
            <router-view/>
        </q-page-container>

        <q-footer class="bg-grey-8 text-white">
            <q-toolbar>
                <q-toolbar-title>

                    <div>module</div>
                </q-toolbar-title>
            </q-toolbar>
        </q-footer>

    </q-layout>
</template>

<script setup>
    import {ref} from 'vue';

    const tab = ref('images');
</script>

<style scoped>

</style>
