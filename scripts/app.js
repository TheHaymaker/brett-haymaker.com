var app = app || {};

      app.height = window.innerHeight - 48;
      app.borderWide = window.innerWidth - 48;
      app.borderHigh = window.innerHeight - 24 - 170;

    //transform header
$(document).ready(function(){
      var bodyColor = document.querySelectorAll('body')[0];
      var nav = document.getElementsByTagName('nav')[0];
      var brett = document.querySelectorAll('.brett')[0];
      var about = document.getElementsByClassName("about")[0];
      var work = document.getElementsByClassName("work")[0];
      var contact = document.getElementsByClassName("contact")[0];
      var icon = document.getElementsByClassName("icon")[0];
      var timeLine = document.getElementsByClassName("timeline-container")[0];
      var list = document.getElementsByTagName('li');
      var borderWide = window.innerWidth - 48;
      var borderHigh = window.innerHeight - 24 - 160;
      var height = window.innerHeight - 48;
      var width = window.innerWidth;

      var about_section = document.querySelectorAll('#about')[0];
      var work_section = document.querySelectorAll('#work')[0];
      var contact_section = document.querySelectorAll('#contact')[0];

      // color-changers
      var colorSelector = document.querySelectorAll('.color-selector')[0];
      var colorContainer = document.querySelectorAll('.color-container')[0];
      var alltheDots = document.querySelectorAll('.dot');

      // Intro sequence
      setTimeout(function(){
      app.height = window.innerHeight - 48;
      app.borderWide = window.innerWidth - 48;
      app.borderHigh = window.innerHeight - 24 - 170;

      if (window.innerWidth <= 600) {
        nav.classList.remove("entrance");
        icon.classList.remove("intro");
        timeLine.style.opacity = "1";
        about.classList.remove("shift");
        work.classList.remove("shift");
        contact.classList.remove("shift");

      } else {

        nav.classList.remove("entrance");


        setTimeout(function(){
          //nav.classList.add("shrink-nav");
          icon.classList.remove("intro");
          brett.classList.remove("intro");
          about.classList.remove("shift");
        }, 400);
        setTimeout(function(){
          // icon.classList.remove("intro");
          // brett.classList.remove("intro");
          //nav.classList.add("expand-nav");
          about.classList.remove("shift");
          timeLine.style.opacity = "1";
          work.classList.remove("shift");

        }, 700);

        setTimeout(function(){
          // about.classList.remove("shift");
          // timeLine.style.opacity = "1";
          contact.classList.remove("shift");
        }, 1000);

        setTimeout(function(){
          // work.classList.remove("shift");
        }, 1300);

        setTimeout(function(){
          // contact.classList.remove("shift");
        }, 1600);

        setTimeout(function(){
          colorSelector.classList.remove("intro");
        }, 2000);

      }
    }, 500);

      window.onresize = function(){
        app.height = window.innerHeight - 48;
        app.borderWide = window.innerWidth - 48;
        app.borderHigh = window.innerHeight - 24 - 170;
      }

      function AddClassSetTimeout(i, x) {
        setTimeout(function() {
          x[i].classList.add("shrink");
          }, 100+(300*i));
      }

      function RemoveClassSetTimeout(i, x) {
        setTimeout(function() {
          x[i].classList.remove("twist");
          }, 100+(300*i));
      }

      var timelineNode = document.getElementsByClassName("node");

      var events = document.getElementsByClassName("event");
      var textbox = document.getElementsByClassName("text-box");

      for (i=0; i<timelineNode.length; i++) {
          document.getElementsByClassName("node")[i].addEventListener('mouseenter', (function(){
              var num = i;
              return function(){
                textbox[num].classList.add("revolve");
              }
          }()));

          document.getElementsByClassName("node")[i].addEventListener('mouseleave', (function(){
              var num = i;
              return function(){
                textbox[num].classList.remove("revolve");
              }
          }()));
      }

      var $animation_elements = $('.event');
      var $window = $(window);

      $window.on('scroll resize', check_if_in_view);

      function check_if_in_view() {
        var tline = document.querySelectorAll('.timeline-container')[0];
        var nvbr = document.querySelectorAll('nav')[0];
        nvbr.classList.add('expand-nav');
        cSelect = document.querySelectorAll('.color-selector')[0];
        cSelect.classList.remove("intro");

        var window_height = $window.height();
        var window_top_position = $window.scrollTop() - 400;
        var window_bottom_position = (window_top_position + window_height);

        $.each($animation_elements, function() {
          var $element = $(this);
          var element_height = $element.outerHeight();
          var element_top_position = $element.offset().top;
          var element_bottom_position = (element_top_position + element_height);

          //check to see if this current container is within viewport
          if ((element_bottom_position >= window_top_position) &&
              (element_top_position <= window_bottom_position) &&
              (tline.style.display === "")) {
            $element.addClass('reveal');
          } else {
            $element.removeClass('reveal');
          }
        });
      }

      // var pfx = ["webkit", "moz", "MS", "o", ""];

      // function PrefixedEvent(element, type, callback) {
      //   for (var p = 0; p < pfx.length; p++) {
      //     if (!pfx[p]) type = type.toLowerCase();
      //     element.addEventListener(pfx[p]+type, callback, false);
      //   }
      // }
      // PrefixedEvent(anim, "AnimationEnd", AnimationListener);

      icon.addEventListener("mouseover", function(){
        for (var i = 0; i < list.length; i++) {
          list[i].classList.add(listClasses[i]);
        };
      })

      var listClasses = ["one_animate", "two_animate", "three_animate", "four_animate", "five_animate", "six_animate", "seven_animate", "eight_animate", "nine_animate"];

      for (i=0; i<list.length; i++) {

              list[i].addEventListener('webkitAnimationEnd', (function(){
                  var num = i;
                  return function(){
                    list[num].classList.remove(listClasses[num]);
                  }
              }()));

              list[i].addEventListener('animationend', (function(){
                  var num = i;
                  return function(){
                    list[num].classList.remove(listClasses[num]);
                  }
              }()));
      }

      about.addEventListener("mouseenter", function(){
        brett.classList.add('active');
        var x = document.getElementsByClassName("welcome");
        for (var i = 0; i < x.length; i++) {
          x[i].classList.add("twist");
          AddClassSetTimeout(i, x);
        };
      });

      about.addEventListener("mouseleave", function(){
        brett.classList.remove('active');
        var x = document.getElementsByClassName("welcome");
        for (var i = 0; i < x.length; i++) {
          x[i].classList.remove("shrink");
          RemoveClassSetTimeout(i, x);
        };
      });

      about.addEventListener("click", function(){
        nav.style.backgroundImage = "url(assets/laser.jpg)";
        var beach = document.querySelectorAll(".beach-about")[0];
        beach.style.opacity = "";
        timeLine.style.opacity = "0";
        nav.classList.add("full");
        icon.classList.add("flag");
        nav.style.height = "" + app.height + "px";
        about.classList.add("shift");
        work.classList.add("shift");
        contact.classList.add("shift");

        for (var i = 0; i < $animation_elements.length; i++) {
          $animation_elements[i].classList.remove("reveal");
        };

        setTimeout(function(){
          nav.style.width = "0px";
          timeLine.style.display = "none";
        }, 800);

        setTimeout(function(){
          nav.style.top = "" + app.borderHigh + "px";
          nav.style.height = "0px";
          icon.style.marginTop = "20px";
        }, 1200);

        setTimeout(function(){
          about_section.classList.add('show');
          nav.style.border = "8px solid transparent";
        }, 1400);
      });

      work.addEventListener("mouseenter", function(){
        brett.classList.add('active');
        var x = document.getElementsByClassName("welcome");
        for (var i = 0; i < x.length; i++) {
          x[i].classList.add("twist");
        AddClassSetTimeout(i, x);
        };
      });

      work.addEventListener("mouseleave", function(){
        brett.classList.remove('active');
        var x = document.getElementsByClassName("welcome");
        for (var i = 0; i < x.length; i++) {
          x[i].classList.remove("shrink");
          RemoveClassSetTimeout(i, x);
        };
      });

      work.addEventListener("click", function(){
        nav.style.backgroundImage = "url(assets/orange.png)";
        var beach = document.querySelectorAll(".beach-work")[0];
        beach.style.opacity = "";
        timeLine.style.opacity = "0";
        nav.classList.add("full");
        icon.classList.add("flag");
        nav.style.height = "" + app.height + "px";
        about.classList.add("shift");
        work.classList.add("shift");
        contact.classList.add("shift");

          for (var i = 0; i < $animation_elements.length; i++) {
            $animation_elements[i].classList.remove("reveal");
          };

        setTimeout(function(){
          nav.style.width = "0px";
          timeLine.style.display = "none";
        }, 800);

        setTimeout(function(){
          nav.style.top = "" + app.borderHigh + "px";
          nav.style.height = "0px";
          icon.style.marginTop = "20px";
        }, 1200);

        setTimeout(function(){
          work_section.classList.add('show-top');
          nav.style.border = "8px solid transparent";
        }, 1400);
      });

      contact.addEventListener("mouseenter", function(){
        brett.classList.add('active');
        var x = document.getElementsByClassName("welcome");
        for (var i = 0; i < x.length; i++) {
          x[i].classList.add("twist");
        AddClassSetTimeout(i, x);
        };

      });

      contact.addEventListener("mouseleave", function(){
        brett.classList.remove('active');
        var x = document.getElementsByClassName("welcome");

        for (var i = 0; i < x.length; i++) {
          x[i].classList.remove("shrink");
          RemoveClassSetTimeout(i, x);
        };

      });

      contact.addEventListener("click", function(){
        nav.style.backgroundImage = "url(assets/fingers.gif)";
        var beach = document.querySelectorAll(".beach-contact")[0];
        beach.style.opacity = "";
        timeLine.style.opacity = "0";
        nav.classList.add("full");
        icon.classList.add("flag");
        nav.style.height = "" + app.height + "px";
        about.classList.add("shift");
        work.classList.add("shift");
        contact.classList.add("shift");

          for (var i = 0; i < $animation_elements.length; i++) {
            $animation_elements[i].classList.remove("reveal");
          }

        setTimeout(function(){
          nav.style.width = "0px";
          timeLine.style.display = "none";
        }, 800);

        setTimeout(function(){
          contact_section.classList.add('show-right');
        }, 1400);

        setTimeout(function(){
          nav.style.top = "" + app.borderHigh + "px";
          nav.style.height = "0px";
          icon.style.marginTop = "20px";

        }, 1200);

        setTimeout(function(){
          nav.style.border = "8px solid transparent";
        }, 1400);

      });

      icon.addEventListener("click", function(){

        if ( icon.classList.contains("flag") )  {
          nav.style.backgroundImage = "url(assets/ticks.jpg)";
          nav.classList.remove("full");
          about_section.classList.remove('show');
          work_section.classList.remove('show-top');
          contact_section.classList.remove('show-right');

          setTimeout(function(){
            timeLine.style.display = "";
            nav.style.top = "0px";
            nav.style.border = "";
            icon.style.marginTop = "";
          }, 300);

          setTimeout(function(){
            nav.style.height = "";

          }, 550);

          setTimeout(function(){
            nav.style.width = "";
            icon.classList.remove("flag");

          }, 800);

          setTimeout(function(){
            about.classList.remove("shift");
            timeLine.style.opacity = "1";
          }, 1000);

          setTimeout(function(){
            work.classList.remove("shift");
          }, 1200);

           setTimeout(function(){
            contact.classList.remove("shift");
          }, 1400);
        }

      });

      icon.addEventListener("mouseenter", function(){
        var line = document.getElementsByClassName("line")[0];
        if( !line.classList.contains('wiggle') && !icon.classList.contains('flag') ){
          line.classList.add("wiggle");

          setTimeout(function(){
            line.classList.remove("wiggle");
          }, 1200);
        }

      });

      about.addEventListener("mouseenter", function(){
        var beach = document.querySelectorAll(".beach-about")[0];
        if ( !about.classList.contains('shift') ) {
          beach.style.opacity = "0.95";
        }
      });

      about.addEventListener("mouseleave", function(){
        var beach = document.querySelectorAll(".beach-about")[0];
          beach.style.opacity = "";
      });

      work.addEventListener("mouseenter", function(){
        var beach = document.querySelectorAll(".beach-work")[0];
        if ( !work.classList.contains('shift') ) {
          beach.style.opacity = "0.95";
        }
      });

      work.addEventListener("mouseleave", function(){
        var beach = document.querySelectorAll(".beach-work")[0];
          beach.style.opacity = "";
      });

      contact.addEventListener("mouseenter", function(){
        var beach = document.querySelectorAll(".beach-contact")[0];
        if ( !contact.classList.contains('shift') ) {
          beach.style.opacity = "0.95";
        }
      });

      contact.addEventListener("mouseleave", function(){
        var beach = document.querySelectorAll(".beach-contact")[0];
          beach.style.opacity = "";
      });


      // Color Wheel Selection Events
      colorSelector.addEventListener("mouseenter", function(){
        colorSelector.classList.add("active");
        for (var i = 0; i < alltheDots.length; i++) {
          alltheDots[i].classList.add("active");
        };
      });

      colorSelector.addEventListener("mouseleave", function(){
        colorSelector.classList.remove("active");
        for (var i = 0; i < alltheDots.length; i++) {
          alltheDots[i].classList.remove("active");
        };
      });

      // click events for each dot / color option
      //yellow
      alltheDots[0].addEventListener("click", function(e){
        for (var i = 0; i < alltheDots.length; i++) {
          alltheDots[i].classList.remove("selected");
        };
        e.target.classList.add("selected");
        colorContainer.classList.remove("purple-position", "white-position", "blue-position");
        colorContainer.classList.add("yellow-position");
        bodyColor.style.backgroundColor = "#FFEB3B";
        bodyColor.style.borderColor = "#FFEB3B";
        changeTextColor();
      });

      //bluepurple
      alltheDots[1].addEventListener("click", function(e){
        for (var i = 0; i < alltheDots.length; i++) {
          alltheDots[i].classList.remove("selected");
        };
        e.target.classList.add("selected");
        colorContainer.classList.remove("yellow-position", "white-position", "blue-position");
        colorContainer.classList.add("purple-position");
        bodyColor.style.backgroundColor = "#4C3FB5";
        bodyColor.style.borderColor = "#4C3FB5";
        changeTextColor();
      });

      //white
      alltheDots[2].addEventListener("click", function(e){
        for (var i = 0; i < alltheDots.length; i++) {
          alltheDots[i].classList.remove("selected");
        };
        e.target.classList.add("selected");
        colorContainer.classList.remove("yellow-position", "purple-position", "blue-position");
        colorContainer.classList.add("white-position");
        bodyColor.style.backgroundColor = "whitesmoke";
        bodyColor.style.borderColor = "whitesmoke";
        changeTextColor();
      });

      //blue
      alltheDots[3].addEventListener("click", function(e){
        for (var i = 0; i < alltheDots.length; i++) {
          alltheDots[i].classList.remove("selected");
        };
        e.target.classList.add("selected");
        colorContainer.classList.remove("yellow-position", "purple-position", "white-position");
        colorContainer.classList.add("blue-position");
        bodyColor.style.backgroundColor = "#3BA5FF";
        bodyColor.style.borderColor = "#3BA5FF";
        changeTextColor();
      });

      function changeTextColor() {
        var copy = document.querySelectorAll('.inverse-single');

        if ( colorContainer.classList.contains("purple-position") ) {
          for (var i = 0; i < copy.length; i++) {
            copy[i].style.color = "white";
          }
        } else {
          for (var i = 0; i < copy.length; i++) {
            copy[i].style.color = "black";
          }
        }
      }

      // Preload Above the Fold images
      var images = new Array();

      function preload() {
        for (i = 0; i < preload.arguments.length; i++) {
          images[i] = new Image();
          images[i].src = preload.arguments[i];
        }
      }

      preload(
        "https://brett-haymaker.com/assets/laser.jpg",
        "https://brett-haymaker.com/assets/orange.png",
        "https://brett-haymaker.com/assets/ticks.jpg"
      );

    });

