<template>
    <div id="Resources" class="row container-fluid">
      <div class="col-lg-10 col-md-10 col-sm-10 col-xs-12">
        <div class="row">
          <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
            <div class="row container-fluid">
              <div class="col-lg-11 col-md-11 col-sm-12 col-xs-12 bg">
                <div id="liquidFill" style="width: 100%;height: 400px"></div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
            <div class="row container-fluid">
              <div class="col-lg-11 col-md-11 col-sm-12 col-sm-offset-0 col-xs-12 bg">

              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
            <div class="row container-fluid">
              <div class="col-lg-11 col-md-11 col-sm-12 col-sm-offset-0 col-xs-12 bg">

              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-2 col-md-2 col-sm-2 col-xs-12">

      </div>
    </div>
</template>

<script>
  import echarts from 'echarts';
  import liquidfill from 'echarts-liquidfill'

    export default {
        name: "Resources",
      echarts,
      liquidfill,
      mounted(){
        this.liquidFill();
      },
      methods:{
        liquidFill:function (){
          var liquid = this.$echarts.init(document.getElementById('liquidFill'));
          var option = {
            series: [{
              type: 'liquidFill',
              data: [0.6, 0.5, 0.4, 0.3]
            }]
          };
          liquid.setOption(option);
        }
      }
    }
</script>

<style scoped>
  #Resources{
    color: white;
  }
  .bg{
    margin-top: 5em;
    background-color: #2F224A;
    height: 10em;
    width: 100%;
  }
</style>
