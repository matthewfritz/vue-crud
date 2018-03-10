<template>
	<div id="about">
		<div class="row justify-content-center">
			<h3>{{ title }}</h3>
		</div>

		<div class="row">
			<div class="col-sm-12">
				<h4>About the Application</h4>
				<p>
					This application was designed to demonstrate a simple SPA (Single Page Application) that leverages the following pieces in Vue:
				</p>
				<ul>
					<li>Single File Components</li>
					<li>Vue Router</li>
					<li>Component-local data (destroyed upon component transition)</li>
					<li>Keyboard Events</li>
					<li>Keyboard Input</li>
					<li>Bound Data Models</li>
					<li>Props</li>
					<li>Events</li>
				</ul>
				<p>
					I figured that a task list application can only go so far when not connected to some kind of back-end server. I wanted to make something I would enjoy working on as well as looking at to use as a teaching tool.
				</p>
				<h4>About Me</h4>
				<p>
					You can find me at <a href="https://github.com/matthewfritz" target="_blank">https://github.com/matthewfritz</a>.
				</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'About',
  data () {
  	return {
  	  title: 'About'
  	}
  }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>