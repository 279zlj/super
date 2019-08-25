<template>
    <a-row id='top' >
        <a-col :xs='6' :sm='6' :md='4' :lg='4' :xl='4' class='title'>
            <img src="../../../static/images/title.png" style='margin-left:1rem' />
        </a-col>
        <a-col :xs='3' :sm='3' :md='{span:3, offset:4}' :lg='{span:3, offset:4}' :xl='{span:3, offset:4}'>
            <p class='dataview recovery'>Recovery IO：0.55MS/s</p>
        </a-col>
        <a-col :xs='4' :sm='4' :md='4' :lg='4' :xl='4'>
            <p class='dataview cleara'>数据一致性清洗IO：0.55MS/s</p>
        </a-col>
        <a-col class="topfunc">
            
            <a-popover placement='bottom'>
                <template slot='content'>
                    <div class='tall'>
                    <a-row class='tcontent' v-for='a in tipsdata' :class="a.status == '完成'?'tgreen':a.status == '失败'?'tred':''">
                        <a-col :span='5' style="text-align:center">
                            <a-icon type="close-circle" theme='filled' class='ticon tredp' v-show="a.status == '失败'" />
                            <a-icon type="check-circle" theme='filled' class='ticon tgreenp' v-show="a.status == '完成'" />
                        </a-col>
                        <a-col :span='19'>
                            <span class="ttitle" :class="a.status == '完成'?'tgreenp':a.status == '失败'?'tredp':''">{{a.title}}</span>
                            <small class="block">{{a.time}}</small>
                            <div :id='"tips"+a.key' :class="aex?'tdetail':''">{{a.content}}</div>
                            <a @click="aexpend(a.key)" style="float:right">展开</a>
                        </a-col>
                    </a-row>
                    </div>
                </template>
                <span class="rightfun">
                    <a-badge dot><a-icon type="alert" class='icon' /></a-badge>
                    <span style="margin-left:.5rem">通知</span>
                </span>
            </a-popover>
            
            <a-popover placement='bottom'>
                <template slot='content'>
                    <div class='tall'>
                    <a-row class='tcontent' v-for='t in taskdata' :class="t.status == '完成'?'tgreen':t.status == '正在进行'?'tblue':t.status == '失败'?'tred':''">
                        <a-col :span='5' style="text-align:center">
                            <a-icon type="close-circle" theme='filled' class='ticon tredp' v-show="t.status == '失败'" />
                            <a-icon type="check-circle" theme='filled' class='ticon tgreenp' v-show="t.status == '完成'" />
                            <a-icon type="clock-circle" theme='filled' class='ticon tbluep' v-show="t.status == '正在进行'" />
                        </a-col>
                        <a-col :span='19'>
                            <span class="ttitle" :class="t.status == '完成'?'tgreenp':t.status == '正在进行'?'tbluep':t.status == '失败'?'tredp':''">{{t.title}}</span>
                            <small class="block">{{t.time}}</small>
                            <div :id='"task"+t.key' :class="ex?'tdetail':''">{{t.content}}</div>
                            <a @click="expend(t.key)" style="float:right">展开</a>
                        </a-col>
                    </a-row>
                    </div>
                </template>
                <span class="rightfun">
                    <a-badge dot><a-icon type="ordered-list" class='icon' /></a-badge>
                    <span style="margin-left:.5rem">任务</span>
                </span>
            </a-popover>
            <a-dropdown>
                <a class="ant-dropdown-link rightfun" href='#'>
                    <span style="color:white"><a-icon type="swap" class='icon' /><span style="margin-left:.3rem">语言</span></span>
                </a>
                <a-menu slot='overlay'>
                    <a-menu-item>
                        <a>中文</a>
                    </a-menu-item>
                    <a-menu-item>
                        <a>英语</a>
                    </a-menu-item>
                </a-menu>
            </a-dropdown>
        
            <span @click="setting" class="rightfun">
                <a-icon type="setting" class='icon' />
                <span style="margin-left:.3rem">配置</span>
            </span>
       
            <a-dropdown>
                <a class="ant-dropdown-link rightfun" href="#">
                    <span style='color:white'><a-icon type="user" class='icon' />admin</span>
                </a>
                <a-menu slot="overlay">
                    <a-menu-item>
                        <a>修改密码</a>
                    </a-menu-item>
                    <a-menu-item>
                        <a>退出</a>
                    </a-menu-item>
                </a-menu>
            </a-dropdown>
        </a-col>
        <a-modal title='配置' v-model="setvisiable" @ok='handleOk'>
            <p>dfgsdfgdshfg</p>
        </a-modal>
    </a-row>
</template>
<script>
import $ from 'jquery'
export default {
    name:'Topbar',
    data(){
        return{
            setvisiable:false,
            ex:true,
            aex:true,
            tipsdata:[
                {key:'1',title:'但是v发货速度发货速度',content:'发大师傅艰苦撒旦发货尽快进行成本支出加快保障性即可参加',status:'完成',time:'2019.08.04-14:25:12'},
                {key:'2',title:'但是v发货速度发货速度',content:'发大师傅艰苦撒旦发货尽快',status:'失败',time:'2019.08.04-14:25:12'}
            ],
            taskdata:[
                {key:'0',title:'但是v发货速度发货速度',content:'发大师傅艰苦撒旦发货尽快豆腐干豆腐干豆腐干豆腐干',status:'正在进行',time:'2019.08.04-14:25:12'},
                {key:'1',title:'但是v发货速度发货速度',content:'发大师傅艰苦撒旦发货尽快',status:'完成',time:'2019.08.04-14:25:12'},
                {key:'2',title:'但是v发货速度发货速度',content:'发大师傅艰苦撒旦发货尽快',status:'失败',time:'2019.08.04-14:25:12'}
            ]
        }
    },
    methods:{
        setting(){
            this.setvisiable=true
        },
        handleOk(){

        },
        expend(key){
            this.ex=!this.ex
            if(this.ex){
                $("#task"+key).removeClass('')
                $("#task"+key).toggleClass('texpend')
            }
            if(!this.ex){
                $("#task"+key).removeClass('')
                $("#task"+key).toggleClass('tdetail')
            }
        },
        aexpend(key){
            this.aex=!this.aex
            if(this.aex){
                $("#tips"+key).removeClass('')
                $("#tips"+key).toggleClass('texpend')
            }
            if(!this.aex){
                $("#tips"+key).removeClass('')
                $("#tips"+key).toggleClass('tdetail')
            }
        }
    }
}
</script>
<style>
#top{
    background-color: #0785FD;
    width: 100%;
    height: 3.5rem;
    
}
.title{
    text-align:center;
    line-height:3.5em;
}
.dataview{
    background-color: white;
    color:#0785FD;
    height: 2em;
    margin: 1em .2em;
    text-align: center;
    line-height: 2em;
    border-radius: 1rem;
}
.recovery{
    width: 13em;
}
.cleara{
    width: 14em;
}
.rightfun{
    width:5.5rem;display:inline-block;color:white;cursor: pointer;
}
.topfunc{
    color:white ;line-height:3.5em;font-size:1.1em;float:right
}
.icon{
    margin-right:.2rem
}
.font{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.tall{
    height:30rem;overflow-y: scroll
}
.tcontent{
    width:21rem;margin:.2rem !important;padding:.5rem;height:5rem;
}
.tred{
    background-color:#FFD6DE;
}
.tgreen{
    background-color:#CEF2F0;
}
.tblue{
    background-color:#CDE7FE;
}
.ticon{
    font-size:3rem;line-height:4.5rem !important
}
.ttitle{
    display:block;font-weight:700
}
.tredp{
    color:#FD3456;
}
.tgreenp{
    color:#06BCAD;
}
.tbluep{
    color:#0785FD;
}
.tdetail{
    width:13rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap
}
.texpend{
    width:13rem;
}
</style>
