<template>
  <div class="col-lg-10 col-md-10 col-sm-10 col-xs-12 container-fluid" id="Rfile">
    <div class="row">
      <button type="button"  class="btn btn-info mdsbtn"  ><img src="../../static/image/addmds.png" style="width: 1.5em;margin-right: .5em"/>新建MDS</button>
    </div>
    <div class="container-fluid row" id="mdslist">
      <p class="mdstitle">MDS列表</p>
      <div class="mdsitem col-lg-4 col-md-4 col-sm-4 col-xs-4" v-for="a in mdslist">
        <div class="row mdscontent">
          <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5 marktitle">进程数：</div>
          <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7 numfont">{{a.porocess.length}}</div>
          <div style="width:100%;height:8em;margin:1.5em 0;text-align: center;overflow-y: scroll">
          <table class="table table-condensed table-responsive" style="width: 85%;margin: 0 auto">
            <thead>
              <tr><th>ID</th>
              <th>Name</th>
                <th>等级</th></tr>
            </thead>
            <tbody v-for="b in a.porocess">
              <tr>
                <td>{{b.id}}</td>
                <td>{{b.name}}</td>
                <td>{{b.rank}}</td>
              </tr>
            </tbody>
          </table>
          </div>
          <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5 marktitle">位置：</div>
          <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7 numfont">{{a.position}}</div>
          <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5 marktitle">最大文件大小：</div>
          <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7 numfont">{{a.filemax}}</div>
          <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5 marktitle">最大守护进程数：</div>
          <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7 numfont">{{a.max_mds}}</div>
          <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5 marktitle">状态：</div>
          <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7 numfont">{{a.status}}</div>
          <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5 marktitle">操作：</div>
          <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 numicon"><i class="glyphicon glyphicon-off" data-toggle="tooltip" data-placement="bottom" title="开启" ></i></div>
          <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 numicon"><i class="glyphicon glyphicon-remove" data-toggle="tooltip" data-placement="bottom" title="删除"></i></div>
      </div>
      </div>
    </div>
    <div class="row">
      <button type="button"  class="btn btn-info fsbtn"  ><img src="../../static/image/file.png" style="width: 1.5em;margin-right: .5em"/>新建FS</button>
    </div>
    <div class="container-fluid row" id="fslist">
      <div class="row">
        <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5">
          <p class="mdstitle">FS列表
          <button type="button"  class="btn-xs btn-danger fsbtn" style="margin: 0em 0 0 1em" >查看挂载情况</button></p>
        </div>

      </div>
      <div class="mdsitem col-lg-4 col-md-4 col-sm-4 col-xs-4" v-for="c in fslist">
        <div class="row mdscontent">
          <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5 marktitle">名称：</div>
          <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7 numfont">{{c.name}}</div>
          <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5 marktitle">元数据存储池：</div>
          <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7 numfont">{{c.metapool}}</div>
          <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5 marktitle">数据存储池：</div>
          <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7 numfont">{{c.datapool}}</div>
          <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5 marktitle">挂载位置：</div>
          <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7 numfont">{{c.guazai}}</div>
          <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5 marktitle">文件位置：</div>
          <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7 numfont">{{c.fileposition}}</div>
          <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5 marktitle">文件最大数量：</div>
          <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7 numfont">{{c.filenum}}</div>
          <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5 marktitle">文件最大大小：</div>
          <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7 numfont">{{c.filemax}}</div>
          <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5 marktitle">状态：</div>
          <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7 numfont">{{c.status}}</div>
          <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5 marktitle">操作：</div>
          <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 "><img src="../../static/image/guazai.png" style="width: 1.5em;cursor: pointer" data-toggle="tooltip" data-placement="top" title="挂载" /></div>
          <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 "><img src="../../static/image/peie.png" style="width: 1.5em;cursor: pointer" data-toggle="tooltip" data-placement="top" title="配额设置" /></div>
          <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 "><img src="../../static/image/unmount.png" style="width: 1.5em;cursor: pointer" data-toggle="tooltip" data-placement="top" title="卸载" /></div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
    export default {
        name: "Rfile",
      data(){
          return{
            mdslist:[
              {position:'192.168.1.1',porocess:[{id:'1',name:'one',rank:'0'},{id:'2',name:'two',rank:"0"},{id:'3',name:'three',rank:'1'},{id:'3',name:'three',rank:'1'},{id:'3',name:'three',rank:'1'}],filemax:'3214',max_mds :'3',status:'ok'},
              {position:'192.168.1.2',porocess:[{id:'1',name:'one',rank:'0'},{id:'2',name:'two',rank:"0"},{id:'3',name:'three',rank:'1'}],filemax:'645',max_mds :'5',status:'ok'},
              {position:'192.168.1.3',porocess:[{id:'1',name:'one',rank:'0'},{id:'2',name:'two',rank:"0"},{id:'3',name:'three',rank:'1'}],filemax:'645',max_mds :'5',status:'ok'}
            ],
            fslist:[
              {name:'one',metapool:'pool1',datapool:'pool2',guazai:'192.168.1.1',fileposition:'/mnt/myceph',filemax:'3121',filenum:'232',status:'ok'},
              {name:'one',metapool:'pool1',datapool:'pool2',guazai:'192.168.1.1',fileposition:'/mnt/myceph',filemax:'3121',filenum:'232',status:'ok'},
              {name:'one',metapool:'pool1',datapool:'pool2',guazai:'192.168.1.1',fileposition:'/mnt/myceph',filemax:'3121',filenum:'232',status:'ok'}
            ],

          }
      },
      mounted(){
        $("[data-toggle='tooltip']").tooltip();
      }
    }
</script>

<style scoped>
    #Rfile{
      margin-top: 2em;
      /*margin-left: 1em;*/
    }
    .fsbtn{
      margin-top: 1em;
    }
    th{
      text-align: center;
    }
    #mdslist{
      margin-top: 1em;
      border: 1px solid gray;
      border-radius: .5em;
      height: 28em;
      overflow-y: scroll;
    }
    #fslist{
      margin-top: 1em;
      border: 1px solid gray;
      border-radius: .5em;
      height: 24em;
      overflow-y: scroll;
    }
  .mdsitem{

    margin:0 0 1em 0;
  }
  .mdscontent{
    margin: 0em 0em;
    border-radius: .5em;
    background-color: #293F68;
    padding: 1em;
  }
  .mdstitle{
    color: #80B2CA;
    font-size: 1.5em;
    /*line-height: 2.5em;*/
    margin-top: .5em;
  }
  .numfont{
    font-size: 1.35em;
    color:#93BFDF;
  }
  td{
    color: #93BFDF;
  }
  .marktitle,th{
    color: #56b4dc;
  }
  .numicon{
    font-size: 1.2em;
    cursor: pointer;
  }
  #clienttable{
    margin-top: 3em;
  }
</style>
