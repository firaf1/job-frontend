<template>
  <div class="">
   <div class="section gray padding-top-60 padding-bottom-60">
        <div class="container">
          <div class="row">
            <div class="col-xl-12">
              <div
                class="utf-section-headline-item centered margin-top-0 margin-bottom-40"
              >
                <span>Latest Jobs Post</span>
                <h3>Jobs You May Be Interested</h3>
                <div class="utf-headline-display-inner-item">
                  Latest Jobs Post
                </div>
                <p class="utf-slogan-text">
                  Lorem Ipsum is simply dummy text printing and type setting
                  industry Lorem Ipsum been industry standard dummy text ever
                  since when unknown printer took a galley.
                </p>
              </div>
             <div class="utf-listings-container-part compact-list-layout margin-top-35">
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
            </div>

          <div class="" v-else>
          <jobs_list   v-for="job in jobs"
              :key="job.id"
              
               :jobs1="{job}"/>
          </div>
          </div>

  
              <div class="utf-centered-button margin-top-10">
                <a
                  href="jobs-list-layout-leftside.html"
                  class="button utf-ripple-effect-dark utf-button-sliding-icon margin-top-20"
                  >Browse All Jobs <i class="icon-feather-chevron-right"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import jobs_list from '~/components/job/jobs_list.vue';
export default {
  components: { jobs_list },
data() {
    return {
      jobs: [],
      categories: [],
      isLoading: false,
    };
  },
  async fetch() {
    this.isLoading = true;
    this.jobs = await fetch("https://job.habeshawimart.com/api/latest-jobs").then((res) =>
      res.json()
    );
   
    this.isLoading = false;
  },
}
</script>

<style>

</style>