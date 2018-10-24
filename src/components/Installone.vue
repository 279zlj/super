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
          <p class="font2">Plese select your servers.</p>
          <img src="../../static/image/install/oneleftdown.png" class="img-responsive yun"/>
        </div>
          <div class="col-lg-7 col-md-6 col-sm-7 col-xs-7">
            <div class="cont" >
              <div class="container-fluid " >
                <h3>监控节点：</h3>
                <div class="jq" id="jk">
                  <div class="row" id="one" style="height: 7em;overflow-y: scroll;margin: .5em 0 0 .5em;width: 98%">

                  </div>
                </div>
              </div>
              <div class="container-fluid">
                <h3>集群节点：</h3>
                <div class="jq" id="jq">
                  <div class="row" id="two" style="height: 7em;overflow-y: scroll;margin: .5em 0 0 .5em;width: 98%">

                  </div>
                </div>
              </div>
              <div class="container-fluid" style="margin-top: 3em;margin-left: 2em">
                <div class="row ser" >
                  <div v-for="i in servernum" class="col-lg-2 col-md-2 col-sm-3 col-xs-6" :id="i.name">
                    <img src="../../static/image/install/select.png" class="img-responsive" :title="i.content"  data-toggle="dropdown"/>
                    <ul class="dropdown-menu">
                      <li ><a style="cursor: pointer" @click="jkjd(i.num,i.name)">监控节点</a></li>
                      <li><a style="cursor: pointer" @click="jqjd(i.num,i.name)">集群节点</a></li>
                    </ul>
                    <p><b>{{i.name}}</b></p>
                  </div>
                </div>
              </div>
            </div>
            <div class="r" @keydown="keyd">
              <router-link :to="{}" ><span style="margin-right: 1em"  ><span class="glyphicon glyphicon-chevron-left"></span>上一步</span></router-link>
              <router-link :to="{name:'Installtwo'}" ><span  >下一步<span class="glyphicon glyphicon-chevron-right"></span></span></router-link>
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
    export default {
        name: "Installone",
      data(){
          return{
            servernum:[
              {num:'1',name:'server1',content:'1 disk,2 memory,3 cpu'},
              {num:'2',name:'server2'},
              {num:'3',name:'server3'},
              {num:'4',name:'server4'},
              {num:'5',name:'server5'},
              {num:'6',name:'server6'},
              {num:'7',name:'server7'},
              {num:'8',name:'server8'},
              {num:'9',name:'server9'},
              {num:'10',name:'server10'},
              {num:'11',name:'server11'},
              {num:'12',name:'server12'},
              {num:'13',name:'server13'},
              {num:'14',name:'server14'},
              {num:'15',name:'server15'},
            ],
            jklist:[],

            jqlist:[]
          }
      },
      methods:{
        keyd(){
          console.log(this.$route.path)
          var _this=this
          document.onkeydown=function(e) {
            var key = window.event.keyCode
            if (key == 39) {
              _this.$router.push({name: 'Installtwo'})
            }
            else{
              return ;
            }
            e.cancelBubble=true;
          }

        },
        jkjd(num,name){
          let c=0;
          let o=$("#"+name+" "+"p").text()

          if (this.jklist.length==0){
            this.jklist.push(o)

            $("#" + name).css('color', 'red')
            $("#one").append("<div class='col-lg-2 col-md-2 col-sm-3 col-xs-6' ><img src='../../static/image/install/selected.png' class='img-responsive'  id='" + name + "'><p>" + name + "</p></div>")
          }
          else {
          for(let i in this.jklist){

            if(this.jklist[i]==o){

              continue
            }
            else {
              c++

            }
          }
          if (c==this.jklist.length) {
            this.jklist.push(o)
            $("#" + name).css('color', 'red')
            $("#one").append("<div class='col-lg-2 col-md-2 col-sm-3 col-xs-6' ><img src='../../static/image/install/selected.png' class='img-responsive'  id='" + name + "'><p>" + name + "</p></div>")
          }
          }
        },
        jqjd(num,name){
          let c=0;
          let o=$("#"+name+" "+"p").text()
          if (this.jqlist.length==0){
            this.jqlist.push(o)

            $("#"+name).css('color','blue')
            $("#two").append("<div class='col-lg-2 col-md-2 col-sm-3 col-xs-6'><img src='../../static/image/install/selected.png' class='img-responsive' id='" + name + "'><p>" + name + "</p></div>")
          }
          else {
            for(let i in this.jqlist){

              if(this.jqlist[i]==o){

                continue
              }
              else {
                c++

              }
            }
            if (c==this.jqlist.length) {
              this.jqlist.push(o)
              $("#"+name).css('color','blue')
              $("#two").append("<div class='col-lg-2 col-md-2 col-sm-3 col-xs-6'><img src='../../static/image/install/selected.png' class='img-responsive' id='" + name + "'><p>" + name + "</p></div>")
            }
          }

        },
        dele(n){
          console.log(n)
          console.log('ok')
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
}
.jq{
  height:8em;width: 100%;border: 1px solid #cccccc;border-radius: 5px;
}
.ser{
  width: 100%;overflow-y:scroll;height: 10em
}
body{
  background-color: white !important;
}
.font1{
  text-align: center;margin: 6em 0 0 0;font-size: 3.5em
}
.font2{
  text-align: center;font-size: 2em;color: gray;
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
    width: 45em;height: 40em;background-color: #DCF2F0;z-index: 999;position: relative;opacity: .8;margin-top: 15em
  }
  .r{
    text-align: center;
    line-height: 3.5em;

    font-size: 1.5em;
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
  }
  .font1{
    margin-left: 0em;
    margin-top: 5em;
  }
  .font2{
    margin-left: 0em;
  }
  .r{
    margin-left: 0em;

  }

}
@media screen and (max-width: 1024px) and (min-width: 768px){
  .cont{
    margin-left: 0em;
    width: 35em;
  }
  .font1{
    margin-left: 0em;
    font-size: 2em;
    margin-top: 10em;
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
