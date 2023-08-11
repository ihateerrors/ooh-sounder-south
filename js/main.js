function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    { pageLanguage: "en" },
    "google_translate_element"
  );
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

jQuery(window).on("scroll", onScroll);

function onScroll(event) {
  var scrollPos = jQuery(document).scrollTop();
  jQuery("#navbarSupportedContent a").each(function () {
    var currLink = jQuery(this);
    var refElement = jQuery(currLink.attr("href"));
    if (
      refElement.offset().top - 200 <= scrollPos &&
      refElement.offset().top + refElement.height() > scrollPos
    ) {
      jQuery("#menu-center ul li a").removeClass("active");
      currLink.addClass("active");
    } else {
      currLink.removeClass("active");
    }
  });
}

jQuery(".tab-row a").each(function () {
  jQuery(this).on("click", function (event) {
    event.preventDefault();
    var currentId = jQuery(this).attr("href");
    setTimeout(() => {
      jQuery("html, body").animate(
        {
          scrollTop: jQuery(currentId).offset().top - 50,
        },
        0
      );
    }, 0);
  });
});

$(window).scroll(function () {
  var s = $(window).scrollTop(),
    d = $(document).height(),
    c = $(window).height();
  scrollPercent = (s / (d - c)) * 100;
  var position = scrollPercent;

  $("#progressbar").attr("value", position);
});

// ----- Tooltip ----- 
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})