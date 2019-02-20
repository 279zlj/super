<template>
    <div id="Error" class="row">
      <div class="col-lg-4 col-lg-offset-4 col-md-4 col-md-offset-4 col-sm-4 col-sm-offset-4 col-xs-4 col-xs-offset-4">
        <img src="../../static/image/logoa.png" class="img-responsive one"/>
        <div class="row">
          <div class="col-lg-3 col-md-4 col-sm-4 col-xs-4">
            <img src="../../static/image/warn.png" class="img-responsive two"/>
          </div>
          <div class="col-lg-8 col-md-8 col-sm-8 col-xs-8">
            <p class="font">The web address could not be found.</p>
            <p class="font">Please enter the correct address.</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Error"
    }
</script>

<style scoped>
  #Error{
    color: white;
  }
.one{
  width: 70%;
  margin: 0 auto;
}
  .two{
    width: 70%;
    margin-left: 50%;
  }
  .font{
    line-height: 1em;
    font-size: 2em;
  }
  @media screen and (min-width: 425px) and (max-width: 768px){
    .font{
      font-size: 1em;
    }
  }
</style>
