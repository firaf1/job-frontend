<template>
  <div class="">
    <!-- Titlebar -->
    <div id="titlebar" class="gradient">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2>Jobs Listing Left Sidebar</h2>
            <nav id="breadcrumbs">
              <ul>
                <li><a href="index-1.html">Home</a></li>
                <li>Jobs Listing Left Sidebar</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <!-- Titlebar End -->

    <!-- Search Jobs Start -->
    <div class="inner_search_block_section padding-top-0 padding-bottom-40">
      <div class="container">
        <div class="col-md-12">
          <div class="utf-intro-banner-search-form-block">
            <div class="utf-intro-search-field-item">
              <i class="icon-feather-search"></i>
              <input
                id="intro-keywords"
                type="text"
                placeholder="Search Jobs Keywords..."
              />
            </div>
            <div
              class="utf-intro-search-field-item"
              style="width: 100%; height: 100%; shadow: none"
            >
              <select
                class="selectpicker1 default"
                style="width: 100%; height: 100%"
              >
                <option>Afghanistan</option>
                <option>Albania</option>
                <option>Algeria</option>
                <option>Brazil</option>
                <option>Burundi</option>
                <option>Bulgaria</option>
                <option>Germany</option>
                <option>Grenada</option>
                <option>Guatemala</option>
                <option>Iceland</option>
              </select>
            </div>
            <div class="utf-intro-search-button">
              <button
                class="button ripple-effect"
                onclick="window.location.href='jobs-list-layout-leftside.html'"
              >
                <i class="icon-material-outline-search"></i> Search
              </button>
            </div>
          </div>
          <p class="utf-trending-silver-item">
            <span class="utf-trending-black-item">Trending Jobs Keywords:</span>
            Web Designer, Web Developer, Graphic Designer, PHP Developer, IOS
            Developer, Android Developer
          </p>
        </div>
      </div>
    </div>
    <!-- Search Jobs End -->

    <!-- Page Content -->
    <div class="container">
      <div class="row">
        <div class="col-xl-3 col-lg-4">
          <div class="utf-sidebar-container-aera">
            <div class="utf-sidebar-widget-item">
              <div class="utf-quote-box utf-jobs-listing-utf-quote-box">
                <div class="utf-quote-info">
                  <h4>Make a Difference with Online Resume!</h4>
                  <p>
                    Your Resume in Minutes with Jobs Resume Assistant is Ready!
                  </p>
                  <a
                    href="register.html"
                    class="button utf-ripple-effect-dark utf-button-sliding-icon margin-top-0"
                    >Create Account <i class="icon-feather-chevron-right"></i
                  ></a>
                </div>
              </div>
            </div>

            <div class="utf-sidebar-widget-item">
              <h3>Search Keywords</h3>
              <div class="utf-input-with-icon">
                <input type="text" placeholder="Search Keywords..." />
                <i class="icon-material-outline-search"></i>
              </div>
            </div>

            <div class="utf-sidebar-widget-item">
              <h3>Category</h3>
              <select
                class="selectpicker"
                data-live-search="true"
                data-selected-text-format="count"
                data-size="7"
                title="All Categories"
              >
                <option v-for="cat in categories" :key="cat.id">
                  {{ cat.name }}
                </option>
              </select>
            </div>

            <div class="utf-sidebar-widget-item">
              <h3>Gender</h3>
              <select class="selectpicker" data-size="3" title="Gender">
                <option>Male</option>
                <option>Female</option>
                <option>Others</option>
              </select>
            </div>

            <div class="utf-sidebar-widget-item">
              <h3>Job Type</h3>
              <div class="utf-radio-btn-list">
                <div class="checkbox">
                  <input type="checkbox" id="chekcbox1" checked />
                  <label for="chekcbox1"
                    ><span class="checkbox-icon"></span> Full Time Jobs</label
                  >
                </div>
                <div class="checkbox">
                  <input type="checkbox" id="chekcbox2" />
                  <label for="chekcbox2"
                    ><span class="checkbox-icon"></span> Part Time Jobs</label
                  >
                </div>
                <div class="checkbox">
                  <input type="checkbox" id="chekcbox3" />
                  <label for="chekcbox3"
                    ><span class="checkbox-icon"></span> Freelancer Jobs</label
                  >
                </div>
                <div class="checkbox">
                  <input type="checkbox" id="chekcbox4" />
                  <label for="chekcbox4"
                    ><span class="checkbox-icon"></span> Internship Jobs</label
                  >
                </div>
                <div class="checkbox">
                  <input type="checkbox" id="chekcbox5" />
                  <label for="chekcbox5"
                    ><span class="checkbox-icon"></span> Temporary Jobs</label
                  >
                </div>
              </div>
            </div>
            <div class="clearfix"></div>

            <div class="utf-sidebar-widget-item">
              <h3>Experince</h3>
              <div class="utf-radio-btn-list">
                <div class="checkbox">
                  <input type="checkbox" id="chekcbox01" checked />
                  <label for="chekcbox01"
                    ><span class="checkbox-icon"></span> 1Year to 2Year</label
                  >
                </div>
                <div class="checkbox">
                  <input type="checkbox" id="chekcbox02" />
                  <label for="chekcbox02"
                    ><span class="checkbox-icon"></span> 2Year to 3Year</label
                  >
                </div>
                <div class="checkbox">
                  <input type="checkbox" id="chekcbox03" />
                  <label for="chekcbox03"
                    ><span class="checkbox-icon"></span> 3Year to 4Year</label
                  >
                </div>
                <div class="checkbox">
                  <input type="checkbox" id="chekcbox04" />
                  <label for="chekcbox04"
                    ><span class="checkbox-icon"></span> 4Year to 5Year</label
                  >
                </div>
              </div>
            </div>
            <div class="clearfix"></div>

            <div class="utf-sidebar-widget-item">
              <h3>Career Level</h3>
              <div class="utf-radio-btn-list">
                <div class="checkbox">
                  <input type="checkbox" id="chekcbox001" checked />
                  <label for="chekcbox001"
                    ><span class="checkbox-icon"></span> Intermediate</label
                  >
                </div>
                <div class="checkbox">
                  <input type="checkbox" id="chekcbox002" />
                  <label for="chekcbox002"
                    ><span class="checkbox-icon"></span> Normal</label
                  >
                </div>
                <div class="checkbox">
                  <input type="checkbox" id="chekcbox003" />
                  <label for="chekcbox003"
                    ><span class="checkbox-icon"></span> Special</label
                  >
                </div>
                <div class="checkbox">
                  <input type="checkbox" id="chekcbox004" />
                  <label for="chekcbox004"
                    ><span class="checkbox-icon"></span> Experienced</label
                  >
                </div>
              </div>
            </div>

            <div class="utf-sidebar-widget-item">
              <h3>Hourly Rate</h3>
              <div class="margin-top-55"></div>
              <input
                class="range-slider"
                type="text"
                value=""
                data-slider-currency="$"
                data-slider-min="5000"
                data-slider-max="50000"
                data-slider-step="100"
                data-slider-value="[5000,40000]"
              />
            </div>

            <div class="utf-sidebar-widget-item">
              <h3>Skills</h3>
              <div class="utf-tags-container-item">
                <div class="tag">
                  <input type="checkbox" id="tag1" />
                  <label for="tag1">HTML 5</label>
                </div>
                <div class="tag">
                  <input type="checkbox" id="tag2" />
                  <label for="tag2">Javascript</label>
                </div>
                <div class="tag">
                  <input type="checkbox" id="tag3" />
                  <label for="tag3">Web Design</label>
                </div>
                <div class="tag">
                  <input type="checkbox" id="tag4" />
                  <label for="tag4">Graphic Designer</label>
                </div>
              </div>
              <div class="clearfix"></div>
            </div>

            <div class="utf-sidebar-widget-item">
              <div class="utf-detail-banner-add-section">
                <a href="#"
                  ><img src="images/banner-add-2.jpg" alt="banner-add-2"
                /></a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-9 col-lg-8">
          <div class="utf-inner-search-section-title">
            <h4>
              <i class="icon-material-outline-search"></i> Search Jobs Listing
              Results
            </h4>
          </div>
          <div class="utf-notify-box-aera margin-top-15">
            <div class="utf-switch-container-item">
              <span>Showing 1–10 of 50 Jobs Results :</span>
            </div>
            <div class="sort-by">
              <span>Sort By:</span>
              <select class="selectpicker hide-tick">
                <option>A to Z</option>
                <option>Newest</option>
                <option>Oldest</option>
                <option>Random</option>
              </select>
            </div>
          </div>

          <div
            class="utf-listings-container-part compact-list-layout margin-top-35"
          >
            <div class="loading" v-if="isLoading">
              <div class="skeleton row">
                <div
                  class="skeleton-left flex1 col-3"
                  style="width: 5rem; overflow: hidden"
                >
                  <div class="square circle"></div>
                </div>

                <div class="skeleton-right flex2 col-9">
                  <div class="line h17 w40 m10"></div>
                  <div class="line"></div>

                  <div class="line w75"></div>
                </div>
              </div>

                  <div class="skeleton row" >
	  	<div class="skeleton-left flex1 col-3" style="width:5rem; overflow:hidden;">
	      <div class="square circle"></div>
	    </div>
 
  	    <div class="skeleton-right flex2 col-9">
			<div class="line h17 w40 m10"></div>
			<div class="line"></div>
		 
			<div class="line  w75"></div>
	    </div>
  </div>
            </div>

            <a v-else
              
              href="single-job-page.html"
              v-for="job in jobs"
              :key="job.id"
              class="utf-job-listing"
            >
              <div class="utf-job-listing-details">
                <div class="utf-job-listing-company-logo">
                  <img :src="job.company_image" alt="" />
                </div>
                <div class="utf-job-listing-description">
                  <span
                    class="dashboard-status-button utf-job-status-item green"
                    ><i class="icon-material-outline-business-center"></i> Full
                    Time</span
                  >
                  <h3 class="utf-job-listing-title">
                    {{ job.title }}
                    <span
                      class="utf-verified-badge"
                      title="Verified Employer"
                      data-tippy-placement="top"
                    ></span>
                  </h3>
                  <div class="utf-job-listing-footer">
                    <ul>
                      <li>
                        <i class="icon-feather-briefcase"></i
                        >{{ job.category_name }}
                      </li>
                      <li>
                        <i
                          class="icon-material-outline-account-balance-wallet"
                        ></i
                        >{{ job.salary }} -Birr
                      </li>
                      <li>
                        <i class="icon-material-outline-location-on"></i>
                        {{ job.address }}
                      </li>
                      <li>
                        <i class="icon-material-outline-access-time"></i>
                        {{ ChangeToMoment(job.created_at)  }}
                      </li>
                    </ul>
                  </div>
                </div>
                <span class="bookmark-icon"></span>
              </div>
            </a>
          </div>

          <!-- Pagination -->
          <div class="clearfix"></div>
          <div class="row">
            <div class="col-md-12">
              <div
                class="utf-pagination-container-aera margin-top-30 margin-bottom-60"
              >
                <nav class="pagination">
                  <ul>
                    <li class="utf-pagination-arrow">
                      <a href="#"
                        ><i
                          class="icon-material-outline-keyboard-arrow-left"
                        ></i
                      ></a>
                    </li>
                    <li><a href="#" class="current-page">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li class="utf-pagination-arrow">
                      <a href="#"
                        ><i
                          class="icon-material-outline-keyboard-arrow-right"
                        ></i
                      ></a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Subscribe Block Start -->
    <section class="utf_cta_area_item utf_cta_area2_block">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="utf_subscribe_block">
              <div class="col-xl-8 col-md-7">
                <div class="section-heading">
                  <h2 class="utf_sec_title_item utf_sec_title_item2">
                    Subscribe to Our Newsletter!
                  </h2>
                  <p class="utf_sec_meta">
                    Subscribe to get latest updates and information.
                  </p>
                </div>
              </div>
              <div class="col-xl-4 col-md-5">
                <div class="contact-form-action">
                  <form method="post">
                    <i class="icon-material-baseline-mail-outline"></i>
                    <input
                      class="form-control"
                      type="email"
                      placeholder="Enter your email"
                      required=""
                    />
                    <button class="utf_theme_btn" type="submit">
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Subscribe Block End -->

    <!-- <script src="assets/js/jquery-migrate-3.0.0.min.js"></script> 
<script src="assets/js/mmenu.min.js"></script> 
<script src="assets/js/tippy.all.min.js"></script> 
<script src="assets/js/simplebar.min.js"></script> 
<script src="assets/js/bootstrap-slider.min.js"></script> 
<script src="assets/js/bootstrap-select.min.js"></script> 
<script src="assets/js/snackbar.js"></script> 
<script src="assets/js/clipboard.min.js"></script> 
<script src="assets/js/counterup.min.js"></script> 
<script src="assets/js/magnific-popup.min.js"></script> 
<script src="assets/js/slick.min.js"></script> 
<script src="assets/js/custom_jquery.js"></script>  -->
  </div>
</template>

<script>
import 'jquery'
import moment from 'moment';
 
export default {
  layout: 'app_layout',
  head() {
    return {
      script: [],
    }
  },
  data() {
    return {
      jobs: [],
      categories: [],
      isLoading: false,
    }
  },
  activated() {
    // Call fetch again if last fetch more than 30 sec ago
    if (this.$fetchState.timestamp <= Date.now() - 30000) {
      this.$fetch()
    }
  },
  async fetch() {
    this.isLoading = true
    this.jobs = await fetch('https://job.habeshawimart.com/api/all-jobs').then(
      (res) => res.json()
    )
    this.categories = await fetch(
      'https://job.habeshawimart.com/api/all-jobs-category'
    ).then((res) => res.json())
    this.isLoading = false
  },
  methods: {
    ChangeToMoment(created_at){
var creat = moment(created_at).fromNow() 
return creat;
    }
  },
  beforeMount() {},
}
</script>

<style>
.box {
  width: 100%;
}
.skeleton {
  width: 100%;
  background: #fff;
  margin-bottom: 20px;
  border-radius: 5px;
  float: left;
}
.skeleton .square {
  height: 200px;
  width: 100%;
  border-radius: 50%;
  background: rgba(130, 130, 130, 0.2);
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    color-stop(8%, rgba(130, 130, 130, 0.2)),
    color-stop(18%, rgba(130, 130, 130, 0.3)),
    color-stop(33%, rgba(130, 130, 130, 0.2))
  );
  background: linear-gradient(
    to right,
    rgba(130, 130, 130, 0.2) 8%,
    rgba(130, 130, 130, 0.3) 18%,
    rgba(130, 130, 130, 0.2) 33%
  );
  background-size: 800px 200px;
  animation: wave-squares 2s infinite ease-out;
}
.skeleton .line {
  height: 50px;
  margin-bottom: 6px;
  border-radius: 2px;
  background: rgba(130, 130, 130, 0.2);
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    color-stop(8%, rgba(130, 130, 130, 0.2)),
    color-stop(18%, rgba(130, 130, 130, 0.3)),
    color-stop(33%, rgba(130, 130, 130, 0.2))
  );
  background: linear-gradient(
    to right,
    rgba(130, 130, 130, 0.2) 8%,
    rgba(130, 130, 130, 0.3) 18%,
    rgba(130, 130, 130, 0.2) 33%
  );
  background-size: 800px 100px;
  animation: wave-lines 2s infinite ease-out;
}

.skeleton-left {
   
  overflow: hidden;
}

.skeleton .line:last-child {
  margin-bottom: 0;
}
.h8 {
  height: 8px !important;
}
.h10 {
  height: 10px !important;
}
.h12 {
  height: 12px !important;
}
.h15 {
  height: 15px !important;
}
.h17 {
  height: 17px !important;
}
.h20 {
  height: 20px !important;
}
.h25 {
  height: 25px !important;
}
.w25 {
  width: 25% !important;
}
.w40 {
  width: 40% !important;
}
.w50 {
  width: 50% !important;
}
.w75 {
  width: 75% !important;
}
.m10 {
  margin-bottom: 10px !important;
}
.circle {
  border-radius: 50% !important;
  height: 150px !important;
  width: 10px;
}
@keyframes wave-lines {
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
}
@keyframes wave-squares {
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
}
</style>
