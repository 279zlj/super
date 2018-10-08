<template>
  <div id="app" class="container">
    <router-view/>
    <router-view name="bottom"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  body{
    background-image: url("../static/image/bg.png");
    background-size: cover;
  }

</style>
