<template>
  <section id="about" class="about">
    <div class="container" data-aos="fade-up">
      <div class="row gx-0 justify-content-center text-md-left text-center my-auto">
        <div class="col-md-6 my-auto" data-aos="fade-up" data-aos-delay="200">
          <h2>What is <span class="color-po">Do Better Class?</span></h2>
        </div>
        <div class="col-md-6 my-auto" data-aos="fade-up" data-aos-delay="200">
          <p>
            An answer for every fighter that wants to know how to increase their
            credibilities and capabilities under the scope of communications. We
            provide what you are seeking for in communications, personal
            branding, and marketing communication with free online classes. Get
            fresh insights and upgrade your business, career, personal life with
            extra tips & tricks by joining the classes frequently.
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
#about {
  background: var(--secondary-orange) url("~@/assets/img/bg-blue-dark.jpg") no-repeat;
}

.about .container {
  padding: 5rem;
  padding-top: 7rem;
  padding-bottom: 3rem;
}

.about h2 {
  font-size: 32px;
  color: white;
}

.about p {
  margin: 3rem 0 2rem 0;
  line-height: 24px;
  color: white;
}

@media only screen and (max-width: 418px) {
  .about .container {
    padding: 3rem 2rem;
    padding-bottom: 2rem;
  }
}
</style>
