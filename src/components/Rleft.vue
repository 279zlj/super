<template>
  <div class="col-lg-2 col-md-2 col-sm-2 col-xs-12" id="Rleft">
    <div v-for="i in nav">
      <div class="bg">
        <router-link :to="{}"><p>{{i}}</p></router-link>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Rleft",
      data:function(){
          return{
            nav:{
              io:'io-agent',
              tank:'tank',
              block:'block',
              FS:'FS',
              object:'object',
              para:'参数修改'
            }
          }
      }
    }
</script>

<style scoped>
  #Rleft{
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
