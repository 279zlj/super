<template>
    <a-row style='margin:.5em'>
        <a-card title='OSD/磁盘管理'>
            <div style="margin-bottom:1rem">
            <a-dropdown>
                <a-menu slot="overlay" >
                    <a-menu-item key='1'>移入</a-menu-item>
                    <a-menu-item key='2'>移出</a-menu-item>
                    <a-menu-item key='3'>启用</a-menu-item>
                    <a-menu-item key='4'>停用</a-menu-item>
                    <a-menu-item key='5'>丢失</a-menu-item>
                    <a-menu-item key='6'>清除</a-menu-item>
                    <a-menu-item key='7'>销毁</a-menu-item>
                </a-menu>
                <a-button type='primary' size='small'>
                    清洗<a-icon type='down'></a-icon>
                </a-button>
            </a-dropdown>
            <a-button type='primary' size='small' style="margin-left:1em">深层清洗</a-button>
            <a-button type='primary' size='small' style="margin-left:1em">重设权重</a-button>
            <a-button type='primary' size='small' style="margin-left:1em">设置寿命</a-button>
            </div>
            <a-table class="bigtab" :columns='diskcolumns' :dataSource='diskdata' size='small' :pagination='pagination'>
                <template slot="status" slot-scope="status">
                    <a-tag :color='status[0] == "IN"?"#87d068":"#f50"'>{{status[0]}}</a-tag>
                    <a-tag :color='status[1] == "UP"?"#87d068":"#f50"'>{{status[1]}}</a-tag>
                </template>
            </a-table>
        </a-card>
    </a-row>
</template>
<script>
const diskcolumns=[
    {title:'节点',dataIndex:'node',key:'node'},
    {title:'OSD-ID',dataIndex:'osdid',key:'osdid'},
    {title:'状态',dataIndex:'status',key:'status',scopedSlots:{customRender:'status'}},
    {title:'PG状态',dataIndex:'pg',key:'pg'},
    {title:'容量',dataIndex:'capacity',key:'capacity'},
    {title:'使用率',dataIndex:'usage',key:'usage'},
    {title:'设备型号',dataIndex:'modal',key:'modal'},
    {title:'路径',dataIndex:'path',key:'path'},
    {title:'预计寿命',dataIndex:'pre',key:'pre'}
]
export default {
    name:'diskmgr',
    data(){
        return{
            diskcolumns,
            pagination:{
                defalutPageSize:10,
                showTotal:total => `共${total}条数据`,
                showSizeChanger:true,
                pageSizeOptions:['10','20','30','40'],
                onShowSizeChange:(current,pageSize)=>this.pageSize = pageSize
            },
            diskdata:[
                {key:'1',node:'node1',osdid:'114.114.144.144',status:['IN','UP'],pg:'64ativce-clean',capacity:'1.8TiB',usage:'40%',modal:'asdasdasdasdasdadasdadasdasd',path:'node20:sde',pre:'now'},
                {key:'2',node:'node2',osdid:'114.114.144.144',status:['IN','DOWN'],pg:'64ativce-clean',capacity:'1.8TiB',usage:'40%',modal:'asdasdasdasdasdadasdadasdasd',path:'node20:sde',pre:'now'},
                {key:'3',node:'node3',osdid:'114.114.144.144',status:['OUT','UP'],pg:'64ativce-clean',capacity:'1.8TiB',usage:'40%',modal:'asdasdasdasdasdadasdadasdasd',path:'node20:sde',pre:'now'}
            ]
        }
    }
}
</script>