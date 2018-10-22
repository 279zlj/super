<template>
    <div class="row" id="Installtwo">
      <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 left">
        <img src="../../static/image/install/twoleft.png" class="img-responsive" style="float: right;width: 2.5em"/>
        <img src="../../static/image/install/install-logo.png" class="img-responsive logo"/>
      </div>
      <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7 center">
        <div class="row container">
          <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5">

            <p class="font1" >安装进程</p>
            <p class="font2">Istanllation Process</p>
            <img src="../../static/image/install/twoleftdown.png" class="img-responsive yun"/>
          </div>
          <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7">
            <div class="cont" >
              <div class="container-fluid " >

                <div>

                </div>
              </div>

            </div>
            <div style="background-color: #9AA3B0;width: 45em;height: 30em;position: relative;z-index: 999;margin-top: 1em;border-radius: 5px">

            </div>
            <div class="r">
              <router-link :to="{}"><span style="margin-right: 1em"><span class="glyphicon glyphicon-chevron-left"></span>上一步</span></router-link>
              <router-link :to="{}"><span>下一步<span class="glyphicon glyphicon-chevron-right"></span></span></router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
        <img src="../../static/image/install/tworightup.png" class="img-responsive right"/>
      </div>

    </div>
</template>

<script>
    export default {
        name: "Installtwo"
    }
</script>

<style scoped>
#Installtwo{
  height: 100%;
  margin: 0;
  padding: 0;
  position:absolute;
  top: 0;
  bottom: 0;
  left: 0;
}
.font1{
  text-align: center;margin: 6em 0 0 0;font-size: 3.5em
}
.font2{
  text-align: center;font-size: 2em;color: gray;
}
.left{
  background-color: #C4D4EB;
  height: 100%;
  margin: 0;
  width: 150px;
}
.logo{
  position: fixed;
  bottom: 3em;
  left: 3em;
  width: 5em;
}
.yun{
  left: 150px;
  position: fixed;
  bottom: 0;
  width: 20em;
}
.right{
  top:0;
  right: 0;
  width: 35em;
  position: fixed;
  z-index: 100;
}
.cont{
  width: 45em;height: 12em;background-color: #DEE7F3;z-index: 999;position: relative;opacity: .8;margin-top: 12em;
  border-radius: 5px;
}
.r{
  text-align: center;
  line-height: 3.5em;

  font-size: 1.5em;
}
</style>
