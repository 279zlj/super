<template>
<a-card >
    <a-row>
        <div style="margin:0 0 1em 0 ">
            <a-button type='primary' size='small'>恢复</a-button>
            <a-button type='danger' style="margin-left:1em" size='small'>删除</a-button>
        </div>
        <a-table class='tabstyle' :columns="rcolumns" :rowSelection='{selectedRowKeys:selectedRowKeys,onChange:onSelectChange}' :dataSource="rdata" size="small" :pagination='pagination'>
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
    </a-row>
</a-card>
</template>

<script>
import {
    setTimeout
} from 'timers';
const rcolumns = [{
        title: "ID",
        dataIndex: "id",
        key: "id",
    },
    {
        title: "块设备名",
        dataIndex: "name",
        key: "name",
        sorter: (a, b) => a.name.length - b.name.length,
        scopedSlots: {
            filterDropdown: 'filterDropdown',
            filterIcon: 'filterIcon',
            customRender: 'customRender',
        },
        onFilter: (value, record) => record.name.toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: (visible) => {
            if (visible) {
                setTimeout(() => {
                    this.searchInput.focus()
                }, 0)
            }
        }
    },
    {
        title:'存储池名',
        dataIndex:'pools',
        key:'pools'
    },
    {
        title:'状态',
        dataIndex:'status',
        key:'status'
    },
    {
        title:'删除时间',
        dataIndex:'delete',
        key:'delete'
    }
];
export default {
    name: "Recycle",
    data() {
        return {
            rcolumns,
            searchText: '',
            searchInput: null,
            pagination:{
                defaultPageSize:5,
                showTotal: total => `共 ${total} 条数据`,
                showSizeChanger:true,
                pageSizeOptions: ['5', '10', '15', '20'],
                onShowSizeChange:(current, pageSize)=>this.pageSize = pageSize
            },
            selectedRowKeys:[],
            rdata: [{
                    key: "0",
                    id:'001',
                    name: "zzzz",
                    delete: "19:25:24",
                    pools: "pool/image",
                    status:'Expired at 2018.07.09-12:23:42'
                }
            ]
        }
    },
    methods: {
        handleSearch(selectedKeys, confirm) {
            confirm()
            this.searchText = selectedKeys[0]
        },

        handleReset(clearFilters) {
            clearFilters()
            this.searchText = ''
        },
        onSelectChange (selectedRowKeys) {
        console.log(selectedRowKeys);
        this.selectedRowKeys = selectedRowKeys
        }
        
    }
};
</script>
