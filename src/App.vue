<template>
  <Header></Header>
  <router-view v-slot="{ Component }">
    <transition name="slide-fade">
      <component :is="Component" />
    </transition>
  </router-view>
  <!-- <Footer></Footer> -->
</template>

<script setup lang="ts">
import Header from "@/components/layouts/Header.vue";
import Footer from "@/components/layouts/Footer.vue";
import { useRoute } from "vue-router";

const route = useRoute();
</script>
