<template>
  <main>
    <h1>It Wiggles.</h1>
    <hr />
    <section>
      <ul>
        <li v-for="post in posts" :key="post.id">
          <h2>{{ post.title }}</h2>
          <h3>{{ post.created_at.slice(0, 10) }}</h3>
          <p>{{ post.body }}</p>
        </li>
      </ul>
    </section>
    <nav>
      <ul>
        <li v-for="page in pages" :key="page.id">
          {{ page.title }}
        </li>
      </ul>
    </nav>
    <button>
      <svg
        width="279"
        viewBox="0 0 279 189"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.5 169C28.3333 186.834 83.1 208 87.5 150C93 77.5002 181 37.0002 200 80.0002C219 123 291.5 168.5 275.5 115C259.5 61.5001 238 -16.4999 275.5 5.00006"
          stroke="black"
          stroke-width="4"
        />
      </svg>
    </button>
  </main>
</template>

<script>
import Post from './Post.vue'
export default {
  name: 'Blog',
  props: {
    msg: String
  },
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
main {
  max-width: 1200px;
  border: 1px solid;
  margin: auto;
}

h1 {
  font-size: 5rem;
  padding: 3rem 0 1rem 0;
}

h2 {
  font-family: 'Lexend Zetta';
}

hr {
  max-width: 50%;
  margin: auto;
  border: 1px solid black;
  border-bottom: none;
  margin-bottom: 4rem;
}

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
