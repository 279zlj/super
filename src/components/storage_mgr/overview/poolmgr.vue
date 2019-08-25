<template>
<a-card hoverable title="存储池">
    <a-row>
        <div style="margin:0 0 1em 0 ">
            <a-button type='primary' size='small'>新增</a-button>
            <a-button type='primary' style="margin-left:1em" size='small'>编辑</a-button>
            <a-button type='danger' style="margin-left:1em" size='small'>删除</a-button>
        </div>
        <a-table class='tabstyle' :columns="poolcolumns" :rowSelection='{selectedRowKeys:selectedRowKeys,onChange:onSelectChange}' :dataSource="pooldata" size="small" :pagination='pagination'>
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
            <span slot="usage" slot-scope="usage">
                <a-tooltip :title="usage+'%'">
                    <a-progress :percent='usage' status='active' :showInfo="false"></a-progress>
                </a-tooltip>
            </span>
            <template  slot="readnum" slot-scope='readnum'>
                <div :id='readnum.key'></div>
            </template>
            <template  slot="writenum" slot-scope='writenum'>
                <div :id='writenum.key'></div>
            </template>
        </a-table>
    </a-row>
</a-card>
</template>

<script>
import {
    setTimeout
} from 'timers';
const poolcolumns = [{
        title: "存储池名",
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
        title: "类型",
        dataIndex: "type",
        key: "type",
        width:60
    },
    {
        title: "应用类型",
        dataIndex: "application",
        key: "application"
    },
    {
        title: "PG状态",
        dataIndex: "pgstatus",
        key: "pgstatus"
    },
    {
        title: "副本个数",
        dataIndex: "copynum",
        key: "copynum"
    },
    {
        title: "Last Change",
        dataIndex: "last",
        key: "last"
    },
    {
        title: "纠删码配置",
        dataIndex: "erasure",
        key: "erasure"
    },
    {
        title: "CRUSH规则集",
        dataIndex: "crush",
        key: "crush"
    },
    {
        title: "使用率",
        dataIndex: "usage",
        key: "usage",
        scopedSlots:{customRender:'usage'}
    },
    {
        title: "读字节数",
        dataIndex: "readnum",
        key: "readnum",
        scopedSlots:{customRender:'readnum'}
    },
    {
        title: "写字节数",
        dataIndex: "writenum",
        key: "writenum",
        scopedSlots:{customRender:'writenum'}
    },
    {
        title: "读请求数",
        dataIndex: "readreq",
        key: "readreq"
    },
    {
        title: "写请求数",
        dataIndex: "writereq",
        key: "writereq"
    }
];
export default {
    name: "Poolmgr",
    data() {
        return {
            poolcolumns,
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
            pooldata: [{
                    key: "0",
                    name: "zzzz",
                    type: "replicated",
                    application: "rgw",
                    pgstatus: "8 active+clean",
                    copynum: "3",
                    last: "29",
                    erasure: "pro2",
                    crush: "replicated_rule",
                    usage: 24,
                    readnum: {key:'r0',
                    data:[{
                    'timeindex': '19:21:32',
                    'value': 17
                    }, {
                    'timeindex': '19:21:34',
                    'value': 84
                    }, {
                    'timeindex': 3,
                    'value': 31
                    }, {
                    'timeindex': 4,
                    'value': 59
                    }, {
                    'timeindex': 5,
                    'value': 69
                    }, {
                    'timeindex': 6,
                    'value': 14
                    }, {
                    'timeindex': 7,
                    'value': 74
                    }, {
                    'timeindex': 8,
                    'value': 56
                    }, {
                    'timeindex': 9,
                    'value': 33
                    }, {
                    'timeindex': 10,
                    'value': 22
                    }, {
                    'timeindex': 11,
                    'value': 79
                    }, {
                    'timeindex': 12,
                    'value': 92
                    }, {
                    'timeindex': 13,
                    'value': 11
                    }, {
                    'timeindex': 14,
                    'value': 9
                    }, {
                    'timeindex': 15,
                    'value': 87
                    }, {
                    'timeindex': 16,
                    'value': 26
                    }, {
                    'timeindex': 17,
                    'value': 29
                    }, {
                    'timeindex': 18,
                    'value': 87
                    }, {
                    'timeindex': 19,
                    'value': 74
                    }, {
                    'timeindex': 20,
                    'value': 89
                    }]},
                    writenum: {key:'w0',
                    data:[{
                    'timeindex': 1,
                    'value': 17
                    }, {
                    'timeindex': 2,
                    'value': 84
                    }, {
                    'timeindex': 3,
                    'value': 31
                    }, {
                    'timeindex': 4,
                    'value': 59
                    }, {
                    'timeindex': 5,
                    'value': 69
                    }, {
                    'timeindex': 6,
                    'value': 14
                    }, {
                    'timeindex': 7,
                    'value': 74
                    }, {
                    'timeindex': 8,
                    'value': 56
                    }, {
                    'timeindex': 9,
                    'value': 33
                    }, {
                    'timeindex': 10,
                    'value': 22
                    }, {
                    'timeindex': 11,
                    'value': 79
                    }, {
                    'timeindex': 12,
                    'value': 92
                    }, {
                    'timeindex': 13,
                    'value': 11
                    }, {
                    'timeindex': 14,
                    'value': 9
                    }, {
                    'timeindex': 15,
                    'value': 87
                    }, {
                    'timeindex': 16,
                    'value': 26
                    }, {
                    'timeindex': 17,
                    'value': 29
                    }, {
                    'timeindex': 18,
                    'value': 87
                    }, {
                    'timeindex': 19,
                    'value': 74
                    }, {
                    'timeindex': 20,
                    'value': 89
                    }]},
                    readreq: "0/s",
                    writereq: "0/s"
                }
            ]
        }
    },
    mounted(){
        for(let i =0;i<this.pooldata.length;i++){
            this.createMiniLineChart(this.pooldata[i].readnum)
            this.createMiniLineChart(this.pooldata[i].writenum)
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
        },
        createMiniLineChart(source) {
            var chart = new G2.Chart({
            container: source.key,
            forceFit: true,
            height: 30,
            padding: [5, 5, 5, 5]
            });
            chart.source(source.data);
            chart.legend(false);
            chart.axis(false);
            chart.tooltip({
            type: 'mini'
            });
            chart.area().position('timeindex*value').shape('smooth').opacity(0.2);
            chart.line().position('timeindex*value').opacity(1).shape('smooth');
            chart.render();
        },
        
    }
};
</script>
