import { Power3 } from "gsap";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

//slider text intro
export const sliderIntro = (el1, el2, el3) => {
  const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
  tl.to([el1, el2, el3], { y: "0%", duration: 1.5, stagger: 0.25 });
};
//slider upward transition
export const sliderDivIntro = (ele) => {
  const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
  tl.to(ele, { y: "-100%", duration: 1.0, delay: 1.6 });
};
//hide the itro text
export const hideIntroDiv = (ele) => {
  const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
  tl.to(ele, { y: "-100%", duration: 1 }, 1.5);
};

//header icon
export const iconIntro = (ele) => {
  gsap.to(ele, {
    xPercent: -20,
    opacity: 3,
    duration: 1.9,
    scale: 1,
    ease: "power2.inOut",
    delay: 2.3,
  });
};
export const iconIntroMob = (ele) => {
  console.debug("icon ani");
  gsap.fromTo(
    ele,
    {
      xPercent: -20,
      yPercent: -90,
      opacity: 0,
    },
    {
      xPercent: 0,
      yPercent: 0,
      opacity: 3,
      duration: 1.9,
      scale: 1,
      ease: "power2.inOut",
      delay: 2.3,
    }
  );
};

export const menuIconIntro = (ele) => {
  gsap.fromTo(
    ele,
    {
      opacity: 0,
      xPercent: 50,
    },
    {
      opacity: 3,
      xPercent: 0,
      ease: "back",
      duration: 2.0,
      delay: 2.4,
    }
  );
};

export const navIntroMob = (ele) => {
  gsap.fromTo(
    ele,
    {
      opacity: 0,
      xPercent: 40,
      yPercent: -20,
    },
    {
      opacity: 3,
      xPercent: 0,
      yPercent: 0,
      stagger: 0.54,
      ease: "back",
      duration: 1.8,
    }
  );
};

//nav items
export const navIntro = (ele) => {
  gsap.fromTo(
    ele,
    {
      opacity: 0,
      xPercent: 40,
      yPercent: -20,
    },
    {
      opacity: 3,
      xPercent: 0,
      yPercent: 0,
      stagger: 0.54,
      ease: "back",
      duration: 2,
      delay: 2.4,
    }
  );
};
//side bar
export const sideBarIntro = (ele) => {
  gsap.fromTo(
    ele,
    {
      opacity: 0,
      xPercent: -40,
    },
    {
      opacity: 3,
      xPercent: 0,
      stagger: 0.54,
      ease: "back",
      duration: 2,
      delay: 2.4,
    }
  );
};
//Name header
export const nameIntro = (elem) => {
  gsap.from(elem, {
    xPercent: -20,
    yPercent: 20,
    opacity: 0,
    stagger: 0.35,
    duration: 1.5,
    //    scale: -1,
    delay: 2.5,
    ease: "back",
  });
};
export const nameUlScale = (ele) => {
  gsap.fromTo(
    ele,
    {
      scaleX: -1,
    },
    {
      scaleX: 1,
      duration: 5,
      ease: Power3.easeInOut,
    }
  );
};
//intoduction
export const intro = (ele) => {
  gsap.fromTo(
    ele,
    {
      opacity: 0,
      xPercent: 30,
    },
    {
      opacity: 3,
      xPercent: 0,
      duration: 0.9,
      delay: 2.6,
      ease: "back",
    }
  );
};
//jobTitle,jobdetails
export const jobTitleIntro = (ele) => {
  gsap.fromTo(
    ele,
    {
      opacity: 0,
      xPercent: 30,
    },
    {
      opacity: 3,
      xPercent: 0,
      duration: 2.1,
      delay: 2.7,
      ease: Power3.easeInOut,
    }
  );
};
export const jobDetailsIntro = (ele) => {
  gsap.fromTo(
    ele,
    {
      opacity: 0,
      xPercent: 30,
    },
    {
      opacity: 3,
      xPercent: 0,
      duration: 1.2,
      delay: 2.8,
      ease: Power3.easeIn,
    }
  );
};
//story
export const storyIntro = (ele) => {
  gsap.fromTo(
    ele,
    {
      opacity: 0,
      xPercent: 35,
    },
    {
      opacity: 3,
      xPercent: 0,
      duration: 1.3,
      delay: 2.9,
      ease: Power3.easeIn,
    }
  );
};
//job profile card intro
export const jobProfileCardIntro = (c1, c2, c3) => {
  gsap.fromTo(
    [c1, c2, c3],
    {
      opacity: 0,
      yPercent: 400,
    },
    {
      opacity: 3,
      yPercent: 0,
      duration: 2,
      delay: 2.1,
      ease: "back",
    }
  );
};
//contact
export const contactIntro = (ele) => {
  gsap.fromTo(
    ele,
    {
      opacity: 0,
      xPercent: -30,
      yPercent: 20,
    },
    {
      opacity: 3,
      xPercent: 0,
      yPercent: 0,
      duration: 1.0,
      delay: 2.1,
      ease: "back",
    }
  );
};
//contact_info
export const contactInfoIntro = (ele) => {
  gsap.fromTo(
    ele,
    {
      opacity: 0,
      xPercent: -30,
      yPercent: 20,
    },
    {
      opacity: 3,
      xPercent: 0,
      yPercent: 0,
      duration: 1.2,
      delay: 2.3,
      ease: Power3.easeInOut,
    }
  );
};
//email
export const emailIntro = (ele) => {
  gsap.fromTo(
    ele,
    {
      opacity: 0,
      xPercent: -30,
      yPercent: 20,
    },
    {
      opacity: 3,
      xPercent: 0,
      yPercent: 0,
      duration: 1.2,
      delay: 2.3,
      ease: Power3.easeInOut,
    }
  );
};
//quote1
export const quote1Intro = (ele) => {
  gsap.fromTo(
    ele,
    {
      opacity: 0,
      xPercent: 30,
    },
    {
      opacity: 3,
      xPercent: 0,
      duration: 1,
      delay: 2.1,
      ease: "back",
    }
  );
};
//quote2
export const quote2Intro = (ele) => {
  gsap.fromTo(
    ele,
    {
      opacity: 0,
      xPercent: 30,
    },
    {
      opacity: 3,
      xPercent: 0,
      duration: 1.1,
      delay: 2.2,
      ease: Power3.easeIn,
    }
  );
};
//exp,projects,blogs
export const detailsIntro = (el1, el2, el3) => {
  gsap.fromTo(
    [el1, el2, el3],
    {
      opacity: 0,
      xPercent: 30,
    },
    {
      opacity: 3,
      xPercent: 0,
      duration: 1.2,
      delay: 2.3,
      ease: Power3.easeIn,
    }
  );
};
//Stagger links
export const staggerLinks = (elem1, elem2) => {
  gsap.from([elem1, elem2], {
    duration: 0.8,
    y: 100,
    delay: 0.1,
    ease: "power4.inOut",
    stagger: {
      amount: 0.3,
    },
  });
};

// Hover on the link
export const hoverLink = (e) => {
  gsap.to(e.target, {
    duration: 0.8,
    y: 3,
    skewX: 4,
    ease: "power2.inOut",
  });
};

// Hover away from the link
export const hoverExit = (e) => {
  gsap.to(e.target, {
    duration: 0.8,
    y: -3,
    skewX: 0,
    ease: "power2.inOut",
  });
};

//on scroll project card animations
export const animateProjectCard1Intro = (
  triggerElement,
  card1,
  card2,
  card3
) => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.core.globals("ScrollTrigger", ScrollTrigger);
  let t2 = gsap.timeline({
    paused: true,
    scrollTrigger: {
      trigger: triggerElement,
      scrub: true,
    },
  });
  t2.fromTo(
    [card1, card2, card3],
    { opacity: 0, xPercent: 20 },
    {
      opacity: 3,
      xPercent: 0,
      stagger: {
        amount: 0.9,
      },
      duration: 2,
      ease: Power3.easeInOut,
    }
  );
};
export const animateProjectIntro = (trigger, element) => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.core.globals("ScrollTrigger", ScrollTrigger);
  let t2 = gsap.timeline({
    paused: true,
    scrollTrigger: {
      trigger: trigger,
      scrub: true,
    },
  });
  t2.fromTo(
    element,
    { opacity: 0, xPercent: -20 },
    {
      opacity: 3,
      xPercent: 0,
      stagger: {
        amount: 0.9,
      },
      duration: 2,
      ease: Power3.easeInOut,
    }
  );
};
export const animateProjectIntroMobile = (trigger, element) => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.core.globals("ScrollTrigger", ScrollTrigger);
  let t2 = gsap.timeline({
    paused: true,
    scrollTrigger: {
      trigger: trigger,
      scrub: true,
    },
  });
  t2.fromTo(
    element,
    { opacity: 0, xPercent: -10 },
    {
      opacity: 3,
      xPercent: 0,
      stagger: {
        amount: 0.9,
      },
      duration: 2,
      ease: Power3.easeInOut,
    }
  );
};
export const animateDivOnScrollIntro = (trigger, element, direction) => {
  console.debug("widget animation");
  let axis;
  axis = direction === "right" ? 50 : -40;
  gsap.registerPlugin(ScrollTrigger);
  gsap.core.globals("ScrollTrigger", ScrollTrigger);
  let t2 = gsap.timeline({
    paused: true,
    scrollTrigger: {
      trigger: trigger,
      scrub: true,
    },
  });
  t2.fromTo(
    element,
    { opacity: 0, xPercent: axis },
    {
      opacity: 3,
      xPercent: 0,
      stagger: {
        amount: 0.9,
      },
      duration: 1,
      ease: Power3.easeInOut,
    }
  );
};
export const animateTechnologyIntro = (trigger, element) => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.core.globals("ScrollTrigger", ScrollTrigger);
  let t2 = gsap.timeline({
    paused: true,
    scrollTrigger: {
      trigger: trigger,
      scrub: true,
    },
  });
  t2.fromTo(
    element,
    { opacity: 1, xPercent: 50 },
    {
      opacity: 3,
      xPercent: 0,
      stagger: {
        amount: 0.9,
      },
      duration: 2,
      ease: Power3.easeInOut,
    }
  );
};
