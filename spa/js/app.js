// HomeSense - Main Application Logic

$(document).ready(function () {
  console.log("HomeSense started");

  // Handle navigation clicks
  $("[data-page]").on("click", function (e) {
    e.preventDefault();

    const page = $(this).data("page");

    // Remove active class from all nav links
    $(".nav-link").removeClass("active");

    // Add active class to the clicked link
    $(this).addClass("active");

    // Hide all pages
    $("main > section").addClass("d-none");

    // Show the selected page
    $("#page-" + page).removeClass("d-none");
  });
});