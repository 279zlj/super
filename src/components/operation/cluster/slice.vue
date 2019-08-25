<template>
    <a-row>
        <a-row class="check">
            <a-col :xs='5' :sm='5' :md='5' :lg='5' :xl='3' style="text-aglin:center">
                <img src='../../../../static/images/ic_rader.gif' class="gif">
            </a-col>
            <a-col :xs='7' :sm='7' :md='12' :lg='10' :xl='5' style="margin-top:2rem">
                <h2><b>数据切片状态检查：</b></h2>
                <p>自我恢复进度：3 object/s</p>
            </a-col>
            <a-col :xs='{span:2,offset:2}' :sm='{span:2,offset:2}' :md='{span:2,offset:2}' :lg='{span:2,offset:6}' :xl='{span:2,offset:14}' style="margin-top:2rem">
                <a-button type='primary'>立即扫描</a-button>
            </a-col>
        </a-row>
        <a-row :gutter='8' style="margin:0">
            <p class="val">检查结果</p>
            <a-row class="check">
                <a-col :span='8'>
                    <p class='sbody'>PG总数（个）：<span>600</span></p>
                </a-col>
                <a-col :span='8' >
                    <p class='sbody'>正常PG（个）：<Span>600</Span></p>
                </a-col>
                <a-col :span='8'>
                    <p class='sbody'>异常PG（个）：<span>600</span></p>
                </a-col>
                <a-col :span='8'>
                    <p class='sbody'>存储池（个）：<Span>600</Span></p>
                </a-col>
                <a-col :span='8'>
                    <p class='sbody'>已使用容量（GiB）：<Span>600</Span></p>
                </a-col>
            </a-row>
        </a-row>
    </a-row>
</template>
<script>
export default {
    name:'cslice'
}
</script>
<style>
.sbody{
    background-color: white;
    padding: .5rem;
    margin:1rem .5rem 0 .5rem
}
</style>