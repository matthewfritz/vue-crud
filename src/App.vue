<template>
  <div class="container">
    <div class="row justify-content-center">
      <div id="app" class="col-sm-8 mt-5 text-center">
        <img src="./assets/logo.png">
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