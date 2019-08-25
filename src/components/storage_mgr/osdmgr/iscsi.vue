<template>
<a-card >
    <a-row>
        <div style="margin:0 0 1em 0 ">
            <a-button type='primary' size='small'>客户端授权</a-button>
            <a-button type='primary' style="margin-left:1em" size='small'>取消客户端授权</a-button>
            <a-button type='primary' style="margin-left:1em" size='small'>分配Lun</a-button>
            <a-button type='primary' style="margin-left:1em" size='small'>删除Lun</a-button>
        </div>
        <a-table class='tabstyle' :columns="icolumns" :rowSelection='{selectedRowKeys:selectedRowKeys,onChange:onSelectChange}' :dataSource="idata" size="small" :pagination='pagination'>
        </a-table>
    </a-row>
</a-card>
</template>

<script>
import {
    setTimeout
} from 'timers';
const icolumns = [{
        title: "客户端名称",
        dataIndex: "name",
        key: "name",
        sorter: (a, b) => a.name.length - b.name.length,
    },
    {
        title: "创建时间",
        dataIndex: "time",
        key: "time"
    },
    {
        title:'Luns名',
        dataIndex:'luns',
        key:'luns'
    }
];
export default {
    name: "ISCSI",
    data() {
        return {
            icolumns,
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
            idata: [{
                    key: "0",
                    name: "zzzz",
                    time: "19:25:24",
                    luns: "pool/image"
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
