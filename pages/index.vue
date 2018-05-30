<template>
  <div v-html="content" class="lh-copy measure-wide center mw-9 pa3"></div>
</template>

<script>
export default {
  transition: 'fade',
  async asyncData({ params }) {
    const fileContent = await import(`~/static/markdown/index.md`);
    return {
      content: fileContent
    };
  }
};
</script>

<style scoped>
>>> ul {
  padding-left: 1.33em;
}

>>> li {
  list-style: none;
  position: relative;
}

>>> li:before {
  content: '→';
  position: absolute;
  left: -1.33em;
}
</style>
