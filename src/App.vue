<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body{
  width: 100%;
  height: 100%;
}
.v-modal{
  display: none !important;
}
*{
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
}
html,body,ul,li,ol,dl,dd,dt,p,h1,h2,h3,h4,h5,h6,form,fieldset,legend,img {
    margin:0;
    padding:0
}
fieldset,img {
    border:0
}
img {
    display:block
}
address,caption,cite,code,dfn,th,var {
    font-style:normal;
    font-weight:normal
}
ul,ol {
    list-style:none
}
li{ 
  list-style: none; 
}
input {
    padding-top:0;
    padding-bottom:0;
    font-family:"SimSun","宋体"
}
input::-moz-focus-inner{
    border:0;
    padding:0
}
select,input{
    vertical-align:middle
}
select,input,textarea{
    font-size:12px;
    margin:0
}
input[type="text"],input[type="password"],textarea{
    outline-style:none;
    -webkit-appearance:none
}
textarea{
    resize:none
}
table{
    border-collapse:collapse
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
  /* text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>
