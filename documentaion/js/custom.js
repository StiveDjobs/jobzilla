/*global jQuery */
/*jshint browser:true */
/*!
* FitVids 1.1
*
* Copyright 2013, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*
*/



$(function() {

  "use strict";

  // Back to top
  $('#scroll-up').on('click', function() {
    $('html, body').animate({scrollTop : 0}, 900);
    return false;
  });

  // Smooth scroll for ToC
  $('.toc a, .sidenav.nav a').click(function(){
    $('html, body').animate({scrollTop: $($.attr(this, 'href')).offset().top - 80}, 500);
    return false;
  });

  // Full height body to make sure footer will place in bottom of the page
  if ($(window).height() > $('body').height()) {
    var min_height = $(window).height() - $('.site-header').height() - $('.site-footer').height() - 60;
    $('body > main').css('min-height', min_height);
  }

  // Set the height of sidebar if it's fixed  .height(sidenav_max_height)
  if ($('.sidenav.sticky').size() > 0) {
    var sidenav_max_height = $(window).height() - $('.sidenav.sticky').position().top - 100;
    $('.sidenav.sticky').height(sidenav_max_height);
  } 

});

function showModule(evt, moduleName) {
  // Declare all variables
    var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

  // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

  // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(moduleName).style.display = "block";
    evt.currentTarget.className += " active";
  }
