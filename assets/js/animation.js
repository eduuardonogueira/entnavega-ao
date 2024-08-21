function createObserver(classname) {
  return new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio >= 0.75) {
          entry.target.classList.add(classname);
        }
      });
    },
    {
      threshold: [0.25, 0.5, 0.75, 1],
    }
  );
}

const elementsWillGoToRight = document.querySelectorAll(
  ".banner__title, .about__img, .services__title, .responsible-img, .clients__title"
);
const elementsWillGoToLeft = document.querySelectorAll(
  ".banner__subtitle, .about__title, .about__text, .responsible-content__information"
);
const elementsWillGoToUp = document.querySelectorAll(
  ".card, .clients__logo-wrapper img"
);
const elementsWillGoToDown = document.querySelectorAll(".responsible__title");

const dashRight = createObserver("dash-right");
elementsWillGoToRight.forEach((element) => {
  element.classList.add("hidden");
  dashRight.observe(element);
});

const dashLeft = createObserver("dash-left");
elementsWillGoToLeft.forEach((element) => {
  element.classList.add("hidden");
  dashLeft.observe(element);
});

const dashUp = createObserver("dash-up");
elementsWillGoToUp.forEach((element) => {
  element.classList.add("hidden");
  dashUp.observe(element);
});

const dashDown = createObserver("dash-down");
elementsWillGoToDown.forEach((element) => {
  element.classList.add("hidden");
  dashDown.observe(element);
});
