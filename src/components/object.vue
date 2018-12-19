<template>
    <div id="object" class="col-lg-10 col-md-10 col-sm-10 col-xs-12 container-fluid">
      <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
          <div class="content">
          <div class="row">
            <p id="left" class="glyphicon glyphicon-chevron-left" @click="leftdown()"></p>
            <div class="block">
              <div class="crosswise" v-for="i in list">{{i.name}}</div>
            </div>
            <p id="right" class="glyphicon glyphicon-chevron-right" @click="rightdown()"></p>
          </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "object",
      data(){
          return{
            list:[
              {id:'1',name:'noe',type:'one'},
              {id:'2',name:'two',type:'two'},
              {id:'3',name:'three',type:'three'},
              {id:'4',name:'four',type:'four'},
              {id:'5',name:'five',type:'five'},
              {id:'6',name:'six',type:'six'},
              {id:'7',name:'seven',type:'seven'},
              {id:'8',name:'eight',type:'eight'},

            ]
          }
      },
      methods:{
          leftdown(){

          },
        rightdown(){

        }
      }
    }
</script>

<style scoped>
    #object{
      margin-top: 5em;
    }
  .crosswise{
    display: inline-block;
    margin: 0 .5em;
    font-size: 1.3em;
    line-height: 2em;
    white-space: nowrap;

  }
  #right,#left{
    margin: 0 .5em;
    height: 1em;
  }
  .block{
    display: inline-block;height: 2em;white-space: nowrap;overflow: hidden;width: 60%;
  }
  .content{
    /*width: 75%;*/
    height: 2em;
  }
</style>
