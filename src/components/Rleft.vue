<template>
  <div class="col-lg-2 col-md-2 col-sm-2 col-xs-12" id="Rleft">
    <div class="one" v-for="i in nav" :class="isse===i.name?'two':''" @click="changenav(i.name)">
      <div>
        <router-link :to="{name:i.href}" ><p >{{i.name}}</p></router-link>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Rleft",
      data:function(){
          return{
            nav: [
              {index:'0',name:'概览',href:'Resources'},
              {index: '1',name: 'io-agent',href:'Rosd'},
              {index:'2',name:'tank',href:'Rpool'},
              {index:'3',name:'block',href:'Rblock'},
              {index:'4',name:'FS',href:''},
              {index:'5',name:'object',href:''},
              {index:'6',name:'参数修改',href:'Rpara'}
            ],
            ind:'',
            isse:'概览'
          }
      },
      methods:{
        changenav:function (name) {                    /*二级导航栏状态更改*/
          this.isse=name
          sessionStorage.setItem('isse',this.isse)
        }
      },

      mounted(){

        if (sessionStorage.getItem('isse').length<1){
          this.isse='概览'
        }
        else if(this.$router.path==='/Resources'){
          console.log(this.$router.path)
          this.changenav('概览')
        }
        else {
          this.isse=sessionStorage.getItem('isse')
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
