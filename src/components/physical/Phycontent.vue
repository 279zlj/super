<template>
    <a-row style="margin-top:.5rem">
        <a-row class='hdd'>
            <p style="font-size:1.1em"><a-icon type='hdd'></a-icon><b>机械信息</b></p>
             <a-row :gutter='8'>
                <a-col :span='7' class='dcontent'>
                    <a-col :span='12' class='uheader'>
                        主板型号：
                    </a-col>
                    <a-col :span='12' class="ubody">
                        X10DRL-1
                    </a-col>
                </a-col>
                <a-col :span='10' class='dcontent'>
                    <a-col :span='6' class='uheader'>
                        操作系统：
                    </a-col>
                    <a-col :span='18' class="ubody">
                        Linux 3.10.0-9957.el7.x86_64
                    </a-col>
                </a-col>
                <a-col :span='7' class='dcontent'>
                    <a-col :span='12' class='uheader'>
                        内存大小：
                    </a-col>
                    <a-col :span='12' class="ubody">
                        88GiB
                    </a-col>
                </a-col>
                <a-col :span='7' class='dcontent'>
                    <a-col :span='12' class='uheader'>
                        状态：
                    </a-col>
                    <a-col :span='12' class="ubody">
                        <a-badge status='success'></a-badge>正常
                    </a-col>
                </a-col>
                <a-col :span='17' class='dcontent'>
                    <a-col :span='6' class='uheader'>
                        CPU型号：
                    </a-col>
                    <a-col :span='18' class="ubody">
                        Inter(R) Xeno(R) CPU ES-2620 v3 @ 2.40GHz
                    </a-col>
                </a-col>
            </a-row>
        
        </a-row>
        <a-row class='hdd'>
            <p style="font-size:1.1em"><a-icon type='hdd'></a-icon><b>磁盘</b></p>
        </a-row>
        <a-row class='hdd'>
            <p style="font-size:1.1em"><a-icon type='hdd'></a-icon><b>iSCSI服务/内部网络</b></p>
            <span>选择并查看网卡信息</span>
            <a-row :gutter='8'>
                <a-col :xs='10' :sm='10' :md='10' :lg='10' :xl='4'>
                    <a-row class="inet inetscroll">
                        <a-col :span='12' >
                            <a-icon type='hdd' class='inetsingle'></a-icon>
                        </a-col>
                        <a-col :span='12' >
                            <a-icon type='hdd' class='inetsingle'></a-icon>
                        </a-col>
                        <a-col :span='12' >
                            <a-icon type='hdd' class='inetsingle'></a-icon>
                        </a-col>
                        <a-col :span='12' >
                            <a-icon type='hdd' class='inetsingle'></a-icon>
                        </a-col>
                    </a-row>
                </a-col>
                <a-col :xs='14' :sm='14' :md='14' :lg='14' :xl='5'>
                    <div class="inet inettop">
                        <p>iSCSI服务：<span class='val'>10.0.2.0/24</span></p>
                        <p>存储集群：<span class="val">10.0.2.0/24</span></p>
                    </div>
                </a-col>
                <a-col :xl='1' style="text-align:center;">
                    <a-icon type="double-right" class="decrtion"/>
                </a-col>
                <a-col :xs='24' :sm='24' :md='24' :lg='24' :xl='14' >
                    <a-row :gutter='8' class="inetdetail">
                        <p class="val" style="margin:0rem;">网卡信息</p>
                        <a-col :span='7' >
                            <a-col :span='12' class="dtitle">
                                设备名：
                            </a-col>
                            <a-col :span='12' class="dbody">
                                eno1
                            </a-col>
                        </a-col>
                        <a-col :span='10'>
                            <a-col :span='8' class="dtitle">
                                MAC：
                            </a-col>
                            <a-col :span='16' class="dbody">
                                ac:1f:6b:63:cc:48
                            </a-col>
                        </a-col>
                        <a-col :span='7'>
                            <a-col :span='10' class="dtitle">
                                速率：
                            </a-col>
                            <a-col :span='14' class="dbody">
                                1000
                            </a-col>
                        </a-col>
                        <a-col :span='7' >
                            <a-col :span='12' class="dtitle">
                                丢包：
                            </a-col>
                            <a-col :span='12' class="dbody">
                                0
                            </a-col>
                        </a-col>
                        <a-col :span='7' >
                            <a-col :span='12' class="dtitle">
                                MTI：
                            </a-col>
                            <a-col :span='12' class="dbody">
                                1500
                            </a-col>
                        </a-col>
                    </a-row>
                </a-col>
            </a-row>
        </a-row>
    </a-row>
</template>
<script>
export default {
    name:'Phycontent',
    data(){
        return{

        }
    }
}
</script>
<style>
.hdd{
    padding:1rem;
    border:2px solid #0785FD;
    margin:0 .3rem .5rem .3rem;
}
.inet{
    background-color:#E7F3FF;text-align:center;height:6rem;
}
.inetscroll{
    overflow-y:scroll
}
.inettop{
    padding-top:1.5rem;
}
.inetsingle{
    cursor:pointer;font-size:1.3rem;margin-top:1rem;color:#56ADFD
}
.val{
    color:#0785FD
}
.inetdetail{
    height:6rem;box-shadow:0px 1px 5px gray;border-left:3px solid #0785FD;padding:.5rem
}
.dtitle{
    background-color:#E6F4FF
}
.dbody{
    background-color:#F1F8FE;margin-bottom:.5rem;
}
.decrtion{
    color:#0785FD;line-height: 6rem;font-size: 1.5rem;font-weight: 700
}
</style>
