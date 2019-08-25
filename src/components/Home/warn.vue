<template>
<a-row style="margin:.5em 0">
    <a-card hoverable>
        <p><b>警报信息</b></p>
        <a-table :columns='warncolumns' :dataSource='warndata' size='small' :pagination='false' :scroll='{y:265}' :rowClassName='setClass'>
            <span slot="rank" slot-scope='rank'>
                <a-badge status="error" v-show='rank == "紧急"'/>
                <a-badge status="warning" v-show='rank == "较急"'/>
                <a-badge status="default" v-show='rank == "一般"'/>
                {{rank}}
            </span>
        </a-table>
    </a-card>
    </a-row>
</template>
<script>
const warncolumns=[
    {title:'警报原因',dataIndex:'cause',key:'cause',width:200},
    {title:'发生时间',dataIndex:'time',key:'time',width:150},
    {title:'紧急级别',dataIndex:'rank',key:'rank',width:100,scopedSlots:{customRender:'rank'}}
]
export default {
    name:'Warn',
    data(){
        return{
            warncolumns,
            warndata:[
                {key:'0',cause:'磁盘不在位',time:'2019.04.06 12:50:45',rank:'紧急'},
                {key:'1',cause:'磁盘不在位',time:'2019.04.06 12:50:45',rank:'较急'},
                {key:'2',cause:'磁盘不在位',time:'2019.04.06 12:50:45',rank:'一般'},
                {key:'3',cause:'磁盘不在位',time:'2019.04.06 12:50:45',rank:'紧急'},
                {key:'4',cause:'磁盘不在位',time:'2019.04.06 12:50:45',rank:'紧急'},
                {key:'5',cause:'磁盘不在位',time:'2019.04.06 12:50:45',rank:'紧急'},
                {key:'6',cause:'磁盘不在位',time:'2019.04.06 12:50:45',rank:'紧急'},
                {key:'7',cause:'磁盘不在位',time:'2019.04.06 12:50:45',rank:'紧急'},
                {key:'8',cause:'磁盘不在位',time:'2019.04.06 12:50:45',rank:'紧急'},
                {key:'9',cause:'磁盘不在位',time:'2019.04.06 12:50:45',rank:'紧急'},
            ]
        }
    },
    mounted(){
        
    },
    methods:{
        setClass(record,index){
            return (record.rank === '紧急'?'redbg':record.rank === '较急'?'purplebg':record.rank === '一般'?'greenbg':'')
        }
    }
}
</script>
<style >
.redbg{
    background-color: #FFEAEF;padding:.5rem
}
.purplebg{
    background-color: #F0F0FC
}
.greenbg{
    background-color: #E6F8F8
}
</style>
