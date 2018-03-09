<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-sm-8">
        <img src="./assets/homer_boot_new_york.jpg" class="rounded">
      </div>
    </div>
    <div class="row justify-content-center">
      <div id="app" class="col-sm-8 mt-3">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>