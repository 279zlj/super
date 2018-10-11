<template>
  <div class="col-lg-2 col-md-2 col-sm-2 col-xs-12" id="Aright">
    <div v-for="i in nav">
      <div class="bg">
        <router-link :to="{}"><p>{{i}}</p></router-link>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Aright",
      data:function(){
        return{
          nav:{
            snap:'快照设置',
            FS:'FS设置',
            object:'object设置',
            operation:'运维设置',
          }
        }
      }
    }
</script>

<style scoped>
  #Aright{
    margin-top: 4.5em;
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
    background-color: #4C3D61;
    box-shadow: 10px 10px 50px #181123;
    margin-top: .8em;
  }
</style>
