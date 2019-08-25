<template>
    <a-card title="详细信息">
        <a-row :gutter='8'>
            <a-col :xs='24' :sm='24' :md='24' :lg='12' :xl='12' :xxl='12' >
                <p style="color:#0785FD">服务进程状态</p>
                <a-table :columns='sscolumns' :dataSource='ssdata' size='small' :pagination='pagination'></a-table>
            </a-col>
            <a-col :xs='24' :sm='24' :md='24' :lg='12' :xl='12' :xxl='12'>
                <p style="color:#0785FD">存储池</p>
                <a-table :columns='pcolumns' :dataSource='pdata' size='small' :pagination='pagination'></a-table>
            </a-col>
        </a-row>
        <a-row style='margin-top:1rem'>
            <div id='inodes'></div>
        </a-row>
    </a-card>
</template>
<script>
import DataSet from '@antv/data-set'
const sscolumns=[
    {title:'排位',dataIndex:'num',key:'num',sorter:(a,b)=>a.name.length - b.name.length},
    {title:'状态',dataIndex:'status',key:'status'},
    {title:'守护进程',dataIndex:'daemon',key:'daemon'},
    {title:'活跃度',dataIndex:'active',key:'active'},
    {title:'缓存',dataIndex:'cache',key:'cache'},
    {title:'文件索引',dataIndex:'index',key:'index'}
]
const pcolumns=[
    {title:'存储池名',dataIndex:'pool',key:'pool',sorter:(a,b)=>a.name.length - b.name.length},
    {title:'类型',dataIndex:'type',key:'type'},
    {title:'容量',dataIndex:'avli',key:'avli'},
    {title:'使用率',dataIndex:'usage',key:'usage'}
]
export default {
    name:'Detail',
    data(){
        return{
            sscolumns,
            pcolumns,
            pagination:{
                defaultPageSize:3,
                showTotal: total => `共 ${total} 条数据`,
                showSizeChanger:true,
                pageSizeOptions: ['3', '5', '10', '15'],
                onShowSizeChange:(current, pageSize)=>this.pageSize = pageSize
            },
            ssdata:[
                {key:'0',num:'001',status:'active',daemon:'nceph2',active:'Reqs:0/s',cache:'10',index:'10'},
                {key:'1',num:'001',status:'active',daemon:'nceph2',active:'Reqs:0/s',cache:'10',index:'10'},
                {key:'2',num:'001',status:'active',daemon:'nceph2',active:'Reqs:0/s',cache:'10',index:'10'},
                {key:'3',num:'001',status:'active',daemon:'nceph2',active:'Reqs:0/s',cache:'10',index:'10'},
                {key:'4',num:'001',status:'active',daemon:'nceph2',active:'Reqs:0/s',cache:'10',index:'10'},
                {key:'5',num:'001',status:'active',daemon:'nceph2',active:'Reqs:0/s',cache:'10',index:'10'},
                {key:'6',num:'001',status:'active',daemon:'nceph2',active:'Reqs:0/s',cache:'10',index:'10'},
                {key:'7',num:'001',status:'active',daemon:'nceph2',active:'Reqs:0/s',cache:'10',index:'10'}
            ],
            pdata:[
                {key:'0',pool:'datapool',type:'data',avli:'46.6G',usage:'50%'},
                {key:'1',pool:'datapool',type:'data',avli:'46.6G',usage:'50%'},
                {key:'2',pool:'datapool',type:'data',avli:'46.6G',usage:'50%'},
                {key:'3',pool:'datapool',type:'data',avli:'46.6G',usage:'50%'},
                {key:'4',pool:'datapool',type:'data',avli:'46.6G',usage:'50%'},
                {key:'5',pool:'datapool',type:'data',avli:'46.6G',usage:'50%'},
                {key:'6',pool:'datapool',type:'data',avli:'46.6G',usage:'50%'},
                {key:'7',pool:'datapool',type:'data',avli:'46.6G',usage:'50%'},
            ],
            inodedata : [{
                time: '2019/08/01 09:15:45',
                inodes: 13,
                req: 0.5
            }, {
                time: '2019/08/01 09:15:50',
                inodes: 10,
                req: 0.3
            }, {
                time: '2019/08/01 09:15:55',
                inodes: 11,
                req: 0.7
            }, {
                time: '2019/08/01 09:16:05',
                inodes: 7,
                req: 0.2
            }, {
                time: '2019/08/01 09:16:10',
                inodes: 8,
                req: 1.0
            }, {
                time: '2019/08/01 09:16:15',
                inodes: 9,
                req: -0.1
            }, {
                time: '2019/08/01 09:16:20',
                inodes: 4,
                req: -0.5
            }, {
                time: '2019/08/01 09:16:25',
                inodes: 5,
                req: 0.3
            }, {
                time: '2019/08/01 09:16:30',
                inodes: 6,
                req: 0.4
            }, {
                time: '2019/08/01 09:16:35',
                inodes: 7,
                req: -0.4
            }, {
                time: '2019/08/01 09:16:40',
                inodes: 8,
                req: 0.7
            }, {
                time: '2019/08/01 09:16:45',
                inodes: 9,
                req: -1.0
            }, {
                time: '2019/08/01 09:16:50',
                inodes: 10,
                req: 0.9
            }, {
                time: '2019/08/01 09:16:55',
                inodes: 7,
                req: 1.0
            }]
        }   
    },
    mounted(){
        this.drawindes()
        //再初始化之后调整图表的大小自适应
        const e = document.createEvent('Event')
        e.initEvent('resize', true, true)
        window.dispatchEvent(e)
    },
    methods:{
        drawindes(){
            var chart = new G2.Chart({
                container: 'inodes',
                forceFit: true,
                height: 300,
                padding:[25,30,28,40]
            });
            var ds = new DataSet();
            var dv = ds.createView().source(this.inodedata);
            dv.transform({
                type:'filter',
            })
            chart.source(dv,{
                time:{
                    type:'time',
                    tickCount:8,
                    mask:'hh:MM:ss'
                },
                inodes:{
                    alias:'mds_inodes:'
                },
                req:{
                    alias:'mds_server.handle_client_request:'
                }
            });
            chart.axis('inodes',{
                grid:null
            });
            chart.axis('req',{
                title:true
            });
            chart.legend({
                custom:true,
                position:'top-right',
                items:[{
                    value:'inodes',
                    marker:{
                        symbol:'circle',
                        fill:'l(100) 0:#FFD6E4 1:#FC0752',
                        radius:5
                    }
                },{
                    value:'req',
                    marker:{
                        symbol:'circle',
                        fill:'l(100) 0:#CDE7FE 1:#0785FD',
                        radius:5
                    }
                }]
            });
            chart.area().position('time*inodes').color('l(100) 0:#FFD6E4 1:#FC0752').opacity(0.85)
            chart.area().position('time*req').color('l(100) 0:#CDE7FE 1:#0785FD').opacity(0.85)
            chart.render()
        }
    }
}
</script>
