<template>
    <div class="row" id="Installnet">
      <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 left">
        <span class="n-title">网络配置</span>
        <img src="../../static/image/install/netleft.png" class="img-responsive" style="float: right;width: 2.5em;height: 100%"/>
        <img src="../../static/image/install/install-logo.png" class="img-responsive logo"/>
      </div>
      <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7 center">
        <div class="row container">
          <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5">
            <p class="font1" >请选择节点和网卡</p>
              <p class="font2">Plese select your node & network card</p>
            <img src="../../static/image/install/twoleftdown.png" class="img-responsive yun"/>
          </div>

          <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7">

            <div class="cont">
              <div class="alert alert-danger " id="tipsnr"  style="position: absolute;width: 60%;margin-left: 15%;z-index: 999;display: none">{{tipsnr}}</div>
              <div class="bor-bottom row" id="sora"><div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 c-title">存储：</div>
                <div class="col-lg-9 col-md-9 col-sm-9 col-xs-9 sheight">
                <div style="display: inline-block;margin: .5em" class="col-lg-3 col-md-3 col-sm-3 col-xs-3 " v-for="s in sslist" :id=s.id>
                  <img src="../../static/image/install/netcard.png" class="img-responsive"  style="cursor: pointer" :title=s.id data-toogle="tooltip" data-placement="bottom" data-toggle="dropdown" />
                  <p style="color: #0F9052">{{s.name}}</p><ul class='dropdown-menu'>
                  <li ><a style='cursor: pointer' v-on:click='sdelete(s.name)' >移除</a></li>
                </ul></div>
                </div>
              </div>
              <div class="bor-bottom row"><div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 c-title">管理：</div>
                <div class="col-lg-9 col-md-9 col-sm-9 col-xs-9 mheight">
                <div style="display: inline-block;margin: .5em" class="col-lg-3 col-md-3 col-sm-3 col-xs-3 " v-for="m in mmlist" :id=m.id>
                  <img src="../../static/image/install/netcard.png" class="img-responsive"  style="cursor: pointer"  :title=m.id data-toogle="tooltip" data-placement="bottom" data-toggle="dropdown" />
                  <p style="color: #0F9052">{{m.name}}</p><ul class='dropdown-menu'>
                    <li ><a style='cursor: pointer' v-on:click='mdelete(m.name)' >移除</a></li>
                  </ul>
                </div>
                </div>
              </div>
              <div class="row card">

                <div class="row net" :id=c.name v-for="c in netlist">
                  <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                    <img src="../../static/image/install/net_node.png" class="img-responsive" style="cursor: pointer;margin-top: 1em">
                    <p style="color:blue;text-align: center">{{c.name}}</p>
                  </div>
                  <div class="col-lg-9 col-md-9 col-sm-9 col-xs-9" id="all" style="background-color: #BFDDF2;overflow-y: scroll">
                    <div style="display: inline-block;margin: .5em" class="col-lg-4 col-md-4 col-sm-4 col-xs-4" :id=n.name v-for="n in c.netcard">
                      <img src="../../static/image/install/netcard.png" class="img-responsive"  style="cursor: pointer" data-toggle='dropdown'/>
                      <p class="afont">{{n.a}}</p>
                    <ul class='dropdown-menu' >
                      <li ><a style='cursor: pointer' v-on:click='stor(c.name,n.name,c.id)' id="storage">存储</a></li>
                      <li ><a style='cursor: pointer' v-on:click='man(c.name,n.name,c.id)' id="manager" >管理</a></li>
                    </ul>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            <div class="r" @keydown="keyd" >
              <!--<router-link :to="{name:'Installone'}"><span style="margin-right: 1em" ><span class="glyphicon glyphicon-chevron-left"></span>上一步</span></router-link>-->
              <router-link :to="{name:''}"><span @click="netselect">下一步<span class="glyphicon glyphicon-chevron-right"></span></span></router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
        <img src="../../static/image/install/netrightup.png" class="img-responsive right"/>
      </div>
    </div>

</template>

<script>
    export default {
        name: "Installnet",
      data(){
          return{
            netlist:[],
            slist:[],
            mlist:[],
            sid:[],
            mid:[],
            sslist:[],
            mmlist:[],
            salist:[],
            malist:[],
            tipsnr:''

          }
      },
      methods:{
        keyd(){                          /*键盘事件监听*/
          // console.log(this.$route.path)

          var _this=this
          document.onkeydown=function (e) {
            var key=window.event.keyCode
            // console.log(key)
            if (key==39){
              _this.$router.push({name:'Installone'})
            }
            else {
              return;
            }
            e.cancelBubble=true;
          }

        },
        start(){               //获取信息
          var _this=this
          this.$axios.get(this.installurl+'get_net').then(function (res) {
            _this.netlist=res.data

          }).catch(function (error) {
            console.log(error)
          })
        },
        netselect(){           //网络的选择
          this.salist.splice(0)
          if(this.slist.length>0) {
            for (let i = 0; i < this.slist.length; i++) {
              var slist = {}
              var alist = {}
              slist.id = this.sid[i]
              slist.stroage = this.slist[i]
              for (let n = 0; n < this.mid.length; n++) {
                if (this.sid[i] == this.mid[n]) {
                  slist.manager = this.mlist[n]
                  this.mlist.splice(n, 1)
                  this.mid.splice(n,1)
                }
              }
              this.salist.push(slist)
            }
            for (let b = 0; b < this.mlist.length; b++) {
              alist.id = this.mid[b]
              alist.manager = this.mlist[b]
              // console.log(b)
              // console.log
              this.salist.push(alist)
            }
            var _this=this
              this.$axios.post(this.installurl + 'post_net_conf',this.salist).then(function (res) {
                if (res.status==200){
                  _this.$router.push('/Installone')
                }
              }).catch(function (error) {
                console.log(error)
              })
            }

          else if (this.slist.length==0){
            for (let p =0;p<this.mlist.length;p++){
              var mlist={}
              mlist.id=this.mid[p]
              mlist.manager=this.mlist[p]
              this.malist.push(mlist)
            }
            var _this=this
            this.$axios.post(this.installurl+'post_net_conf',this.malist).then(function (res) {
              if (res.status==200){
                _this.$router.push('/Installone')
              }
            }).catch(function (error) {
              console.log(error)
            })
          }
          else {
            this.$axios.post(this.installurl+'post_net_conf',this.malist).then(function (res) {
              if (res.status==200){
                _this.$router.push('/Installone')
              }
            }).catch(function (error) {
              console.log(error)
            })
          }
          // console.log(this.salist)

        },
        stor(cname,name,id){
          let c=0;
          let o=$("#"+cname+" #all #"+name+" "+"p").text()
          var ss={}
          if (this.slist.length==0){
            this.slist.push(o)
            this.sid.push(id)
            ss.id=cname
            ss.name=o
            ss.card=name
            this.sslist.push(ss)
            $("#"+cname+" #all #"+name).css('color', 'red')
          }
          else {
            // console.log(this.sid.length)
            let a=0
            for(let i=0;i<this.sid.length;i++){
              if (this.sid==id)
              { a=a+1}
              // console.log(a)
            }
            if (a==0) {
              for (let i in this.slist) {
                if (this.slist[i] == o) {
                  continue
                }
                else {
                  c++

                }
              }
              if ((c) == this.slist.length) {
                this.slist.push(o)
                this.sid.push(id)
                ss.id = cname
                ss.name = o
                ss.card = name
                this.sslist.push(ss)
                $("#" + cname + " #all #" + name).css('color', 'red')
              }
            }
            else if (a==1){
              this.tipsnr='所属主机已有网卡用作存储，请重新选择'
              $("#tipsnr").show().delay (2000).fadeOut ();
            }
          }


          // console.log(this.sslist)
        },
        man(cname,name,id){
          let c=0;
          let o=$("#"+cname+" #all #"+name+" "+"p").text()
          var mm={}

          if (this.mlist.length==0){
            this.mlist.push(o)
            this.mid.push(id)
            mm.id=cname
            mm.name=o
            mm.card=name
            this.mmlist.push(mm)
            $("#"+cname+" #all #"+name).css('color', 'red')
          }
          else {
            let a=0
            for(let i=0;i<this.mid.length;i++){
              if (this.mid==id)
                a=1
            }
            if (a==0) {
              for (let i in this.mlist) {
                if (this.mlist[i] == o) {
                  continue
                }
                else {
                  c++

                }
              }
              if ((c) == this.mlist.length) {
                this.mlist.push(o)
                this.mid.push(id)
                mm.id = cname
                mm.name = o
                mm.card = name
                this.mmlist.push(mm)
                $("#" + cname + " #all #" + name).css('color', 'red')
              }
            }
            else  if (a==1){
              this.tipsnr='所属主机已有网卡用作管理，请重新选择'
              $("#tipsnr").show().delay (2000).fadeOut ();
            }
          }

        },
        sdelete(n){
          $('.sheight #'+n).remove();
          for (let i in this.sslist){
            if (this.sslist[i].name==n){
              this.slist.splice(i,1)
              this.sid.splice(i,1)
              this.sslist.splice(i,1)
            }
          }
        },
        mdelete(n){
          $('.mheight #'+n).remove();
          for (let i in this.mmlist){
            if (this.mmlist[i].name==n){
              this.mlist.splice(i,1)
              this.mid.splice(i,1)
              this.mmlist.splice(i,1)
            }
          }
        }
      },
      mounted(){
          this.keyd()
        this.start()
        $("[data-toogle='tooltip']").tooltip({html:true});
        // this.start()
      }
    }
</script>

<style scoped>
  #Installnet{
    height: 100%;
    margin: 0;
    padding: 0;
    position:absolute;
    top: 0;
    bottom: 0;
    left: 0;
    background-color: white !important;
    width: 100%;
  }
  .left{
    background-color: #BBDBE9;
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
  .n-title{
    color: black;
    font-size: 1.3em;
    margin:2em 0 0 0.5em;
    line-height: 6em;
  }
  .font1{
    text-align: center;margin: 6em 0 0 0;font-size: 3.5em;color:black;
  }
  .font2{
    text-align: center;font-size: 2em;color: gray;
  }
  .yun{
    left: 150px;
    position: fixed;
    bottom: 0;
    width: 20em;
  }
  .cont{
    width: 45em;height: 45em;background-color: #D2E6F5;z-index: 999;position: relative;opacity: .8;margin-top: 12em;padding:3em 2.5em;
    border-radius: 5px;
  }
  .net{
    margin:1em 2em;
  }
  .r{
    text-align: center;
    line-height: 3.5em;

    font-size: 1.4em;
  }
  .right{
    top:0;
    right: 0;
    width: 35em;
    position: fixed;
    z-index: 100;
  }
  .bor-bottom{
    border-bottom: 3px solid #2492B5;
    margin: 0 auto;
    color:black ;
  }
  .c-title{

    font-size: 1.4em;
    font-weight: 700;
    margin: 1em;
  }
  .card{
    width: 100%;
    height: 25em;
    margin: 2em 0;
    overflow-y: scroll;
    overflow-x: hidden;
  }
  .sheight,.mheight{
    margin-top: .5em;
    height: 4em;
    overflow-y: scroll;
  }
  .afont{
    color:#0F9052
  }
  @media screen and (min-width: 1440px){
    .cont{
      margin-left: 13em;
      width: 50em;
    }
    .font1{
      margin-left: 2em;
    }
    .font2{
      margin-left: 4em;
    }
    .r{
      margin-left: 20em;
    }
  }
  @media screen and (max-width: 1440px) and (min-width: 1024px){
    .cont{
      margin-left: 0em;
      width: 45em;
      height: 38em;
    }
    .cont{
      margin-top: 4em;
    }
    .right{
      width: 20em;
    }
    .yun{
      width: 20em;
    }
    .card{
      margin:0.5em 0em;
      height: 23em;
    }
    .font1{
      margin-left: 0em;
      margin-top: 3em;
    }
    .font2{
      margin-left: 0em;
    }
    .r{
      margin-left: 0em;
    }
  }
  @media screen and (max-width: 1024px) and (min-width: 768px) {
    .cont {
      margin-left: 0em;
      width: 35em;
    }

    .font1 {
      margin-left: 0em;
      font-size: 2em;
      margin-top: 10em;
    }

    .font2 {
      margin-left: 0em;
      font-size: 1em;
    }

    .r {
      margin-left: 0em;
    }

    .right {
      width: 30em;
    }

    .left {
      width: 100px;
    }

    .yun {
      left: 100px;
      width: 15em;
    }

    .logo {
      left: 1em;

    }
  }
</style>
