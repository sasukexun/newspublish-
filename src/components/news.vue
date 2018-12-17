<template>
  <div id="blog-posts-events-demo">
    <button v-on:click="$emit('enlarge-text', 0.6)">
      Enlarge text
    </button>
  </div>
</template>

<script>
  export default{
    props:['todo'],
    methods:{
    }
  }
</script>
