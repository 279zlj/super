<template>
  <div class="col-lg-10 col-md-10 col-sm-10 col-xs-12" id="Rosd">
  <div class="row all">
    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4" v-for="i in osdlist">
      <div class="row container-fluid">
        <div class="col-lg-11 col-md-11 col-sm-11 col-xs-11 block" @click="">
          <div class="row up">
            <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7">
              <div class="row font">
                <p>{{i.osdid}}</p>
                <p>{{i.osdip}}</p>
              </div>

            </div>
            <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5">

            </div>
          </div>
          <div class="row down">
            <span v-for="i in imgage"><img :src="i"/></span>
          </div>
        </div>
      </div>
    </div>

  </div>
  </div>
</template>

<script>

  import Vue from 'vue'
    export default {
        name: "Rosd",

      data(){
        return{
          osdlist:[
            {osdid:'001',osdip:'127.0.0.1',usage:""},
            {osdid:'002',osdip:'127.0.0.2',usage:""},
            {osdid:'003',osdip:'127.0.0.3',usage:""},
          ],
          imgage:[
            '../../static/image/one.png',
            '../../static/image/two.png',
            '../../static/image/three.png',
            '../../static/image/four.png'
          ]
        }
      },
      methods:{

      },
      created(){

      },
      mounted(){

      }
    }

</script>

<style scoped>
  #Rosd{
    color:white;
  }
.block{
  border-radius: .3em;
}
  .all{
    margin-top: 5em;
  }
  .up{
    border-bottom: 1px solid #452F64;
    width: 90%;
    margin: 0 auto;
  }
  .down{
    margin: 1em 1em;
  }
  .down img{
    margin-right: 1em;
  }
  .all div div div{
    background-color: #3D295A;


  }
  .font {
    margin:2em 0em;
    line-height: 1em;
  }
</style>
