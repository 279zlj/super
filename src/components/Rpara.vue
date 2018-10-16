<template>
  <div class="col-lg-10 col-md-10 col-sm-10 col-xs-12 container-fluid" id="Rpara">
    <div class="row">
      <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 container " >
        <div class="row">
            <div class="col-lg-11 col-md-11 col-sm-11 col-xs-11 bg table-responsive">
            <table class="table table-condensed ">
              <colgroup>
                <col style="width:35%" />
              </colgroup>
              <thead>
                <th>配置项</th>
                <th>参数</th>
              </thead>
              <tbody>
                <tr>
                  <td>数据重构QoS控制</td>
                  <td>
                    <div class="form">
                      <input type="radio" name="rd" value="bus"/><span>优先业务</span>
                      <input type="radio" name="rd" value="res"/><span>重构优先</span>
                      <input type="radio" name="rd" value="self"/><span>自定义</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>自建启动延时</td>
                  <td>
                    <div class="row">
                      <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6" >
                        <input type="text" id="numone" class="form-control" style="text-align: center">
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6" >
                      <select class="form-control">
                        <option>分</option>
                        <option>时</option>
                        <option>天</option>
                      </select>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>一致性检查时间</td>
                  <td>
                    <input type="time" class="form-control"/>
                    -
                    <input type="time" class="form-control"/>
                  </td>
                </tr>
              <tr>
                <td colspan="2" class="last">
                  <input type="button" class="btn btn-success" value="确认" id="sureone" style="margin:.5em 2em "/>
                  <input type="reset" class="btn btn-info" value="重置" id="resetone" style="margin:.5em 2em"/>
                </td>
              </tr>
              </tbody>
            </table>
            </div>
        </div>
      </div>

      <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 container " >
        <div class="row">
          <div class="col-lg-11 col-md-11 col-sm-11 col-xs-11 bg table-responsive">
          <table class="table table-condensed ">
            <colgroup>
              <col style="width:35%" />
            </colgroup>
            <thead>
            <th>配置项</th>
            <th>参数</th>
            </thead>
            <tbody>
            <tr>
              <td>数据重构QoS控制</td>
              <td>
                <div class="form">
                  <input type="radio" name="rd" value="bus"/><span>优先业务</span>
                  <input type="radio" name="rd" value="res"/><span>重构优先</span>
                  <input type="radio" name="rd" value="self"/><span>自定义</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>自建启动延时</td>
              <td>
                <div class="row">
                  <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6" >
                    <input type="text" id="numtwo" class="form-control" style="text-align: center">
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6" >
                    <select class="form-control">
                      <option>分</option>
                      <option>时</option>
                      <option>天</option>
                    </select>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>一致性检查时间</td>
              <td>

                  <input type="time" class="form-control"/>
                  -
                  <input type="time" class="form-control"/>

              </td>
            </tr>
            <tr>
              <td colspan="2" class="last">
                <input type="button" class="btn btn-success" value="确认" id="suretwo" style="margin:.5em 2em "/>
                <input type="reset" class="btn btn-info" value="重置" id="resettwo" style="margin:.5em 2em"/>
              </td>
            </tr>
            </tbody>
          </table>
          </div>
        </div>
      </div>

      <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 container " >
        <div class="row">
          <div class="col-lg-11 col-md-11 col-sm-11 col-xs-11 bg table-responsive">
            <table class="table table-condensed ">
              <colgroup>
                <col style="width:35%" />
              </colgroup>
              <thead>
              <th>配置项</th>
              <th>参数</th>
              </thead>
              <tbody>
              <tr>
                <td>数据重构QoS控制</td>
                <td>
                  <div class="form">
                    <input type="radio" name="rd" value="bus"/><span>优先业务</span>
                    <input type="radio" name="rd" value="res"/><span>重构优先</span>
                    <input type="radio" name="rd" value="self"/><span>自定义</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td>自建启动延时</td>
                <td>
                  <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6" >
                      <input type="text" id="numthree" class="form-control" style="text-align: center">
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6" >
                      <select class="form-control">
                        <option>分</option>
                        <option>时</option>
                        <option>天</option>
                      </select>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>一致性检查时间</td>
                <td>
                  <input type="time" class="form-control"/>
                  -
                  <input type="time" class="form-control"/>
                </td>
              </tr>
              <tr>
                <td colspan="2" class="last">
                  <input type="button" class="btn btn-success" value="确认" id="surethree" style="margin:.5em 2em "/>
                  <input type="reset" class="btn btn-info" value="重置" id="resetthree" style="margin:.5em 2em"/>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
    export default {
        name: "Rpara"
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
    font-size: 1.2em;
    text-align: center;
    line-height: 3em;
  }
  .bg{
    background-color: #392C53;
    margin-top: 5em;
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
