<template>
  <div class="content entry">
    <div class="text" v-html="content"></div>
  </div>
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

<style>
.text {
  --col: 4/10;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  -webkit-box-align: start;
  -ms-flex-align: start;
  column-gap: 1rem;
  row-gap: 1rem;
  grid-column: 1/-1;
  word-break: break-word;
}
.text > * {
  align-self: start;
  grid-column: 4/10;
}
</style>
