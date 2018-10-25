## Login

##### post发送登录请求（user,pwd），返回200表示登录成功

## index

##### iops、mbps、时延折线图：data:[{'time','iops','mbps','时延'},...]

##### 条形统计图：get => status：[‘存储空间’，‘cpu利用率’，‘内存容量’，‘可用资源’]

##### 网络饼状图：get => net:[{use:'',nuse:''}]

## Resources

##### io agent占比图：get => osd_use:[{name:'',value:''}]

##### pool占比图：get => pool_user:[num]

##### 总览数据：get => collect:{pool:{use:'使用了多少',usepct:'所占百分比'},block_detail:{size:'总大小',server_num:'连接数'},osd_detail:{size:'',usepct:'',block:num}}

##### 节点cpu使用率top3：get => cpu:[{ip:'',network:'',status:'',time:''},{},{}]

##### 节点iops/top3：get => iops:[{ip:'',network:'',status:'',time:''},{},{}]

##### 节点mbps/top3：get => mbps:[{ip:'',network:'',status:'',time:''},{},{}]

##### 警告事件:get => warn:[{ip:'',network:'',status:'',time:''},{}，{}]

##### 操作事件：get => log:[{ip:'',network:'',status:'',time:''},{},{}]

### io-agent_detail

##### everyone_detail: get => osdlist:[{osdid:'',osdip:'',usage:'',unusage:'',id:'用于画图',status:''},{},{}]

##### 点击某个io-agent： post =>id result => content:[{name:'',statis:'',ops颜色：'',cpu:'',nc:'',datap:'',cachep:'',iscsi:'',netw:''},{name:'',mac:'',speed:'',pack:'',status:'',mtu:''},{name:'',type:'',size:'',wwid:'',used:'',smail:'',health:''}]

##### 默认返回首台机器各种信息：get => content:[{name:'',statis:'',ops颜色：'',cpu:'',nc:'',datap:'',cachep:'',iscsi:'',netw:''},{name:'',mac:'',speed:'',pack:'',status:'',mtu:''},{name:'',type:'',size:'',wwid:'',used:'',smail:'',health:''}]

##### 修改iscsi :post => ip

### pool_operation

##### 存储池列表：get => data:[{poolname:'',strategy:'',iops:'',thtuput:'',status:''}]

##### 授权列表：get=> data:[{name:'',ip:'',isempower:'',isconnect:''}]

##### 存储池扩容：post => poolsize,name

##### 存储池信息修改：post => name（重命名）,content（副本数），ip

##### 添加客户端：post => client

##### 删除存储池：post => ids

##### 确认授权： post => ips

##### 取消授权： post => ips

##### 删除整个授权信息： post => ips

### block operation

##### block扩容:post => name,size

##### create快照：post => id,name,content

##### delete块设备：post => id

##### 块设备快照修改: post => id,name,content

##### 快照时间更改: post => id,change

##### 快照克隆: post => name,cloneid,pool,sele

##### delete快照： post => id

### 参数设置

##### 参数更改：post => radio,selftime,starttime,endtime,select

## 资源调配

##### 修改快照： post =>  name,content,id

##### 快照回滚： post => ids

##### 快照克隆： post => name,cloneid,pool

##### 快照删除： post => ids

### 运维设置

##### ip查找： post => ip

##### 修改设置： post => size,content,edit

##### 删除设置 ：post => ids

### 风险控制

##### 解决方法： get => title,content

##### 警报列表： get => rank,status,warnid,warnname,warnindex,date,content

##### 导入解决方法：post => file res => content

## 用户管理

##### 用户管理界面： get => userid,username,role,date

##### 用户修改： post => user,role,id

##### 用户删除 : post => ids

## 日志管理

##### 日志管理界面: get => name,ip,size,logname

##### 日志下载 ： post =>select