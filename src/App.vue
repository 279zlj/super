<template>
  <div id="app" :class="patha==='/Installone'||patha==='/Installtwo'||patha==='/Installthree'?'container-fluid':'container'">
    <router-view/>
    <router-view name="right"></router-view>
    <router-view name="bottom"></router-view>


  </div>
</template>

<script>
  export default {
    name: 'App',

    data(){
      return{
        patha:'',

      }
    },
    methods:{
      // gbo(){              /*判断目前url的位置来更改背景颜色，单纯用这个会造成跳转渲染迟缓，用户体验差*/
      //   this.patha=this.$route.path
      //   if (this.patha==='/Installone'||this.patha==='/Installtwo'||this.patha==='/Installthree'){
      //     $('body').css('background-color','white')
      //   }
      //   else if(this.patha==='/Login'){
      //     $('body').css('background-color','#242424')
      //   }
      //   else {
      //     $('body').css('background-color','#2E2245')
      //   }
      // }

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
    background-color: #2E2245;
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
  /*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
  ::-webkit-scrollbar
  {
    width: 7px;
    height: 7px;
    background-color: #56466D;
  }

  /*定义滚动条轨道 内阴影+圆角*/
  ::-webkit-scrollbar-track
  {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    border-radius: 10px;
    background-color: #56466D;
  }

  /*定义滑块 内阴影+圆角*/
  ::-webkit-scrollbar-thumb
  {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: #241A35;
  }
  ::-moz-scrolled-content{
    background-color: #56466D;
  }

  #tipscontent,#tipsc,#fromtips{
    position: absolute;
    z-index: 999;
    margin: 0 auto;
    width: 100%;
    text-align: center;

  }

  .modal-header,.modal-footer{
    border:1px solid #566992;
  }
  .modal-content{
    background-color:#47587E;
    color: white;
  }
  .modal-content .form-control,.modal-content input{
    background-color: #344367;
    border:1px solid #344367;
  }
</style>
