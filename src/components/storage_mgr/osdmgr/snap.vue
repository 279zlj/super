<template>
<a-card >
    <a-row>
        <div style="margin:0 0 1em 0 ">
            <a-button type='primary' size='small'>新增</a-button>
            <a-button type='primary' style="margin-left:1em" size='small'>重命名</a-button>
            <a-button type='primary' style="margin-left:1em" size='small'>保护/解除保护</a-button>
            <a-button type='primary' style="margin-left:1em" size='small'>克隆</a-button>
            <a-button type='primary' style="margin-left:1em" size='small'>复制</a-button>
            <a-button type='danger' style="margin-left:1em" size='small'>回滚</a-button>
            <a-button type='danger' style="margin-left:1em" size='small'>删除</a-button>
        </div>
        <a-table class='tabsmall' :columns="snapcolumns" :rowSelection='{selectedRowKeys:selectedRowKeys,onChange:onSelectChange}' :dataSource="snapdata" size="small" :pagination='pagination'>
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
            <span slot="status" slot-scope='status'>
                <a-tag :color="status== 'PROTECT'?'green':'red'">{{status}}</a-tag>
            </span>
        </a-table>
    </a-row>
</a-card>
</template>

<script>
import {
    setTimeout
} from 'timers';
const snapcolumns = [{
        title: "快照名",
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
        title: "容量",
        dataIndex: "avli",
        key: "avli"
    },
    {
        title: "供给容量",
        dataIndex: "supply",
        key: "supply"
    },
    {
        title: "状态",
        dataIndex: "status",
        key: "status",
        scopedSlots:{customRender:'status'}
    },
    {
        title: "创建时间",
        dataIndex: "time",
        key: "time"
    }
];
export default {
    name: "Snap",
    data() {
        return {
            snapcolumns,
            searchText: '',
            searchInput: null,
            pagination:{
                defaultPageSize:3,
                showTotal: total => `共 ${total} 条数据`,
                showSizeChanger:true,
                pageSizeOptions: ['3', '5', '10', '15'],
                onShowSizeChange:(current, pageSize)=>this.pageSize = pageSize
            },
            selectedRowKeys:[],
            snapdata: [{
                    key: "0",
                    name: "zzzz",
                    avli: "3243G",
                    supply: "123G",
                    status: "PROTECT",
                    time: "19:25:24",
                },
                {
                    key: "1",
                    name: "zzzz",
                    avli: "3243G",
                    supply: "123G",
                    status: "PROTECT",
                    time: "19:25:24",
                },
                {
                    key: "2",
                    name: "zzzz",
                    avli: "3243G",
                    supply: "123G",
                    status: "PROTECT",
                    time: "19:25:24",
                },
                {
                    key: "3",
                    name: "zzzz",
                    avli: "3243G",
                    supply: "123G",
                    status: "PROTECT",
                    time: "19:25:24",
                },
                {
                    key: "4",
                    name: "zzzz",
                    avli: "3243G",
                    supply: "123G",
                    status: "PROTECT",
                    time: "19:25:24",
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
