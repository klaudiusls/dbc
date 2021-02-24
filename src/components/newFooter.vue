<template>
  <footer id="footer" class="footer">
    <div class="footer-top">
      <div class="container">
        <div class="row gy-4 justify-content-center text-center footer-info">
          <div class="col-md-6">
            <div class="social-links">
              <a href="/" class="twitter">Home</a>
              <a href="#update" class="facebook">Highlight</a>
              <a href="#speaker" class="instagram">Speaker</a>
              <a href="#event" class="linkedin">Event</a>
            </div>
          </div>
          <div class="col-md-3">
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
          <div class="col-md-3">
            <a href="index.html" class="logo">
              <img src="@/assets/logo/logo-po.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="copyright">
      &copy; Copyright 2021 <strong><span>dbrandcom</span></strong
      >.
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
  border-bottom: 1px solid #e1ecff;
  padding: 60px 0 30px 0;
}

@media (max-width: 992px) {
  .footer .footer-top {
    background-position: center bottom;
  }
}

.footer .footer-top .footer-info {
  margin-bottom: 1rem;
}

.footer .footer-top .footer-info .logo {
  line-height: 0;
  margin-bottom: 1rem;
}

.footer .footer-top .footer-info .logo img {
  max-height: 120px;
}

.footer .footer-top .footer-info .logo span {
  font-size: 30px;
  font-weight: 700;
  letter-spacing: 1px;
  color: #012970;
  font-family: "Nunito", sans-serif;
  margin-top: 3px;
}

.footer .footer-top .social-links a {
  text-decoration: none;
  padding: 1rem 0.5rem;
  font-size: 20px;
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

.footer .footer-top .footer-links {
  margin-bottom: 30px;
}

.footer .footer-top .footer-links ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer .footer-top .footer-links ul i {
  padding-right: 2px;
  color: #d0d4fc;
  font-size: 12px;
  line-height: 0;
}

.footer .footer-top .footer-links ul li {
  padding: 10px 0;
  display: flex;
  align-items: center;
}

.footer .footer-top .footer-links ul li:first-child {
  padding-top: 0;
}

.footer .footer-top .footer-links ul a {
  color: #013289;
  transition: 0.3s;
  display: inline-block;
  line-height: 1;
}

.footer .footer-top .footer-links ul a:hover {
  color: #4154f1;
}

.footer .footer-top .footer-contact p {
  line-height: 26px;
}

.footer .copyright {
  text-align: center;
  padding: 0.5rem;
  color: white;
}
</style>