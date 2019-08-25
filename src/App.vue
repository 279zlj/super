<template>
  <div id="app">
      <keep-alive>
        <router-view/>
        <a-layout class='index'>
          <a-layout-header>
              <Topbar></Topbar>
          </a-layout-header>
          <a-layout>
              <a-layout-sider>
                  <Menubar></Menubar>
              </a-layout-sider>
              <a-layout-content>
                  <router-view name='content'></router-view>
              </a-layout-content>
          </a-layout>
        </a-layout>
      </keep-alive>
  </div>
</template>
<script>
import Menubar from './components/common/Menubar'
import Topbar from './components/common/Topbar'
export default {
  name:'App',
  components:{Menubar,Topbar}
}
</script>
<style lang="less">
html,body{
  margin: 0;
  padding: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
#app{
  margin: 0;
  padding:0;
  width: 100%;
  height: 100%;
}
.tabstyle{
  height:21em;
}
.tabsmall{
  height: 16em;
}
.bigtab{
  height: 40em;
}
.block{
    display:block !important;
}
.mytitle{
  background-color:white;height:3rem;line-height:3rem;font-size:1rem;padding-left:1rem;box-shadow:0px 2px 8px grey
}
.tabs-top{
  margin-top:16px
}
.ant-card-body{
  padding:14px !important
}
p{
  margin-bottom:.5em !important;
}
.ant-layout-header{
    padding: 0 !important;
    height:3.5rem !important;
}
.index{
    height: 100%;
    background-color: #F1F6FA
}
.dcontent{
    line-height: 2em;
    margin: 0 0 .2rem 0;
}
.uheader{
    background-color: #E6F4FF;
}
.ubody{
    background-color: #F1F8FF
}
.val{
  color: #0885FC
}
    /*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar
{
    width: 6px;
    height: 10rpx;
    background-color: #F5F5F5;
}
 
/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track
{
    -webkit-box-shadow: inset 0 0 3px gray;
    background-color: #D6D6D6;
}
 
/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb
{
    -webkit-box-shadow: inset 0 0 6px gray;
    background-color: #65B3FE;
}
</style>
