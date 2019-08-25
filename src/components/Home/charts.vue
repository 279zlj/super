<template>
<a-card hoverable>
    <p><b>系统IOPS</b></p>
    <div id='iops' ></div>
    <p><b>系统MBPS（B/s）</b></p>
    <div id='mbps' ></div>
    <p><b>系统延时（ms）</b></p>
    <div id='systime'></div>
</a-card>
</template>
<script>
import DataSet from '@antv/data-set'
export default {
    name:'Charts',
    data(){
        return{
            iopsdata :[{
                    time: '17:01:01',
                    IOPS_Write: 7.0,
                    IOPS_read: 3.9
                }, {
                    time: '17:01:11',
                    IOPS_Write: 6.9,
                    IOPS_read: 4.2
                }, {
                    time: '17:01:21',
                    IOPS_Write: 9.5,
                    IOPS_read: 5.7
                }, {
                    time: '17:01:31',
                    IOPS_Write: 14.5,
                    IOPS_read: 8.5
                }, {
                    time: '17:01:41',
                    IOPS_Write: 18.4,
                    IOPS_read: 11.9
                }, {
                    time: '17:01:51',
                    IOPS_Write: 21.5,
                    IOPS_read: 15.2
                }, {
                    time: '17:02:01',
                    IOPS_Write: 25.2,
                    IOPS_read: 17.0
                }, {
                    time: '17:02:11',
                    IOPS_Write: 26.5,
                    IOPS_read: 16.6
                }, {
                    time: '17:02:21',
                    IOPS_Write: 23.3,
                    IOPS_read: 14.2
                }, {
                    time: '17:02:31',
                    IOPS_Write: 18.3,
                    IOPS_read: 10.3
                }, {
                    time: '17:02:41',
                    IOPS_Write: 13.9,
                    IOPS_read: 6.6
                }, {
                    time: '17:02:51',
                    IOPS_Write: 9.6,
                    IOPS_read: 4.8
                }],
                mbpsdata:[
                    {
                        time: '17:01:01',
                        MBPS_Write: 7.0,
                        MBPS_read: 3.9
                    },
                    {
                        time: '17:01:11',
                        MBPS_Write: 6.9,
                        MBPS_read: 4.2
                    }, {
                        time: '17:01:21',
                        MBPS_Write: 9.5,
                        MBPS_read: 5.7
                    }, {
                        time: '17:01:31',
                        MBPS_Write: 14.5,
                        MBPS_read: 8.5
                    }, {
                        time: '17:01:41',
                        MBPS_Write: 18.4,
                        MBPS_read: 11.9
                    }, {
                        time: '17:01:51',
                        MBPS_Write: 21.5,
                        MBPS_read: 15.2
                    }, {
                        time: '17:02:01',
                        MBPS_Write: 25.2,
                        MBPS_read: 17.0
                    }, {
                        time: '17:02:11',
                        MBPS_Write: 26.5,
                        MBPS_read: 16.6
                    }, {
                        time: '17:02:21',
                        MBPS_Write: 23.3,
                        MBPS_read: 14.2
                    }, {
                        time: '17:02:31',
                        MBPS_Write: 18.3,
                        MBPS_read: 10.3
                    }, {
                        time: '17:02:41',
                        MBPS_Write: 13.9,
                        MBPS_read: 6.6
                    }, {
                        time: '17:02:51',
                        MBPS_Write: 9.6,
                        MBPS_read: 4.8
                    }
                ],
                sysdata:[
                    {"Data":"2010-01","sales":123},
                    {"Data":"2010-02","sales":213},
                    {"Data":"2010-03","sales":34},
                    {"Data":"2010-04","sales":54},
                    {"Data":"2010-05","sales":45},
                    {"Data":"2010-06","sales":74},
                    {"Data":"2010-07","sales":73},
                    {"Data":"2010-08","sales":25},
                    {"Data":"2010-09","sales":215},
                    {"Data":"2010-10","sales":84},
                    {"Data":"2010-11","sales":72},
                    {"Data":"2010-12","sales":92},
                    {"Data":"2011-01","sales":155},
                    {"Data":"2011-02","sales":125},
                    {"Data":"2011-03","sales":35},
                    {"Data":"2011-04","sales":64},
                    {"Data":"2011-05","sales":36},
                    {"Data":"2011-06","sales":73},
                    {"Data":"2011-07","sales":84},
                    {"Data":"2011-08","sales":81},
                    {"Data":"2011-09","sales":75},
                    {"Data":"2011-10","sales":63},
                    {"Data":"2011-11","sales":53},
                    {"Data":"2011-12","sales":144},
                    {"Data":"2012-01","sales":52},
                    {"Data":"2012-02","sales":45},
                ]
        }
    },
    mounted(){
        this.drawiops()
        this.drawmbps()
        this.drawsys()
        //再初始化之后调整图表的大小自适应
        const e = document.createEvent('Event')
        e.initEvent('resize', true, true)
        window.dispatchEvent(e)
    },
    methods:{
        drawiops(){
                var ds = new DataSet();
                var dv = ds.createView().source(this.iopsdata);
                // fold 方式完成了行列转换，如果不想使用 DataSet 直接手工转换数据即可
                dv.transform({
                    type: 'fold',
                    fields: ['IOPS_Write', 'IOPS_read'], // 展开字段集
                    color:['#FC0752','#0785FD'],
                    key: 'IOPS', // key字段
                    value: 'usage' // value字段
                });
                var chart = new G2.Chart({
                    container: 'iops',
                    forceFit: true,
                    height: 170,
                    padding: [25,30,28,40]
                });
                chart.source(dv, {
                    time: {
                    range: [0, 1]
                    }
                });
                chart.tooltip({
                    crosshairs: {
                    type: 'line'
                    }
                });
                chart.legend({
                position: 'top-right'
                });
                chart.line().position('time*usage').color('IOPS',['#FF549E','#01F6FF']).shape('smooth');
                chart.point().position('time*usage').color('IOPS',['#FF549E','#01F6FF']).size(4).shape('circle').style({
                    stroke: '#fff',
                    lineWidth: 1
                });
                chart.render();
        },
        drawmbps(){
                var color = ['#DB8548', '#98B96D'];
                var ds = new DataSet();
                var dv = ds.createView().source(this.mbpsdata);
                // fold 方式完成了行列转换，如果不想使用 DataSet 直接手工转换数据即可
                dv.transform({
                    type: 'fold',
                    fields: ['MBPS_Write', 'MBPS_read'], // 展开字段集
                    key: 'MBPS', // key字段
                    value: 'usage' // value字段
                });
                var chart = new G2.Chart({
                    container: 'mbps',
                    forceFit: true,
                    height: 170,
                    padding: [25,30,28,40]
                });
                chart.source(dv, {
                    time: {
                    range: [0, 1]
                    }
                });
                chart.tooltip({
                    crosshairs: {
                    type: 'line'
                    }
                });
                chart.legend({
                position: 'top-right'
                });
                chart.axis('usage', {
                    label: {
                    formatter: function formatter(val) {
                        return val + 'B/s';
                    }
                    },
                });
                chart.line().position('time*usage').color('MBPS',['#FEAE03','#4CBDFF']).shape('smooth');
                chart.point().position('time*usage').color('MBPS',['#FEAE03','#4CBDFF']).size(4).shape('circle').style({
                    stroke: '#fff',
                    lineWidth: 1
                });
                chart.render();
        },
        drawsys(){
            var chart = new G2.Chart({
                container:'systime',
                forceFit:true,
                height:170,
                padding:[15,30,25,40]
            });
            chart.source(this.sysdata)
            chart.scale('Data',{
                range:[0,1],
                tickCount:10,
                type:'timeCat'
            });
            chart.axis('Data',{
                label:{
                    label: {
                    formatter: function formatter(val) {
                        return val + 'ms';
                    }
                    },
                }
            });
            chart.axis('sales',{
                label:{
                    formatter: function formatter(text) {
                        return text.replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
                    }
                }
            });
            chart.legend({
                attachLast:true
            });
            chart.line().position('Data*sales').color('l(100) 0:#B4DBFF 1:#74BCFF');
            chart.area().position('Data*sales').color('l(100) 0:#B4DBFF 1:#74BCFF');
            chart.render()
        }
    },

}
</script>
