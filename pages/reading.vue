<template>
  <div class="content lh-copy center mw-9 pa3">
    <h1>Reading</h1>
    <p>
      The most recent 5 items from my reading list. May be slightly out of sync, since this file is statically generated from time to time.
      <small>
        <a href="https://www.are.na/james-acklin/reading-1527615453">
          ✶✶
        </a>
      </small>
    </p>
    <hr>
    <ul
      v-if="readingList"
      class="list"
    >
      <li
        v-for="item in readingList"
        :key="item.id"
      >
        <a
          class="no-underline underline-hover"
          :href="link(item)"
        >
          {{ item.title }}
        </a>
        <div v-html="item.description_html" />
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  transition: 'fade',
  async asyncData({ payload, isStatic, store, params }) {
    if (payload && isStatic){
      store.commit('addReadingList', [payload])
    } else {
      await store.dispatch('getList', params)
    }
  },
  computed: {
    readingList() {
      return this.$store.getters.getReadingList
    }
  },
  methods: {
    link: function(item){
      if (item.source){
        return item.source.url
      } else if (item.attachment){
        return item.attachment.url
      } else {
        return ''
      }
    }
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
