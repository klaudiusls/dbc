<template>
  <section id="masthead" class="masthead" data-aos="fade-down" data-aos-easing="ease-in-ease">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6 text-poster my-auto" data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-ease">
          <img class="img-fluid" src="@/assets/img/text-poster.png" alt="" />
          <a href="https://loket.com/event/dbclass-quarter-life-breakthrough" target="_blank"><button class="btn-save">Save your seat</button></a>
        </div>
        <div class="col-md-6 text-right" data-aos="fade-up" data-aos-offset="400" data-aos-easing="ease-in-ease">
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
  background: var(--secondary-orange) url("~@/assets/img/bg-poster.jpg")
    no-repeat fixed;
  padding: 0;
  width: 100%;
}

.masthead .container-fluid {
  padding: 6rem 10rem;
  padding-bottom: 0;
  width: 100%;
}

.photo-poster {
  max-height: 700px;
}

.btn-save {
    margin: 0;
    margin-top: 2rem;
    margin-left: 1.5rem;
    padding: 1rem 2rem;
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
    width: 100%;
  }

  #masthead .container-fluid {
    padding: 3rem 1rem;
    padding-bottom: 0;
    width: 100%;
  }

  .photo-poster {
    margin-top: 2rem;
  }

  .btn-save {
      margin-left: .5rem;
  }
}
</style>