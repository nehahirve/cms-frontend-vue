<template>
  <ul>
    <li>
      post one
    </li>
    <li>post two</li>
    <li>post three</li>
  </ul>
</template>

<script>
export default {
  name: 'Post',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  border: 1px solid;
}

section {
  margin-bottom: 3rem;
}

nav ul {
  font-size: 3rem;
  display: flex;
  justify-content: space-around;
}

button {
  margin-bottom: 5rem;
  border: solid 1px;
}

button svg {
  max-width: 10rem;
}
</style>
