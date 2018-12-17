<template>
  <div>
    <button v-on:click="count++">You clicked me {{ count }} times.</button>
    <div class="blog-post">
      <h3>{{title }}</h3>
      <button v-on:click="$emit('enlarge-text')">
        Enlarge text
      </button>
    </div>
  </div>
</template>
<script>
  export default{
    data: function () {
      return {
        count: 0
      }
    },
    props:['title']
  }
</script>
