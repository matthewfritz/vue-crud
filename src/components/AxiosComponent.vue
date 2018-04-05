<template>
	<div id="axios-component">
		<div class="row justify-content-center">
			<h3>{{ title }}</h3>
		</div>

		<div class="row mt-2">
			<div class="col-sm-12 text-center">
				<button @click="loadClassesComp">
				Load Current Comp Sci Classes
				</button>

				<button @click="loadClassesArt">
				Load Current Art Classes
				</button>
			</div>
		</div>

		<div class="row mt-2">
			<div class="col-sm-12" v-if="classes.length">
				<ol v-if="showClasses">
					<li v-for="_class in classes">
						<strong>({{ _class.class_number }}) {{ _class.subject }} {{ _class.catalog_number }}</strong>: {{ _class.title }}
					</li>
				</ol>
				<p class="text-center" v-else>
					Loading. Please wait...
				</p>
			</div>
			<div class="col-sm-12" v-else>
				<p class="text-center">
					There are currently no classes to display.
				</p>
			</div>
		</div>
		
	</div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'AxiosComponent',
  data () {
    return {
    	title: 'Axios AJAX Example',
		classes: [],
		showClasses: false,
		dataUrl: 'https://api.metalab.csun.edu/curriculum/api/2.0/classes',
    }
  },
  methods: {
  	loadClassesComp: function() {
  		// for some reason, we cannot use function(response) as the callback
  		// when integrating with Vue or "this" will point to Axios
  		this.showClasses = false;
  		axios.get(this.dataUrl + '/comp').then(response => {
  			console.log(response.data);
  			this.classes = response.data.classes;
  			this.showClasses = true;
  		})
  		.catch(error => {
  			console.log(error);
  			this.classes = [];
  			this.showClasses = true;
  		});
  	},
  	loadClassesArt: function() {
  		// for some reason, we cannot use function(response) as the callback
  		// when integrating with Vue or "this" will point to Axios
  		this.showClasses = false;
  		axios.get(this.dataUrl + '/art').then(response => {
  			console.log(response.data);
  			this.classes = response.data.classes;
  			this.showClasses = true;
  		})
  		.catch(error => {
  			console.log(error);
  			this.classes = [];
  			this.showClasses = true;
  		});
  	}
  }
}
</script>