<template>
  <div class="col-lg-2 col-md-2 col-sm-2 col-xs-12" id="Aright">
    <div class="one" v-for="i in nav" :class="ind===i.name?'two':''" @click="changenav(i.name)">
      <div>
        <router-link :to="{name:i.href}" ><p >{{i.name}}</p></router-link>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Aright",
      data:function(){
        return{
          nav:[
            {index: '0',name: '快照设置',href: 'Aindex'},
            {index: '1',name: 'FS设置',href:''},
            {index: '2',name: 'object设置',href:''},
            {index: '3',name: '运维设置',href:'Aoperation'},
          ],
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
