$(document).ready(function () {

    $("#accordion h2").next().hide();

    $("#accordion h2").click(function () {
        $(this).next().slideToggle("fast")
        $(this).toggleClass("active");
    });

    // DETAIL PAGE TABS
    $("#tab-container .tabs").tabs("#tab-container #panes > .pane");
    $("#tab-container .tabs li a.current").parent().css("border-bottom", "1px solid #FFF");
    $("#tab-container .tabs li a").live('click', function () {
        $("#tab-container .tabs li a.current").parent().css("border-bottom", "1px solid #FFF");
    });

    // FLOAT CLEARS

    $(".swatches #thumb-swatch-5, .swatches #thumb-swatch-10, .swatches #thumb-swatch-15").css("clear", "left");

    // SUPPORT BROWSE
    $("#product-type a").click(function () {
        if ($("#product-type").hasClass("selected")) {
            $("#product-type a").removeClass("current");
            $(this).addClass("current");
            $("#material-type").addClass("selected");
            return false;
        }
    });
    $("#material-type a").click(function () {
        if ($("#material-type").hasClass("selected")) {
            $("#material-type a").removeClass("current");
            $(this).addClass("current");
            $("#doc-type").addClass("selected");
            return false;
        }
    });
    $("#doc-type a").click(function () {
        if ($("#doc-type").hasClass("selected")) {
            $("#doc-type a").removeClass("current");
            $(this).addClass("current");
            var cat1 = $("#product-type a.current").attr("rel");
            var cat2 = $("#material-type a.current").attr("rel");
            var cat3 = $("#doc-type a.current").attr("rel");
            var slash = 'index.html';
            $("#browse-support").attr("action", "/support/browse-results/" + cat1 + slash + cat2 + slash + cat3);
            $("#browse-support").submit();
            $(".browse-box ul").removeClass("selected");
            $("#browse-support .loading").show();
            return false;
        }
    });

    // OVERLAY
    $(".overlay-trigger").live("click", function (e) {
        e.preventDefault();
        var divtofind = $(this).attr("rel");
        var overlayWidth = $(divtofind).find("img").attr("width");
        $(divtofind).css('width', overlayWidth);

        //var windowWidth = $(window).width();
        //var windowHalf = (windowWidth / 2);
        //var overlayWidth = $(divtofind).width();
        //var overlayHalf = (overlayWidth / 2);
        //var leftPosition = windowHalf - overlayHalf;

        $(divtofind).overlay({
            effect: 'apple',
            top: 150,
            //left: leftPosition,
            mask: {
                color: '#000000',
                loadSpeed: 200,
                opacity: 0.5
            },
            onBeforeLoad: function () {
                var that = this
                $(this.getOverlay()).remove().appendTo("body");
                $(".close", this.getOverlay()).click(function (e) {
                    that.close();
                });
            }
        });
        var api = $(divtofind).overlay();
        api.load();
        return false;
    });

    // PRODUCT DETAIL LEFT NAV PARENT SELECTION
    $("#nav-left ul a.current").parent().parent().parent().children("a").addClass("current").addClass("parent");
    $("#nav-left a.parent").parent().children("ul").css('display', 'block');

    // COLOR SWATCHES
    $(".swatches .thumb").click(function () {
        var elId = $(this).attr('id');
        elId = '#' + elId.replace('thumb', 'full');
        $(this).parent().find('li.full').hide();
        $(elId).show();
    });

    // PHOTO GALLERY
    $("#detail-gallery").prepend('<div class="magnify overlay-trigger" rel=""></div>');
    if ($("#detail-gallery .scrollable .items img").size() > 6) {
        $("#detail-gallery .scrollable").scrollable();
    } else {
        $("#detail-gallery").find("a.next").addClass("disabled");
        $("#detail-gallery").find("a.prev").addClass("disabled");
    };
    $("#detail-gallery .items img").click(function () {
        if ($(this).hasClass("active")) {
            return;
        }
        //var url = $(this).attr("src");
        var url = $(this).attr("alt");
        var rel = $(this).attr("rel");
        var wrap = $("#detail-gallery #image-wrap").fadeTo("fast", 1);
        var img = new Image();
        img.onload = function () {
            wrap.fadeTo("fast", 1);
            wrap.find("img").attr("src", url);
            wrap.find("img").attr("rel", rel);
            $("#detail-gallery").find(".magnify").attr("rel", rel);
        };
        img.src = url;
        img.rel = rel;
        $("#detail-gallery .items img").removeClass("active");
        $(this).addClass("active");
    }).filter(":first").click();

    // CUSTOM SELECT
    $(".dropdown").selectbox();

    // TABLE COLUMN HOVER FOR OLD PAGES - LEGACY
    $("#options td.one").hover(function () {
        $("#options td.header.one").addClass("over");
        $("#options .one .learn-more").addClass("over");
        $("#options").find("td.one").css('background-color', '#eeeae1');
    }, function () {
        $("#options td.header.one").removeClass("over");
        $("#options .one .learn-more").removeClass("over");
        $("#options").find("td.one").css('background-color', '');
    });
    $("#options td.two").hover(function () {
        $("#options td.header.two").addClass("over");
        $("#options .two .learn-more").addClass("over");
        $("#options").find("td.two").css('background-color', '#eeeae1');
    }, function () {
        $("#options td.header.two").removeClass("over");
        $("#options .two .learn-more").removeClass("over");
        $("#options").find("td.two").css('background-color', '');
    });
    $("#options td.three").hover(function () {
        $("#options td.header.three").addClass("over");
        $("#options .three .learn-more").addClass("over");
        $("#options").find("td.three").css('background-color', '#eeeae1');
    }, function () {
        $("#options td.header.three").removeClass("over");
        $("#options .three .learn-more").removeClass("over");
        $("#options").find("td.three").css('background-color', '');
    });

    // TABLE COLUMN HOVER FOR EDITED PAGES
    $("#options td.select").hover(function () {
        $("#options td.header.select").addClass("over");
        $("#options .select .learn-more").addClass("over");
        $("#options").find("td.select").css('background-color', '#eeeae1');
    }, function () {
        $("#options td.header.select").removeClass("over");
        $("#options .select .learn-more").removeClass("over");
        $("#options").find("td.select").css('background-color', '');
    });
    $("#options td.premier").hover(function () {
        $("#options td.header.premier").addClass("over");
        $("#options .premier .learn-more").addClass("over");
        $("#options").find("td.premier").css('background-color', '#eeeae1');
    }, function () {
        $("#options td.header.premier").removeClass("over");
        $("#options .premier .learn-more").removeClass("over");
        $("#options").find("td.premier").css('background-color', '');
    });
    $("#options td.elite").hover(function () {
        $("#options td.header.elite").addClass("over");
        $("#options .elite .learn-more").addClass("over");
        $("#options").find("td.elite").css('background-color', '#eeeae1');
    }, function () {
        $("#options td.header.elite").removeClass("over");
        $("#options .elite .learn-more").removeClass("over");
        $("#options").find("td.elite").css('background-color', '');
    });

    // IE7 Z-INDEX BUG FIX
    $(function () {
        var zIndexNumber = 1000;
        $("* #header").each(function () {
            $(this).css('zIndex', zIndexNumber);
            zIndexNumber -= 10;
        });
    });
    $(function () {
        var zIndexNumber = 1000;
        $("td.left .trigger ").each(function () {
            $(this).css('zIndex', zIndexNumber);
            zIndexNumber -= 10;
        });
    });
    if ($.browser.msie && parseFloat($.browser.version) == 7) {
        $("#panes .accessories .tooltip").css("top", "85px");
        $(function () {
            var zIndexNumber = 1000;
            $("#colors .trigger ").each(function () {
                $(this).css('zIndex', zIndexNumber);
                zIndexNumber -= 10;
            });
        });
        $(function () {
            var zIndexNumber = 1000;
            $("#accessories * .trigger ").each(function () {
                $(this).css('zIndex', zIndexNumber);
                zIndexNumber -= 10;
            });
        });
    }

    // TOOLTIP
    $(".trigger .group").click(function () {
        if ($(".tooltip").is(':visible')) {
            $(".tooltip").css("display", "none");
            $(this).siblings(".tooltip").css("display", "block");
        } else {
            $(this).siblings(".tooltip").css("display", "block");
        }
        return false;
    });
    $("#colors .trigger .group").click(function () {
        var pos = $(this).find(".more-info").position();
        //alert("POSITION: Top: " + pos.top);
        if ($(".tooltip").is(':visible')) {
            $(".tooltip").css("display", "none");
            $(this).siblings(".tooltip").css("display", "block");
            $(this).siblings(".tooltip").css("top", +pos.top);
        } else {
            $(this).siblings(".tooltip").css("display", "block");
            $(this).siblings(".tooltip").css("top", +pos.top);
        }
        return false;
    });
    $("#options .trigger .group").click(function () {
        var pos = $(this).find(".more-info").position();
        //alert("POSITION: Top: " + pos.top);
        if ($(".tooltip").is(':visible')) {
            $(".tooltip").css("display", "none");
            $(this).siblings(".tooltip").css("display", "block");
            $(this).siblings(".tooltip").css("left", +pos.left - 235);
        } else {
            $(this).siblings(".tooltip").css("display", "block");
            $(this).siblings(".tooltip").css("left", +pos.left - 235);
        }
        return false;
    });
    $(".close").click(function () {
        $(".tooltip").css("display", "none");
    });
    $(".close").click(function () {
        $(".tooltip").css("display", "none");
    });
    $("body").click(function () {
        if ($(".tooltip").is(':visible')) {
            $(".tooltip").css("display", "none");
        }
    });

    // TOP NAV SUB NAV HOVER	
    function megaHoverOver() {
        $(this).find(".sub").prev().addClass('active');
        $(this).find(".sub").stop().fadeTo('fast', 1).show();
    }
    function megaHoverOut() {
        $(this).find(".sub").prev().removeClass('active');
        $(this).find(".sub").stop().fadeTo('fast', 0, function () {
            $(this).hide();
        });
    }
    $("#nav-main li .sub").css({ 'opacity': '0' });
    $("#nav-main li").hoverIntent({
        sensitivity: 1,
        interval: 1,
        over: megaHoverOver,
        timeout: 1,
        out: megaHoverOut
    });

    // HOME FEATURE SCROLL
    $("#chained").scrollable({ circular: true }).navigator().autoscroll({ autoplay: true, autopause: true, interval: 5000 });




});

// HIDE SUPPORT BROWSE LOADING IMAGE
$(window).unload(function () {
    $("#browse-support .loading").hide();
});