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
          class="col-md-7 text-poster my-auto"
          data-aos="zoom-in"
          data-aos-offset="200"
          data-aos-easing="ease-in-ease"
        >
          <!-- <img class="img-fluid" src="@/assets/img/text-poster.png" alt="" /> -->
          <h1>Communication & Branding Online Class by dbrandcom</h1>
          <h2>#DoBetterTogether</h2>
          <a
            href="#about"
            ><button class="btn-save">Learn more</button></a
          >
        </div>
        <div
          class="col-md-5 text-right"
          data-aos="fade-up"
          data-aos-offset="400"
          data-aos-easing="ease-in-ease"
        >
          <img
            class="img-fluid photo-poster"
            src="@/assets/img/ibu-ria-crop.png"
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
  background: var(--secondary-orange) url("~@/assets/img/bg-poster.jpg")
    no-repeat fixed;
  padding: 0;
  width: 100%;
}

.masthead .container-fluid {
  padding: 6rem 6rem;
  padding-bottom: 0;
  width: 100%;
}

.photo-poster {
  max-height: 700px;
}

.text-poster h1 {
  font-weight: bold;
  font-size: 44px;
  color: white;
}

.text-poster h2 {
  margin-top: 1rem;
  font-weight: bold;
  font-size: 30px;
  color: var(--secondary-blue);
}

.btn-save {
  margin: 0;
  margin-top: 1rem;
  padding: 0.75rem 1.5rem;
  border: transparent;
  border-radius: 2rem;
  font-weight: 700;
  background-color: white;
}

.btn-save:hover {
  color: white;
  background-color: var(--secondary-blue);
}

@media only screen and (max-width: 418px) {
  #masthead {
    background: var(--secondary-orange) url("~@/assets/img/bg-poster.jpg")
      no-repeat fixed center;
    padding: 0;
    padding-top: 3rem;
    margin-top: 3rem;
    width: 100%;
  }

  #masthead .container-fluid {
    padding: 3rem 1rem;
    padding-bottom: 0;
    width: 100%;
  }

  .text-poster {
    text-align: center;
  }

  .text-poster h1 {
    font-weight: bold;
    font-size: 32px;
    line-height: 3rem;
    color: white;
  }

  .text-poster h2 {
    font-weight: bold;
    font-size: 22px;
    line-height: 3rem;
    color: var(--secondary-blue);
  }

  .photo-poster {
    margin-top: 2rem;
  }
}
</style>
