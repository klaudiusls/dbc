<template>
  <section class="Other" id="Other">
    <div class="container-fluid">
      <div class="row">
        <List
          v-for="(item, index) in dynamicList"
          :key="index"
          :webinar="item"
        ></List>
      </div>
    </div>
  </section>
</template>

<script>
import List from "./Other-list.vue";

export default {
  name: "other",
  components: { List },
  data() {
    return {
      dynamicList: [],
    };
  },
  methods: {
    prepareDynamicList() {
      let list = [
        {
          title:
            "Quarter Life Crisis Breakthrough",
          speaker: "Ria R Chritiana",
          date: "3 March 2021",
          image: "spk-1",
        },
      ];
      list.forEach((element) => {
        this.dynamicList.push({ ...element });
      });
    },
  },
  async created() {
    await this.prepareDynamicList();
  },
  /*metaInfo: {
    titleTemplate: "%s | Pertanyaan Umum",
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "description",
        content:
          "Layanan Pinjam Meminjam Berbasis Teknologi Informasi merupakan kesepakatan perdata antara Pemberi Pinjaman dengan Penerima Pinjaman, sehingga ..."
      },
      // OpenGraph data (Most widely used)
      {
        property: "og:title",
        content: "Pertanyaan Umum PinjamKAN.co.id"
      },
      { property: "og:site_name", content: "PinjamKAN.co.id" },
      // The list of types is available here: http://ogp.me/#types
      { property: "og:type", content: "website" },
      // Should the the same as your canonical link, see below.
      {
        property: "og:url",
        content: "https://www.pinjamkan.co.id/faq/"
      },
      // Often the same as your meta description, but not always.
      {
        property: "og:description",
        content:
          "Layanan Pinjam Meminjam Berbasis Teknologi Informasi merupakan kesepakatan perdata antara Pemberi Pinjaman dengan Penerima Pinjaman, sehingga ..."
      },

      // Google / Schema.org markup:
      { itemprop: "name", content: "Pertanyaan Umum PinjamKAN.co.id" },
      {
        itemprop: "description",
        content:
          "Layanan Pinjam Meminjam Berbasis Teknologi Informasi merupakan kesepakatan perdata antara Pemberi Pinjaman dengan Penerima Pinjaman, sehingga ..."
      }
    ],
    link: [{ rel: "canonical", href: "https://www.pinjamkan.co.id/faq/" }]
  }*/
};
</script>

<style></style>
