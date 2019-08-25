<template>
    <a-row style="margin:.5em">
        <a-card>
            <a-tabs defaultActiveKey='1'>
                <a-tab-pane tab='扩容' key='1'>
                    <p class="val">磁盘</p>
                    <a-table class="tabstyle" :columns='exclolumns' :dataSource='exdata' size='small' :pagination='pagination'>
                        <template slot="operation" slot-scope="text,record">
                            <a-button type='primary' size='small'>添加</a-button>
                        </template>
                        <template slot="task" slot-scope="task">
                            <a-tag :color="`${task=='等待中'?'#7A7A7A':task=='进行中'?'#2db7f5':task=='异常'?'#f50':task=='已完成'?'#87d068':''}`">
                                {{task}}
                            </a-tag>
                        </template>
                    </a-table>
                    <p class="val">节点</p>
                    <a-table class="tabstyle" :columns='nocolumns' :dataSource='nodata' size='small' :pagination='pagination'>
                        <template slot="ip" slot-scope='ip'>
                            <a-select :defaultValue='ip[0]' style="width:100%">
                                <a-select-option v-for='i in ip' :key='i'>{{i}}</a-select-option>
                            </a-select>
                        </template>
                        <template slot="taskstatus" slot-scope="taskstatus">
                            <a-tag :color="`${taskstatus=='等待中'?'#7A7A7A':taskstatus=='进行中'?'#2db7f5':taskstatus=='异常'?'#f50':taskstatus=='已完成'?'#87d068':''}`">
                                {{taskstatus}}
                            </a-tag>
                        </template>
                        <template slot="operation" slot-scope="text,record">
                            <a-button type='primary' size='small'>添加</a-button>
                        </template>
                    </a-table>
                </a-tab-pane>
                <a-tab-pane tab='缩容' key='2'>
                    <Shrinkage></Shrinkage>
                </a-tab-pane>
            </a-tabs> 
        </a-card>
    </a-row>
</template>
<script>
import Shrinkage from './shrinkage'
const exclolumns=[
    {title:'节点',dataIndex:'node',key:'node',sorter:(a,b)=> a.node.replace(/[a-zA-Z]*/, "") - b.node.replace(/[a-zA-Z]*/, "")},
    {title:'容量',dataIndex:'capacity',key:'capacity',sorter:(a,b)=> a.capacity - b.capacity},
    {title:'磁盘路径',dataIndex:'diskpath',key:'diskpath'},
    {title:'任务进度',dataIndex:'task',key:'task',scopedSlots:{customRender:'task'},
        filters:[{text:'等待中',value:'等待中'},{text:'进行中',value:'进行中'},{text:'异常',value:'异常'},{text:'已完成',value:'已完成'}],width: '20%',
        onFilter:(value,record)=>record.task.indexOf(value) === 0
    },
    {title:'操作',dataIndex:'opr',scopedSlots:{customRender:'operation'}}
]
const nocolumns=[
    {title:'IP',dataIndex:'ip',key:'ip',scopedSlots:{customRender:'ip'},width:150},
    {title:'节点',dataIndex:'node',key:'node'},
    {title:'磁盘路径',dataIndex:'diskpath',key:'diskpath'},
    {title:'任务进度',dataIndex:'taskstatus',key:'taskstatus',scopedSlots:{customRender:'taskstatus'},
        filters:[{text:'等待中',value:'等待中'},{text:'进行中',value:'进行中'},{text:'异常',value:'异常'},{text:'已完成',value:'已完成'}],
        onFilter:(value,record)=>record.task.indexOf(value) === 0
    },
    {title:'操作',dataIndex:'opr',scopedSlots:{customRender:'operation'}}
]
export default {
    name:'expend',
    components:{Shrinkage},
    data(){
        return{
            exclolumns,
            nocolumns,
            pagination:{
                defaultPageSize:5,
                showTotal:total => `共${total}条数据`,
                showSizeChanger:true,
                pageSizeOptions:['5','10','15','20'],
                onShowSizeChange:(current,pageSize)=>this.pageSize = pageSize
            },
            exdata:[
                {key:'1',node:'node1',capacity:'111',diskpath:'ddsads',task:'等待中'},
                {key:'2',node:'node4',capacity:'100',diskpath:'ddsads',task:'进行中'},
                {key:'3',node:'node3',capacity:'222',diskpath:'ddsads',task:'异常'},
                {key:'4',node:'node2',capacity:'100',diskpath:'ddsads',task:'已完成'}
            ],
            nodata:[
                {key:'1',ip:['192.168.1.1','192.168.2.1'],node:'node1',diskpath:'CPU型号：Intel(R) Xeno(R) CPU E5-2620 v3 @ 2.40GHz',taskstatus:'等待中'},
                {key:'2',ip:['192.168.1.1','192.168.2.1'],node:'node4',diskpath:'CPU型号：Intel(R) Xeno(R) CPU E5-2620 v3 @ 2.40GHz',taskstatus:'进行中'},
                {key:'3',ip:['192.168.1.1','192.168.2.1'],node:'node3',diskpath:'CPU型号：Intel(R) Xeno(R) CPU E5-2620 v3 @ 2.40GHz',taskstatus:'异常'},
                {key:'4',ip:['192.168.1.1','192.168.2.1'],node:'node2',diskpath:'CPU型号：Intel(R) Xeno(R) CPU E5-2620 v3 @ 2.40GHz',taskstatus:'已完成'},
                {key:'5',ip:['192.168.1.1','192.168.2.1'],node:'node5',diskpath:'CPU型号：Intel(R) Xeno(R) CPU E5-2620 v3 @ 2.40GHz',taskstatus:'已完成'},
                {key:'6',ip:['192.168.1.1','192.168.2.1'],node:'node6',diskpath:'CPU型号：Intel(R) Xeno(R) CPU E5-2620 v3 @ 2.40GHz',taskstatus:'已完成'}
            ]
        }
    }
}
</script>