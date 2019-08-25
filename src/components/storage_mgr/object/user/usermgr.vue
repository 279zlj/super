<template>
        <a-row style="margin-top:1rem">
            <a-col :xs='24' :sm='24' :md='24' :lg='24' :xl='24' :xxl='24'>
                <div style="margin:0 0 1em 0 ">
                    <a-button type='primary' size='small'>新增</a-button>
                    <a-button type='primary' size='small' style="margin-left:1em">编辑</a-button>
                    <a-button type='danger' style='margin-left:1em' size='small'>删除</a-button>
                </div>
                <a-table class="tabstyle" :columns='usercolumns' :dataSource='userdata' :pagination='pagination' size='small'></a-table>
            </a-col>
            <a-col :xs='24' :sm='24' :md='24' :lg='24' :xl='24' :xxl='24'>
                <div class="card-container" id='content'>
                <a-tabs type='card'>
                    <a-tab-pane tab='详细信息' key='1'>
                        <Detail></Detail>
                    </a-tab-pane>
                    <a-tab-pane tab='密钥' key='2'>

                    </a-tab-pane>
                </a-tabs>
                </div>
            </a-col>
        </a-row>    
</template>
<script>
import Detail from './detail/detail'
const usercolumns=[
    {title:'用户名',dataIndex:'name',key:'name',sorter:(a,b)=>a.name.length - b.name.length},
    {title:'昵称',dataIndex:'nickname',key:'nickname'},
    {title:'邮件地址',dataIndex:'email',key:'email'},
    {title:'状态',dataIndex:'status',key:'status'},
    {title:'存储桶个数上限',dataIndex:'num',key:'num'},
    {title:'默认存储区域',dataIndex:'area',key:'area'}
]
export default {
    name:'User',
    components:{Detail},
    data(){
        return{
            usercolumns,
            pagination:{
                defaultPageSize:5,
                showTotal: total => `共 ${total} 条数据`,
                showSizeChanger:true,
                pageSizeOptions: ['5', '15', '20', '25'],
                onShowSizeChange:(current, pageSize)=>this.pageSize = pageSize
            },
            userdata:[
                {key:'0',name:'asdas',nickname:'active',email:'nceph2',status:'Reqs:0/s',num:'10',area:'10'}
            ]
        }
    },
    methods:{
        callback (key) {
        console.log(key)
        },
    }
}
</script>
<style>
#content{
    border-left:3px solid #0785FD;
    height:20em;
    box-shadow:5px 2px 11px #DEDEDE
}
</style>
