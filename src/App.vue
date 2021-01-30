<template>
  <router-view />
</template>

<script>
export default {
  name: 'App',
  components: {}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Arapey&family=Open+Sans&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Arapey&family=Lexend+Zetta&family=Open+Sans&display=swap');
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Arapey';
  font-weight: 400;
  text-align: center;
  background: none;
  border: none;
  outline: none;
}

body {
  background: url('./assets/bg.svg');
  background-repeat: repeat-y;
  background-size: 120vw;
  background-position: center right;
}
</style>
