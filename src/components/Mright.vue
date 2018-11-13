<template>
  <div class="col-lg-2 col-md-2 col-sm-2 col-xs-12" id="Mright">
    <div class="one" :class="ind==='Mwarn'?'two':''" @click="changenav('Mwarn')">
      <div>
        <router-link :to="{name:'Mwarn'}" ><p >{{$t('message.Alarm')}}</p></router-link>
      </div>
    </div>
    <div class="one" :class="ind==='Mindex'?'two':''" @click="changenav('Mindex')">
      <div>
        <router-link :to="{name:'Mindex'}" ><p >{{$t('message.Solution')}}</p></router-link>
      </div>
    </div>
    <div class="one" :class="ind==='Msolve'?'two':''" @click="changenav('Msolve')">
      <div>
        <router-link :to="{name:'Msolve'}" ><p >{{$t('message.Import-solution-package')}}</p></router-link>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Mright",
      data:function(){
        return{

          ind:'解决方案'
        }
      },
      methods:{
          changenav:function (name) {                /*二级导航栏的状态更改*/
            this.ind=name;

          }
      },
      mounted(){
          this.changenav('警报')

      }
    }
</script>

<style scoped>
  #Mright{
    margin-top: 3.25em;
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
  .one{
    background-color: #4C3D61;
    z-index: 100;
    box-shadow: 10px 10px 50px #181123;
    margin-top: .8em;
  }
  .two{
  background-color: #C17F00 !important;
    z-index: 999;
  }

</style>
