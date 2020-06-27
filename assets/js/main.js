/**
 * Template Name: Vesperr - v2.0.0
 * Template URL: https://bootstrapmade.com/vesperr-free-bootstrap-template/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */
!(function($) {
    "use strict";

    // Smooth scroll for the navigation menu and links with .scrollto classes
    $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function(e) {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            e.preventDefault();
            var target = $(this.hash);
            if (target.length) {

                var scrollto = target.offset().top;
                var scrolled = 20;

                if ($('#header').length) {
                    scrollto -= $('#header').outerHeight()

                    if (!$('#header').hasClass('header-scrolled')) {
                        scrollto += scrolled;
                    }
                }

                if ($(this).attr("href") == '#header') {
                    scrollto = 0;
                }

                $('html, body').animate({
                    scrollTop: scrollto
                }, 1500, 'easeInOutExpo');

                if ($(this).parents('.nav-menu, .mobile-nav').length) {
                    $('.nav-menu .active, .mobile-nav .active').removeClass('active');
                    $(this).closest('li').addClass('active');
                }

                if ($('body').hasClass('mobile-nav-active')) {
                    $('body').removeClass('mobile-nav-active');
                    $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
                    $('.mobile-nav-overly').fadeOut();
                }
                return false;
            }
        }
    });

    // Mobile Navigation
    if ($('.nav-menu').length) {
        var $mobile_nav = $('.nav-menu').clone().prop({
            class: 'mobile-nav d-lg-none'
        });
        $('body').append($mobile_nav);
        $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
        $('body').append('<div class="mobile-nav-overly"></div>');

        $(document).on('click', '.mobile-nav-toggle', function(e) {
            $('body').toggleClass('mobile-nav-active');
            $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
            $('.mobile-nav-overly').toggle();
        });

        $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
            e.preventDefault();
            $(this).next().slideToggle(300);
            $(this).parent().toggleClass('active');
        });

        $(document).click(function(e) {
            var container = $(".mobile-nav, .mobile-nav-toggle");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                if ($('body').hasClass('mobile-nav-active')) {
                    $('body').removeClass('mobile-nav-active');
                    $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
                    $('.mobile-nav-overly').fadeOut();
                }
            }
        });
    } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
        $(".mobile-nav, .mobile-nav-toggle").hide();
    }

    // Navigation active state on scroll
    var nav_sections = $('section');
    var main_nav = $('.nav-menu, #mobile-nav');

    $(window).on('scroll', function() {
        var cur_pos = $(this).scrollTop() + 80;

        nav_sections.each(function() {
            var top = $(this).offset().top,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                if (cur_pos <= bottom) {
                    main_nav.find('li').removeClass('active');
                }
                main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
            }
            if (cur_pos < 300) {
                $(".nav-menu ul:first li:first").addClass('active');
            }
        });
    });

    // Toggle .header-scrolled class to #header when page is scrolled
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#header').addClass('header-scrolled');
        } else {
            $('#header').removeClass('header-scrolled');
        }
    });

    if ($(window).scrollTop() > 100) {
        $('#header').addClass('header-scrolled');
    }

    // Back to top button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });

    $('.back-to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 1500, 'easeInOutExpo');
        return false;
    });

    // jQuery counterUp
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 1000
    });

    // Testimonials carousel (uses the Owl Carousel library)
    $(".testimonials-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            900: {
                items: 2
            }
        }
    });

    // Porfolio isotope and filter
    $(window).on('load', function() {
        var portfolioIsotope = $('.portfolio-container').isotope({
            itemSelector: '.portfolio-item',
            layoutMode: 'fitRows'
        });

        $('#portfolio-flters li').on('click', function() {
            $("#portfolio-flters li").removeClass('filter-active');
            $(this).addClass('filter-active');

            portfolioIsotope.isotope({
                filter: $(this).data('filter')
            });
        });

        // Initiate venobox (lightbox feature used in portofilo)
        $(document).ready(function() {
            $('.venobox').venobox();
        });
    });

    // Portfolio details carousel
    $(".portfolio-details-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        items: 1
    });

    // Initi AOS
    AOS.init({
        duration: 1000,
        easing: "ease-in-out",
        once: true,
        mirror: false
    });

})(jQuery);

function Add(name, quantity, volume, id) {
    var currentVolume = $("#total").html(),
        currentTotal = $("#totalQuantity").html();
    currentVolume = parseFloat(currentVolume) + (quantity * volume);
    currentTotal = parseFloat(currentTotal) + quantity;

    //Ajoute dans la quantité si existe
    var currentQuantity = parseFloat($("#categoryQuantity_" + id).html());
    currentQuantity = currentQuantity + 1;
    $("#categoryQuantity_" + id).html(currentQuantity);


    //Ajoute dans la liste de droite
    if ($("#listFurnitureItem_" + id).length) {
        $("#listFurnitureItem_" + id).find("#hiddenVolumeTotal_" + id).val(currentQuantity * volume);
        $("#listFurnitureItem_" + id).find("span").html(currentQuantity + " <span class='nameObjectList'>" + name + "</span>");
        $("#listFurnitureItem_" + id + " input:first-child").attr('data-quantity', currentQuantity);
    } else {

        var currentItemVolume = currentQuantity * volume;
        $("#listFurniture").append("<li id='listFurnitureItem_" + id + "'><input type='hidden' id='hiddenVolumeTotal_" + id + "' data-quantity='" + currentQuantity + "' value='" + currentItemVolume + "'/><span>" + currentQuantity + " <span class='nameObjectList'>" + name + "</span></span><input type='button' value='x' onclick='RemoveAll(" + id + ")'/></li>");
    }

    $("#total").html(currentVolume.toFixed(2));
    $("#totalQuantity").html(currentTotal);


    GetCar();
}

var otherId = 99;

function AddOther(name, quantity, volume) {
    var find = false;
    var i = 0;
    while (!find, i < $('.nameObjectList').length) {
        if ($($('.nameObjectList')[i]).html() == name) {
            find = true;
        }
        i++;
    }

    if (find) {
        $('#faqcategory-99 .error').fadeIn();
    } else {
        $('#faqcategory-99 .error').fadeOut();
        otherId = otherId + 1;

        var currentVolume = $("#total").html(),
            currentTotal = $("#totalQuantity").html();
        currentVolume = parseFloat(currentVolume) + (quantity * volume);
        currentTotal = parseFloat(currentTotal) + parseFloat(quantity);

        //Ajoute dans la quantité si existe
        var currentQuantity = parseInt(quantity);

        //Ajoute dans la liste de droite
        var currentItemVolume = currentQuantity * volume;
        $("#listFurniture").append("<li id='listFurnitureItem_" + otherId + "'><input type='hidden' id='hiddenVolumeTotal_" + otherId + "' data-quantity='" + currentQuantity + "' value='" + currentItemVolume + "'/><span>" + currentQuantity + " <span class='nameObjectList'>" + name + "</span></span><input type='button' value='x' onclick='RemoveAll(" + otherId + ")'/></li>");

        $("#total").html(currentVolume.toFixed(2));
        $("#totalQuantity").html(currentTotal);
        GetCar();
    }
}

function Remove(name, quantity, volume, id) {

    var currentQuantity = parseFloat($("#categoryQuantity_" + id).html());
    if (currentQuantity > 0) {
        //Supprime dans la quantité
        currentQuantity = currentQuantity - 1;
        if (currentQuantity < 0) {
            currentQuantity = 0;
        }
        $("#categoryQuantity_" + id).html(currentQuantity);

        //Supprime dans le total
        var currentVolume = $("#total").html(),
            currentTotal = $("#totalQuantity").html();

        currentVolume = parseFloat(currentVolume) - (quantity * volume);
        currentTotal = parseFloat(currentTotal) - quantity;

        if (currentVolume < 0) {
            currentVolume = 0;
        }

        if (currentTotal < 0) {
            currentTotal = 0;
        }

        //Supprime dans la liste de droite
        if ($("#listFurnitureItem_" + id).length) {
            if (currentQuantity == 0) {
                $("#listFurnitureItem_" + id).remove();
            } else {
                $("#listFurnitureItem_" + id).find("#hiddenVolumeTotal_" + id).val(currentQuantity * volume);
                $("#listFurnitureItem_" + id).find("span").html(currentQuantity + " " + name);
                $("#listFurnitureItem_" + id + " input:first-child").attr('data-quantity', currentQuantity);
            }

        }

        $("#total").html(currentVolume.toFixed(2));
        $("#totalQuantity").html(currentTotal);
    }
}

function RemoveAll(id) {
    //Supprime de la liste
    var currentItemVolume = $("#listFurnitureItem_" + id).find("#hiddenVolumeTotal_" + id).val(),
        currentItemQuantity = parseFloat($("#listFurnitureItem_" + id + " input:first-child").attr('data-quantity'));

    $("#listFurnitureItem_" + id).remove();

    //Si existe met la quantité à 0
    if ($("#categoryQuantity_" + id).length) {
        $("#categoryQuantity_" + id).html(0);
    }

    //Supprime dans le calcul du volume
    var currentVolume = $("#total").html(),
        currentTotal = $("#totalQuantity").html();
    currentVolume = parseFloat(currentVolume) - currentItemVolume;
    currentTotal = parseFloat(currentTotal) - currentItemQuantity;

    $("#total").html(currentVolume.toFixed(2));
    $("#totalQuantity").html(currentTotal);
}

var i = 3;
var at = 0;
$(".element").each(function() {
    $(this).wrapInner('<span class="texte-objet"></span>');
    at = $(this).attr('data-volume');
    $(this).append("<div class='elem'><input class='less' type='button' name='removeQuantity' value='-' onclick=\"Remove('" + $(this).text() + "',1," + at + "," + i + ");\"/><span id='categoryQuantity_" + i + "'>" + '0' + "</span><input class='more' type='button' name='addQuantity' value='+' onclick=\"Add('" + $(this).text() + "',1," + at + "," + i + ");\"/></div>");
    i++;
});

/*
See on github: https://github.com/muhammederdem/credit-card-form
*/

new Vue({
    el: "#app",
    data() {
        return {
            currentCardBackground: Math.floor(Math.random() * 25 + 1), // just for fun :D
            cardName: "",
            cardNumber: "",
            cardMonth: "",
            cardYear: "",
            cardCvv: "",
            minCardYear: new Date().getFullYear(),
            amexCardMask: "#### ###### #####",
            otherCardMask: "#### #### #### ####",
            cardNumberTemp: "",
            isCardFlipped: false,
            focusElementStyle: null,
            isInputFocused: false
        };
    },
    mounted() {
        this.cardNumberTemp = this.otherCardMask;
        document.getElementById("cardNumber").focus();
    },
    computed: {
        getCardType() {
            let number = this.cardNumber;
            let re = new RegExp("^4");
            if (number.match(re) != null) return "visa";

            re = new RegExp("^(34|37)");
            if (number.match(re) != null) return "amex";

            re = new RegExp("^5[1-5]");
            if (number.match(re) != null) return "mastercard";

            re = new RegExp("^6011");
            if (number.match(re) != null) return "discover";

            re = new RegExp('^9792')
            if (number.match(re) != null) return 'troy'

            return "visa"; // default type
        },
        generateCardNumberMask() {
            return this.getCardType === "amex" ? this.amexCardMask : this.otherCardMask;
        },
        minCardMonth() {
            if (this.cardYear === this.minCardYear) return new Date().getMonth() + 1;
            return 1;
        }
    },
    watch: {
        cardYear() {
            if (this.cardMonth < this.minCardMonth) {
                this.cardMonth = "";
            }
        }
    },
    methods: {
        flipCard(status) {
            this.isCardFlipped = status;
        },
        focusInput(e) {
            this.isInputFocused = true;
            let targetRef = e.target.dataset.ref;
            let target = this.$refs[targetRef];
            this.focusElementStyle = {
                width: `${target.offsetWidth}px`,
                height: `${target.offsetHeight}px`,
                transform: `translateX(${target.offsetLeft}px) translateY(${target.offsetTop}px)`
            }
        },
        blurInput() {
            let vm = this;
            setTimeout(() => {
                if (!vm.isInputFocused) {
                    vm.focusElementStyle = null;
                }
            }, 300);
            vm.isInputFocused = false;
        }
    }
});
$('.tabs').tabs();