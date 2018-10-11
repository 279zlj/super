<template>
  <div class="col-lg-2 col-md-2 col-sm-2 col-xs-12" id="Mright">
    <div class="one" v-for="i in nav">
      <div class="bg">
        <router-link :to="{}" class="two"><p >{{i}}</p></router-link>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Mright",
      data:function(){
        return{
          nav:{
            solve:'解决方案',
            warning:'警报',
            pageck:'导入解决包',
          }
        }
      }
    }
</script>

<style scoped>
  #Mright{
    margin-top: 3.3em;
    color: white;

  }
  p{
    margin:0 2em;
    padding: .5em 0;
    text-align: center;
    color: white;
    text-decoration: none;
  }
  a{
    text-decoration: none;
  }
  .bg{
    /*background-color: #4C3D61;*/
    z-index: 100;
    box-shadow: 10px 10px 50px #181123;
    margin-top: .8em;
  }
  .one:first-of-type{
  background-color: #C17F00 !important;
    z-index: 999;
  }
</style>
