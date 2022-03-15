<template>
  <div class="">
  
     <header id="utf-header-container-block">
        <div id="header">
          <div class="container">
            <div class="utf-left-side">
              <div id="logo">
                <a href="index-1.html"
                  ><img src="~/assets/images/logo.png" alt=""
                /></a>
              </div>
              
              <nav  id="navigation">
                <ul id="responsive">
                
                  <li>   <NuxtLink to="/">Home </NuxtLink>    </li>
                   <li>   <NuxtLink to="/jobs">Jobs</NuxtLink>    </li>
                       
                </ul>
              </nav>
              <div class="clearfix"></div>
            </div>

            <div class="utf-right-side" >

              <div class="utf-header-widget-item" v-if="!(this.$store.state.addOne.isLoging)">
                <a
                  href="#utf-signin-dialog-block"
                  class="popup-with-zoom-anim log-in-button"
                  ><i class="icon-feather-log-in"></i> <span>Sign In</span></a
                >
              </div>

              <div class="utf-header-widget-item" v-else>
                <div class="utf-header-notifications user-menu  " id="isDroped">
                  <div
                    class="utf-header-notifications-trigger user-profile-title" @click="togleMenu()"
                  >
                    <a href="#">
                      <div class="user-avatar status-online">
                        <img :src="this.$store.state.addOne.profile" alt="" style="width:100%; height:100"/>
                      </div>
                      <div class="user-name" style=" text-transform: capitalize; " >  {{ this.$store.state.addOne.fullName }} </div>
                    </a>
                  </div>
                  <div class="utf-header-notifications-dropdown-block">
                    <ul class="utf-user-menu-dropdown-nav">
                      <li>
                        <a href="dashboard.html"
                          ><i class="icon-material-outline-dashboard"></i>
                          Dashboard</a
                        >
                      </li>
                      <li>
                        <a href="dashboard-jobs-post.html"
                          ><i class="icon-line-awesome-user-secret"></i> Manage
                          Jobs Post</a
                        >
                      </li>
                      <li>
                        <a href="dashboard-manage-jobs.html"
                          ><i class="icon-material-outline-group"></i> Manage
                          Jobs</a
                        >
                      </li>
                      <li>
                        <a href="dashboard-bookmarks.html"
                          ><i class="icon-material-outline-star-border"></i>
                          Bookmarks Jobs</a
                        >
                      </li>
                      <li>
                        <a href="dashboard-my-profile.html"
                          ><i class="icon-feather-user"></i> My Profile</a
                        >
                      </li>
                      <li>
                        <a href="#" @click="logout()"
                          ><i
                            class="icon-material-outline-power-settings-new"
                          ></i>
                          Logout</a
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <span class="mmenu-trigger">
                <button
                  class="hamburger utf-hamburger-collapse-item"
                  type="button"
                >
                  <span class="utf-hamburger-box-item">
                    <span class="utf-hamburger-inner-item"></span>
                  </span>
                </button>
              </span>
            </div>
          </div>
        </div>
      </header>
  
  </div>
</template>

<script>
 
export default {
   computed: {
        apples() {
        this.$store.dispatch('getisLogin')
         console.log('computed....')
        },
    },
  //     async fetch() {
  //        console.log('fetch....')
  //      await this.$store.dispatch('getisLogin')
    
  // },
    data() {
    return {
      isMenuShow: false,
      isLoging2:false,
      userName:"ff",
      userToken:"",
      userProfile:"",
      
    }
  },
  methods: {
    logout(){
  localStorage.removeItem('auth.name');
  localStorage.removeItem('auth.token');
  localStorage.removeItem('auth.name');
  localStorage.removeItem('auth.profile');
  localStorage.removeItem('auth.email');
 
this.$store.commit('addOne/setLogin')
    },
    togleMenu(){
      if(this.isMenuShow){
        var element = document.getElementById("isDroped");
  element.classList.remove("active");
  this.isMenuShow = false
 
      }
      else{
      var element = document.getElementById("isDroped");
        element.classList.add("active");
        this.isMenuShow = true
        
      }
    }
  },
  async beforeMount() {
    // this.isLoging2 = this.$store.dispatch('getisLogin')
    console.log(this.$store.state.addOne.isLoging)
    this.$store.commit('addOne/setLogin')
     
      // this.$store.dispatch('getisLogin')
 
  
    this.userName = localStorage.getItem("auth.name");
        this.userProfile = localStorage.getItem("auth.profile");
    this.userToken = localStorage.getItem("auth.token");
    console.log('localstorage11111')
    
     
  },
}
</script>

<style>

</style>