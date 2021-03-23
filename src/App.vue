<template>
  <div id="app">
    <h1>~ Best Zi Char ~</h1>
    <span id = "credits">Web App done by Rachel in Mar 2021</span>
    <navbar></navbar>
    <body>
    <router-view></router-view>
    </body>
    <app-footer></app-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  }
}
</script>

<style>
h1 {
  background-color: pink;
  height: 50px;
  text-align: center;
  font-size: 40px;
  padding-top:10px;
  font-family: fantasy;
}

body {
  position: relative;
  min-height: 80vh;
}

#credits {
  padding:5px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  height: 40px;
  float: right;
  font-size: 15px;
}
</style>
