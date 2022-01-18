// func for animating rotating iamge
let roatingImage = document.querySelector(".hero_round_image");
anime({
  targets: roatingImage,
  loop: true,
  rotate: 360,
  delay: 30,
  easing: "steps(3)",
});

// func for animating hero image
let heroImage = document.querySelector(".hero_image");
anime({
  targets: heroImage,
  translateY: 10,
  direction: "alternate",
  loop: true,
  easing: "linear",
});

// func for animating learn more
let learnMore = document.querySelector(".learn_more_arrow");
anime({
  targets: learnMore,
  translateX: 30,
  direction: "alternate",
  loop: true,
  easing: "linear",
});

// func for animating loading
let loading = document.querySelector(".loading");
anime({
  targets: loading,
  translateX: 30,
  direction: "alternate",
  loop: true,
  easing: "linear",
});


// func for  loading
let loader;
function loadNow(opacity) {
  if (opacity <= 0) {
    displayContent();
  } else {
    loader.style.opacity = opacity;
    window.setTimeout(function () {
      loadNow(opacity - 0.05);
    }, 100);
  }
}

function displayContent() {
  loader.style.display = "none";
  document.getElementById("content").style.display = "block";
}

document.addEventListener("DOMContentLoaded", function () {
  loader = document.getElementById("loader");
  loadNow(1);
});
