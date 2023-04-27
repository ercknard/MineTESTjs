
  $(function () {
    $(document).scroll(function () {
      var $nav = $(".index-navigation");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });

  $(function () {
    $(document).scroll(function () {
      var $nav = $("#web_title");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });
