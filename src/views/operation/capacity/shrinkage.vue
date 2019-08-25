<template>
    <a-row>
        <p class="val">磁盘</p>
        <a-table class="tabstyle" :columns='shclolumns' :dataSource='shdata' size='small' :pagination='pagination'>
            <template slot="operation" slot-scope="text,record">
                <a-button type='danger' size='small'>删除</a-button>
            </template>
            <template slot="task" slot-scope="task">
                <a-tag :color="`${task=='等待中'?'#7A7A7A':task=='进行中'?'#2db7f5':task=='异常'?'#f50':task=='已完成'?'#87d068':''}`">
                    {{task}}
                </a-tag>
            </template>
        </a-table>
        <p class="val">节点</p>
        <a-table class="tabstyle" :columns='snocolumns' :dataSource='snodata' size='small' :pagination='pagination'>
            <template slot="taskstatus" slot-scope="taskstatus">
                <a-tag :color="`${taskstatus=='等待中'?'#7A7A7A':taskstatus=='进行中'?'#2db7f5':taskstatus=='异常'?'#f50':taskstatus=='已完成'?'#87d068':''}`">
                    {{taskstatus}}
                </a-tag>
            </template>
            <template slot="operation" slot-scope="text,record">
                <a-button type='danger' size='small'>删除</a-button>
            </template>
        </a-table>
    </a-row>
</template>
<script>
const shclolumns=[
    {title:'节点',dataIndex:'node',key:'node',sorter:(a,b)=> a.node.replace(/[a-zA-Z]*/, "") - b.node.replace(/[a-zA-Z]*/, "")},
    {title:'OSD_ID',dataIndex:'osdid',key:'osdid'},
    {title:'磁盘路径',dataIndex:'diskpath',key:'diskpath'},
    {title:'任务状态',dataIndex:'task',key:'task',scopedSlots:{customRender:'task'},
        filters:[{text:'等待中',value:'等待中'},{text:'进行中',value:'进行中'},{text:'异常',value:'异常'},{text:'已完成',value:'已完成'}],
        onFilter:(value,record)=>record.task.indexOf(value) === 0
    },
    {title:'操作',dataIndex:'opr',scopedSlots:{customRender:'operation'}}
]
const snocolumns=[
    {title:'节点',dataIndex:'node',key:'node',sorter:(a,b)=> a.node.replace(/[a-zA-Z]*/, "") - b.node.replace(/[a-zA-Z]*/, "")},
    {title:'提供的服务',dataIndex:'service',key:'service'},
    {title:'任务进度',dataIndex:'taskstatus',key:'taskstatus',scopedSlots:{customRender:'taskstatus'},
        filters:[{text:'等待中',value:'等待中'},{text:'进行中',value:'进行中'},{text:'异常',value:'异常'},{text:'已完成',value:'已完成'}],
        onFilter:(value,record)=>record.taskstatus.indexOf(value) === 0
    },
    {title:'操作',dataIndex:'opr',scopedSlots:{customRender:'operation'}}
]
export default {
    name:'shrinkage',
    data(){
        return{
            shclolumns,
            snocolumns,
            pagination:{
                defaultPageSize:5,
                showTotal:total => `共${total}条数据`,
                showSizeChanger:true,
                pageSizeOptions:['5','10','15','20'],
                onShowSizeChange:(current,pageSize)=>this.pageSize = pageSize
            },
            shdata:[
                {key:'1',node:'node3',osdid:'OSD-114.114.114.114',diskpath:'ddsads',task:'等待中'},
                {key:'2',node:'node2',osdid:'OSD-114.114.114.114',diskpath:'ddsads',task:'进行中'},
                {key:'3',node:'node1',osdid:'OSD-114.114.114.114',diskpath:'ddsads',task:'异常'},
                {key:'4',node:'node4',osdid:'OSD-114.114.114.114',diskpath:'ddsads',task:'已完成'}
            ],
            snodata:[
                {key:'1',node:'node1',service:'mds,mgr,mon,osd',taskstatus:'等待中'},
                {key:'2',node:'node4',service:'mds,mgr,mon,osd',taskstatus:'进行中'},
                {key:'3',node:'node3',service:'mds,mgr,mon,osd',taskstatus:'异常'},
                {key:'4',node:'node2',service:'mds,mgr,mon,osd',taskstatus:'已完成'},
                {key:'5',node:'node5',service:'mds,mgr,mon,osd',taskstatus:'已完成'},
                {key:'6',node:'node6',service:'mds,mgr,mon,osd',taskstatus:'已完成'}
            ]
        }
    }
}
</script>