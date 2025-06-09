

// Initialize carousel with pause on hover
        document.addEventListener('DOMContentLoaded', function() {
            var heroCarousel = document.getElementById('heroCarousel');
            if (heroCarousel) {
                var carousel = new bootstrap.Carousel(heroCarousel, {
                    pause: "hover",
                    wrap: true
                });
            }
        });


  document.addEventListener('DOMContentLoaded', function () {
    if (window.innerWidth >= 992) {
      const dropdown = document.querySelector('.nav-item.dropdown');
      dropdown.addEventListener('mouseenter', function () {
        const menu = this.querySelector('.dropdown-menu');
        const bsDropdown = bootstrap.Dropdown.getOrCreateInstance(this.querySelector('.dropdown-toggle'));
        bsDropdown.show();
      });
      dropdown.addEventListener('mouseleave', function () {
        const bsDropdown = bootstrap.Dropdown.getOrCreateInstance(this.querySelector('.dropdown-toggle'));
        bsDropdown.hide();
      });
    }
  });


document.querySelectorAll('.dropdown-submenu > a').forEach(function(el) {
    el.addEventListener('click', function(e) {
      if (window.innerWidth < 992) {
        e.preventDefault();
        const submenu = el.nextElementSibling;
        submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
      }
    });
  });



    const hero = document.getElementById('heroSlider');

  const backgrounds = [
    'url("assets/hero-slider-bg1.webp")',
    'url("assets/hero-slider-bg3.webp")',
    'url("assets/banner-bg-1.webp")'
  ];

  let index = 0;

  function slideBackground() {
    hero.style.backgroundImage = backgrounds[index];
    index = (index + 1) % backgrounds.length;
  }

  // Start the slider
  slideBackground();
  setInterval(slideBackground, 5000);



  $(document).ready(function(){
    $('.testimonial-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      dots: false,
      arrows: false,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  });

