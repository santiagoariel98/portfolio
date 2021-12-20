let toggleDarkMode = () => {
  let darkmode = $(".theme-switch-color");

  let dataTheme = darkmode.attr("data-theme");

  if (dataTheme === "dark") {
    darkmode.attr("data-theme", "light");
  } else {
    darkmode.attr("data-theme", "dark");
  }
};

let toggleDesignResponsive = () => {
  let value = $("#responsive").attr("src", (i, val) => {
    if (val.includes("-responsive")) {
      return false;
    } else {
      return true;
    }
  });
  console.log("aaa", value);
  $(".proyects-img").attr("src", (i, val) => {
    let newVal = "";
    if (val.includes("-responsive")) {
      return val.replace("-responsive", "");
    } else {
      return val.replace(".png", "-responsive.png");
    }
  });
  if (value) {
    console.log("si");
    $(".proyects-img").css("object-fit", "none");
  } else {
    $(".proyects-img").css("object-fit", "cover");
  }
};

// $(() => {
//   var scroll = $(document).scrollTop();
//   var navHeight = $("header").outerHeight();
//   $(window).scroll(() => {
//     var scrolled = $(document).scrollTop();

//     if (scrolled > navHeight) {
//       $("header").addClass("animate");
//     } else {
//       $("header").removeClass("animate");
//     }
//     if (scrolled > scroll) {
//       $("header").removeClass("sticky");
//     } else {
//       $("header").addClass("sticky");
//     }
//     scroll = $(document).scrollTop();
//   });
// });
