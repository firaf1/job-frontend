<template>
  <div class="">

  <a
               
              href="single-job-page.html"
              v-for="job in jobs2"
              :key="job.id"
              class="utf-job-listing"
            >
              <div class="utf-job-listing-details">
                <div class="utf-job-listing-company-logo">
                  <img :src="job.company_image" alt="" />
                </div>
                <div class="utf-job-listing-description">
                  <span class="dashboard-status-button utf-job-status-item green"
                    ><i class="icon-material-outline-business-center"></i> Full Time</span
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
                        <i class="icon-feather-briefcase"></i>{{ job.category_name }}
                      </li>
                      <li>
                        <i class="icon-material-outline-account-balance-wallet"></i
                        >{{ job.salary }} -Birr
                      </li>
                      <li>
                        <i class="icon-material-outline-location-on"></i>
                        {{ job.address }}
                      </li>
                      <li>
                        <i class="icon-material-outline-access-time"></i>
                        {{ ChangeToMoment(job.created_at) }}
                      </li>
                    </ul>
                  </div>
                </div>
                <span class="bookmark-icon"></span>
              </div>
            </a>
  
  </div>
</template>

<script>
import moment from "moment";
export default {

     props: {
           jobs1: {
               type: Object,
               default: () => ({}),
           },
          
       },
      
data() {
    return {
        jobs2: this.jobs1
    }
},
  methods: {
    ChangeToMoment(created_at) {
      var creat = moment(created_at).fromNow();
      return creat;
    },
  },
}
</script>

<style>

</style>