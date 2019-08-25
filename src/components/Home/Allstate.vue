<template>
<a-card hoverable>
    <a-row >
        <a-col :xs='12' :sm='12' :md='8' :lg='8' :xl='4'>
            <a-row >
                <a-col :span='12' class='icon_align'>
                   <a-icon :component='monitor' style="font-size:7.5em" />
                </a-col>
                <a-col :span='12'>
                    <p><b>监控服务</b></p>
                    <span class='block'>进程数：<span>3</span></span>
                    <span class='block'>主节点：<span>node1</span></span>
                    <span class='block'>活跃时间：<span>5h</span></span>
                </a-col>
            </a-row>
        </a-col>
        <a-col :xs='12' :sm='12' :md='8' :lg='8' :xl='4'>
            <a-row>
                <a-col :span='12' class='icon_align'>
                   <a-icon :component='mana' style="font-size:7.5em" />
                </a-col>
                <a-col :span='12'>
                    <p><b>管理服务</b></p>
                    <span class='block'>主节点：<span>node1</span></span>
                    <span class='block'>从节点：<span>node2</span></span>
                    <span class='block'>活跃时间：<span>5h</span></span>
                </a-col>
            </a-row>
        </a-col>
        <a-col :xs='12' :sm='12' :md='8' :lg='8' :xl='4'>
            <a-row>
                <a-col :span='12' class='icon_align'>
                   <a-icon :component='osd' style="font-size:7.5em" />
                </a-col>
                <a-col :span='12'>
                    <p><b>OSD</b></p>
                    <span class='block'>数量：<span>node1</span></span>
                    <span class='block'>IN：<span>node2</span></span>
                    <span class='block'>UP：<span>5h</span></span>
                </a-col>
            </a-row>
        </a-col>
        <a-col :xs='12' :sm='12' :md='8' :lg='8' :xl='4'>
            <a-row>
                <a-col :span='12' class='icon_align'>
                   <a-icon :component='file' style="font-size:7.5em" />
                </a-col>
                <a-col :span='12'>
                    <p><b>文件存储状态</b></p>
                    <h2>正常</h2>
                </a-col>
            </a-row>
        </a-col>
        <a-col :xs='12' :sm='12' :md='8' :lg='8' :xl='4'>
            <a-row>
                <a-col :span='12' class='icon_align'>
                    <a-icon :component='iscsi' style="font-size:7.5em" />
                </a-col>
                <a-col :span='12'>
                    <p><b>iSCSI状态</b></p>
                    <h2>正常</h2>
                </a-col>
            </a-row>
        </a-col>
        <a-col :xs='12' :sm='12' :md='8' :lg='8' :xl='4'>
            <a-row>
                <a-col :span='12' class='icon_align'>
                   <a-icon :component='obj' style="font-size:7.5em" />
                </a-col>
                <a-col :span='12'>
                    <p><b>对象存储状态</b></p>
                    <h2>正常</h2>
                </a-col>
            </a-row>
        </a-col>
    </a-row>
</a-card>
</template>
<script>
import monitor from '../../../static/images/svg/monitor.svg'
import mana from '../../../static/images/svg/manager.svg' 
import osd from '../../../static/images/svg/ic_OSDstatus-abnormal.svg' 
import obj from '../../../static/images/svg/obj.svg' 
import file from '../../../static/images/svg/ic_filestatus_abnormal.svg' 
import iscsi from '../../../static/images/svg/ic_iSCSIstatus_abnormal.svg' 
export default {
    name:'Allstate',
    template: '<a-icon :component="{monitor,mana,osd,obj,file}" />',
    data(){
        return{
            monitor,
            mana,
            osd,
            obj,
            file,
            iscsi,
        }
    }
}
</script>
<style>

.status{
    font-size:5em;
    text-align: center
}
.block span{
    color: #0785FD;
}
.icon_align{
    text-align: center !important;
}
h2{
    font-weight: 700
}
</style>
