


function relevtosapn(){
    document.querySelectorAll(".reveal").forEach(function(elem) {
      var parent = document.createElement("span");
      var child = document.createElement("span");
  
      parent.classList.add("parent");
      child.classList.add("child");
  
      child.innerHTML = elem.innerHTML;
      parent.appendChild(child);
  
      elem.innerHTML = "";
      elem.appendChild(parent);
    });
  }
  relevtosapn();
  
  var t = gsap.timeline();
  t
    .from(".child span", {
      x: 100,
      duration: 1,
      stagger: 0.2,
      ease: Power3.easeInOut
    })
    .to(".parent .child", {
      y: "-100%",
      duration: 0.6,
      ease: Circ.easeInOut
    })
    .to("#loader", {
      height: 0,
      duration: 0.8,
      ease: Circ.easeInOut,
      onComplete: function() {
        document.getElementById('preloader').style.display = 'none';
        document.getElementById('main').style.display = 'block';
        document.body.style.overflow = 'auto'; // Enable scrolling after load
      }
    })
    .to("#green", {
      height: "100%",
      top: 0,
      delay: -0.6,
      duration: 0.5,
      ease: Circ.easeInOut
    })
    .to("#green", {
      height: "0%",
      top: 0,
      delay: -0.1,
      duration: 0.2,
      ease: Circ.easeInOut
    });
  
  // Navbar GSAP
  var menuToggle = document.getElementById("menuToggle");
  
  var menuBar = gsap.timeline();
  
  menuBar.to('.bar-1', 0.5, {
    attr: {d: "M8,2 L2,8"},
    x: 1,
    ease: Power2.easeInOut
  }, 'start');
  
  menuBar.to('.bar-2', 0.5, {
    autoAlpha: 0
  }, 'start');
  
  menuBar.to('.bar-3', 0.5, {
    attr: {d: "M8,8 L2,2"},
    x: 1,
    ease: Power2.easeInOut
  }, 'start');
  
  menuBar.reverse();
  
  var tl = gsap.timeline({paused: true});
  
  tl.to('.fullpage-menu', {
    duration: 0,
    display: "block",
    ease: 'Expo.easeInOut',
  });
  
  tl.from('.menu-bg span', {
    duration: 1,
    x: "100%",
    stagger: 0.1,
    ease: 'Expo.easeInOut'
  });
  
  tl.from('.main-menu li a', {
    duration: 1.5,
    y: "100%",
    stagger: 0.2,
    ease: 'Expo.easeInOut'
  }, "-=0.5");
  
  tl.from('.social-links li', {
    duration: 1,
    y: "-100%",
    opacity: 0,
    stagger: 0.1,
    ease: 'Expo.easeInOut'
  }, "-=0.5");
  
  tl.reverse();
  
  menuToggle.addEventListener('click', function(){
    menuBar.reversed(!menuBar.reversed());
    tl.reversed(!tl.reversed());
  });
  



  // landing page
   // GSAP Animations
   gsap.from(".info h1", { duration: 1, y: -50, opacity: 0, ease: "power2.out" });
   gsap.from(".info p", { duration: 1, delay: 0.5, y: -50, opacity: 0, ease: "power2.out" });
   gsap.from(".info button", { duration: 1, delay: 1, y: -50, opacity: 0, ease: "power2.out" });
   gsap.from(".image img", { duration: 1, delay: 1.5, x: 100, opacity: 0, ease: "power2.out" });




   