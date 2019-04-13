<template>
  <div class="content entry" v-html="content"></div>
</template>

<script>
export default {
  async asyncData({ params }) {
    const fileContent = await import(`@/static/markdown/${params.slug}.md`);
    return {
      content: fileContent.default
    };
  }
};
</script>

<style scoped>
.entry {
  padding: 1rem;
}
</style>
