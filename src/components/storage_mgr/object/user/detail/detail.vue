<template>
    <a-row style="padding:0 1rem;">
        <p style="color:#0785FD"> 用户信息：</p>
        <a-row :gutter='8'>
            <a-col :span='8' class='dcontent'>
                <a-col :span='12' class='uheader'>
                    用户名：
                </a-col>
                <a-col :span='12' class="ubody">
                    username
                </a-col>
            </a-col>
            <a-col :span='8' class='dcontent'>
                <a-col :span='12' class='uheader'>
                    全名：
                </a-col>
                <a-col :span='12' class="ubody">
                    admin
                </a-col>
            </a-col>
            <a-col :span='8' class='dcontent'>
                <a-col :span='12' class='uheader'>
                    暂停：
                </a-col>
                <a-col :span='12' class="ubody">
                    否
                </a-col>
            </a-col>
            <a-col :span='8' class='dcontent'>
                <a-col :span='12' class='uheader'>
                    最大桶数量：
                </a-col>
                <a-col :span='12' class="ubody">
                    1000
                </a-col>
            </a-col>
            <a-col :span='16' class='dcontent'>
                <a-col :span='6' class='uheader'>
                    子用户：
                </a-col>
                <a-col :span='12' class="ubody">
                    admin:www(read-write)
                </a-col>
            </a-col>
        </a-row>
        <p style="color:#0785FD"> 用户配额：</p>
        <a-row :gutter='8'>
            <a-col :span='8' class='dcontent'>
                <a-col :span='12' class='uheader'>
                    启用：
                </a-col>
                <a-col :span='12' class="ubody">
                    username
                </a-col>
            </a-col>
            <a-col :span='8' class='dcontent'>
                <a-col :span='12' class='uheader'>
                    最大配额：
                </a-col>
                <a-col :span='12' class="ubody">
                    admin
                </a-col>
            </a-col>
            <a-col :span='8' class='dcontent'>
                <a-col :span='12' class='uheader'>
                    最大对象数：
                </a-col>
                <a-col :span='12' class="ubody">
                    否
                </a-col>
            </a-col>
        </a-row>
        <p style="color:#0785FD"> 桶配额：</p>
        <a-row :gutter='8'>
            <a-col :span='8' class='dcontent'>
                <a-col :span='12' class='uheader'>
                    启用：
                </a-col>
                <a-col :span='12' class="ubody">
                    username
                </a-col>
            </a-col>
            <a-col :span='8' class='dcontent'>
                <a-col :span='12' class='uheader'>
                    最大配额：
                </a-col>
                <a-col :span='12' class="ubody">
                    admin
                </a-col>
            </a-col>
            <a-col :span='8' class='dcontent'>
                <a-col :span='12' class='uheader'>
                    最大对象数：
                </a-col>
                <a-col :span='12' class="ubody">
                    否
                </a-col>
            </a-col>
        </a-row>
    </a-row>
</template>
<script>
export default {
    name:'Detail',
    data(){
        return{

        }
    }
}
</script>
<style>

</style>

