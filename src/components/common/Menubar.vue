<template>
        <a-menu mode='inline' class='bar' :defaultOpenKeys="['sub1','sub2']" :selectedKeys="[$route.path]">
            <a-menu-item :key="'/index'">
                <router-link :to='{name:"index"}'><a-icon type="appstore" />
                <span>概览</span></router-link>
            </a-menu-item>
            <a-menu-item :key="'/physical'">
                <router-link :to='{name:"physical"}'><a-icon type="database" />
                <span>物理资源</span></router-link>
            </a-menu-item>
            <a-sub-menu key='sub1'>
                <span slot="title"><a-icon type="hdd" /><span>存储管理</span></span>
                <a-menu-item :key="'/overview'"><router-link :to='{name:"overview"}'>概况</router-link></a-menu-item>
                <a-menu-item :key="'/osdmgr'"><router-link :to='{name:"osdmgr"}'>网络磁盘</router-link></a-menu-item>
                <a-menu-item :key="'/fsview'"><router-link :to='{name:"fsview"}'>文件系统</router-link></a-menu-item>
                <a-menu-item :key="'/objview'"><router-link :to='{name:"objview"}'>对象存储</router-link></a-menu-item>
                <a-menu-item key='7'>文件共享</a-menu-item>
            </a-sub-menu>
            <a-sub-menu key='sub2'>
                <span slot='title'><a-icon type="bar-chart" /><span>运维中心</span></span>
                <a-menu-item :key="'/cluster'"><router-link :to='{name:"cluster"}'>集群检查</router-link></a-menu-item>
                <a-menu-item :key="'/capacity'"><router-link :to='{name:"capacity"}'>扩容/缩容</router-link></a-menu-item>
                <a-menu-item :key="'/diskmgr'"><router-link :to='{name:"diskmgr"}'>OSD磁盘管理</router-link></a-menu-item>
                <a-menu-item key='11'>集群调控</a-menu-item>
                <a-menu-item key='12'>预配置文件</a-menu-item>
                <a-menu-item key='13'>纠删码配置管理</a-menu-item>
            </a-sub-menu>
        </a-menu>
</template>
<script>
export default {
    name:'Menubar',
    data(){
        return{
            
        }
    }
}
</script>
<style>
.bar{
    height: 100%;
    
}
</style>

