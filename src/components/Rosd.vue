<template>
  <div class="col-lg-10 col-md-10 col-sm-10 col-xs-12 container-fluid" id="Rosd">

  <div class="row all">

    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 san" v-for="(i,index) in osdlist"  @click="change(index)">
      <div class="row">
        <div class="col-lg-11 col-md-11 col-sm-11 col-xs-11 block " :class="{'chan':ind===index}">
          <div class="row up " :class="{'chan':ind===index}">
            <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5 " :class="{'chan':ind===index}">
              <div class="row font " :class="{'chan':ind===index}">
                <p>{{i.osdid}}</p>
                <p>{{i.osdip}}</p>
              </div>

            </div>
            <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7 pie " :class="{'chan':ind===index}">
              <div :id=i.id class="grid container-fluid " :class="{'chan':ind===index}"></div>
            </div>
          </div>
          <div class="row down " :class="{'chan':ind===index}">
            <span v-for="i in imgage"><img :src="i"/></span>
          </div>
        </div>
        <span v-if="ind===index"><img src="../../static/image/san.png" class="img-responsive" style="width: 10%;margin: 0 auto"></img></span>
      </div>
    </div>


  </div>

    <div class="row bgdown">
      <div class="row">
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
          <div class="col-lg-11 col-lg-offset-1 bor container-fluid">
            <p><span class="glyphicon glyphicon-record cricle"></span><span class="dfont">机器信息</span></p>
            <p class="ff">型号：<span>{{content[0].name}}</span></p>
            <p class="ff">状态：<span>{{content[0].status}}</span></p>
            <p class="ff">操作系统：<span>{{content[0].opsys}}</span></p>
          </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
          <div class="bora container-fluid">
            <p><span class="glyphicon glyphicon-record cricle"></span><span class="dfont">CPU</span></p>
            <p class="ff">CPU：<span>{{content[0].cpu}}</span></p>
            <p><span class="glyphicon glyphicon-record cricle"></span><span class="dfont">内存</span></p>
            <span class="ff">{{content[0].nc}}</span>
          </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
          <div class="col-lg-11 bor container-fluid">
            <p><span class="glyphicon glyphicon-record cricle"></span><span class="dfont">数据盘</span></p>
            <span v-for="q in content[0].datap"><img src="../../static/image/three.png" class="img-responsive"></span>
            <p><span class="glyphicon glyphicon-record cricle"></span><span class="dfont">缓存盘</span></p>
            <span v-for="w in content[0].cachep"><img src="../../static/image/three.png" class="img-responsive"></span>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
          <div class="col-lg-11 col-lg-offset-1 container-fluid">
          <p><span class="glyphicon glyphicon-record cricle"></span><span class="dfont">ISCSI服务网络/内部网络</span></p>
          <span class="ff">{{content[0].iscsi}}</span>
          <p><span class="glyphicon glyphicon-record cricle"></span><span class="dfont">内部网络</span></p>
          <span class="ff">{{content[0].netw}}</span>
          </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
          <div class="container-fluid borb">
          <table class="table table-condensed" >
            <tbody>
              <tr>
                <td>设备名：</td>
                <td>{{content[1].name}}</td>
              </tr>
              <tr>
                <td>MAC：</td>
                <td>{{content[1].mac}}</td>
              </tr>
              <tr>
                <td>速率：</td>
                <td>{{content[1].speed}}</td>
              </tr>
              <tr>
                <td>丢包：</td>
                <td>{{content[1].pack}}</td>
              </tr>
              <tr>
                <td>连接状态：</td>
                <td>{{content[1].status}}</td>
              </tr>
              <tr>
                <td>MTU：</td>
                <td>{{content[1].mtu}}</td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
          <table class="table table-condensed" >
            <tbody>
            <tr>
              <td>设备名：</td>
              <td>{{content[2].name}}</td>
            </tr>
            <tr>
              <td>类型：</td>
              <td>{{content[2].type}}</td>
            </tr>
            <tr>
              <td>容量：</td>
              <td>{{content[2].size}}</td>
            </tr>
            <tr>
              <td>WWID：</td>
              <td>{{content[2].wwid}}</td>
            </tr>
            <tr>
              <td>用途：</td>
              <td>{{content[2].used}}</td>
            </tr>
            <tr>
              <td>慢盘：</td>
              <td>{{content[2].small}}</td>
            </tr>
            <tr>
              <td>健康度：</td>
              <td>{{content[2].health}}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import Vue from 'vue'
    export default {
        name: "Rosd",

      data(){
        return{
          osdlist:[
            {osdid:'001',osdip:'127.0.0.1',usage:"32",unusage:'52',id:'piechart'},
            {osdid:'002',osdip:'127.0.0.2',usage:"42",unusage:'214',id:'piecharttwo'},
            {osdid:'003',osdip:'127.0.0.3',usage:"52",unusage:'145',id:'piechartthree'},
            {osdid:'004',osdip:'127.0.0.2',usage:"72",unusage:'114',id:'piechartfour'},
            {osdid:'005',osdip:'127.0.0.3',usage:"75",unusage:'74',id:'piechartfive'},
            {osdid:'006',osdip:'127.0.0.2',usage:"15",unusage:'153',id:'piechartsix'},
            {osdid:'007',osdip:'127.0.0.3',usage:"52",unusage:'145',id:'piechartsenven'},
          ],
          imgage:[
            '../../static/image/one.png',
            '../../static/image/two.png',
            '../../static/image/three.png',
            '../../static/image/four.png'
          ],
          num:'',
          ind:'',
          content:[
            {name:'dgasjhd',status:'ok',opsys:"N",cpu:'dashd',nc:'dsad',datap:'4',cachep:'2',iscsi:'127.0.01',netw:'127.0.02'},

            {name:'eth5',mac:'01:c4:34:52',speed:'28M',pack:'1',status:'success',mtu:'1599'},
            {name:'eth3',type:'01:c4:34:52',size:'28M',wwid:'1',used:'success',small:'1599',health:'ok'},
          ],
          bcontent:
            {name:'eth3',mac:'01:c4:34:52',speed:'28M',pack:'1',status:'success',mtu:'1599'},



        }

      },
      methods:{
        change:function (index) {
          this.ind=index
          // this.$axios.get('http://loaclhost:5000/api').then(function (res) {
          //   this.content=res
          // }).catch(function (error) {
          //   console.log(error)
          // })
          console.log(this.ind,index)
        },

        piechart() {
          let i;
          for (i in this.osdlist) {
            console.log(this.osdlist[i].id)
            var piec = this.$echarts.init(document.getElementById(this.osdlist[i].id))
            var option = {
              tooltip: {
                trigger: 'item',
                formatter: '{d}%'
              },
              series: [
                {
                  name: '使用率',
                  type: 'pie',
                  radius: ['60%', '100%'],
                  itemStyle: {
                    color: function (params) {
                      var colorlist = [
                        '#16B7E2', '#BBEBF6'
                      ];
                      return colorlist[params.dataIndex]
                    }
                  },
                  avoidLabelOverlap: false,
                  label: {
                    normal: {
                      show: false,
                      position: 'center'
                    },
                    emphasis: {
                      show: true,
                      textStyle: {
                        fontSize: '14',
                        fontWeight: 'bold'
                      }
                    }
                  },
                  labelLine: {
                    normal: {
                      show: false
                    }
                  },
                  data: [
                    {value: this.osdlist[i].usage, name: '已使用'},
                    {value: this.osdlist[i].unusage, name: '未使用'}
                  ]
                }
              ]
            }
            piec.setOption(option)
          }
        }
      },
      created(){

      },
      mounted(){
        this.piechart()
        this.change(0)
        this.house()
      },
      activated(){
        this.piechart()
      }
    }

</script>

<style scoped>
  #Rosd{
    color:white;
  }
.block{
  border-radius: .3em;

}
.chan{
  background-color: #194B91 !important;
}
.ff{
  margin-left: 2em;
  line-height: 2em;
}
.bgdown{
  background-color: #11387B;
  margin-top: 3em;
  border-radius: .5em;
  margin-bottom: 2em;
  width: 99.9%;
}
.bgdown div div{
  height:18em;
}
.pie{
  height: 10em;
  margin: 0 auto;
}
.cricle{
  color: #25A2D6;
  font-size: 1.5em;
  margin: 1em .5em 0 0em;
}
.dfont{
  font-size: 1.2em;
  line-height: 1.3em;
}
.bor{
  border-bottom:1px solid #1b6d85;

}
  .bora{
    border-bottom:1px solid #1b6d85;
    border-left:1px solid #1b6d85;

  }
  .borb{
    border-right:1px solid #1b6d85;
  }
  .all{
    margin-top: 5em;
    height: 16em;
    overflow-y: hidden;
  }
  .san{
    margin-bottom: 2em;

  }
  .up{
    border-bottom: 1px solid #452F64;
    width: 95%;
    margin: 0 auto;
  }

  .down{
    margin: 1em 1em;
  }
  .down img{
    margin-right: 1em;
  }
  .all div div div{
    background-color: #3D295A;


  }
  table{
    width: 90%;
    height: 10em;
    margin: 2em auto;
  }
  .grid{
    width: 100%;
    height: 100%;
  }
  .font {
    margin:2em 0em;
    line-height: 1em;
    font-size: 1.3em;
  }
</style>
