<script>
import Appheader from './components/Appheader.vue';
export default {
  components: {
    Appheader
  }
};
</script>

<template>
  <div>
    <Appheader></Appheader>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@use './styles/generals.scss' as *;
</style>