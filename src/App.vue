<template>
  <div class="layout">
    <div class="wrapper">
      <!-- <Header></Header> -->
      <transition name="slide-fade">
        <router-view />
      </transition>
    </div>
    <!-- <Footer></Footer> -->
  </div>
</template>

<script setup lang="ts">
import Header from "@/components/layouts/Header.vue";
import Footer from "@/components/layouts/Footer.vue";
import { useRoute } from "vue-router";
import * as rotesPaths from "@/constants/routes";

const route = useRoute();
</script>
