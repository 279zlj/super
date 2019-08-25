<template>
    <a-row>
        <a-row class='mytitle'>
            <a-icon type='hdd' style="margin:0 .5rem 0 0"/>对象存储
        </a-row>
        <a-row style='margin:1em'>
            <a-card hoverable>
                <a-tabs defaultActiveKey='1'>
                    <a-tab-pane tab='桶' key='1'></a-tab-pane>
                    <a-tab-pane tab='用户' key='2'>
                        <User></User>
                    </a-tab-pane>
                    <a-tab-pane tab='对象存储配置' key='3'>
                        <Service></Service>
                    </a-tab-pane>
                </a-tabs>
            </a-card>
        </a-row>
    </a-row>
</template>
<script>
import User from '../../../components/storage_mgr/object/user/usermgr'
import Service from '../../../components/storage_mgr/object/objset/service'

export default {
    name:'Objview',
    components:{User,Service},
    data(){
        return{
            
        }
    },
    methods:{
        
    }
}
</script>
