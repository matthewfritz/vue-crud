<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-sm-8">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <a class="navbar-brand" href="#">Vue Tasks</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item" v-bind:class="{ active: activeTasks() }">
                <router-link to="/" class="nav-link">Tasks</router-link>
              </li>
              <li class="nav-item" v-bind:class="{ active: activeAbout() }">
                <router-link to="/about" class="nav-link">About</router-link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>

    <div class="row justify-content-center">
      <div class="col-lg-4 text-center mt-3">
        <img
          src="./assets/homer_boot_new_york_300px.png"
          alt="Photo of Homer attempting to remove the boot on his car with a jackhammer"
          title="This was taken moments before he destroyed his radiator"
          class="rounded"
        />
      </div>
    </div>

    <div class="row justify-content-center">
      <div id="app" class="col-sm-8 mt-3">
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    activeTasks: function() {
      return this.$router.currentRoute.path == "/";
    },
    activeAbout: function() {
      return this.$router.currentRoute.path == "/about";
    }
  }
}
</script>