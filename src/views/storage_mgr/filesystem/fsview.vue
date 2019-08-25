<template>
    <a-row>
        <a-row class='mytitle'>
            <a-icon type='hdd' style="margin:0 .5rem 0 0"/>文件系统
        </a-row>
        <a-row style="margin:1em;">
            <a-card hoverable>
                <a-tabs defaultActiveKey='1' >
                    <a-tab-pane tab='概况' key='1'>
                        <p style="color:#0785FD;" class="tabs-top">文件系统</p>
                        <a-table :columns='fscolumns' :dataSource='fsdata' size='small' :pagination='false ' ></a-table>
                        <Detail style="margin-top:1rem"></Detail>
                    </a-tab-pane>
                    <a-tab-pane tab='存储管理' key='2'>

                    </a-tab-pane>
                </a-tabs>
            </a-card>
        </a-row>
    </a-row>
</template>
<script>
import Topbar from '../../../components/common/Topbar'
import Menubar from '../../../components/common/Menubar'
import Detail from '../../../components/storage_mgr/filesystem/detail'
const fscolumns=[
    {title:'文件名',dataIndex:'name',key:'name',sorter:(a,b) => a.name.length - b.name.length},
    {title:'创建时间',dataIndex:'time',key:'time'},
    {title:'状态',dataIndex:'status',key:'status'}
]
export default {
    name:'fsview',
    components:{Topbar,Menubar,Detail},
    data(){
        return{
            fscolumns,
            fsdata:[
                {name:'data',time:'2019-08-07-12:25:12',status:'True'}
            ]
        }
    }
}
</script>
