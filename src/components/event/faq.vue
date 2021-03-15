<template>
  <section class="page-section" id="faq">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 section-heading">
          <h2 class="section-heading text-center mb-2">Pertanyaan Umum</h2>
        </div>
      </div>
      <div class="row">
        <infoList
          v-for="(item, index) in dynamicList"
          :key="index"
          :pertanyaan="item"
        >{{item.jawaban}}</infoList>
      </div>
    </div>
  </section>
</template>

<script>
import InfoList from "./faq-list.vue";

export default {
  name: "faq",
  components: { InfoList },
  data() {
    return {
      dynamicList: []
    };
  },
  methods: {
    prepareDynamicList() {
      let list = [
        {
          title: "1.	Apa itu PinjamKAN?",
          jawaban:
            "Perusahaan financial technology (fintech) peer-to-peer lending yang menyalurkan pinjaman berjaminan melalui agen-agen dari mitra kami. "
        },
        {
          title: "2.	Apa syarat untuk mengajukan pinjaman di PinjamKAN?",
          jawaban:
            "Warga Negara Indonesia, Berusia minimal 17 tahun, Memiliki KTP yang masih berlaku, Memiliki HP (Smartphone) yang masih layak"
        },
        {
          title: "3.	Bagaimana caranya untuk mengajukan pinjaman di PinjamKAN?",
          jawaban:
            "Anda cukup mengunjungi agen terdekat dengan membawa KTP dan HP (smartphone) yang akan dijaminkan."
        },
        {
          title:
            "4.	Berapa lama proses untuk mendapatkan pinjaman di PinjamKAN?",
          jawaban:
            "Waktu yang diperlukan sampai proses selesai adalah 30-60 menit."
        },
        {
          title:
            "5.	Berapa biaya bunga/pinjaman yang harus dibayarkan untuk pinjaman di PinjamKAN?",
          jawaban:
            "Besarnya bunga tergantung pada tenor/ waktu pinjaman (sampai dengan max 8%)."
        },
        {
          title: "6.	Adakah biaya-biaya tambahan untuk sekali transaksi?",
          jawaban:
            "Hanya ada biaya admin Rp. 35.000 yang merupakan gabungan antara biaya untuk agen, admin dan asuransi."
        },
        {
          title: "7.	Berapa minimal dan maksimal pinjaman yang bisa diajukan?",
          jawaban:
            "Nilai maksimal dan minimal pinjaman tergantung dari jenis HP yang akan dijaminkan."
        },
        {
          title: "8.	Apa saja jenis HP yang diterima?",
          jawaban:
            "Kami menerima sekitar 300 lebih jenis HP yang dapat diakses melalui agen."
        },
        {
          title:
            "9.	Apakah ada penalti atau bunga-berbunga apabila pinjaman lewat jatuh tempo?",
          jawaban:
            "Tidak ada skema bunga berbunga di PinjamKAN. Kami hanya mengenakan penalti sebesar Rp 50.000 apabila transaksi sudah jatuh tempo."
        },
        {
          title:
            "10.	Berapa lama tenggang waktu sampai HP diambil oleh PinjamKAN dan tidak dapat kami tebus lagi?",
          jawaban:
            "Kami memberikan waktu tenggang selama 1 minggu untuk penerima pinjaman dalam melakukan konfirmasi, sebelum melakukan pengambilan HP. Apabila selama 1 minggu tidak ada konfirmasi, maka transaksi akan kami nyatakan “gagal bayar” dan kami akan melakukan pengalihan jaminan"
        }
      ];
      list.forEach(element => {
        this.dynamicList.push({ ...element, visible: false });
      });
    }
  },
  async created() {
    await this.prepareDynamicList();
  },
  metaInfo: {
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
  }
};
</script>

<style>
</style>