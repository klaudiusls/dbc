<template>
  <footer id="footer" class="footer">
    <div class="footer-logo">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-sm-12 py-4">
            <a href=""
              ><img class="logo" src="@/assets/img/logo-footer.png" alt=""
            /></a>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-top">
      <div class="container">
        <div class="row text-center">
          <div class="col-md-3 copyright order-md-0 order-2">
            &copy; Copyright 2021 <strong><span>dbrandcom</span></strong>
          </div>
          <div class="col-md-6 order-md-1 order-0">
            <ul class="list-inline social-links">
              <li class="list-inline-item pl-2">
                <a href="/">Home</a>
              </li>
              <li class="list-inline-item pl-2">
                <a href="#about">About</a>
              </li>
              <li class="list-inline-item pl-2">
                <a href="#event">Programs</a>
              </li>
              <li class="list-inline-item pl-2">
                <a href="#register">Contact</a>
              </li>
            </ul>
          </div>
          <div class="col-md-3 order-md-2 order-1">
            <div class="social-links">
              <a
                href="https://www.instagram.com/dbrandcom/"
                class="instagram"
                targer="_blank"
                ><i class="bi bi-instagram bx bxl-instagram"></i
              ></a>
              <a
                href="https://www.linkedin.com/company/dbrandcom/"
                class="linkedin"
                target="_blank"
                ><i class="bi bi-linkedin bx bxl-linkedin"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/*--------------------------------------------------------------
# Footer
--------------------------------------------------------------*/
.footer {
  background: var(--secondary-blue);
  padding: 0;
  width: 100%;
  font-size: 14px;
  color: white;
}

.footer .footer-top {
  background-size: contain;
  border-top: 1px solid #e1ecff;
  border-bottom: 0px solid #e1ecff;
  padding: 1rem 0;
}

@media (max-width: 992px) {
  .footer .footer-top {
    background-position: center bottom;
  }
}

.footer-logo {
  text-align: center;
  padding: 2rem;
  display: inline;
}

.footer-logo img {
  max-height: 44px;
  width: auto;
}

.nav li {
  padding: 0.5rem;
}

ul {
  padding: 0.5rem;
}

.footer .footer-top .social-links a {
  text-decoration: none;
  padding: 0.5rem;
  font-size: 1rem;
  display: inline-block;
  color: white;
  line-height: 0;
  margin-right: 10px;
  transition: 0.3s;
}

.footer .footer-top .social-links a:hover {
  color: var(--primary-orange);
}

.footer .footer-top h4 {
  font-size: 16px;
  font-weight: bold;
  color: #012970;
  text-transform: uppercase;
  position: relative;
  padding-bottom: 12px;
}

.footer .copyright {
  text-align: center;
  padding: 0.5rem;
  color: white;
}
</style>