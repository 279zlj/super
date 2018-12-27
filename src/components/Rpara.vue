<template>
  <div class="col-lg-10 col-md-10 col-sm-10 col-xs-12 container-fluid" id="Rpara">
    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
      <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 container " >
        <form>
        <div class="row">
            <div class="col-lg-11 col-md-11 col-sm-11 col-xs-11 bg table-responsive">
            <table class="table table-condensed ">
              <colgroup>
                <col style="width:35%" />
              </colgroup>
              <thead>
                <th>{{$t('message.Config-Options')}}</th>
                <th>{{$t('message.Parameter')}}</th>
              </thead>
              <tbody>
              <tr>
                <td>io-agent对象</td>
                <td>
                  <select class="form-control" @click="iosele()" v-on:change="ioindexsel($event)" v-model="iosele">
                    <option v-for="i in iolist" :value="i.val" >{{i.name}}</option>
                  </select>
                </td>
              </tr>
                <tr>
                  <td>{{$t('message.Data-refactoring-QoS-control')}}</td>
                  <td>
                    <div class="form">
                      <div  v-for="v in radiolist" style="display: table-cell;justify-content: center;align-items: center">
                      <input type="radio" name="rd" :value="v.value" v-model="checkvalue" style="display: inline-block"/><span>{{v.name}}</span>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>{{$t('message.Self-built-start-delay')}}</td>
                  <td>
                    <div class="row">
                      <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6" >
                        <input type="text" id="numone" class="form-control" style="text-align: center" ref="selfstart">
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6" >
                      <select class="form-control" v-on:change="sel($event)" v-model="unitsele">
                        <option v-for="m in unit" :value="m.value">{{m.name}}</option>
                      </select>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>{{$t('message.Consistency-check-times')}}</td>
                  <td>
                    <input type="time" class="form-control" ref="starttime"/>
                    -
                    <input type="time" class="form-control" ref="endtime"/>
                  </td>
                </tr>
              <tr>
                <td colspan="2" class="last">
                  <button  class="btn btn-success " @click="sure()"  style="margin:.5em 2em " id="sureone" >{{$t('message.Confirm')}}</button>
                  <button  class="btn btn-info" @click="sure()" style="margin:.5em 2em" id="resetone" >{{$t('message.Reset')}}</button>
                  <!--<input type="button" class="btn btn-success" value="确认" id="sureone" @click="sure()" style="margin:.5em 2em "/>-->
                  <!--<input type="reset" class="btn btn-info" value="重置" id="resetone" style="margin:.5em 2em"/>-->
                </td>
              </tr>
              </tbody>
            </table>
            </div>
        </div>
        </form>
      </div>

      <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 container " >
        <form>
        <div class="row">
          <div class="col-lg-11 col-md-11 col-sm-11 col-xs-11 bg table-responsive">
          <table class="table table-condensed ">
            <colgroup>
              <col style="width:35%" />
            </colgroup>
            <thead>
            <th>{{$t('message.Config-Options')}}</th>
            <th>{{$t('message.Parameter')}}</th>
            </thead>
            <tbody>
            <tr>
              <td>tank对象</td>
              <td>
                <select class="form-control">
                  <select class="form-control" @click="psele()" v-on:change="pindexsel($event)" v-model="psele">
                    <option v-for="i in plist" :value="i.val" >{{i.name}}</option>
                  </select>
                </select>
              </td>
            <tr>
              <td>{{$t('message.Data-refactoring-QoS-control')}}</td>
              <td>
                <div class="form">
                  <div  v-for="p in radiolist" style="display: table-cell;justify-content: center;align-items: center">
                    <input type="radio" name="rp" :value="p.value" v-model="checkvalue2" style="display: inline-block"/><span>{{p.name}}</span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>{{$t('message.Self-built-start-delay')}}</td>
              <td>
                <div class="row">
                  <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6" >
                    <input type="text" id="numtwo" class="form-control" style="text-align: center" ref="selfstart2">
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6" >
                    <select class="form-control" v-on:change="sel2($event)" v-model="unitsele2">
                      <option v-for="m in unit" :value="m.value">{{m.name}}</option>
                    </select>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>{{$t('message.Consistency-check-times')}}</td>
              <td>

                  <input type="time" class="form-control" ref="strat2"/>
                  -
                  <input type="time" class="form-control" ref="end2"/>

              </td>
            </tr>
            <tr>
              <td colspan="2" class="last">
                <button  class="btn btn-success" @click="sure2()" style="margin:.5em 2em " id="suretwo" >{{$t('message.Confirm')}}</button>
                <button  class="btn btn-info" @click="sure()" style="margin:.5em 2em" id="resettwo" >{{$t('message.Reset')}}</button>
                <!--<input type="button" class="btn btn-success" value="确认" id="suretwo" style="margin:.5em 2em " @click="sure2()"/>-->
                <!--<input type="reset" class="btn btn-info" value="重置" id="resettwo" style="margin:.5em 2em"/>-->
              </td>
            </tr>
            </tbody>
          </table>
          </div>
        </div>
        </form>
      </div>

      <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 container " >
        <form>
        <div class="row">
          <div class="col-lg-11 col-md-11 col-sm-11 col-xs-11 bg table-responsive">
            <table class="table table-condensed ">
              <colgroup>
                <col style="width:35%" />
              </colgroup>
              <thead>
              <th>{{$t('message.Config-Options')}}</th>
              <th>{{$t('message.Parameter')}}</th>
              </thead>
              <tbody>
              <tr>
                <td>block对象</td>
                <td>
                  <select class="form-control">
                    <select class="form-control" @click="bsele()" v-on:change="bindexsel($event)" v-model="bsele">
                      <option v-for="i in blist" :value="i.val" >{{i.name}}</option>
                    </select>
                  </select>
                </td>
              <tr>
                <td>{{$t('message.Data-refactoring-QoS-control')}}</td>
                <td>
                  <div class="form">
                    <div  v-for="n in radiolist" style="display: table-cell;justify-content: center;align-items: center">
                      <input type="radio" name="rd" :value="n.value" v-model="checkvalue3" style="display: inline-block"/><span>{{n.name}}</span>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>{{$t('message.Self-built-start-delay')}}</td>
                <td>
                  <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6" >
                      <input type="text" id="numthree" class="form-control" style="text-align: center" ref="selfstart3">
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6" >
                      <select class="form-control" v-on:change="sel3($event)" v-model="unitsele3">
                        <option v-for="m in unit" :value="m.value">{{m.name}}</option>
                      </select>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>{{$t('message.Consistency-check-times')}}</td>
                <td>
                  <input type="time" class="form-control" ref="strat3"/>
                  -
                  <input type="time" class="form-control" ref="end3"/>
                </td>
              </tr>
              <tr>
                <td colspan="2" class="last">
                  <button  class="btn btn-success" @click="sure3()" style="margin:.5em 2em " id="surethree" >{{$t('message.Confirm')}}</button>
                  <button  class="btn btn-info" @click="sure()" style="margin:.5em 2em" id="resetthree" >{{$t('message.Reset')}}</button>
                  <!--<input type="button" class="btn btn-success" value="确认" id="surethree" style="margin:.5em 2em " @click="sure3()"/>-->
                  <!--<input type="reset" class="btn btn-info" value="重置" id="resetthree" style="margin:.5em 2em"/>-->
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
        </form>
      </div>

    </div>
  </div>
</template>

<script>
    export default {
        name: "Rpara",
      data(){
          return{
            iolist:'',
            plist:'',
            blist:'',
            radiolist:[
              {name:'优先业务',value:'prior'},
              {name:'重构优先',value:'review'},
              {name:'自定义',value:'diy'}
            ],
            unit:[
              {name:'分',value:'minute'},
              {name:'时',value:'hour'},
              {name:'天',value:'day'}
            ],
            checkvalue:'',
            checkvalue2:'',
            checkvalue3:'',
            unitsele:'',
            unitsele2:'',
            unitsele3:'',
            itsele:'',
            ptsele:'',
            btsele:''
          }
      },
      methods:{
        sure(){                      /*参数修改配置信息发送*/
          let rasele=this.checkvalue
          let self=this.$refs.selfstart.value
          let start=this.$refs.starttime.value
          let end=this.$refs.endtime.value
          this.$axios.post(this.allurl+'manager/params_set',{radio:rasele,selftime:self,starttime:start,endtime:end,select:this.unitsele}).then(function (res) {
            // console.log(res)
          }).catch(function (error) {
            console.log(error)
          })
        },
        sure2(){
          let rasele=this.checkvalue2
          let self=this.$refs.selfstart2.value
          let start=this.$refs.start2.value
          let end=this.$refs.end2.value
          this.$axios.post(this.allurl+'manager/params_set',{radio:rasele,selftime:self,starttime:start,endtime:end,select:this.unitsele}).then(function (res) {
            // console.log(res)
          }).catch(function (error) {
            console.log(error)
          })
        },
        sure3(){
          let rasele=this.checkvalue3
          let self=this.$refs.selfstart3.value
          let start=this.$refs.start3.value
          let end=this.$refs.end3.value
          this.$axios.post(this.allurl+'manager/params_set',{radio:rasele,selftime:self,starttime:start,endtime:end,select:this.unitsele}).then(function (res) {
            console.log(res)
          }).catch(function (error) {
            console.log(error)
          })
        },
        sel(event){                     /*选择自建启动延时单位*/
          this.unitsele=event.target.value
        },
        sel2(event){
          this.unitsele2=event.target.value
        },
        sel3(event){
          this.unitsele3=event.target.value
        },
        iosele(){                            /*获得存储池列表*/
          var _this=this
          this.$axios.get(this.allurl+'').then(function (res) {
            _this.iolist=res.data
          }).catch(function (error) {
            console.log(error)
          })
        },
        ioindexsel(event){//下拉框选择
          this.itsele=event.target.value

        },
        psele(){                            /*获得存储池列表*/
          var _this=this
          this.$axios.get(this.allurl+'').then(function (res) {
            _this.plist=res.data
          }).catch(function (error) {
            console.log(error)
          })
        },
        pindexsel(event){//下拉框选择
          this.ptsele=event.target.value

        },
        bsele(){                            /*获得存储池列表*/
          var _this=this
          this.$axios.get(this.allurl+'').then(function (res) {
            _this.blist=res.data
          }).catch(function (error) {
            console.log(error)
          })
        },
        bindexsel(event){//下拉框选择
          this.btsele=event.target.value

        },
      },
      mounted(){
          if(sessionStorage.getItem('islogin')==250){
            $('.btn-success').addClass('disabled')
          }
      }
    }
</script>

<style scoped>
#Rpara{
  color: white;
  line-height: 2.3em;
  text-align: center;
}
#Rpara div{
  border-radius: 6px;
}
  th{
    font-size: 1.1em;
    text-align: center;
    line-height: 3em;
  }
  td{
    font-size: 1em !important;
  }
  .bg{
    background-color: #392C53;
    margin-top: 4.9em;
  }

@media screen and (max-width: 425px) {
  .bg{
    margin-top: 1.5em;
    margin-bottom: 0em;
  }
}
  table{
    width: 98%;

    margin: 0 auto;
  }
  .last{
    height: 4em;
  }
  span{
    margin-right: 1em !important;
  }
</style>
