<template>
  <section
    id="masthead"
    class="masthead"
    data-aos="fade-down"
    data-aos-easing="ease-in-ease"
  >
    <div class="container-fluid">
      <div class="row">
        <div
          class="col-md-7 text-poster my-md-auto my-0 order-1 order-md-0"
          data-aos="zoom-in"
          data-aos-offset="200"
          data-aos-easing="ease-in-ease"
        >
          <img
            class="img-fluid headline-img"
            src="@/assets/img/dbclass-headline.png"
            alt=""
          /><!--
          <h1>Communication and Brand Online Class by dbrandcom</h1>
          <h2>#DoBetterTogether</h2>-->
          <a href="#about"><button class="btn-save">Learn more</button></a>
        </div>
        <div
          class="col-md-5 text-md-right text-center order-0 order-md-1"
          data-aos="fade-up"
          data-aos-offset="400"
          data-aos-easing="ease-in-ease"
        >
          <img
            class="img-fluid photo-poster"
            src="@/assets/img/photo-poster.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.masthead {
  background: var(--secondary-orange) url("~@/assets/img/bg-so-new-min.jpg")
    no-repeat fixed;
  background-size: 100% 100%;
  padding: 0;
  width: 100%;
}

.masthead .container-fluid {
  padding: 6rem 6rem;
  padding-bottom: 0;
  width: 100%;
  max-width: 1440px;
}

.photo-poster {
  max-height: 700px;
  filter: drop-shadow(4px 2px 8px #585858);
}

.text-poster h1 {
  font-weight: bold;
  font-size: 44px;
  color: white;
}

.text-poster h2 {
  margin-top: 1rem;
  font-weight: normal;
  font-size: 30px;
  color: var(--secondary-blue);
}

.headline-img {
  max-width: 550px;
}

.btn-save {
  margin: 0;
  margin-top: 1rem;
  padding: 1rem 2rem;
  border: transparent;
  border-radius: 2rem;
  font-weight: 700;
  color: var(--secondary-orange);
  background-color: white;
}

.btn-save:hover {
  color: white;
  background-color: var(--secondary-blue);
}

@media only screen and (max-width: 418px) {
  #masthead {
    background: var(--secondary-orange)
      /*url("~@/assets/img/bg-poster.jpg")
      no-repeat bottom right*/;
    padding: 0;
    width: 100%;
  }

  #masthead .container-fluid {
    padding: 0 1rem;
    padding-bottom: 3rem;
    width: 100%;
  }

  .col-md-5 {
    padding-top: 6rem;
    background: var(--secondary-orange) url("~@/assets/img/bg-so-new-min.jpg")
      no-repeat fixed bottom right;
    clip-path: ellipse(120% 80% at 50% 20%);
  }

  .headline-img {
    max-width: 100%;
  }

  .text-poster {
    text-align: center;
    padding: 2rem 1.5rem;
    padding-top: 3rem;
  }

  .text-poster h1 {
    font-weight: bold;
    font-size: 1.75rem;
    line-height: 1.2;
    color: white;
  }

  .text-poster h2 {
    font-weight: normal;
    font-size: 22px;
    line-height: 1.2;
    color: var(--secondary-blue);
  }

  .btn-save {
    width: 100%;
  }

  .photo-poster {
    max-height: 360px;
  }
}
</style>
