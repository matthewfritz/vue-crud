<template>
	<div id="task-list">
		<div class="row justify-content-center">
			<h3>{{ title }}</h3>
		</div>

		<form>
			<div class="row">
				<div class="col-sm-12 form-group">
					<input type="text"
						class="form-control"
						placeholder="Type something and press Enter..."
						autofocus
					/>
				</div>
			</div>
			<div class="row">
				<div class="col-sm-12">
					<ol>
						<TaskListItem v-bind="task" v-for="task in tasks" :key="task.id"></TaskListItem>
					</ol>
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
		tasks: [
			{
				id: 1,
				title: "Make a Vue CRUD application"
			},
			{
				id: 2,
				title: "Make yet another Vue CRUD application"
			}
		]
    }
  },
  components: { TaskListItem }
}
</script>