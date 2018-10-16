<template>
  <div class="col-lg-2 col-md-2 col-sm-2 col-xs-12" id="Mright">
    <div class="one" v-for="(i,index) in nav" :class="{'two':ind===index}" @click="changenav(index)">
      <div>
        <router-link :to="{name:i.href}" ><p >{{i.name}}</p></router-link>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Mright",
      data:function(){
        return{
          nav:[
            {index: '0',name:'解决方案',href:'Mindex'},
            {index: '0',name:'警报',href:'Mwarn'},
            {index: '0',name: '导入解决包',href:'Msolve'},
          ],
          ind:''
        }
      },
      mounted(){
          this.changenav(0);
      },
      methods:{
          changenav:function (index) {
            this.ind=index
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
