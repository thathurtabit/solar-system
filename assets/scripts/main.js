/* ========================================================================
 * DOM-based Routing
 * Based on http://goo.gl/EUTi53 by Paul Irish
 *
 * Only fires on body classes that match. If a body class contains a dash,
 * replace the dash with an underscore when adding it to the object below.
 *
 * .noConflict()
 * The routing is enclosed within an anonymous function so that you can
 * always reference jQuery with $, even when in .noConflict() mode.
 * ======================================================================== */


(function($) {


  // Use this variable to set up the common and page specific functions. If you
  // rename this variable, you will also need to rename the namespace below.
  var Sage = {
    // All pages
    'common': {
      init: function() {
        // JavaScript to be fired on all pages

        function loaderAnim() {
          $('#loading-cover').show();
        }

        // SCROLL BUTTONS
        function scrollButtons() {
          // DOWN
          $('.btn-scroll--down').click(function() {
            $('html, body').animate({
                scrollTop: ($('#page-info').offset().top)
            },500);
          });
          // UP
          $('.btn-scroll--up').click(function() {
            $('html, body').animate({
                scrollTop: ($('#page-cover').offset().top)
            },500);
          });
        }

         
        // BUTTONS AT THE BUTTON OF INFO PAGE
        function onURLChange() {

          //var getURL = window.location.pathname.split("/").pop();
          var getURL = window.location.pathname;
          var getURLsplit = getURL.split("/"); // split into array
          var myPath = getURLsplit[1]; // get part of the array
          var currentURL = 'curr-nav-' + myPath;
        
            //Remove all classes by default
            $('.navbar').removeClass(function (index, css) {
                return (css.match(/(^|\s)curr-nav\S+/g) || []).join(' ');
            });
            $('.navbar').addClass(currentURL);
             
        }

        // Collapse this nav when clicked
        $('.nav-link').click(function() {
          $('#navbarToggler').collapse('hide');
        });


        // Open or Close the Video Modal
        function openCloseModal() {

          // SHOW & HIDE SEARCH BOX
          $(".video-open-close").click(function(){
            // Set var
            var videoModal = $(".video-modal");

            if (videoModal.is(':visible') || videoModal.hasClass("open")) {
              
              videoModal.removeClass("open").delay(250).hide(10);

              $("iframe").each(function() { 
                  var src= $(this).attr('src');
                  $(this).attr('src',src);  
              });

            } else {
              videoModal.show(1).addClass("open");
            }
            
          });

        }


        // Open or Close Character Overlay screen
        function openCloseCharacterOverlay() {
          // Set var
          var characterModal = $(".characters-modal");

          // SHOW & HIDE SEARCH BOX
          $(".characters-open-close").click(function(){

            if (characterModal.is(':visible') || characterModal.hasClass("open")) {
              
              characterModal.removeClass("open").delay(250).hide(10);

            } else {
              characterModal.show(1).addClass("open");
            }
            
          });

        }
     
        

        // Enable BS tooltips (if not touchscreen)
        if(!('ontouchstart' in window)) {
          $(function () {
            $('[data-toggle="tooltip"]').tooltip();
          });
        }
        

        // SCROLL TO SECTION FUNCTION
        function scrollSections() {
          // Mouse scroll / slide
          var indicator = new WheelIndicator({
            elem: document.querySelector('.barba-container'),
            callback: function(e){

              if (e.direction === "down") {

                  $('html, body').animate({
                      scrollTop: ($('#page-info').offset().top)
                  },500);
                

              } else if (e.direction === "up") {

                $('html, body').animate({
                    scrollTop: ($('#page-cover').offset().top)
                },500);  
                
              }
            }
          });
          //The method call
          indicator.getOption('preventMouse'); // true
        }

        // USE http://imagesloaded.desandro.com/#background
        // To see if images were loaded before displaying them
        function checkImages() {
            $('.page').imagesLoaded( { background: true }, function() {
              $('#loading-cover').addClass("hello-app").delay(50).fadeOut('250');
              $('.barba-container').addClass('loaded');
            });

            $('.characters-modal').imagesLoaded( { background: true }, function() {
              $('.barba-container').addClass('loaded-links');
            });
        }

        // LOAD WEB FONTS
        WebFont.load({
          google: {
            families: ['Six Caps', 'Lato', 'Yesteryear']
          },
          active: function () {
              
              // FIRE FUNCTIONS AFTER FONT HAS LOADED
              $('body').addClass('page-ready');
              $('.barba-container').addClass('active');
              loaderAnim();
              
          }
        });

        


         // ====================================
        // ON INITIAL PAGE LOAD, DO THESE THING        
        onURLChange();
        Barba.Pjax.start();
        checkImages();
        scrollSections();
        scrollButtons();
        openCloseModal();
        openCloseCharacterOverlay();
        Barba.Dispatcher.on('linkClicked', function() {
          // Scroll to the top of the current slide
          $(".barba-container").fadeOut(250, function(){
                $('html,body').scrollTop(0);
          });

        });
        Barba.Dispatcher.on('transitionCompleted', function() {
          // Make sure the scroll spy is working on new slide
          $(".barba-container").fadeIn(50);
          ScrollPosStyler.init();
          scrollSections();
          scrollButtons();
          loaderAnim();
          onURLChange();
          openCloseModal();
          openCloseCharacterOverlay();
        });



        // Barba TRANSITION
        // http://barbajs.org/index.html

        var FadeTransition = Barba.BaseTransition.extend({
          start: function() {
            /**
             * This function is automatically called as soon the Transition starts
             * this.newContainerLoading is a Promise for the loading of the new container
             * (Barba.js also comes with an handy Promise polyfill!)
             */


            // As soon the loading is finished and the old page is faded out, let's fade the new page
            Promise
              .all([this.newContainerLoading, this.fadeOut()])
              .then(this.fadeIn.bind(this));
          },

          fadeOut: function() {
            /**
             * this.oldContainer is the HTMLElement of the old Container
             */


             $(this.oldContainer).removeClass("loaded active");

             
            return $(this.oldContainer).animate({ opacity: 0 }).promise();
          },

          fadeIn: function() {
            /**
             * this.newContainer is the HTMLElement of the new Container
             * At this stage newContainer is on the DOM (inside our #barba-container and with visibility: hidden)
             * Please note, newContainer is available just after newContainerLoading is resolved!
             */

            var _this = this;
            var $el = $(this.newContainer);

            $(this.oldContainer).hide();

            $el.css({
              visibility : 'visible',
              opacity : 0
            });

            $el.animate({ opacity: 1 }, 400, function() {
              /**
               * Do not forget to call .done() as soon your transition is finished!
               * .done() will automatically remove from the DOM the old Container
               */
                    
               checkImages();
               $el.addClass("active");               

              _this.done();
            });
          }
        });

        /**
         * Next step, you have to tell Barba to use the new Transition
         */

        Barba.Pjax.getTransition = function() {
          /**
           * Here you can use your own logic!
           * For example you can use different Transition based on the current page or link...
           */

          return FadeTransition;
        };


       

      },
      finalize: function() {
        // JavaScript to be fired on all pages, after page specific JS is fired
      }
    }
  };

  // The routing fires all common scripts, followed by the page specific scripts.
  // Add additional events for more control over timing e.g. a finalize event
  var UTIL = {
    fire: function(func, funcname, args) {
      var fire;
      var namespace = Sage;
      funcname = (funcname === undefined) ? 'init' : funcname;
      fire = func !== '';
      fire = fire && namespace[func];
      fire = fire && typeof namespace[func][funcname] === 'function';

      if (fire) {
        namespace[func][funcname](args);
      }
    },
    loadEvents: function() {
      // Fire common init JS
      UTIL.fire('common');

      // Fire page-specific init JS, and then finalize JS
      $.each(document.body.className.replace(/-/g, '_').split(/\s+/), function(i, classnm) {
        UTIL.fire(classnm);
        UTIL.fire(classnm, 'finalize');
      });

      // Fire common finalize JS
      UTIL.fire('common', 'finalize');
    }
  };

  // Load Events
  $(document).ready(UTIL.loadEvents);

})(jQuery); // Fully reference jQuery after this point.






