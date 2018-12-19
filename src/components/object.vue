<template>
    <div id="object" class="col-lg-10 col-md-10 col-sm-10 col-xs-12 container-fluid">
      <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
         <ul id="tab" class="nav nav-tabs">
           <li  v-for="i in list"><a :href="['#'+i.id]" data-toggle="tab">{{i.name}}</a></li>
         </ul>
          <div id="myTabContent" class="tab-content">
            <div class="tab-pane fade" :id="i.id"  v-for="i in list">
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h3 class="panel-title">
                    {{i.name}}
                  </h3>
                </div>
                <div class="panel-body">
                  {{i.id}}
                </div>
              </div>
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
              {id:'1',name:'one',type:'one'},
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

      }
    }
</script>

<style scoped>
    #object{
      margin-top: 5em;
      color: white;
    }
  #tab{
    white-space: nowrap;
    overflow-x:hidden ;
    overflow-y: scroll;
    height: 3em;
  }
  .panel-heading{
    background-color: #C17F00;
    color: white;
    text-align: center;

  }
  .panel-default{
    border-color: #2E2245;
    margin-top: 2em;
    background-color: #3E285A;
  }
</style>
