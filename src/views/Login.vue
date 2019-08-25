<template>
    <div id='Login'>
        <video autoplay loop muted>
            <source src="../../static/video/Login.mp4" id='bg'></source>
        </video>
        <a-row>
            <img src="../../static/images/title.png" style="margin:1rem;"/>
        </a-row>
        <a-row class='loginform'>
            <a-col :xs='{span:8,offset:12}' :sm='{span:8,offset:12}' :md='{span:8,offset:12}' :lg='{span:7,offset:15}' :xxl='{span:6,offset:16}'>
                <div class="bor">
                    <div class="welcome">
                        <h2 class="wetitle">欢迎登录</h2>
                        <a-form id='loginform' :form='form' >
                            <a-form-item>
                                <a-input v-decorator='["username",{rules:[{required:true,message:"Please input your username"}]}]' placeholder='Username'>
                                    <a-icon slot="prefix" type='user' style='color:grey' />
                                </a-input>
                            </a-form-item>
                            <a-form-item>
                                <a-input v-decorator='["password",{rules:[{required:true,message:"Please input your password"}]}]' type='password' placeholder='Password'>
                                    <a-icon slot="prefix" type='lock' style="color:grey" />
                                </a-input>
                            </a-form-item>
                            <a-form-item>
                                <a-button type='primary' html-type='submit' class='btn' @click="check">登录</a-button>
                            </a-form-item>
                        </a-form>
                    </div>
                </div>
            </a-col>
            <a-row id='footer'>
                <a-col>
                    <p style="text-align: center;">浏览器推荐使用：谷歌（Chrome）、火狐（FireFox）、IE10（以上）版本，大于1440*900分辨率!</p>
                    <p style="text-align: center;">Copyright ® 2019 广州五舟科技股份有限公司.</p>
                </a-col>
            </a-row>
        </a-row>
    </div>  
</template>
<script>
export default {
    name:'Login',
    data(){
        return{
            form: this.$form.createForm(this),
        }
    },
    methods:{
        check  () {
        this.form.validateFields(
            (err) => {
            if (!err) {
                console.info('success');
                this.$router.push('index')
            }
            },
        );
        },
        
    }
}
</script>
<style>
#Login{
        position: fixed;
        width: 100%;
        height: 100%;
        /* z-index: -100; */
        transition: 1s opacity;
        margin: 0 ;
        padding: 0 ;
        bottom:0;
        background-color: #010001;
    }
    video{
        position:absolute;
        width: 100%;
        height: 100%;
        z-index: -100;
    }
    video #bg{
        width: auto;
        height: auto;
        
        z-index: -100;
        background-size: contain;
    }
    .loginform{
        margin-top:8em;
        z-index: 999;
        height: 78%;
    }
    .wetitle{
        color:white !important;
        line-height: 4em;
        text-align: center
    }
    .btn{
        width:100%
    }
    .bor{
        border:1.5px solid #3683BF;
        box-shadow: 0px 0px 8px #141618 inset; 
        border-radius: .5em;
        padding: 5px;
    }
    .welcome{
        background-color: #0A1426 !important;
        border-radius: .5em;
        padding: 2.5em;
        z-index: 999;
    }
    #footer{
        position:absolute;
        bottom:0em;
        width: 100%;
        color:white;
    }
</style>
