<template>
  <div class="">
    <div id="wrapper">
      <!-- Header Container -->
   <top-header/>
      <div class="clearfix"></div>
      <!-- Header Container / End -->
 <div v-if="$nuxt.isOffline">You are offline</div>
    <Nuxt keep-alive/>
      <!-- Subscribe Block End -->
  
      <!-- Footer -->
      <div id="footer">
        <div class="utf-footer-section-item-block">
          <div class="container">
            <div class="row">
              <div class="col-xl-4 col-md-12">
                <div class="utf-footer-item-links">
                  <a href="index-1.html"
                    ><img
                      class="footer-logo"
                      src="~/assets/images/footer_logo.png"
                      alt=""
                  /></a>
                  <p>
                    Lorem Ipsum is simply dummy text of printing and type
                    setting industry. Lorem Ipsum been industry standard dummy
                    text ever since, when unknown printer took a galley type
                    scrambled.
                  </p>
                </div>
              </div>

              <div class="col-xl-2 col-md-3 col-sm-6">
                <div class="utf-footer-item-links">
                  <h3>Job Categories</h3>
                  <ul>
                    <li>
                      <a href="jobs-list-layout-leftside.html"
                        ><i class="icon-feather-chevron-right"></i>
                        <span>Developement</span></a
                      >
                    </li>
                    <li>
                      <a href="jobs-list-layout-leftside.html"
                        ><i class="icon-feather-chevron-right"></i>
                        <span>Designing</span></a
                      >
                    </li>
                    <li>
                      <a href="jobs-list-layout-leftside.html"
                        ><i class="icon-feather-chevron-right"></i>
                        <span>Marketing</span></a
                      >
                    </li>
                    <li>
                      <a href="jobs-list-layout-leftside.html"
                        ><i class="icon-feather-chevron-right"></i>
                        <span>Data Analytics</span></a
                      >
                    </li>
                    <li>
                      <a href="#"
                        ><i class="icon-feather-chevron-right"></i>
                        <span>Post New Job</span></a
                      >
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-xl-2 col-md-3 col-sm-6">
                <div class="utf-footer-item-links">
                  <h3>Job Type</h3>
                  <ul>
                    <li>
                      <a href="jobs-list-layout-leftside.html"
                        ><i class="icon-feather-chevron-right"></i>
                        <span>Work from Home</span></a
                      >
                    </li>
                    <li>
                      <a href="jobs-list-layout-leftside.html"
                        ><i class="icon-feather-chevron-right"></i>
                        <span>Internship Job</span></a
                      >
                    </li>
                    <li>
                      <a href="jobs-list-layout-leftside.html"
                        ><i class="icon-feather-chevron-right"></i>
                        <span>Freelancer Job</span></a
                      >
                    </li>
                    <li>
                      <a href="jobs-list-layout-leftside.html"
                        ><i class="icon-feather-chevron-right"></i>
                        <span>Part Time Job</span></a
                      >
                    </li>
                    <li>
                      <a href="jobs-list-layout-leftside.html"
                        ><i class="icon-feather-chevron-right"></i>
                        <span>Full Time Job</span></a
                      >
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-xl-2 col-md-3 col-sm-6">
                <div class="utf-footer-item-links">
                  <h3>Resources</h3>
                  <ul>
                    <li>
                      <a href="#"
                        ><i class="icon-feather-chevron-right"></i>
                        <span>My Account</span></a
                      >
                    </li>
                    <li>
                      <a href="#"
                        ><i class="icon-feather-chevron-right"></i>
                        <span>Support</span></a
                      >
                    </li>
                    <li>
                      <a href="#"
                        ><i class="icon-feather-chevron-right"></i>
                        <span>How It Works</span></a
                      >
                    </li>
                    <li>
                      <a href="#"
                        ><i class="icon-feather-chevron-right"></i>
                        <span>Underwriting</span></a
                      >
                    </li>
                    <li>
                      <a href="#"
                        ><i class="icon-feather-chevron-right"></i>
                        <span>Employers</span></a
                      >
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-xl-2 col-md-3 col-sm-6">
                <div class="utf-footer-item-links">
                  <h3>Quick Links</h3>
                  <ul>
                    <li>
                      <a href="jobs-list-layout-leftside.html"
                        ><i class="icon-feather-chevron-right"></i>
                        <span>Jobs Listing</span></a
                      >
                    </li>
                    <li>
                      <a href="about-us.html"
                        ><i class="icon-feather-chevron-right"></i>
                        <span>About Us</span></a
                      >
                    </li>
                    <li>
                      <a href="contact.html"
                        ><i class="icon-feather-chevron-right"></i>
                        <span>Contact Us</span></a
                      >
                    </li>
                    <li>
                      <a href="privacy-policy.html"
                        ><i class="icon-feather-chevron-right"></i>
                        <span>Privacy Policy</span></a
                      >
                    </li>
                    <li>
                      <a href="terms-condition.html"
                        ><i class="icon-feather-chevron-right"></i>
                        <span>Term & Condition</span></a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Footer Copyrights -->
        <div class="utf-footer-copyright-item">
          <div class="container">
            <div class="row">
              <div class="col-xl-12">
                Copyright &copy; 2021 All Rights Reserved.
              </div>
            </div>
          </div>
        </div>
        <!-- Footer Copyrights / End -->
      </div>
      <!-- Footer / End -->
    </div>
    <!-- Wrapper / End -->

    <!-- Sign In Popup -->
    <div
      id="utf-signin-dialog-block"
      class="zoom-anim-dialog mfp-hide dialog-with-tabs"
    >
      <div class="utf-signin-form-part">
        <ul class="utf-popup-tabs-nav-item">
          <li><a href="#login">Log In</a></li>
          <li><a href="#register">Register</a></li>
        </ul>
        <div class="utf-popup-container-part-tabs">
          <!-- Login -->
          <div class="utf-popup-tab-content-item" id="login">
            <div class="utf-welcome-text-item">
              <h3>Welcome Back Sign in to Continue</h3>
              <span
                >Don't Have an Account?
                <a href="#" class="register-tab">Sign Up!</a></span
              >
            </div>
            <form method="post" id="login-form">
              <div class="utf-no-border">
                <input
                  type="text"
                  class="utf-with-border"
                  name="emailaddress"
                  id="emailaddress"
                  placeholder="Email Address"
                  required
                />
              </div>
              <div class="utf-no-border">
                <input
                  type="password"
                  class="utf-with-border"
                  name="password"
                  id="password"
                  placeholder="Password"
                  required
                />
              </div>
              <div class="checkbox margin-top-0">
                <input type="checkbox" id="two-step" />
                <label for="two-step"
                  ><span class="checkbox-icon"></span> Remember Me</label
                >
              </div>
              <a href="forgot-password.html" class="forgot-password"
                >Forgot Password?</a
              >
            </form>
            <button @click="userLogin"
              class="button full-width utf-button-sliding-icon ripple-effect"
              type="submit"
              form="login-form"
            >
              Log In <i class="icon-feather-chevron-right"></i>
            </button>
            <div class="utf-social-login-separator-item">
              <span>Or Login in With</span>
            </div>
            <div class="utf-social-login-buttons-block">
              <button class="facebook-login ripple-effect">
                <i class="icon-brand-facebook-f"></i> Facebook
              </button>
              <button class="google-login ripple-effect">
                <i class="icon-brand-google"></i> Google
              </button>
              <button class="twitter-login ripple-effect">
                <i class="icon-brand-twitter"></i> Twitter
              </button>
            </div>
          </div>

          <!-- Register -->
          <div class="utf-popup-tab-content-item" id="register">
            <div class="utf-welcome-text-item">
              <h3>Create your Account!</h3>
              <span
                >Don't Have an Account?
                <a href="#" class="register-tab">Sign Up!</a></span
              >
            </div>
            <form method="post" id="utf-register-account-form">
              <div class="utf-no-border">
                <input
                  type="text"
                  class="utf-with-border"
                  name="name"
                  id="name"
                  placeholder="User Name"
                  required
                />
              </div>
              <div class="utf-no-border">
                <input
                  type="text"
                  class="utf-with-border"
                  name="emailaddress-register"
                  id="emailaddress-register"
                  placeholder="Email Address"
                  required
                />
              </div>
              <div class="utf-no-border margin-bottom-20">
                <select
                  class="selectpicker utf-with-border"
                  data-size="5"
                  title="Select Jobs"
                >
                  <option>Web Designer</option>
                  <option>Web Developer</option>
                  <option>Graphic Designer</option>
                  <option>Android Developer</option>
                  <option>IOS Developer</option>
                  <option>UI/UX Designer</option>
                  <option>Graphics Designer</option>
                </select>
              </div>
              <div
                class="utf-no-border"
                title="Should be at least 8 characters long"
                data-tippy-placement="bottom"
              >
                <input
                  type="password"
                  class="utf-with-border"
                  name="password-register"
                  id="password-register"
                  placeholder="Password"
                  required
                />
              </div>
              <div class="utf-no-border">
                <input
                  type="password"
                  class="utf-with-border"
                  name="password-repeat-register"
                  id="password-repeat-register"
                  placeholder="Repeat Password"
                  required
                />
              </div>
              <div class="checkbox margin-top-0">
                <input type="checkbox" id="two-step0" />
                <label for="two-step0"
                  ><span class="checkbox-icon"></span> I Have Read and Agree to
                  the <a href="#">Terms &amp; Conditions</a></label
                >
              </div>
            </form>
            <button
              class="margin-top-10 button full-width utf-button-sliding-icon ripple-effect"
              type="submit"
              form="utf-register-account-form"
            >
              Register <i class="icon-feather-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import "@/assets/css/bootstrap-grid.css";
// import "@/assets/css/style.css";

// import '../assets/js/typed.js'
// import "@/assets/js/custom_jquery.js";
// import "@/assets/js/simplebar.min.js";
// import "@/assets/js/bootstrap-slider.min.js";
// import "@/assets/js/mmenu.min.js";
// import "@/assets/js/mmenu.min.js";
// import "@/assets/js/mmenu.min.js";
// import "@/assets/js/mmenu.min.js";
// import "@/assets/js/mmenu.min.js";
import 'jquery'
import top_header from '~/components/top_header.vue';
import Banner from '~/components/banner.vue';
import Latest from '~/components/latest.vue';
import Testimonials from '~/components/testimonials.vue';
import Support from '~/components/support.vue';
import Award from '~/components/award.vue';
 import { mapMutations } from 'vuex'
 
export default {
  components: { top_header, Banner,Latest,Award, Testimonials, Support, },
   
    
    
    layout: 'app_layout',
  // css: ['~/assets/css/bootstrap-grid.css', '~/assets/css/style.css'],
  data() {
    return {
       
      login: {
        email: 'feraolbiru@gmail.com',
        password: 'password'
      }
    }
  },
  mounted() {
 
  },
  head() {
    return {
      script: [
        {
          //  src: '/assets/js/custom_jquery.js'
        },
      ],
    }
  },

   methods: {
 
    async userLogin() {
      
      try {
        
        // let response = await this.$auth.loginWith('local', { data: this.login })
 

       let response = await this.$axios.$post('login-request', this.login )
        // this.$auth.$storage.setUniversal('user', response.user, true)
        console.log(response)
this.$auth.$storage.setLocalStorage('email', response.email)
this.$auth.$storage.setLocalStorage('token', response.token)
this.$auth.$storage.setLocalStorage('name', response.name)
this.$auth.$storage.setLocalStorage('profile', response.image_path)

this.$store.commit('addOne/setLogin')
   

} catch (err) {
        console.log("error while fetching.....")
      }
    },
     logout(state) {
    window.localStorage.clear()
    state.isLoggedIn = false;
  }
  }
  
    
}

</script>

<style>
.intro-banner{
background: url(~/assets/images/home-background-01.jpg);
background-position: center;
background-size: cover;
}
</style>
