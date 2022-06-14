$(function (){
    // hamburger
    function toggleMenu () {
        $('.hamburger').toggleClass('is-active');
        $('#side_block, #page_overlay').toggleClass('open');
        $('body').toggleClass('lock');
    }
    $('.hamburger, #page_overlay, .mobile_menu_list a').on('click', function() {
        toggleMenu();
    })
    // home slider init
    $('#home_slider').slick({
        autoplay: true,
        dots: true,
        arrows: false,
        vertical: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: false
                }
            }
        ]
    });
    // header class change
    $(window).on('scroll', function(){
        if ($(this).scrollTop() > 30) {
            $('.header_top').addClass('scroll')
            
        } else {
            $('.header_top').removeClass('scroll')
        }
    })
    // anchor animation
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });
    // ajax news
    $.ajax({
        url: 'assets/data/news.json',
        type: 'get',
        dataType: 'json',
        success: function(resp){
            let html = '';
            for (let i = 0; i < resp.length; i++){
                html += `
                <div class="news_card">
                    <div class="card_image">
                        <img src="${resp[i].image}" alt="news_card_picture">
                    </div>
                    <div class="card_descr">
                        <h4>${resp[i].title}</h4>
                        <p>${resp[i].descr}</p>
                        <div class="card_author">
                            <div class="card_author_img">
                                <img src="${resp[i].author.avatar}" alt="news_card_author_avatar">
                            </div>
                            <div class="card_author_cred">
                                <h5>${resp[i].author.name}</h5>
                                <h6>${resp[i].date}</h6>
                            </div>
                        </div>
                    </div>
                </div>
                `
            }
            $('.news_cards').html(html);
            $('.news_slider').slick({
                slidesToShow: 3,
                dots: true,
                lazyLoad: 'ondemand',
                responsive: [
                    {
                        breakpoint: 1300,
                        settings: {
                            slidesToShow: 2,
                            arrows: false
                        }
                    },
                    {
                        breakpoint: 860,
                        settings: {
                            slidesToShow: 1,
                            arrows: false
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            arrows: false,slidesToShow: 1
                        }
                    },
                ]
            });
        },
        error: function (err){
            err = alert("Can't load news");
        }
    })
    // light gallery init
    lightGallery(document.getElementById('light_gallery'), {
            plugins: [lgZoom, lgThumbnail],
            speed: 300
    });
    // map initialization
    function initMap () {
    const map = L.map('map').setView([40.68419106516337, -73.89912170274958], 15);
    const customMarker = L.icon({
        iconUrl: 'assets/images/map/map_pin.svg',
        iconSize:     [50, 50], // size of the icon
        iconAnchor:   [25, 50], // point of the icon which will correspond to marker's location
        popupAnchor:  [17, -90] // point from which the popup should open relative to the iconAnchor
    });
    L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    L.marker([40.68419106516337, -73.89912170274958], {icon: customMarker}).addTo(map)
        .bindPopup('Monticello')
    };
    $('#map_cover').on('click', function(){
        $('#map_cover').remove()
        initMap();
    });
})




