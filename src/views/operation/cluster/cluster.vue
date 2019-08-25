<template>
    <a-row style="margin:.5em">
        <a-card>
            <a-tabs defalutActiveKey='1' >
                <a-tab-pane tab='节点服务检查' key='1'>
                    <a-row class="check">
                        <a-col :xs='5' :sm='5' :md='5' :lg='5' :xl='3' style="text-aglin:center">
                            <img src='../../../../static/images/ic_rader.gif' class="gif">
                        </a-col>
                        <a-col :xs='7' :sm='7' :md='12' :lg='10' :xl='5' style="margin-top:2rem">
                            <h2><b>节点服务检查：</b></h2>
                            <p>Total: 61 passed , 2 failed , on 7 hosts</p>
                        </a-col>
                        <a-col :xs='{span:2,offset:2}' :sm='{span:2,offset:2}' :md='{span:2,offset:2}' :lg='{span:2,offset:6}' :xl='{span:2,offset:14}' style="margin-top:2rem">
                            <a-button type='primary'>立即扫描</a-button>
                        </a-col>
                    </a-row>
                    <a-row :gutter='8' style="margin:0">
                        <p class='val'>检查结果</p>
                        <a-col :span='8' v-for='a in clusterdata' style='margin-bottom:.5rem;'>
                            <div>
                                <a-collapse v-model="activeKey">
                                    <a-collapse-panel :header='a.title' :key='a.key'>
                                        <a-tabs type='card'>
                                            <a-tab-pane key='1' style="height:14.5rem">
                                                <span slot="tab">
                                                    <a-icon type="exclamation-circle" theme='filled' style="color:red" />
                                                    出错节点
                                                </span>
                                                <a-table :columns='errcolumns' :dataSource='a.data' size='small' :pagination='pagination'>
                                                    <template slot="einfo" slot-scope="text,record,index">
                                                        <a-tooltip placement="top">
                                                            <template slot="title">
                                                                <span>{{record.error}}</span>
                                                            </template>
                                                            <p class="tt">{{record.error}}</p>
                                                        </a-tooltip>
                                                    </template>
                                                </a-table>
                                            </a-tab-pane>
                                            <a-tab-pane key='2' style="height:14.5rem">
                                                <span slot="tab">
                                                    <a-icon type="check-circle" theme='filled' style="color:green" />
                                                    无误节点
                                                </span>
                                                <p style="background-color: #EFF0F4">节点</p>
                                                <a-row class='rightnode' :gutter='8'>
                                                    <a-col v-for='i in a.rightnum' :span='4'>
                                                        <p class='rnode'>ndoe1</p>
                                                    </a-col>
                                                </a-row>
                                            </a-tab-pane>
                                        </a-tabs>
                                    </a-collapse-panel>
                                </a-collapse>
                            </div>
                        </a-col>
                    </a-row>
                </a-tab-pane>
                <a-tab-pane tab='数据切片状态检测' key='2'>
                    <Cslice></Cslice>
                </a-tab-pane>
            </a-tabs>
        </a-card>
    </a-row>
</template>
<script>
import Cslice from '../../../components/operation/cluster/slice'
const errcolumns=[
    {title:'存储池名',dataIndex:'node',key:'node',sorter:(a,b)=>a.node.length - b.node.length,width:150},
    {title:'类型',dataIndex:'error',key:'error',scopedSlots:{customRender:'einfo'}}
]
export default {
    name:'cluster',
    components:{Cslice},
    data(){
        return{
            activeKey:['1','2','3','4','5'],
            errcolumns,
            pagination:{
                defaultPageSize:3,
                showTotal:total=>`共${total}条数据`,
                onShowSizeChange:(current,pageSize)=>this.pageSize = pageSize
            },
            clusterdata:[
                {
                    key:'1',title:'MGRs',data:[
                        {key:'0',node:'node1',error:'(1)asdsadasdsvzvjhhcxgvxcjbc hvjzxcgfjsdhfjjhjhfffgsdjfgjhGChjgg'},
                        {key:'1',node:'node2',error:'(1)asdsadasdsvzvjhhcxgvxcjbc hvjzxcgfjsdhfjjhjhfffgsdjfgjhGChjgg'},
                        {key:'2',node:'node3',error:'(1)asdsadasdsvzvjhhcxgvxcjbc hvjzxcgfjsdhfjjhjhfffgsdjfgjhGChjgg'},
                        {key:'3',node:'node4',error:'(1)asdsadasdsvzvjhhcxgvxcjbc hvjzxcgfjsdhfjjhjhfffgsdjfgjhGChjgg'},
                    ],rightnum:10
                },
                {
                    key:'2',title:'OSDs',data:[
                        {key:'0',node:'node5',error:'(1)asdsadasdsvzvjhhcxgvxcjbc hvjzxcgfjsdhfjjhjhfffgsdjfgjhGChjgg'},
                        {key:'1',node:'node6',error:'(1)asdsadasdsvzvjhhcxgvxcjbc hvjzxcgfjsdhfjjhjhfffgsdjfgjhGChjgg'},
                        {key:'2',node:'node7',error:'(1)asdsadasdsvzvjhhcxgvxcjbc hvjzxcgfjsdhfjjhjhfffgsdjfgjhGChjgg'},
                        {key:'3',node:'node8',error:'(1)asdsadasdsvzvjhhcxgvxcjbc hvjzxcgfjsdhfjjhjhfffgsdjfgjhGChjgg'},
                    ],rightnum:20
                },
                {
                    key:'3',title:'MONs',data:[
                        {key:'0',node:'node9',error:'(1)asdsadasdsvzvjhhcxgvxcjbc hvjzxcgfjsdhfjjhjhfffgsdjfgjhGChjgg'},
                        {key:'1',node:'node10',error:'(1)asdsadasdsvzvjhhcxgvxcjbc hvjzxcgfjsdhfjjhjhfffgsdjfgjhGChjgg'},
                        {key:'2',node:'node11',error:'(1)asdsadasdsvzvjhhcxgvxcjbc hvjzxcgfjsdhfjjhjhfffgsdjfgjhGChjgg'},
                        {key:'3',node:'node12',error:'(1)asdsadasdsvzvjhhcxgvxcjbc hvjzxcgfjsdhfjjhjhfffgsdjfgjhGChjgg'},
                    ],rightnum:30
                },
                {
                    key:'4',title:'MDSs',data:[
                        {key:'0',node:'node13',error:'(1)asdsadasdsvzvjhhcxgvxcjbc hvjzxcgfjsdhfjjhjhfffgsdjfgjhGChjgg'},
                        {key:'1',node:'node14',error:'(1)asdsadasdsvzvjhhcxgvxcjbc hvjzxcgfjsdhfjjhjhfffgsdjfgjhGChjgg'},
                        {key:'2',node:'node15',error:'(1)asdsadasdsvzvjhhcxgvxcjbc hvjzxcgfjsdhfjjhjhfffgsdjfgjhGChjgg'},
                        {key:'3',node:'node16',error:'(1)asdsadasdsvzvjhhcxgvxcjbc hvjzxcgfjsdhfjjhjhfffgsdjfgjhGChjgg'},
                    ],rightnum:20
                },
                {
                    key:'5',title:'Rados Gateways',data:[
                        {key:'0',node:'node17',error:'(1)asdsadasdsvzvjhhcxgvxcjbc hvjzxcgfjsdhfjjhjhfffgsdjfgjhGChjgg'},
                        {key:'1',node:'node18',error:'(1)asdsadasdsvzvjhhcxgvxcjbc hvjzxcgfjsdhfjjhjhfffgsdjfgjhGChjgg'},
                        {key:'2',node:'node19',error:'(1)asdsadasdsvzvjhhcxgvxcjbc hvjzxcgfjsdhfjjhjhfffgsdjfgjhGChjgg'},
                        {key:'3',node:'node20',error:'(1)asdsadasdsvzvjhhcxgvxcjbc hvjzxcgfjsdhfjjhjhfffgsdjfgjhGChjgg'},
                    ],rightnum:10
                },
            ]
        }
    }
}
</script>
<style>
.ant-tabs-bar{
    margin:0 !important
}
.check{
    background-color:#E7F3FF;height:8rem;
}
.val{
    color:#2B91FE;margin-top:1rem;font-weight: 700
}
.ant-collapse-content > .ant-collapse-content-box{
    padding:5px !important
}
.smileDark {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: inline-block;
  width: 100px;
}
.ant-collapse{
border:2px solid #2B91FE;

}
.tt{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    cursor: pointer;
    width: 250px;
}
.gif{
    padding:.5rem 1rem ; width:90%
}
.rightnode{
    overflow-y: scroll;
    /* background-color: #EFF0F4 */
}
.rnode{
    background-color: #F2F8FE;
    padding:.5rem;
}
</style>