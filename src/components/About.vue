<template>
  <section id="about" class="about">
    <div class="container" data-aos="fade-up">
      <div class="row gx-0 justify-content-center text-md-center text-left">
        <div class="col-lg-10" data-aos="fade-up" data-aos-delay="200">
          <h2>What is Do Better Class?</h2>
          <p>
            Do Better Class adalah sebuah program kelas online gratis yang
            secara rutin diadakan setiap bulan selama satu tahun untuk
            meningkatkan pengetahuan dan kemampuan audience dalam kajian
            komunikasi. Mengangkat komunikasi, personal branding dan marketing
            komunikasi sebagai topik utama, Do Better Class diharapkan menjadi
            sebuah pintu untuk membuka wawasan dan menggali potensi para insan
            muda dalam karir, bisnis atau kehidupan pribadi.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "About",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*--------------------------------------------------------------
# About
--------------------------------------------------------------*/
.about .container {
  padding: 5rem;
  padding-bottom: 3rem;
}

.about h2 {
  font-size: 32px;
  font-weight: 700;
  color: black;
}

.about p {
  margin: 3rem 0 2rem 0;
  line-height: 24px;
}

@media only screen and (max-width: 418px) {
  .about .container {
    padding: 3rem 2rem;
    padding-bottom: 2rem;
  }
}
</style>
