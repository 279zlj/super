<template>
  <div class="col-lg-2 col-md-2 col-sm-2 col-xs-12" id="Aright">
    <div class="one" :class="ind==='快照设置'?'two':''" @click="changenav('快照设置')">
      <div>
        <router-link :to="{name:'Aindex'}" ><p >{{$t('message.Snapshot-Settings')}}</p></router-link>
      </div>
    </div>
    <div class="one" :class="ind==='对象参数设置'?'two':''" @click="changenav('对象参数设置')">
      <div>
        <router-link :to="{name:''}"><p >{{$t('message.object-Setting')}}</p></router-link>
      </div>
    </div>
    <div class="one" :class="ind==='参数修改'?'two':''" @click="changenav('参数修改')">
      <div>
        <router-link  :to="{name:'Rpara'}"><p >{{$t('message.Parameters')}}</p></router-link>
      </div>
    </div>
    <div class="one"  :class="ind==='运维设置'?'two':''" @click="changenav('运维设置')">
      <div>
        <router-link  :to="{name:'Aoperation'}"><p >{{$t('message.Operational-Settings')}}</p></router-link>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Aright",
      data:function(){
        return{

          ind:''
        }
      },
      mounted(){
        this.changenav('快照设置')

      },
      methods:{
        changenav:function (name) {                  /*二级导航栏样式更改*/
          this.ind=name

        }
      },
      created(){

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
