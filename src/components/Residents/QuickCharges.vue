<template>

  <body class="text-center">
    <h1>Resident Charges Entry/Edit</h1>
    <form>
      <!-- Grid row -->
      <div class="form-row">
        <!-- Grid column -->
        <div class="col-md-7">
          <!-- Default input -->
          <input type="text" class="form-control" placeholder="Scan">
        </div>
        <!-- Grid column -->
        <!-- Grid column -->
        <div class="col-auto">
            <button type="submit" class="btn btn-primary mb-0">Scan</button>
        </div>
        <!-- Grid column -->
      </div>
      <!-- Grid row -->
      <div class="form-row">
        <div class="col-md-2">
          <!-- Default input -->
          <input type="text" class="form-control" placeholder="Location">
        </div>
      </div>
      <div class="form-row">
        <div class="col-md-2">
          <!-- Default input -->
          <input type="text" class="form-control" placeholder="Resident #">
        </div>
      </div>
      <div class="form-row">
        <!-- Grid column -->
        <div class="col-sm-1">
          <!-- Default input -->
          <input type="text" class="form-control" placeholder="Line #">
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-sm-1">
          <!-- Default input -->
          <input type="text" class="form-control" placeholder="Item #">
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-sm-6">
          <!-- Default input -->
          <input type="text" class="form-control" placeholder="Item Description">
        </div>
        <!-- Grid column -->
        <!-- Grid column -->
        <div class="col-sm-2">
          <!-- Default input -->
          <input type="text" class="form-control" placeholder="Quantity">
        </div>
        <!-- Grid column -->
        <!-- Grid column -->
        <div class="col-sm-2">
          <!-- Default input -->
          <input type="text" class="form-control" placeholder="Unit">
        </div>
        <!-- Grid column -->
      </div>

      <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-default">Add</button>
        <button type="button" class="btn btn-default">Save</button>
        <button type="button" class="btn btn-default">Delete</button>
        <button type="button" class="btn btn-default">Close</button>
      </div>

    </form>
<br>

<div class="row">
    <div id="table" class="col-xs-12 table-responsive">
        <datatable :columns="columns" :data="getData"></datatable>
    </div>
</div>

<div class="row">
    <div class="col-xs-12 form-inline">
        <datatable-pager v-model="page" type="abbreviated" :per-page="per_page"></datatable-pager>
    </div>
</div>
  </body>

</template>

<script src='../../JS/QuickCharges.js'></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src='../../CSS/QuickCharges.css' scoped></style>