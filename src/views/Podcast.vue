<template>
  <div class="podcast">
    <Header v-bind="headerData" />
    <Podcasts />
  </div>
</template>

<script>
// @ is an alias to /src
//import Update from "@/components/Update.vue";
import Header from "@/components/event/Header.vue";
import Podcasts from "@/components/event/podcast/Podcast.vue";

export default {
  name: "Podcast",
  components: {
    //Update
    Header,
    Podcasts,
  },
  data: function() {
    return {
      headerData: {
        text_color: "color-so",
        title: "Podcast",
        desc:
          "One click away to listen to an insightful dialogue between the experts that can accompany you in any condition.",
      },
      newMsg: "kladuius",
    };
  },
  metaInfo: {
    titleTemplate: "%s | Podcast Collection",
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "description",
        content:
          "Our podcast collection for you"
      },
      // OpenGraph data (Most widely used)
      {
        property: "og:title",
        content: "do better class podcast collection"
      },
      { property: "og:site_name", content: "do better class" },
      // The list of types is available here: http://ogp.me/#types
      { property: "og:type", content: "website" },
      // Should the the same as your canonical link, see below.
      {
        property: "og:url",
        content: "https://dbclass.dbrandcom.com/podcast"
      },
      // Often the same as your meta description, but not always.
      {
        property: "og:description",
        content:
          "Our podcast collection for you"
      },

      // Google / Schema.org markup:
      { itemprop: "name", content: "do better class" },
      {
        itemprop: "description",
        content:
          "Our podcast collection for you"
      }
    ],
    link: [
      { rel: "canonical", href: "https://dbclass.dbrandcom.com/podcast" }
    ]
  }
};
</script>

<style scoped>
.podcast {
  padding: 5rem 0;
}
</style>
