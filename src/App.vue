<template>
  <v-app>
    <v-navigation-drawer app expand-on-hover>Nav</v-navigation-drawer>
    <v-app-bar app>Header</v-app-bar>
    <v-content>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-content>

    <v-footer app>Footer</v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",

  components: {},

  data: () => ({
    //
  })
});
</script>

<style></style>
