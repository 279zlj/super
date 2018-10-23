<template>
  <div id="app" :class="patha==='/Installone'||patha==='/Installtwo'||patha==='/Installthree'?'container-fluid':'container'">
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
    data(){
      return{
        patha:''
      }
    },
    methods:{
      gbo(){
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
    mounted(){
      this.gbo()
    },
    created(){
      this.gbo()
    }
  }
</script>

<style>
  body{
    height: 100%;
    margin: 0;
    padding: 0;
  }
  /*body{*/
    /*background-color: #2E2245;*/
  /*}*/
  #app{
    background-color: #2E2245;
  }
  @media screen and (min-width:1600px ) {
    #app{
      width: 80%;

    }

  }
</style>
