<template>
  <header class="head-main">
    <div class="fixed-top navbar">
      <div class="container-fluid d-flex justify-content-between">
        <a href="#" class="navbar-brand d-flex align-items-center">
          <img src="@/assets/logo/logo-po.png" class="navbar-brand" alt="" />
        </a>
        <a @click="showNav = !showNav" class="nav-button ml-auto mr-4"
          ><span id="nav-icon3"
            ><span></span><span></span><span></span><span></span></span
        ></a>
      </div>
    </div>
    <!--navbar end-->
    <div v-if="showNav" class="nav-open">
      <div class="fixed-top main-menu">
        <div class="flex-center p-5">
          <ul class="nav flex-column">
            <li class="nav-item delay-1">
              <a class="nav-link" href="/" @click="showNav = !showNav">HOME</a>
            </li>
            <li class="nav-item delay-2">
              <a class="nav-link" href="#about" @click="showNav = !showNav">ABOUT</a>
            </li>
            <li class="nav-item delay-3">
              <a class="nav-link" href="#speaker" @click="showNav = !showNav">SPEAKER</a>
            </li>
            <li class="nav-item delay-4">
              <a class="nav-link" href="#event" @click="showNav = !showNav">EVENTS</a>
            </li>
            <li class="nav-item delay-5">
              <a class="nav-link" href="#register" @click="showNav = !showNav">CONTACT</a>
            </li>
            <!-- <li class="nav-item delay-6">
              <a class="nav-link" href="#">QUALITY</a>
            </li>
            <li class="nav-item delay-7">
              <a class="nav-link" href="#">CAREER</a>
            </li>
            <li class="nav-item delay-8">
              <a class="nav-link" href="#">CONTACT US</a>
            </li> -->
          </ul>
        </div>
      </div>
    </div>
    <!--main-menu end-->
  </header>
</template>

<script>
export default {
  data() {
    return {
      showNav: false,
    };
  },
};
</script>

<style scoped>
.navbar {
  z-index: 2000;
  background: var(--secondary-orange) url("~@/assets/img/bg-poster.jpg")
    no-repeat fixed;
  padding: 0.5rem;
}

.container-fluid {
  padding: 0.5rem 8rem;
}

.navbar-brand {
  max-height: 80px;
}

.nav-open .main-menu {
  width: 50%;
  height: 100%;
  opacity: 1;
  visibility: visible;
  background: var(--secondary-blue);
}
.main-menu .nav li a {
  color: #fff;
  font-size: 5vh;
  font-weight: 600;
}
.main-menu .nav li {
  opacity: 0;
  -webkit-transform: translateY(-40px);
  transform: translateY(-40px);
  -webkit-animation-timing-function: cubic-bezier(0.45, 0.005, 0, 1);
  -moz-animation-timing-function: cubic-bezier(0.45, 0.005, 0, 1);
  -o-animation-timing-function: cubic-bezier(0.45, 0.005, 0, 1);
  animation-timing-function: cubic-bezier(0.45, 0.005, 0, 1);
}
.nav-open .main-menu .nav li {
  opacity: 1;
  -webkit-transform: translateY(0px);
  transform: translateY(0px);
  -webkit-transition: -webkit-transform 0.2s, opacity 0.2s;
  transition: transform 0.2s, opacity 0.2s;
}
.main-menu .nav li.delay-1 {
  -webkit-transition-delay: 0.1s;
  -moz-transition-delay: 0.1s;
  -ms-transition-delay: 0.1s;
  -o-transition-delay: 0.1s;
  transition-delay: 0.1s;
}
.main-menu .nav li.delay-2 {
  -webkit-transition-delay: 0.2s;
  -moz-transition-delay: 0.2s;
  -ms-transition-delay: 0.2s;
  -o-transition-delay: 0.2s;
  transition-delay: 0.2s;
}
.main-menu .nav li.delay-3 {
  -webkit-transition-delay: 0.3s;
  -moz-transition-delay: 0.3s;
  -ms-transition-delay: 0.3s;
  -o-transition-delay: 0.3s;
  transition-delay: 0.3s;
}
.main-menu .nav li.delay-4 {
  -webkit-transition-delay: 0.4s;
  -moz-transition-delay: 0.4s;
  -ms-transition-delay: 0.4s;
  -o-transition-delay: 0.4s;
  transition-delay: 0.4s;
}
.main-menu .nav li.delay-5 {
  -webkit-transition-delay: 0.5s;
  -moz-transition-delay: 0.5s;
  -ms-transition-delay: 0.5s;
  -o-transition-delay: 0.5s;
  transition-delay: 0.5s;
}
.main-menu .nav li.delay-6 {
  -webkit-transition-delay: 0.6s;
  -moz-transition-delay: 0.6s;
  -ms-transition-delay: 0.6s;
  -o-transition-delay: 0.6s;
  transition-delay: 0.6s;
}
.main-menu .nav li.delay-7 {
  -webkit-transition-delay: 0.7s;
  -moz-transition-delay: 0.7s;
  -ms-transition-delay: 0.7s;
  -o-transition-delay: 0.7s;
  transition-delay: 0.7s;
}
.main-menu .nav li.delay-8 {
  -webkit-transition-delay: 0.8s;
  -moz-transition-delay: 0.8s;
  -ms-transition-delay: 0.8s;
  -o-transition-delay: 0.8s;
  transition-delay: 0.8s;
}
.main-menu .nav li.delay-9 {
  -webkit-transition-delay: 0.9s;
  -moz-transition-delay: 0.9s;
  -ms-transition-delay: 0.9s;
  -o-transition-delay: 0.9s;
  transition-delay: 0.9s;
}

.nav-button {
  position: relative;
  z-index: 1111;
  border: none;
  height: 42px;
  display: block;
  width: 50px;
  padding: 12px;
}
.nav-button #nav-icon3 {
  width: 24px;
  height: 22px;
  display: inline-block;
  position: relative;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  cursor: pointer;
}
.nav-button #nav-icon3 span {
  display: block;
  position: absolute;
  height: 3px;
  width: 100%;
  background: white;
  border-radius: 9px;
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.25s ease-in-out;
  -moz-transition: 0.25s ease-in-out;
  -o-transition: 0.25s ease-in-out;
  transition: 0.25s ease-in-out;
}
.nav-button #nav-icon3 span:nth-child(1) {
  top: 0;
}
.nav-button #nav-icon3 span:nth-child(2),
#nav-icon3 span:nth-child(3) {
  top: 7px;
}
.nav-button #nav-icon3 span:nth-child(4) {
  top: 14px;
}
.nav-open #nav-icon3 span:nth-child(1) {
  top: 9px;
  width: 0;
  left: 50%;
}
.nav-open #nav-icon3 span:nth-child(2) {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}
.nav-open #nav-icon3 span:nth-child(3) {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
}
.nav-open #nav-icon3 span:nth-child(4) {
  top: 9px;
  width: 0;
  left: 50%;
}

.flex-center {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  height: 100%;
}

@media only screen and (max-width: 418px) {
  .navbar {
    position: fixed;
    width: 100%;
    padding: 0;
  }

  .container-fluid {
    width: 100%;
    padding: 0.5rem 2rem;
  }

  .nav-open .main-menu {
  width: 100%;
  height: 100%;
}
}
</style>