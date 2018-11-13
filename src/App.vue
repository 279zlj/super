<template>
  <div id="app" :class="patha==='/Installone'||patha==='/Installtwo'||patha==='/Installthree'?'container-fluid':'container'">
    <router-view/>
    <router-view name="bottom"></router-view>
    <router-view name="right"></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data(){
      return{
        patha:''
      }
    },
    methods:{
      gbo(){              /*判断目前url的位置来更改背景颜色，单纯用这个会造成跳转渲染迟缓，用户体验差*/
        this.patha=this.$route.path
        if (this.patha==='/Installone'||this.patha==='/Installtwo'||this.patha==='/Installthree'){
          $('body').css('background-color','white')
        }
        else if(this.patha==='/Login'){
          $('body').css('background-color','#242424')
        }
        else {
          $('body').css('background-color','#2E2245')
        }
      }
    },

    // created(){
    //   this.gbo()
    // }
  }
</script>

<style>
  body{
    height: 100%;
    margin: 0;
    padding: 0;
    color: white;
  }
  #app{
    background-color: #2E2245;
  }
  a{
    text-decoration: none !important;
  }
  @media screen and (min-width:1600px ) {
    #app{
      width: 80%;
    }
  }
</style>
