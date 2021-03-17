<template>
  <div class="home">
    <Hero />
    <About />
    <Speakers />
    <Event />
    <Contact />
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from "@/components/Masthead.vue";
import About from "@/components/About.vue";
import Speakers from "@/components/newSpeakers.vue";
import Event from "@/components/Event.vue";
import Contact from "@/components/Contact.vue";

export default {
  name: "Home",
  components: {
    Hero,
    About,
    Speakers,
    Event,
    Contact,
  },
  metaInfo: {
    titleTemplate: "do better class",
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "description",
        content: "#DoBetterTogether",
      },
      // OpenGraph data (Most widely used)
      {
        property: "og:title",
        content: "#DoBetterTogether",
      },
      { property: "og:site_name", content: "do better class" },
      // The list of types is available here: http://ogp.me/#types
      { property: "og:type", content: "website" },
      // Should the the same as your canonical link, see below.
      {
        property: "og:url",
        content: "https://dbclass.dbrandcom.com/",
      },
      // Often the same as your meta description, but not always.
      {
        property: "og:description",
        content: "#DoBetterTogether",
      },

      // Google / Schema.org markup:
      { itemprop: "name", content: "Podcast Collection of do better class" },
      {
        itemprop: "description",
        content: "Our podcast collection for you",
      },
    ],
    link: [{ rel: "canonical", href: "https://dbclass.dbrandcom.com/" }],
  },
};
</script>
