<template>
  <div id="app" class="container">
    <router-view/>
    <keep-alive>
      <router-view name="bottom"></router-view>
    </keep-alive>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  body{
    background-color: #2E2245;
  }
</style>
