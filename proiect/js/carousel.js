$('.carousel').slick({
    dots: true,
    customPaging : function(slider, i) {
        var thumb = $(slider.$slides[i]).data('thumb');
        return '<div class="your-dot"></div>';
    },
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000
  });