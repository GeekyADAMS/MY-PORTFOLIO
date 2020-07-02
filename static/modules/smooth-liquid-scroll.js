
var e = document.body
  , t = document.getElementsByClassName("smooth-scroll-wrapper")[0]
  , n = t.getBoundingClientRect().height - "100px"
  , a = .08
  , o = 0;
function r() {
    var e = "translateY(-" + (o += (window.pageYOffset - o) * a) + "px) translateZ(0)";
    t.style.transform = e,
    callScroll = requestAnimationFrame(r)
}
e.style.height = Math.floor(n) + "px",
r();
var s = document.querySelector("section")
  , l = window.pageYOffset
  , i = function e() {
    var t = window.pageYOffset
      , n = .2 * (t - l);
    s.style.transform = "skewY(" + n + "deg)",
    l = t,
    requestAnimationFrame(e)
};
i();

/* <script src="src.ba611162.js"></script> */
