<template>
<a-row  style="margin:.5em 0">
    <a-card hoverable>
        <p><b>数据切片状态</b></p>
        <div id='slice'></div>
    </a-card>
    </a-row>
</template>
<script>
export default {
    name:'Slice',
    data(){
        return{
            slicedata:[{
                item: '失效',
                count: 40,
                percent: 0.4
            }, {
                item: '正常',
                count: 21,
                percent: 0.21
            }, {
                item: '异常',
                count: 17,
                percent: 0.17
            }]
        }
    },
    mounted(){
        this.drawslice()
        //再初始化之后调整图表的大小自适应
        const e = document.createEvent('Event')
        e.initEvent('resize', true, true)
        window.dispatchEvent(e)
    },
    methods:{
        drawslice(){
            var chart = new G2.Chart({
                container:'slice',
                forceFit:true,
                height:300,
                padding:[25, 50, 50, 40]
            });
            chart.source(this.slicedata,{
                percent: {
                formatter: function formatter(val) {
                    val = val * 100 + '%';
                    return val;
                }
                }
            });
            chart.coord('theta',{
                radius:0.75
            });
            chart.tooltip({
                showTitle: false,
                itemTpl: '<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>'
            });
            chart.intervalStack().position('percent').color('item',['#2EA3E6','#06BCAD','#FB3E98']).label('percent', {
                formatter: function formatter(val, item) {
                return item.point.item + ': ' + val;
                }
            }).tooltip('item*percent', function(item, percent) {
                percent = percent * 100 + '%';
                return {
                name: item,
                value: percent
                };
            }).style({
                lineWidth: 1,
                stroke: '#fff'
            });
            chart.render();
        }
    }
}
</script>
