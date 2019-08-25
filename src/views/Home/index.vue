<template>
    <a-row>
        <a-row style="padding:1em 1em .5em 1em">
            <Allstate></Allstate>
        </a-row>
        <a-row style="padding:0 1em" :gutter='8'>
            <a-col :xs='24' :sm='24' :md='24' :lg='24' :xl='10'>
                <Othermsg></Othermsg>
            </a-col>
            <a-col :xs='24' :sm='24' :md='24' :lg='24' :xl='14'>
                <Charts></Charts>
            </a-col>
        </a-row>
        <a-row style="padding:0 1em;" :gutter='8'>
            <a-col :xs='24' :sm='24' :md='24' :lg='8' :xl='8'>
                <Cluster></Cluster>
            </a-col>
            <a-col :xs='24' :sm='24' :md='24' :lg='6' :xl='6'>
                <Slice></Slice>
            </a-col>
            <a-col :xs='24' :sm='24' :md='24' :lg='10' :xl='10'>
                <Warn></Warn>
            </a-col>
        </a-row>
    </a-row>
</template>
<script>

import Allstate from '../../components/Home/Allstate'
import Othermsg from '../../components/Home/othermsg'
import Charts from '../../components/Home/charts'
import Cluster from '../../components/Home/cluster'
import Slice from '../../components/Home/slice'
import Warn from '../../components/Home/warn'
export default {
    name:'index',
    components:{Allstate,Othermsg,Charts,Cluster,Slice,Warn}
}
</script>
<style>

</style>
