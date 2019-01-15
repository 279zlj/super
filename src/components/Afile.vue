<template>
  <div class="col-lg-10 col-md-10 col-sm-10 col-xs-12 container-fluid" id="Afile">
    <table class="table table-responsive text-nowrap" id="filetable" data-toolbar="#toolbar" data-height="350" data-toggle="table" data-pagination="true" data-page-list="[5, 10, 20, 50, 100, 200]" data-click-to-select="true" data-classes="table-no-bordered" >
      <div class="alert alert-danger " id="tipscontent" style="display: none;">{{tipscontent}}</div>
      <thead>
      <tr>
        <th data-field="state" data-checkbox="true" ></th>
        <th data-field="poolname">{{$t('message.Pool-name')}}</th>
        <th data-field="strategy">{{$t('message.Strategy')}}</th>
        <th data-field="iops">IOPS</th>
        <th data-field="thtuput">{{$t('message.Throughput')}}</th>
        <th data-field="status">{{$t('message.Status')}}</th>
      </tr>
      </thead>
      <tbody>
      </tbody>
    </table>
  </div>
</template>

<script>
    export default {
        name: "Afile"
    }
</script>

<style scoped>
  #Afile{
    margin-top: 5.5em;
  }
</style>
