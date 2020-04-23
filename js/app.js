new fullpage("#fullpage", {
  autoScrolling: true,
  navigation: true,
  onLeave: (origin, destination, direction) => {
    const section = destination.item;
    const title = section.querySelector("h1");
    const tl = gsap.timeline({
      defaults: { ease: "power2.inOut", delay: 0.5 },
    });

    tl.fromTo(title, 0.5, { y: "50", opacity: 0 }, { y: 0, opacity: 1 });

    if (destination.index === 1) {
      const cars = document.querySelectorAll(".car");
      const desc = document.querySelector(".desc");

      tl.fromTo(cars, 0.7, { x: "100%" }, { x: "-60%" });
      tl.fromTo(desc, 0.7, { y: "50", opacity: 0 }, { y: 0, opacity: 1 })
        .fromTo(cars[0], 0.5, { opacity: 1 }, { opacity: 0 })
        .fromTo(cars[1], 0.5, { opacity: 0 }, { opacity: 1 });
    }
    if (destination.index === 2) {
      const c4 = document.querySelectorAll(".c4");
      const desc = document.querySelector(".desc");

      tl.fromTo(c4, 0.7, { x: "-110%" }, { x: "0" });
      //tl.fromTo(c4, 0.7, { y: "50", opacity: 0 }, { y: 0, opacity: 1 });
    }
    if (destination.index === 3) {
      const c5 = document.querySelectorAll(".c5");
      const c6 = document.querySelectorAll(".c6");
      const desc = document.querySelector(".desc");

      tl.fromTo(
        c5,
        0.7,
        { x: "-115%", opacity: 0 },
        { x: "0", opacity: 1 }
      ).fromTo(
        c6,
        0.7,
        { x: "115%", opacity: 0 },
        { x: "0", opacity: 1 },
        "-=1.2"
      );
    }
  },
});
