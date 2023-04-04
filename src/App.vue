<template>
  <HeaderView />
  <RouterView></RouterView>
  <FooterView />
</template>

<script>
import HeaderView from "@/views/global/HeaderView.vue";
import FooterView from "@/views/global/FooterView.vue";

export default {
  name: "App",
  components: { HeaderView, FooterView },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
