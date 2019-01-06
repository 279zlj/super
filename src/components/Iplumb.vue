<template>
  <div class="flowchart-demo" id="flowchart-demo" v-show="jqselect.length!=0||jkselect.length!=0">
    <div class="window" id="flowchartWindowone">{{jkselect}}
    </div>
    <div class="window child" :id=i v-for="i in jqselect">{{i}}</div>
  </div>
</template>

<script>
    export default {
        name: "Iplumb",
      props:['jkselect','jqselect'],
      watch:{
        jkselect(){
          return this.jkselect
        },
        jqselect(){
          return this.jqselect
        }
      },
      computed:{
        jjselect(){
          return this.$store.state.jkselect,this.$store.state.jqselect
        }
      },
      methods:{
        jsPlumb(tar){
          jsPlumb.ready(function () {
            for (let i=0;i<tar.length;i++)
              jsPlumb.connect({
                source: 'flowchartWindowone',
                target: tar[i],
                endpoint: 'Rectangle'
              })
            // jsplumb.draggable('server8')
          })

        },
      },
      mounted(){
        this.jsPlumb(this.$store.state.jqselect)
      }
    }
</script>

<style scoped>

  .flowchart-demo .window {
    border: 1px solid #346789;
    box-shadow: 2px 2px 19px #aaa;
    -o-box-shadow: 2px 2px 19px #aaa;
    -webkit-box-shadow: 2px 2px 19px #aaa;
    -moz-box-shadow: 2px 2px 19px #aaa;
    -moz-border-radius: 0.5em;
    border-radius: 0.5em;
    opacity: 0.5;
    filter: alpha(opacity=80);
    text-align: center;
    position: relative;

    background-color: #eeeeef;
    color: black;
    font-size: 0.9em;
    line-height: 60px;

  }
  .child{
    float: left;
    display: table;
    margin: 10em 0em 5em 3em;
    position: relative;
  }
  #flowchartWindowone {
    top: 4em;
    left: 35%;
    width: 30%;
  }
</style>
