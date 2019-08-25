<template>
    <a-row>
        <a-row>
            <a-card hoverable>
                <a-row>
                    <a-col :span='12'>
                        <a-col :span='6'>
                        <a-icon type="hdd" style="font-size:2.5em;color: #0785FD;" />
                        </a-col>
                        <a-col :span='18'>
                        <span class="block main">使用率：50%</span>
                        <span class="block">总频率：105.6GHz</span>
                        </a-col>
                    </a-col>
                    <a-col :span='12'>
                        <a-col :span='6'>
                        <a-icon type="hdd" style="font-size:2.5em;color: #0785FD;" />
                        </a-col>
                        <a-col :span='18'>
                        <span class="block main">使用率：50%</span>
                        <span class="block">总内存：256GB</span>
                        </a-col>
                    </a-col>
                </a-row>
                <a-row style="margin-top:.8em">
                    <a-table :columns='cpucolums' :dataSource='cpudata' :pagination='false ' :scroll='{y:100}' size='small' rowKey='key'></a-table>
                </a-row>
            </a-card>
            <a-card hoverable style="margin-top:.5em">
                <a-row>
                    <a-col :span='24'>
                        <a-col :span='3'>
                        <a-icon type="hdd" style="font-size:2.5em;color: #0785FD;" />
                        </a-col>
                        <a-col :span='18'>
                        <span class="block main">使用率：50%</span>
                        <span class="block">总容量：1.5TB</span>
                        </a-col>
                    </a-col>
                </a-row>
                <a-row style="margin-top:.8em">
                    <a-row :gutter='8'>
                        <a-col :span='8' v-for='(d,index) in diskdata' :key='index' style="margin:.22em 0">
                            <a-col :span='10' style="background-color:#E6F4FF">
                                {{d.name}}
                            </a-col>
                            <a-col :span='14' style="background-color:#F1F8FF;text-align:center">
                                {{d.speed}}
                            </a-col>
                        </a-col>
                    </a-row>
                </a-row>
            </a-card>
            <a-card hoverable style="margin-top:.5em">
                <a-row>
                    <a-col :span='12'>
                        <a-col :span='6'>
                        <a-icon type="hdd" style="font-size:2.5em;color: #0785FD;" />
                        </a-col>
                        <a-col :span='18'>
                        <span class="block main">问题网卡数：3个</span>
                        <span class="block">总网卡数：10个</span>
                        </a-col>
                    </a-col>
                    <a-col :span='12' class='net'>
                        <a-col :span='6' v-for='(n,index) in netcard'>
                            <a-tooltip placement='top'>
                                <template slot='title'>
                                    <span>{{n.name}}</span>
                                </template>
                                <a-icon type="hdd" style="font-size:1.5em;color: #0785FD;text-align:center;margin:.5em 0" />
                            </a-tooltip>
                        </a-col>
                    </a-col>
                </a-row>
                <a-row style="margin-top:.8em" :gutter='8'>
                    <a-col :span='10'>
                        <a-row v-for='(n,index) in netdata' :key='index' style="margin:.5em 0">
                        <a-col :span='10' style="background-color:#E6F4FF">
                            {{n.name}}
                        </a-col>
                        <a-col :span='14' style="background-color:#F1F8FF;text-align:center">
                            {{n.status}}
                        </a-col>
                        </a-row>
                    </a-col>
                    <a-col :span='14'>
                        <a-table :columns='netcolums' :dataSource='allnet' :pagination='false ' :scroll='{y:100}' size='small'  rowKey='key'></a-table>
                    </a-col>
                </a-row>
            </a-card>
        </a-row>
    </a-row>
</template>
<script>
const cpucolums=[
    {title:'节点',dataIndex:'node',width:150},
    {title:'CPU使用率（%）',dataIndex:'cpuuse',width:150},
    {title:'内存使用率（%）',dataIndex:'menuse',width:150}
]
const netcolums=[
    {title:'主机',dataIndex:'node',width:150},
    {title:'网卡',dataIndex:'netcard',width:150},
    {title:'模式',dataIndex:'model',width:150}
]
export default {
    name:'Othermsg',
    data(){
        return{
            cpucolums,
            netcolums,
            cpudata:[
                {node:'node1',cpuuse:'10',menuse:'10',key:'0'},
                {node:'node2',cpuuse:'10',menuse:'10',key:'1'},
                {node:'node3',cpuuse:'10',menuse:'10',key:'2'},
                {node:'node4',cpuuse:'10',menuse:'10',key:'3'},
            ],
            diskdata:[
                {name:'写速度',speed:'21Kb/s'},
                {name:'总写量',speed:'21Kb/s'},
                {name:'总写耗时',speed:'2Day'},
                {name:'读速度',speed:'21Kb/s'},
                {name:'总读量',speed:'21Kb/s'},
                {name:'总读耗时',speed:'2Day'},
                {name:'等待时间',speed:'12Day'},
            ],
            netcard:[
                {name:'192.168.1.1'},
                {name:'192.168.1.2'},
                {name:'192.168.1.3'},
                {name:'192.168.1.4'},
                {name:'192.168.1.5'}
            ],
            netdata:[
                {name:'网卡匹配',status:'最佳'},
                {name:'连接数',status:'6524'},
                {name:'收总丢包',status:'0'},
                {name:'发总丢包',status:'0'},
                {name:'当前带宽',status:'10000Mbps/s'},
            ],
            allnet:[
                {node:'node1',netcard:'eno1',model:'1000',key:'0'},
                {node:'node2',netcard:'eno2',model:'1000',key:'1'},
                {node:'node3',netcard:'eno3',model:'1000',key:'2'},
            ]
        }
    }
}
</script>
<style>
.main{
    font-size: 1.1em;
    color: #0785FD;
    font-weight: 700;
}
.net{
    background-color:#E6F4FF;text-align:center;height:3em;overflow-y:scroll
}
</style>
