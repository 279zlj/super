<template>
  <div class="col-lg-10 col-md-10 col-sm-10 col-xs-12" id="Msolve" >
    <form class="row a"  name="fileupload" target="framFile" >
      <div class="col-lg-3 col-lg-offset-8 col-md-3 col-md-offset-7 col-sm-4 col-sm-offset-6 col-xs-5 col-xs-offset-5">
        <input type="file" class="form-control btn " id="file" style="color: white"  @change="getFile($event)"/>
      </div>
      <div class="col-lg-1 col-md-2 col-sm-2 col-xs-2">
        <input type="submit" id="import" class="btn btn-danger" value="导入" @click="solve($event)"/>
      </div>
    </form>
    <iframe id="framFile" name="framFile" style="display:none;"></iframe>
    <div class="row b">
      <div class="bg">

      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Msolve",
      data(){
          return {
            file: ''
          }
      },
      methods:{
        getFile(event) {                                 /*文件上传*/
          this.file = event.target.files[0];
          console.log(this.file);
        },
          solve(){
            event.preventDefault();
            var form = new FormData();
            form.append('file', this.file);
            let config = {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            }

            console.log(form)
              this.$axios.post('http://loaclhost:5000/api',form,config).then(function (res) {
                if (res.status === 200) {
                  console.log(res.data);
                }
              }).catch(function (error) {
                console.log(error)
              })

          }
      }
    }
</script>

<style scoped>
  #Msolve{
    color: white;
  }
  .a{
    margin-top: 4em;

  }
  .bg{
    background-color: #292433;
    color: white;
    height: 40em;
    margin-top: 1em;
    border-radius: 8px;
    margin-bottom: 2em;
  }
</style>
