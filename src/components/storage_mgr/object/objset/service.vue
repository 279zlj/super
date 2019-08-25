<template>
    <div>
        <p style="color:#0785FD">服务状态</p>
        <a-table class='tabstyle' :columns='sercolumns' :dataSource='serdata' size='small' :pagination='pagination'>
            <div slot="filterDropdown" slot-scope="{ setSelectedKeys, selectedKeys, confirm, clearFilters, column }" class='custom-filter-dropdown'>
                <a-input v-ant-ref="c => searchInput = c" :placeholder="`Search ${column.dataIndex}`" :value="selectedKeys[0]" @change="e => setSelectedKeys(e.target.value ? [e.target.value] : [])" @pressEnter="() => handleSearch(selectedKeys, confirm)" style="width: 188px; margin-bottom: 8px; display: block;" />
                <a-button type='primary' @click="() => handleSearch(selectedKeys, confirm)" icon="search" size="small" style="width: 90px; margin-right: 8px">Search</a-button>
                <a-button @click="() => handleReset(clearFilters)" size="small" style="width: 90px">Reset</a-button>
            </div>
            <a-icon slot="filterIcon" slot-scope="filtered" type='search' :style="{ color: filtered ? '#108ee9' : undefined }" />
            <template slot="customRender" slot-scope="text">
                <span v-if='searchText'>
                    <template v-for="(fragment, i) in text.toString().split(new RegExp(`(?<=${searchText})|(?=${searchText})`, 'i'))">
                        <mark v-if="fragment.toLowerCase() === searchText.toLowerCase()" :key="i" class="highlight">{{fragment}}</mark>
                        <template v-else>{{fragment}}</template>
                    </template>
                </span>
                <template v-else>{{text}}</template>
            </template>
        </a-table>
    </div>
</template>
<script>
const sercolumns=[
    {title:'ID',dataIndex:'id',key:'id'},
    {title:'主机名',dataIndex:'host',key:'host',
    sorter:(a,b)=>a.host.length - b.host.length,
    scopedSlots: {
        filterDropdown: 'filterDropdown',
        filterIcon: 'filterIcon',
        customRender: 'customRender',
    },
    onFilter: (value, record) => record.host.toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: (visible) => {
        if (visible) {
            setTimeout(() => {
                this.searchInput.focus()
            }, 0)
        }
    }
    },
    {title:'端口',dataIndex:'port',key:'port' },
    {title:'类型',dataIndex:'type',key:'type'}
]
export default {
    name:'service',
    data(){
        return{
            sercolumns,
            searchText: '',
            searchInput: null,
            pagination:{
                defaultPageSize:5,
                showTotal: total => `共 ${total} 条数据`,
                showSizeChanger:true,
                pageSizeOptions: ['5', '10', '15', '20'],
                onShowSizeChange:(current, pageSize)=>this.pageSize = pageSize
            },
            serdata:[
                {id:'001',host:'node1',port:'2423',type:'beast'},
                {id:'002',host:'node2',port:'324',type:'beast'}
            ]
        }
    },
    methods:{
        handleSearch(selectedKeys, confirm) {
            confirm()
            this.searchText = selectedKeys[0]
        },

        handleReset(clearFilters) {
            clearFilters()
            this.searchText = ''
        },
    }
}
</script>