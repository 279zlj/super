<template>
        <a-row>
            <a-row class='mytitle'>
                <a-icon type='hdd' style="margin:0 .5rem 0 0"/>物理资源
            </a-row>
                <a-row style="margin:1rem">
                    <a-col :xs='12' :sm='12' :md='12' :lg='7' :xl='7' :xxl='6' id='phybar'>
                        <a-row style="height:43rem;overflow-y:scroll">
                            <!-- <div class='expend'>
                                <a-button style="float:right;margin:.5em" icon='bars' @click="changeopen">展开</a-button>
                                <a-icon type="menu-unfold" />
                            </div> -->
                            <a-button type='primary' shape='circle' icon='menu-unfold' style="z-index:999;margin:1rem;position:absolute;right:0;"  @click="changeopen"></a-button>
                            <div>
                                <a-row class='nodecontent' :class="n.status == '正常'?'bg_green':'bg_red'" v-for='n in nodedata'>
                                    <a-col :span='17' class="simple">
                                        <p class="tit" :class="n.status == '正常'?'green':'red' ">{{n.name}}</p>
                                        <span class="block">集群连接状态：<a-badge :status="n.status == '正常'?'success':'error'" /><b>{{n.status}}</b></span>
                                        <span class="block">CPU使用率：<b>{{n.cpu}}</b></span>
                                        <span class="block">内存使用率：<b>{{n.mem}}</b></span>
                                        <span class="block">磁盘使用率：<b>{{n.disk}}</b></span>
                                    </a-col>
                                    <a-col :span='17' class="detail">
                                        <p class="tit" :class="n.status == '正常'?'green':'red' ">{{n.name}}</p>
                                        <span class="block">集群连接状态：<a-badge :status="n.status == '正常'?'success':'error'" /><b>{{n.status}}</b></span>
                                        <span class="block">存储服务进程数：<b>{{n.thread}}</b></span>
                                        <span class="block">OS：<b>{{n.OS}}</b></span>
                                        <span class="block">ssh port：<b>{{n.ssh}}</b></span>
                                        
                                    </a-col>
                                    <a-col :span='7'>
                                        <a-icon type="hdd" style="font-size:5em;margin-top:3rem" :class="n.status == '正常'?'green':'red' "/>
                                    </a-col>
                                    <a-col :span='24' class="detail">
                                        <span class="block">kernel：<b>{{n.kernel}}</b></span>
                                    </a-col>
                                    <a-col :span='12' class="detail">
                                        <a-col :span='5'>
                                            <a-icon type='hdd' class='icons'></a-icon>
                                        </a-col>
                                        <a-col :span='19'>
                                            <span class="block">使用率：<b>{{n.cpu}}</b></span>
                                            <span class="block">总频率：<b>{{n.cpurate}}</b></span>
                                        </a-col>
                                    </a-col>
                                    <a-col :span='12' class="detail">
                                        <a-col :span='5'>
                                            <a-icon type='hdd' class='icons'></a-icon>
                                        </a-col>
                                        <a-col :span='19'>
                                            <span class="block">使用率：<b>{{n.mem}}</b></span>
                                            <span class="block">总内存：<b>{{n.memsum}}</b></span>
                                        </a-col>
                                    </a-col>
                                    <a-col :span='12' class="detail">
                                        <a-col :span='5'>
                                            <a-icon type='hdd' class='icons'></a-icon>
                                        </a-col>
                                        <a-col :span='19'>
                                            <span class="block">使用率：<b>{{n.disk}}</b></span>
                                            <span class="block">总容量：<b>{{n.disksum}}</b></span>
                                        </a-col>
                                    </a-col>
                                    <a-col :span='12' class="detail">
                                        <a-col :span='5'>
                                            <a-icon type='hdd' class='icons'></a-icon>
                                        </a-col>
                                        <a-col :span='19'>
                                            <span class="block">问题网卡数：<b>{{n.error}}</b></span>
                                            <span class="block">总网卡数：<b>{{n.netcard}}</b></span>
                                        </a-col>
                                    </a-col>
                                </a-row>
                            </div>
                        </a-row>
                    </a-col>
                    <a-col :xs='12' :sm='12' :md='12' :lg='17' :xl='17' :xxl='18' style="height:43rem;background-color:white">
                        <Phycontent></Phycontent>
                    </a-col>
                </a-row>
            
        </a-row>
           
</template>
<script>
import Phycontent from '../../components/physical/Phycontent'
import $ from 'jquery'
export default {
    name:'physical',
    components:{Phycontent},
    data(){
        return{
            nodedata:[
                {name:'Node1',status:'正常',cpu:'20%',mem:'20%',disk:'20%',thread:724,OS:'centos',ssh:'22',kernel:'Linux 2.10.0-957.el7.x86_64',cpurate:'2.56GZHz',memsun:'256G',disksum:'10T',error:1,netcard:3},
                {name:'Node2',status:'异常',cpu:'20%',mem:'20%',disk:'20%',thread:724,OS:'centos',ssh:'22',kernel:'Linux 2.10.0-957.el7.x86_64',cpurate:'2.56GZHz',memsun:'256G',disksum:'10T',error:1,netcard:3},
                {name:'Node3',status:'正常',cpu:'20%',mem:'20%',disk:'20%',thread:724,OS:'centos',ssh:'22',kernel:'Linux 2.10.0-957.el7.x86_64',cpurate:'2.56GZHz',memsun:'256G',disksum:'10T',error:1,netcard:3},
                {name:'Node4',status:'异常',cpu:'20%',mem:'20%',disk:'20%',thread:724,OS:'centos',ssh:'22',kernel:'Linux 2.10.0-957.el7.x86_64',cpurate:'2.56GZHz',memsun:'256G',disksum:'10T',error:1,netcard:3},
                {name:'Node5',status:'正常',cpu:'20%',mem:'20%',disk:'20%',thread:724,OS:'centos',ssh:'22',kernel:'Linux 2.10.0-957.el7.x86_64',cpurate:'2.56GZHz',memsun:'256G',disksum:'10T',error:1,netcard:3},
                {name:'Node6',status:'异常',cpu:'20%',mem:'20%',disk:'20%',thread:724,OS:'centos',ssh:'22',kernel:'Linux 2.10.0-957.el7.x86_64',cpurate:'2.56GZHz',memsun:'256G',disksum:'10T',error:1,netcard:3}
            ],
            open:false
        }
    },
    mounted(){
        $('.simple').css('display','block')
        $('.detail').css('display','none')
    },
    methods:{
        changeopen(){
            this.open = !this.open
            if(!this.open){
                $('.simple').slideDown('slow')
                $('.detail').css('display','none')
            }
            if(this.open){
                $('.detail').slideDown('slow')
                $('.simple').css('display','none')
            }
        }
    }
}
</script>
<style>
#phybar{
    background-color: #E3F5FF;
    height:100%;
    border: 1px solid #BBBBBB;
}
.expend{
    background-color:white;height:3rem;
    box-shadow: 0px 3px 10px #BBBBBB;
}
.tit{
    font-size:1.3em;font-weight: 700
}
.nodecontent{
    background-color: white;
    margin:.5rem .5rem;
    padding:1rem;
    cursor: pointer;
}
.bg_green{
    border-radius:.1em;background-image:url('../../../static/images/green.png');background-repeat: no-repeat;background-position:bottom;border-left:3px solid #00B4A5
}
.bg_red{
    border-radius:.1em;background-image:url('../../../static/images/red.png');background-repeat: no-repeat;background-position:bottom;border-left:3px solid #FC1B60
}
.green{
    color:#00B4A5
}
.red{
    color:#FC1B60
}
.icons{
    font-size:1.5rem;margin-top:.5rem
}
</style>

