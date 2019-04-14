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
      content: fileContent.default.replace(
        /<p>\s*(<figure class="video">([\s\S]*|$)<\/figure>)\s*<\/p>/g,
        "$1"
      )
    };
  }
};
</script>

<style>
.text > section {
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

.text > section > * {
  align-self: start;
  grid-column: 1/13;
}

@media (min-width: 800px) {
  .text > section > * {
    align-self: start;
    grid-column: 3/11;
  }
}

@media (min-width: 1200px) {
  .text > section > * {
    align-self: start;
    grid-column: 4/10;
  }
}

.text > section > figure {
  align-self: start;
  grid-column: 1/13;
  text-align: center;
}

.text > section > h2 {
  margin-top: 2rem;
}
</style>
