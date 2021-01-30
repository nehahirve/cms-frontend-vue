<template>
  <main>
    <nav>
      <ul>
        <li>Posts</li>
        <li>Pages</li>
      </ul>
    </nav>
    <list v-bind:posts="posts" />
    <!-- <AddButton /> -->
  </main>
</template>

<script>
import List from './List.vue'
import AddButton from './AddButton.vue'
export default {
  name: 'Admin',
  props: {},
  components: [List, AddButton],
  data() {
    return {
      posts: [],
      pages: []
    }
  },
  created() {
    fetch('https://vast-fortress-99756.herokuapp.com/api/posts', {
      method: 'GET'
    })
      .then(data => data.json())
      .then(posts => posts.posts)
      .then(posts => (this.posts = posts))
    fetch('https://vast-fortress-99756.herokuapp.com/api/pages', {
      method: 'GET'
    })
      .then(data => data.json())
      .then(posts => posts.pages)
      .then(posts => (this.pages = posts))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav {
  border: solid 1px;
}
</style>
