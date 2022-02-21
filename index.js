let toggleDarkMode = () => {
  let darkmode = $('.theme-switch-color');

  let dataTheme = darkmode.attr('data-theme');

  if (dataTheme === 'dark') {
    darkmode.attr('data-theme', 'light');
  } else {
    darkmode.attr('data-theme', 'dark');
  }
};

let toggleDesignResponsive = () => {
  var value;
  $('#responsive').attr('src', (i, val) => {
    if (val.includes('-responsive')) {
      value = false;
    } else {
      value = true;
    }
  });
  $('.projects-img').attr('src', (i, val) => {
    var htmlLink = val.slice(0, 69);
    var githubLink = val.slice(69);

    if (githubLink.includes('-responsive')) {
      let newstr = githubLink.replace('-responsive', '');
      return htmlLink + newstr;
    } else {
      let newStr = githubLink.replace('.png', '-responsive.png');
      return htmlLink + newStr;
    }
  });
  if (value) {
    $('.projects-img').css('object-fit', 'none');
  } else {
    $('.projects-img').css('object-fit', 'cover');
  }
};

let toggleOpenNavMenu = () => {
  $('.nav-links').toggleClass('open');
  $('.nav-links li').toggleClass('fade');
};
