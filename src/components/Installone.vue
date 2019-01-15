<template>
    <div class="row" id="Installone">
      <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 left">
        <img src="../../static/image/install/oneleft.png" class="img-responsive" style="float: right;width: 2.5em"/>
        <img src="../../static/image/install/install-logo.png" class="img-responsive logo"/>
      </div>
      <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7 center">
        <div class="row container">
        <div class="col-lg-5 col-md-4 col-sm-5 col-xs-5">

          <p class="font1" >请选择服务器</p>
          <p class="font2"> Plese click the server to select as a monitoring node or cluster</p>
          <div class="disk-info container">
            <h3>Server List:</h3>
            <div class="row" style="text-align: center">
            <div  class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
              Server Name
            </div>
            <div  class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
              Server Disk
            </div>
            <div  class="col-lg-5 col-md-5 col-sm-5 col-xs-5">
              Server Memory
            </div>
            </div>
            <div class="row rowstyle" v-for="s in servernum">

              <div  class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                {{s.name}}
              </div>
              <div  class="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                {{s.disk}}
              </div>
              <div  class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                {{s.mem}}
              </div>
            </div>
          </div>
          <img src="../../static/image/install/oneleftdown.png" class="img-responsive yun"/>
        </div>
          <div class="col-lg-7 col-md-6 col-sm-7 col-xs-7">
            <div class="cont" >
              <div class="row">
                <div class="col-lg-3 col-md-3 col-sm-6 col-sm-6"><p class="l-title" style="margin-left: 1em">集群名称：</p></div>
                <div class="col-lg-4 col-md-4 col-sm-6 col-sm-6"><input class="form-control" ref="clustername" style="margin-top: .5em;" autofocus="autofocus"/></div>
              </div>
              <div class="container-fluid " >
                <p class="l-title">监控节点：</p>
                <div class="jq" id="jk">
                  <div class="row" id="one">
                    <div class='col-lg-2 col-md-2 col-sm-3 col-xs-6'  v-for="p in jklist" v-if="jklist!=0" :id=p>
                      <img src='../../static/image/install/selected.png' class='img-responsive imgsize' style="cursor: pointer" data-toggle='dropdown' >
                      <p>{{p}}</p>
                      <ul class='dropdown-menu'>
                        <li ><a style='cursor: pointer' v-on:click='jkdele(p)' >移除节点</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="container-fluid">
                <p class="l-title">集群节点：</p>
                <div class="jq" id="jq">
                  <div class="row" id="two">
                    <div class='col-lg-2 col-md-2 col-sm-3 col-xs-6'  v-for="q in jqlist" v-if="jqlist!=0" :id=q >
                      <img src='../../static/image/install/selected.png' class='img-responsive imgsize' style="cursor: pointer" data-toggle='dropdown' >
                      <p>{{q}}</p>
                      <ul class='dropdown-menu'>
                        <li ><a style='cursor: pointer' v-on:click='jqdele(q)' >移除节点</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="container-fluid">
                <p class="l-title">元数据服务器：</p>
                <div class="jq" id="mds">
                  <div class="row" id="three">
                    <div class='col-lg-2 col-md-2 col-sm-3 col-xs-6'  v-for="m in mdslist" v-if="mdslist!=0"  :id=m>
                      <img src='../../static/image/install/selected.png' class='img-responsive imgsize' style="cursor: pointer" data-toggle='dropdown' >
                      <p>{{m}}</p>
                      <ul class='dropdown-menu'>
                        <li ><a style='cursor: pointer' v-on:click='mdsdele(m)' >移除节点</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="container-fluid">
                <p class="l-title">对象存储网关：</p>
                <div class="jq" id="rgw">
                  <div class="row" id="four">
                    <div class='col-lg-2 col-md-2 col-sm-3 col-xs-6'  v-for="r in rgwlist" v-if="rgwlist!=0"  :id=r>
                      <img src='../../static/image/install/selected.png' class='img-responsive imgsize' style="cursor: pointer" data-toggle='dropdown' >
                      <p>{{r}}</p>
                      <ul class='dropdown-menu'>
                        <li ><a style='cursor: pointer' v-on:click='rgwdele(r)' >移除节点</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="container-fluid" style="margin-top: 2em;margin-left: 2em">
                <div class="row ser" id="ser">
                  <div v-for="i in servernum" class="col-lg-2 col-md-2 col-sm-3 col-xs-6" :id="i.name">
                    <img src="../../static/image/install/select.png" class="img-responsive imgsize" style="cursor: pointer" :title="i.name" data-toogle="tooltip" data-placement="bottom" data-toggle="dropdown"/>
                    <ul class="dropdown-menu" style="z-index: 999">
                      <li ><a style="cursor: pointer" @click="jkjd(i.name,i.id)">监控节点</a></li>
                      <li><a style="cursor: pointer" @click="jqjd(i.name,i.id)">集群节点</a></li>
                      <li ><a style="cursor: pointer" @click="msdselect(i.name,i.id)">元数据服务器</a></li>
                      <li><a style="cursor: pointer" @click="rgwselect(i.name,i.id)">对象存储网关</a></li>
                    </ul>
                    <p ><b>{{i.name}}</b></p>
                  </div>
                </div>
              </div>
            </div>
            <div class="r" @keydown="keyd">
              <router-link :to="{name:'Installnet'}" ><span style="margin-right: 1em"  ><span class="glyphicon glyphicon-chevron-left"></span>上一步</span></router-link>
              <router-link :to="{name:'Installtwo'}" ><span @click="selectwhat" >下一步<span class="glyphicon glyphicon-chevron-right"></span></span></router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">

          <img src="../../static/image/install/onerightup.png" class="img-responsive right"/>

      </div>


    </div>
</template>

<script>
  import jsplumb from 'jsplumb'
    export default {
        name: "Installone",

      data(){
          return{
            servernum:[
              // {
              //   "id":"000000000000000000000025908A6EEC",
              //   "name": "node3",
              //   "disk":9,
              //   "mem":"154800M"
              // },
              // {
              //   "id":"00000000000000000000002590e479f2",
              //   "name": "node2",
              //   "disk":9,
              //   "mem":"154800M"
              // },
              // {
              //   "id":"b3a2b8ad2110e211a174001e673ba424",
              //   "name": "node1",
              //   "disk":9,
              //   "mem":"154800M"
              // }
            ],
            jklist:[],
            jqlist:[],
            mdslist:[],
            rgwlist:[],
            jkid:[],
            jqid:[],
            mdsid:[],
            rgwid:[]
          }
      },
      methods:{
        keyd(){                          /*键盘事件监听*/
          // console.log(this.$route.path)
          var _this=this
          document.onkeydown=function(e) {
            var key = window.event.keyCode
            if (key == 39) {
              _this.$router.push({name: 'Installtwo'})
            }
            else if(key==37){
              _this.$router.push({name:'Installnet'})
            }
            else{
              return ;
            }
            e.cancelBubble=true;
          }

        },
        jkjd(name,id){                /*选择服务器添加到监控节点，选择后追加到相应的div下*/
          let c=0;
          let o=$(".ser #"+name+" "+"p").text()
          let p=$("#jk #"+name+" "+"p").text()
          // console.log(o)
          if (this.jklist.length==0){
            this.jklist.push(o)
            this.jkid.push(id)
            $("#" + name).css('color', 'red')
          }
          else {
            for (let i in this.jklist) {
              if (this.jklist[i] == p) {
                continue
              }
              else {
                c++
              }
            }
            if ((c ) == this.jklist.length) {
              this.jklist.push(o)
              this.jkid.push(id)
              $(".ser " + name).css('color', 'red')
            }
          }
        },
        msdselect(name,id){
          let c=0;
          let o=$(".ser #"+name+" "+"p").text()
          let p=$("#mds #"+name+" "+"p").text()
          console.log(p)
          if (this.mdslist.length==0){
            this.mdslist.push(o)
            this.mdsid.push(id)
            $(".ser " + name).css('color', 'red')
          }
          else {
            for (let i in this.mdslist) {
              if (this.mdslist[i] == p) {
                continue
              }
              else {
                c++
              }
            }
            if ((c ) == this.mdslist.length) {
              this.mdslist.push(o)
              this.mdsid.push(id)
              $(".ser " + name).css('color', 'red')
            }
          }
        },
        rgwselect(name,id){
          let c=0;
          let o=$(".ser #"+name+" "+"p").text()
          let p=$("#rgw #"+name+" "+"p").text()
          // console.log(o)
          if (this.rgwlist.length==0){
            this.rgwlist.push(o)
            this.rgwid.push(id)
            $(".ser " + name).css('color', 'red')
          }
          else {
            for (let i in this.rgwlist) {
              if (this.rgwlist[i] == p) {
                continue
              }
              else {
                c++
              }
            }
            if ((c ) == this.rgwlist.length) {
              this.rgwlist.push(o)
              this.rgwid.push(id)
              $(".ser " + name).css('color', 'red')
            }
          }
        },
        jkdele(n){
          $('#jk #'+n).remove();
          for (let i in this.jklist){
            if (this.jklist[i]==n){
                this.jklist.splice(i,1)
            }
          }
          $(".ser #" +n+" "+'p').css('color', 'black')
        },
        jqdele(n){
          $('#jq #'+n).remove();
          for (let i in this.jqlist){
            if (this.jqlist[i]==n){
              this.jqlist.splice(i,1)
            }
          }
          $(".ser #" +n+" "+'p').css('color', 'black')

        },
        mdsdele(n){
          $('#mds #'+n).remove();
          for (let i in this.mdslist){
            if (this.mdslist[i]==n){
              this.mdslist.splice(i,1)
            }
          }
          $(".ser #" +n+" "+'p').css('color', 'black')
        },
        rgwdele(n){
          $('#rgw #'+n).remove();
          for (let i in this.rgwlist){
            if (this.rgwlist[i]==n){
              this.rgwlist.splice(i,1)
            }
          }
          $(".ser #" +n+" "+'p').css('color', 'black')
        },
        jqjd(name,id){             /*选择服务器添加到集群节点，选择后追加到相应的div下*/
          let c=0;
          let o=$(".ser #"+name+" "+"p").text()
          let p=$("#jq #"+name+" "+"p").text()
          if (this.jqlist.length==0){
            // console.log(o)
            this.jqlist.push(o)
            this.jqid.push(id)

            $(".ser #" + name).css('color', 'red')
          }
          else {
            for (let i in this.jqlist) {
              // console.log(this.jqlist[i])
              if (this.jqlist[i] == p) {
                continue
              }
              else {
                c++
              }
            }

            if ((c ) == this.jqlist.length) {
              this.jqlist.push(o)
              this.jqid.push(id)
              $(".ser #" + name).css('color', 'red')
            }
          }

        },
        selectwhat(){
          // alert(this.jklist)
          // alert(this.jqlist)
          var clustername=this.$refs.clustername.value
          this.$store.commit('jjselect',{jkselect:this.jklist,jqselect:this.jqlist,mdsselect:this.mdslist,rgwselect:this.rgwlist,clustername:clustername,jkid:this.jkid,jqid:this.jqid,mdsid:this.mdsid,rgwid:this.rgwid})
        },
        start(){
          var _this=this
          this.$axios.get(this.installurl+'get_machine').then(function (res) {
            _this.servernum=res.data
          }).catch(function (error) {
            console.log(error)
          })
        }


        // drag(ev){
        //
        //     ev.dataTransfer.setData("Text",ev.target.id);
        //
        // },
        // allowDrop(ev){
        //   ev.preventDefault()
        // },
        // drop(ev){
        //   ev.preventDefault();
        //   var data=ev.dataTransfer.getData("Text");
        //   ev.target.appendChild(document.getElementById(data))
        // }
      },

      mounted(){
        this.keyd()
        this.start()
        $("[data-toggle]").tooltip()
        // this.drag()
        // this.allowDrop()
        // this.drop()
      },

    }
</script>

<style scoped>
#Installone{

  height: 100%;
  margin: 0;
  padding: 0;
  position:absolute;
  top: 0;
  bottom: 0;
  left: 0;
  background-color: white !important;
  width: 100%;
  color: black;
}
.imgsize{
  width: 3em;
}
.jq{
  height:6em;width: 100%;border: 1px solid #cccccc;border-radius: 5px;
}
.ser{
  width: 100%;overflow-y:scroll;height: 9em
}
.l-title{
  font-size: 1.2em;font-weight: 700;margin-top: .5em;
}
body{
  background-color: white !important;
}
.font1{
  text-align: center;margin: 6em 0 0 0;font-size: 3.5em
}
.font2{
  text-align: center;font-size: 1.5em;color: gray;
}
.disk-info{
  background-color: #E3F5F3;height: 25em;width: 100%;margin-left: 4em;overflow-y: scroll;border-radius: 1em;margin-top: 2em;
}
.rowstyle{
  line-height: 2em;text-align: center;
}
  .left{
    background-color: #C8E5E2;
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
    width: 45em;height: 100%;background-color: #DCF2F0;z-index: 999;position: relative;opacity: .8;margin-top: 8em
  }
  input{
    background-color: #FFFFFF;color: black;border: 1px solid #8FC9C3;
  }
  .r{
    text-align: center;
    line-height: 3.5em;

    font-size: 1.4em;
  }
  #one,#two,#three,#four{
    height: 5em;overflow-y: scroll;margin: .5em 0 0 .5em;width: 98%
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
    margin-top: 1.5em;
  }
  .jq{
    height: 5em;
  }
  #one,#two,#three,#four{
    height: 4em;
  }
  .ser{
    height: 6em;
  }
  .l-title{
    margin-top: .2em;
  }
  .right{
    width: 20em;
  }
  .yun{
    width: 10em;
  }
  .font1{
    margin-left: 0em;
    margin-top: 2em;
  }
  .font2{
    margin-left: 0em;
  }
  .disk-info{
    margin-left: 1em;
  }
  .r{
    margin-left: 0em;
    font-size: 1.2em;
  }

}
@media screen and (max-width: 1024px) and (min-width: 768px){
  .cont{
    margin-left: 0em;
    width: 35em;
    margin-top: 5em;
  }
  .font1{
    margin-left: 0em;
    font-size: 2em;
    margin-top: 2em;
  }
  .font2{
    margin-left: 0em;
    font-size: 1em;
  }
  .r{
    margin-left: 0em;
  }
  .right{
    width: 30em;
  }
  .left{
    width: 100px;
  }
  .yun{
    left: 100px;
    width: 15em;
  }
  .logo{
    left: 1em;

  }
}
</style>
