<template>
   <input type="button" value="click" @click="start"/>
</template>
<script>
  export default {
    methods: {
      start(){
      	alert('111111');
      	console.log(this)
      }
    },
    data() {
      return {
       
      }
      }
  }
</script>