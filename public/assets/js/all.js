"use strict";document.querySelectorAll(".for-whom__btn").forEach(function(e){e.addEventListener("click",function(){var e=getComputedStyle(this.parentNode.parentNode.querySelector(".for-whom__wrap"));console.log(e.height),this.parentNode.parentNode.querySelector(".for-whom__collapse").classList.toggle("show"),this.parentNode.parentNode.querySelector(".for-whom__collapse").className.includes("show")?this.parentNode.parentNode.querySelector(".for-whom__collapse").style.height=e.height:this.parentNode.parentNode.querySelector(".for-whom__collapse").style.height="0px"})}),document.querySelectorAll(".form-group__input").forEach(function(e){e.addEventListener("focus",function(){this.parentNode.classList.add("active")}),e.onblur=function(){this.parentNode.classList.remove("active")},e.onpaste=function(){this.value.style.fontSize="14px",this.value.style.height="14px",this.value.style.color="red"}}),document.querySelectorAll(".header__nav .nav__link").forEach(function(e){e.onclick=function(){document.querySelector(".header__nav .nav__link.active").classList.remove("active"),this.classList.add("active")}});var e=document.createElement("a");e.className="scroll-top",e.href="#hero",e.innerHTML="<i class='fas fa-arrow-up'></i>",document.querySelector("body").appendChild(e),window.onscroll=function(){80<document.body.scrollTop||80<document.documentElement.scrollTop?document.querySelector(".header").classList.add("scroll"):document.querySelector(".header").classList.remove("scroll"),800<document.body.scrollTop||800<document.documentElement.scrollTop?document.querySelector(".scroll-top").classList.add("show"):document.querySelector(".scroll-top").classList.remove("show")};var t=window.matchMedia("(max-width: 1140px)");function o(e){if(e.matches){var t=document.createElement("div");t.className="header__collapse",t.appendChild(document.querySelector("nav")),document.querySelector(".header .container").appendChild(t);var o=document.createElement("div");o.innerHTML='\n            <div class="widget-group">\n                <a href="tel:+77784097967" class = "btn-widget">\n                    <i class="fas fa-phone-volume"></i>\n                    <span>+7 778 409 79 67</span>\n                </a>\n\n                <a href="https://wa.me/77784097967" class = "btn-widget">\n                    <i class="fab fa-whatsapp"></i>\n                    <span>Напиши мне</span>\n                </a>\n            </div>\n        ',t.appendChild(o),document.querySelector(".header__toggler").onclick=function(){document.querySelector(".header .container").classList.toggle("show")}}else document.querySelector(".header__navbar").appendChild(document.querySelector("nav")),$(".header__collapse").remove()}o(t),t.addListener(o);var n=$("html, body");$('a[href*="#"]').click(function(){return n.animate({scrollTop:$($.attr(this,"href")).offset().top-78},400),$(".header .container").removeClass("show"),!1}),jQuery(window).scroll(function(){$("section").each(function(e,t){var o=$(t).offset().top-100,n=o+$(t).height(),c=$(window).scrollTop(),a=$(t).attr("id");o<c&&c<n&&($("a.active").removeClass("active"),$('a[href="#'+a+'"]').addClass("active"))})}),document.querySelectorAll(".modal-group__input").forEach(function(e){e.addEventListener("focus",function(){this.parentNode.classList.add("active")}),e.onblur=function(){this.parentNode.classList.remove("active")},e.onpaste=function(){this.value.style.fontSize="14px",this.value.style.height="14px",this.value.style.color="red"}}),document.querySelectorAll(".modal").forEach(function(e){e.onclick=function(){document.querySelector(this.getAttribute("href")).classList.add("show"),document.querySelector(".modal-window").onclick=function(e){e.target==document.querySelector(".modal-window")&&document.querySelector(".modal-window").classList.remove("show")}}}),$(document).ready(function(){$(".owl-carousel").owlCarousel({autoplay:!0,autoplayTimeout:5e3,autoplayHoverPause:!0,responsiveClass:!0,loop:!0,responsive:{0:{items:1,nav:!1},593:{items:1,nav:!0}}})}),$(document).ready(function(){$(".widget.phone").hover(function(){$(this).css("width","220px")},function(){$(this).css("width","0px")}),$(".widget.whatsapp").hover(function(){$(this).css("width","160px")},function(){$(this).css("width","0px")})});