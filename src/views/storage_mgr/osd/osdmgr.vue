<template>
<a-row>
  <a-row class='mytitle'>
      <a-icon type='hdd' style="margin:0 .5rem 0 0"/>网络磁盘
  </a-row>
  <a-row style="margin:1em">
    <a-card title="块设备" hoverable>
      <div style="margin:0 0 1em 0 ">
        <a-button type="primary" size='small'>新增</a-button>
        <a-button type="primary" style="margin-left:1em" size='small'>编辑</a-button>
        <a-button type="primary" style="margin-left:1em" size='small'>复制</a-button>
        <a-button type="primary" style="margin-left:1em" size='small'>展开</a-button>
        <a-button type="danger" style="margin-left:1em" size='small'>删除</a-button>
        <a-button type="danger" style="margin-left:1em" size='small'>移至回收站</a-button>
      </div>
      <a-table class="tabstyle" :columns="osdcolumns" :dataSource="osddata" size="small" :rowSelection='{selectedRowKeys:selectedRowKeys,onChange:onSelectChange}' :pagination='pagination'>
          <div slot="filterDropdown" slot-scope="{ setSelectedKeys, selectedKeys, confirm, clearFilters, column }" class='custom-filter-dropdown'>
          <a-input
              v-ant-ref="c => searchInput = c"
              :placeholder="`Search ${column.dataIndex}`"
              :value="selectedKeys[0]"
              @change="e => setSelectedKeys(e.target.value ? [e.target.value] : [])"
              @pressEnter="() => handleSearch(selectedKeys, confirm)"
              style="width: 188px; margin-bottom: 8px; display: block;"
          />
          <a-button
              type='primary'
              @click="() => handleSearch(selectedKeys, confirm)"
              icon="search"
              size="small"
              style="width: 90px; margin-right: 8px"
          >Search</a-button>
          <a-button
              @click="() => handleReset(clearFilters)"
              size="small"
              style="width: 90px"
          >Reset</a-button>
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
    </a-card>
  </a-row>
  <a-row style="margin:1em">
    <a-card hoverable>
      <a-tabs defaultActiveKey='1' >
        <a-tab-pane tab='快照' key='1'>
          <Snap class="tabs-top"></Snap>
        </a-tab-pane>
        <a-tab-pane tab='iSCSI' key='2'>
          <ISCSI class="tabs-top"></ISCSI>
        </a-tab-pane>
        <a-tab-pane tab='回收站' key='3'>
          <Recycle class="tabs-top"></Recycle>
        </a-tab-pane>
      </a-tabs>
    </a-card>
  </a-row>
  </a-row>    
</template>
<script>
import Topbar from "../../../components/common/Topbar";
import Menubar from "../../../components/common/Menubar";
import Snap from '../../../components/storage_mgr/osdmgr/snap'
import ISCSI from '../../../components/storage_mgr/osdmgr/iscsi'
import Recycle from '../../../components/storage_mgr/osdmgr/recycle'
import { setTimeout } from 'timers';
const osdcolumns = [
  {
    title: "块设备名",
    dataIndex: "name",
    key: "name",
    sorter: (a, b) => a.name.length - b.name.length,
    scopedSlots:{
        filterDropdown:'filterDropdown',
        filterIcon:'filterIcon',
        customRender:'customRender'
    },
    onFilter:(value,record)=>record.name.toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownVisibleChange:(visible)=>{
        if(visible){
            setTimeout(()=>{
                this.searchInput.focus()
            },0)
        }
    }
  },
  {title:'存储池名',dataIndex:'pool',key:'pool'},
  {title:'容量',dataIndex:'avil',key:'avil'},
  {title:'对象数',dataIndex:'obj',key:'obj'},
  {title:'对象大小',dataIndex:'objsize',key:'objsize'},
  {title:'供给容量',dataIndex:'supply',key:'supply'},
  {title:'总供给容量',dataIndex:'sum',key:'sum'},
  {title:'父节点',dataIndex:'parent',key:'parent'}
];
export default {
  name: "Osdmgr",
  components: { Topbar, Menubar ,ISCSI,Snap,Recycle},
  data(){
      return{
          osdcolumns, 
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
          osddata:[
              {key:'0',name:'2312',pool:'lsd',avil:'111G',obj:'25.5K',objsize:'4MB',supply:'0B',sum:'0B',parent:'rbd'}
          ]
      }
  },
  methods:{
    onSelectChange (selectedRowKeys) {
    console.log(selectedRowKeys);
    this.selectedRowKeys = selectedRowKeys
    }
  }
};
</script>
