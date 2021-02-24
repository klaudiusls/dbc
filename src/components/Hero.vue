<template>
  <section id="hero" class="hero d-flex align-items-center">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 d-flex flex-column justify-content-center">
            <a
              data-aos="fade-up"
              href="index.html"
              class="logo d-flex align-items-center"
            >
              <img src="@/assets/logo/logo-sb.png" alt="" />
            </a>
            <h1 data-aos="fade-up" data-aos-delay="200">
              Communication & Branding Online Class By dbrandcom
            </h1>
            <h2 data-aos="fade-up" data-aos-delay="400">#DoBetterTogether</h2>
            <div data-aos="fade-up" data-aos-delay="600">
              <div class="text-lg-start">
                <a
                  href="#about"
                  class="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center"
                >
                  <span>Get Started</span>
                </a>
              </div>
            </div>
          </div>
          <div
            class="col-lg-6 hero-img p-0"
            data-aos="zoom-out"
            data-aos-delay="200"
          >
            <img
              src="@/assets/img/hero.png"
              class="img-fluid"
              height="100%"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
</template>

<script>
export default {
  name: 'Hero',
}
</script>

<style scoped>
.logo img {
    max-height: 120px;
}
/*--------------------------------------------------------------
# Hero Section
--------------------------------------------------------------*/
.hero {
  padding: 0;
  width: 100%;
  height: 100%;
  background: var(--secondary-orange);
  background-size: cover;
}

.hero h1 {
  margin: 0;
  font-size: 48px;
  font-weight: 700;
  color: white;
}

.hero h2 {
  color: black;
  margin: 1rem 0 0 0;
  font-size: 26px;
}

.hero .btn-get-started {
  font-size: 18px;
  font-weight: 700;
  text-decoration: none;
  margin-top: 2rem;
  line-height: 0;
  padding: 1.5rem 2rem;
  border-radius: 100px;
  transition: 0.5s;
  color: black;
  background: white;
  box-shadow: 2px 4px 8px rgba(209, 209, 214, 0.4);
}

.hero .btn-get-started:hover {
  transition: 0.5s;
  color: white;
  background: var(--secondary-purple);
  box-shadow: 2px 4px 8px rgba(209, 209, 214, 0.4);
}

.hero .hero-img {
  text-align: right;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}

.hero .hero-img img {
  height: 100%;
  width: 100%;
}

@media (min-width: 1024px) {
  .hero {
    background-attachment: fixed;
  }
}

@media (max-width: 991px) {
  .hero {
    height: auto;
    padding: 120px 0 60px 0;
  }
  .hero .hero-img {
    text-align: center;
    margin-top: 80px;
  }
  .hero .hero-img img {
    width: 80%;
  }
}

@media (max-width: 768px) {
  .hero {
    text-align: center;
  }
  .hero h1 {
    font-size: 32px;
  }
  .hero h2 {
    font-size: 24px;
  }
  .hero .hero-img img {
    width: 100%;
  }
}
</style>