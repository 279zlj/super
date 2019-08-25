<template>
<a-row style="margin:.5em 0">
    <a-card hoverable>
        <p><b>集群存储容量</b></p>
        <div id='cluster' ></div>
    </a-card>
    </a-row>
</template>
<script>
import DataSet from '@antv/data-set'
// import {drawpie} from '../../assets/pie'
export default {
    name:'Cluster',
    data(){
        return{
            cludata:[{
                item: '未使用',
                count: 40,
                percent: 0.4
            }, {
                item: '块设备',
                count: 21,
                percent: 0.21
            }, {
                item: '文件系统',
                count: 17,
                percent: 0.17
            }, {
                item: '对象存储',
                count: 13,
                percent: 0.13
            }],
        }
    },
    mounted(){
        // drawpie(this.cludata)
        this.drawclu()
        //再初始化之后调整图表的大小自适应
        const e = document.createEvent('Event')
        e.initEvent('resize', true, true)
        window.dispatchEvent(e)
    },
    methods:{
        drawclu(){
            var chart = new G2.Chart({
                container: 'cluster',
                forceFit: true,
                height: 300,
                animate: true,
                padding: [25,30,50,40]
            });
            chart.source(this.cludata, {
                percent: {
                formatter: function formatter(val) {
                    val = val * 100 + '%';
                    return val;
                }
                }
            });
            chart.coord('theta', {
                radius: 0.75,
                innerRadius: 0.6
            });
            chart.tooltip({
                showTitle: false,
                itemTpl: '<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>'
            });
            var interval = chart.intervalStack().position('percent').color('item',['#EBEBEB','#2EA3E6','#06BCAD','#6772E5']).label('percent', {
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
            // interval.setSelected(data[0]);
        }
    }
}
</script>
