<template>
  <div id="main">
    <Header></Header>
    <div class="content mt-5 pt-5">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
export default {
  name: "main-app",
  components: { Header }
};
</script>