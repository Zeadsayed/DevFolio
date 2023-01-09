
// ==> bg nav-bar
let about = $("#about").offset().top;

$(window).scroll(function () {
    let wScroll = $(window).scrollTop();
    if (wScroll > about - 100) {
        console.log("equal");
        $('.bg-none').css("backgroundColor", "rgba(0,0,0,0.9)")
        $('.bg-none').css("padding", "12px")
        $('#btnUp').fadeIn(1000)
    }
    else {
        console.log("noteq");
        $('.bg-none').css("backgroundColor", "transparent")
        $('.bg-none').css("padding", "20px")
        $('#btnUp').fadeOut(1000)
    }
})

/*---------------------------------------------------*/

// ===> aHref func
$("a[href^='#']").click(function (e) {

    let aHref = $(e.target).attr("href")

    let SectionLink = $(aHref).offset().top;
    console.log(SectionLink);

    $("html , body").animate({ scrollTop: SectionLink }, 200);

})

/*---------------------------------------------------*/

// ===> btnup func
$("#btnUp").click(function () {
    $("html , body").animate({ scrollTop: 0 }, 300);
})

/*---------------------------------------------------*/

// ===> counter func
$(document).ready(function(){
    $(".counter-num p").counterUp({
        delay: 7,
        time:1200
    })
      
    
});

/*---------------------------------------------------*/



