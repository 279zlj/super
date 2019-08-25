<template>
    <a-row>
        <a-row class="mytitle">
            <a-icon type='hdd' style="margin:0 .5rem 0 0" />概况
        </a-row>
        <a-row style="margin:1em ">
            
                <a-row :gutter='16' >
                    <a-col :xs='12' :sm='12' :md='12' :lg='8' :xl='8' style="color:white;">
                        <div class='bg_blue' >
                            <span class='title0'>网络磁盘</span>
                            <a-row class='bg_content'>
                                <a-col :span='12'>
                                    <p>存储池数(个)：</p>
                                    <p class='data_font'>10</p>
                                </a-col>
                                <a-col :span='12'>
                                    <p>已使用空间(GB)：</p>
                                    <p class='data_font'>10</p>
                                </a-col>
                                <a-col :span='24'>
                                    <p>块设备数(个)：</p>
                                    <p class='data_font'>10</p>
                                </a-col>
                            </a-row>
                        </div>
                    </a-col>
                    <a-col :xs='12' :sm='12' :md='12' :lg='8' :xl='8' style="color:white;">
                        <div class='bg_yellow'>
                            <span class='title1'>文件系统</span>
                            <a-row class='bg_content'>
                                <a-col :span='12'>
                                    <p>状态：</p>
                                    <p class='data_font'>存活/出错</p>
                                </a-col>
                                <a-col :span='12'>
                                    <p>数量使用量(GB)：</p>
                                    <p class='data_font'>10</p>
                                </a-col>
                                <a-col :span='12'>
                                    <p>元数据使用量(GB)：</p>
                                    <p class='data_font'>10</p>
                                </a-col>
                                <a-col :span='12'>
                                    <p>文件索引(个)：</p>
                                    <p class='data_font'>10</p>
                                </a-col>
                            </a-row>
                        </div>
                    </a-col>
                    <a-col :xs='12' :sm='12' :md='12' :lg='8' :xl='8' style="color:white;">
                        <div  class='bg_pink'>
                            <span  class='title2'>对象存储</span>
                            <a-row  class='bg_content'>
                                <a-col :span='12'>
                                    <p>端口：</p>
                                    <p class='data_font'>2324</p>
                                </a-col>
                                <a-col :span='12'>
                                    <p>用户(个)：</p>
                                    <p class='data_font'>23423</p>
                                </a-col>
                                <a-col :span='24'>
                                    <p>桶(个)：</p>
                                    <p class='data_font'>252533</p>
                                </a-col>
                            </a-row>
                        </div>
                    </a-col>
                </a-row>
            
        </a-row>
        <a-row style="margin:.5em 1em">
            <Poolmgr></Poolmgr>
        </a-row>
    </a-row>        
</template>
<script>
import Topbar from '../../../components/common/Topbar'
import Menubar from '../../../components/common/Menubar'
import Poolmgr from '../../../components/storage_mgr/overview/poolmgr'
export default {
    name:'overview',
    components:{Topbar,Menubar,Poolmgr},
    data(){
        return{

        }
    }
}
</script>
<style scoped>
.bg_blue{
    background-color:#04A0FE;border-radius:.1em;background-image:url('../../../../static/images/embellish.png');background-repeat: no-repeat;background-position:bottom;box-shadow:2px 3px 8px grey;
}
.bg_yellow{
    background-color:#FD76B0;border-radius:.1em;background-image:url('../../../../static/images/embellish.png');background-repeat: no-repeat;background-position:bottom;box-shadow:2px 3px 8px grey;
}
.bg_pink{
    background-color:#FFC40E;border-radius:.1em;background-image:url('../../../../static/images/embellish.png');background-repeat: no-repeat;background-position:bottom;box-shadow:2px 3px 8px grey;
}
.title2{
    background-color:white;color:#FD76B0;margin-top:.5em;padding:.3em 1.5em;display:inline-block;border-left:1px solid grey;font-weight:600
}
.title1{
    background-color:white;color:#FFC40E;margin-top:.5em;padding:.3em 1.5em;display:inline-block;border-left:1px solid grey;font-weight:600
}
.title0{
    background-color:white;color:#0BBCFF;margin-top:.5em;padding:.3em 1.5em;display:inline-block;border-left:1px solid grey;font-weight:600
}
.bg_content{
    padding:0 1.5em 1.5em 1.5em;font-size:14px
}
.data_font{
    font-weight:700;font-size:2em;text-indent: 2rem
}
</style>
