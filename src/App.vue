<template>
  <div id="app">
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar';


  export default {
    components: {
      Navbar,
    }
  }
</script>

<style>
  *,
  ::before,
  ::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow: hidden;
  }

  body {
    background-color: rgb(119, 114, 167);
    color: white;
    font-family: sans-serif;
  }

  h1 {
    text-align: center;
  }
</style>
