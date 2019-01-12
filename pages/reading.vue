<template>
  <div class="content lh-copy center mw-9 pa3">
    <h1>Reading</h1>
    <p>
      The most recent 5 items from my reading list.
      <small>
        <a href="https://www.are.na/james-acklin/reading-1527615453">
          ✶✶
        </a>
      </small>
    </p>
    <hr>
    <ul class="list">
      <li
        v-for="item in readingList"
        :key="item.id"
      >
        <a
          class="no-underline underline-hover"
          :href="item.source.url"
        >
          {{ item.title }}
        </a>
        <div v-html="item.description_html" />
      </li>
    </ul>
  </div>
</template>

<script>
const axios = require('axios')

export default {
  transition: 'fade',

  asyncData({ req, params }) {
    return axios
      .get('https://api.are.na/v2/channels/reading-1527615453?per=10000')
      .then(res => {
        return {
          readingList: res.data.contents.reverse().slice(0, 5)
        }
      })
  }
}
</script>

<style scoped>
>>> ul {
  padding-left: 1.33em;
}

>>> li {
  list-style: none;
  position: relative;
  margin-bottom: 1rem;
}

>>> li:before {
  content: '→';
  position: absolute;
  left: -1.33em;
}
</style>
