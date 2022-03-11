<template>
<div>
   <!-- Intro Banner  -->
     <banner/>

      <!-- Jobs Category Boxes -->
      <job-category/>
      <!-- Jobs Category Boxes / End -->

      <!-- Latest Jobs -->
     <latest/>
      <!-- Latest Jobs / End -->

      <!-- Photo Section -->
      <div class="utf-photo-section-block" data-background-image="~/assets/images/section-background.jpg" >
        <div class="text-content white-font">
          <div class="container">
            <div class="row">
              <div class="col-lg-8 col-md-12 col-sm-12">
                <h2>Download Browse Hundreds of Jobs</h2>
                <p>
                  Lorem Ipsum is simply dummy text of printing and type setting
                  industry. Lorem Ipsum been industry standard dummy text ever
                  since, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book. It has survived not
                  only five centuries, but also the leap into electronic type
                  setting, remaining essentially unchanged. It was popularised.
                </p>
                <ul class="utf-download-text">
                  <li>
                    <a href="#" title="Windows App" data-tippy-placement="top">
                      <i class="icon-line-awesome-windows"></i>
                      <span>Windows</span>
                      <p>Available Now</p>
                    </a>
                  </li>
                  <li>
                    <a href="#" title="App Store" data-tippy-placement="top">
                      <i class="icon-line-awesome-apple"></i>
                      <span>App Store</span>
                      <p>Available Now</p>
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Google Play" data-tippy-placement="top">
                      <i class="icon-line-awesome-android"></i>
                      <span>Google Play</span>
                      <p>Get in On</p>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-12">
                <div class="download-img">
                  <img src="~/assets/images/mockup3.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Photo Section / End -->

      <!-- Testimonials -->
     <testimonials/>
      <!-- Testimonials / End -->

      <!-- Start Section Callout -->
      <support/>
      <!-- End Need Any Help -->

      <!-- Counters -->
  <award/>
  </div>
</template>

<script>
 import top_header from '~/components/top_header.vue';
import Banner from '~/components/banner.vue';
import Latest from '~/components/latest.vue';
import Testimonials from '~/components/testimonials.vue';
import Support from '~/components/support.vue';
import Award from '~/components/award.vue';
 
 
export default {
  components: { top_header, Banner,Latest,Award, Testimonials, Support, },
   
    
  layout:'app_layout',
  name: 'IndexPage',
   
  methods: {
    
  },

    mounted() {
        
 
  $('.utf-testimonial-carousel-block').slick({
            centerMode: true,
            centerPadding: '18%',
            slidesToShow: 1,
            dots: true,
            arrows: true,
            nav: true,
            rewind: true,
			autoplay:true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            adaptiveHeight: true,
            responsive: [{
                    breakpoint: 1025,
                    settings: {
                        centerPadding: '10px',
                        slidesToShow: 1,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        centerPadding: '10px',
                        slidesToShow: 1,
                        dots: true,
                        arrows: false
                    }
                }
            ]
        });










       if ($('.utf-intro-banner-search-form-block')[0]) {
    	setTimeout(function(){ 
    		$(".pac-container").prependTo(".utf-intro-search-field-item.with-autocomplete");
    	}, 300);
    }

    var typed = new Typed('.typed-words', {
      strings: ["Web Designer.", " Graphic Designer.", " Logo Designer.", " Sales Marketing."],
      typeSpeed: 80,
      backSpeed: 80,
      backDelay: 4000,
      startDelay: 1000,
      loop: true,
      showCursor: true
    });
     $(".utf-header-notifications").each(function() {
            var userMenu = $(this);
            var userMenuTrigger = $(this).find('.utf-header-notifications-trigger a');
            $(userMenuTrigger).on('click', function(event) {
                event.preventDefault();
                if ($(this).closest(".utf-header-notifications").is(".active")) {
                    close_user_dropdown();
                } else {
                    close_user_dropdown();
                    userMenu.addClass('active');
                }
            });
        });

        function close_user_dropdown() {
            $('.utf-header-notifications').removeClass("active");
        }

        var mouse_is_inside = false;
        $(".utf-header-notifications").on("mouseenter", function() {
            mouse_is_inside = true;
        });
        $(".utf-header-notifications").on("mouseleave", function() {
            mouse_is_inside = false;
        });
        
        $("body").mouseup(function() {
            if (!mouse_is_inside) close_user_dropdown();
        });
  $('.popup-with-zoom-anim').magnificPopup({
            type: 'inline',
            fixedContentPos: false,
            fixedBgPos: true,
            overflowY: 'auto',
            closeBtnInside: true,
            preloader: false,
            midClick: true,
            removalDelay: 300,
            mainClass: 'my-mfp-zoom-in'
        });

    },
}


</script>
