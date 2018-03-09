<template>
  <li>
    {{ title }}
    <button type="button" class="close" aria-label="Close">
      <span aria-hidden="true" class="text-danger">&times;</span>
    </button>
  </li>
</template>

<script>
export default {
  name: 'TaskListItem',
  props: ['id', 'title']
}
</script>