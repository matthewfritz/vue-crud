<template>
	<div id="task-list">
		<div class="row justify-content-center">
			<h3>{{ title }}</h3>
		</div>

		<form>
			<div class="row">
				<div class="col-sm-12">
					<ol v-if="tasks.length">
						<TaskListItem v-bind="task" v-for="task in tasks" :key="task.id"></TaskListItem>
					</ol>
					<p class="text-center" v-else>
						Start adding tasks by typing below...
					</p>
				</div>
			</div>
			<div class="row">
				<div class="col-sm-12 form-group">
					<input type="text"
						class="form-control"
						placeholder="Type something Homer can do instead and press Enter..."
						autofocus
						v-model="newTask"
						@keydown.enter="addTask"
					/>
				</div>
			</div>
		</form>
	</div>
</template>

<script>
import TaskListItem from '@/components/TaskListItem'

export default {
  name: 'TaskList',
  data () {
    return {
		title: 'What Can Homer Do Instead?',
		newTask: '',
		tasks: []
    }
  },
  components: { TaskListItem },
  methods: {
  	addTask: function() {
  		if(this.newTask != '') {
	  		let newId = this.taskCount() + 1;

	  		// push the new task onto the array
	  		this.tasks.push({
	  			id: newId,
	  			title: this.newTask
	  		});

	  		// clear out the newTask data property
	  		this.newTask = '';
  		}
  	},
	taskCount: function() {
		return this.tasks.length;
	}
  }
}
</script>