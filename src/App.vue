<template>
  <div id="app" class="container">
    <keep-alive>
     <router-view/>
    </keep-alive>
    <keep-alive>
      <router-view name="bottom"></router-view>
    </keep-alive>
    <keep-alive>
    <router-view name="right"></router-view>
    </keep-alive>
  </div>
</template>

<script>
  export default {
    name: 'App',

  }
</script>

<style>
  body{
    background-color: #2E2245;
  }

</style>
