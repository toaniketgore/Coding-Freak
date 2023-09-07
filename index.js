window.addEventListener("load", (event) => {
  const preloader = document.querySelector(".website-pre-loader");
  preloader.style.display = "none";
});



window.addEventListener("scroll", function () {
  var nav = document.querySelector(".nav");
  var cardDiv = document.querySelector(".card-div");
  var navHeight = nav.offsetHeight;

  var cardDivOffsetTop = cardDiv.offsetTop;
  var cardDivHeight = cardDiv.offsetHeight;

  if (window.scrollY > cardDivOffsetTop - navHeight) {
    nav.style.position = "fixed";
    nav.style.top = "0";
    nav.style.width = "100%";
    nav.style.zIndex = "999";
  } else {
    nav.style.position = "sticky";
    nav.style.top = "0";
    nav.style.width = "100%";
    nav.style.zIndex = "1";
  }
});

