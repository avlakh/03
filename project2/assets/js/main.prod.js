"use strict";$(function(){$("#home_slider").slick({dots:!0,arrows:!1,vertical:!0}),$(window).on("scroll",function(){30<$(this).scrollTop()?$(".header_top").addClass("scroll"):$(".header_top").removeClass("scroll")}),$(document).on("click",'a[href^="#"]',function(a){a.preventDefault(),$("html, body").animate({scrollTop:$($.attr(this,"href")).offset().top},500)}),$.ajax({url:"assets/data/news.json",type:"get",dataType:"json",success:function(a){for(var t="",n=0;n<a.length;n++)t+='\n                <div class="news_card">\n                    <div class="card_image">\n                        <img src="'.concat(a[n].image,'" alt="news_card_picture">\n                    </div>\n                    <div class="card_descr">\n                        <h4>').concat(a[n].title,"</h4>\n                        <p>").concat(a[n].descr,'</p>\n                        <div class="card_author">\n                            <div class="card_author_img">\n                                <img src="').concat(a[n].author.avatar,'" alt="news_card_author_avatar">\n                            </div>\n                            <div class="card_author_cred">\n                                <h5>').concat(a[n].author.name,"</h5>\n                                <h6>").concat(a[n].date,"</h6>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                ");$(".news_cards").html(t),$(".news_slider").slick({slidesToShow:3,dots:!0})},error:function(){alert("Can't load news")}}),$("#map_cover").on("click",function(){var a,t;$("map_cover").html(),a=L.map("map").setView([40.68419106516337,-73.89912170274958],15),t=L.icon({iconUrl:"assets/images/map/map_pin.svg",iconSize:[50,50],iconAnchor:[25,50],popupAnchor:[17,-90]}),L.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(a),L.marker([40.68419106516337,-73.89912170274958],{icon:t}).addTo(a).bindPopup("Monticello")})});