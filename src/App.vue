<template>
  <div id="app">

    <router-view/>
  </div>
</template>

<style>
*{
  padding: 0;
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
        height: 100%;
        /* background: url("assets/back.jpg") no-repeat; */
        background: #fff;
        height:100%;
        width:100%;
        background-size:cover;
         background-attachment: fixed; 
         margin: 0 auto;
         position: fixed;
  
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
