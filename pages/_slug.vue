<template>
  <div class="content entry">
    <div v-if="fm" class="meta">
      <h1 v-if="fm.title" v-html="fm.title" />
      <p v-if="fm.description" v-html="fm.description" />
    </div>
    <div class="text" v-html="content"></div>
  </div>
</template>

<script>
import implicitFigures from "markdown-it-implicit-figures";
import html5embed from "markdown-it-html5-embed";
import namedHeadings from "markdown-it-named-headings";
import modifyToken from "markdown-it-modify-token";
import footnote from "markdown-it-footnote";
import * as matter from "gray-matter";

const md = require("markdown-it")({
  html: true,
  linkify: true,
  typographer: true,
  quotes: "“”‘’"
})
  .use(implicitFigures)
  .use(html5embed, {
    useImageSyntax: false,
    useLinkSyntax: true,
    isAllowedHttp: true,
    renderFn(properties) {
      switch (properties.mediaType) {
        case "video":
          return `<figure class="video">
                      <video
                        data-src="${properties.url}"
                        poster="${properties.url.replace(".mp4", ".jpg")}"
                        preload="none"
                        autoplay
                        loop
                        controls="false"
                      ></video>
                    </figure>
                  `;
        case "audio":
          return `<audio src="${properties.url}" controls></audio>`;
      }
    }
  })
  .use(namedHeadings)
  .use(modifyToken)
  .use(footnote);

export default {
  async asyncData({ params }) {
    const fileContent = await import(`@/static/markdown/${params.slug}.md`);
    const matterd = matter(fileContent.default);
    return {
      fm: matterd.data,
      content: md.render(matterd.content)
    };
  }
};
</script>

<style>
.text,
.meta {
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

.meta {
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgb(var(--textcolor));
}

.meta > * {
  align-self: start;
  grid-column: 1/13;
}

.text > * {
  align-self: start;
  grid-column: 1/13;
}

.text > figure {
  align-self: start;
  grid-column: 1/13;
  text-align: center;
}

.text > h2 {
  margin-top: 2rem;
}

.footnotes-sep {
  display: none;
}

.footnotes {
  margin-top: 2rem;
  font-size: 80%;
}

@media (min-width: 800px) {
  .meta > *:nth-child(1) {
    grid-column: 1/3;
  }

  .meta > *:nth-child(2) {
    grid-column: 3/11;
  }

  .text > * {
    grid-column: 3/11;
  }
}

@media (min-width: 1150px) {
  .meta > *:nth-child(1) {
    grid-column: 1/4;
  }

  .meta > *:nth-child(2) {
    grid-column: 4/10;
  }

  .text > * {
    grid-column: 4/10;
  }

  .text > h2 {
    grid-column: 1/4;
  }

  .text > h2 + * {
    margin-top: 2rem;
  }
}
</style>
