<template>
  <li>
    {{ title }}
  </li>
</template>

<script>
export default {
  name: 'TaskListItem',
  props: ['id', 'title']
}
</script>