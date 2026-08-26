const reveals = document.querySelectorAll(".reveal"),
  header = document.querySelector(".site-header"),
  menuButton = document.querySelector(".menu-button"),
  navigation = document.querySelector(".desktop-nav"),
  languageButton = document.querySelector(".language-button");
const tickerTrack = document.querySelector(".ticker-track");
const fillTicker = () => {
  if (!tickerTrack) return;
  const groups = [...tickerTrack.querySelectorAll(".ticker-group")];
  groups.slice(1).forEach((group) => group.remove());
  const template = groups[0],
    groupWidth = template.getBoundingClientRect().width;
  if (!groupWidth) return;
  tickerTrack.style.setProperty("--ticker-distance", `${groupWidth}px`);
  const copies = Math.max(2, Math.ceil((innerWidth + groupWidth) / groupWidth));
  for (let i = 1; i < copies; i++) {
    const clone = template.cloneNode(true);
    clone.setAttribute("aria-hidden", "true");
    tickerTrack.appendChild(clone);
  }
};
document.fonts.ready.then(fillTicker);
let tickerResize;
addEventListener(
  "resize",
  () => {
    clearTimeout(tickerResize);
    tickerResize = setTimeout(fillTicker, 150);
  },
  { passive: true },
);
const updateHeader = () => header.classList.toggle("scrolled", scrollY > 24);
updateHeader();
addEventListener("scroll", updateHeader, { passive: true });
const observer = new IntersectionObserver(
  (entries) =>
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    }),
  { threshold: 0.1 },
);
reveals.forEach((el, i) => {
  el.style.transitionDelay = `${Math.min(i % 4, 2) * 70}ms`;
  observer.observe(el);
});
const cursor = document.querySelector(".cursor-dot");
addEventListener("pointermove", (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});
document.querySelectorAll("a,button").forEach((el) => {
  el.addEventListener("mouseenter", () => cursor.classList.add("cursor-hover"));
  el.addEventListener("mouseleave", () =>
    cursor.classList.remove("cursor-hover"),
  );
});
menuButton.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") === "true",
    isPt = document.documentElement.lang === "pt-BR";
  menuButton.setAttribute("aria-expanded", String(!open));
  menuButton.setAttribute(
    "aria-label",
    open
      ? isPt
        ? "Abrir menu"
        : "Open menu"
      : isPt
        ? "Fechar menu"
        : "Close menu",
  );
  menuButton.textContent = open ? "Menu" : isPt ? "Fechar" : "Close";
  navigation.classList.toggle("mobile-open", !open);
});
navigation.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => {
    navigation.classList.remove("mobile-open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute(
      "aria-label",
      document.documentElement.lang === "pt-BR" ? "Abrir menu" : "Open menu",
    );
    menuButton.textContent = "Menu";
  }),
);
let language = "pt";
languageButton.addEventListener("click", () => {
  language = language === "pt" ? "en" : "pt";
  document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
  document
    .querySelectorAll("[data-pt][data-en]")
    .forEach((el) => (el.innerHTML = el.dataset[language]));
  languageButton.textContent = language === "pt" ? "EN" : "PT";
  languageButton.setAttribute(
    "aria-label",
    language === "pt" ? "Switch to English" : "Mudar para português",
  );
  document.title =
    language === "pt"
      ? "Levy Ponciano — Web Designer"
      : "Levy Ponciano — Web Designer in Brazil";
});

const carousel = document.querySelector(".project-carousel");
if (carousel) {
  const track = carousel.querySelector(".carousel-track"),
    slides = [...carousel.querySelectorAll(".carousel-slide")],
    dots = [...carousel.querySelectorAll("[data-slide]")],
    previous = carousel.querySelector(".carousel-prev"),
    next = carousel.querySelector(".carousel-next"),
    status = carousel.querySelector(".carousel-status"),
    reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  let active = 0,
    timer,
    startX = 0;
  const names = ["Lia Nogueira", "Moura & Salles", "Pulso"];
  const setSlide = (index, announce = true) => {
    active = (index + slides.length) % slides.length;
    track.style.transform = `translateX(-${active * 100}%)`;
    slides.forEach((slide, i) => {
      const selected = i === active;
      slide.classList.toggle("is-active", selected);
      slide.setAttribute("aria-hidden", String(!selected));
      slide.inert = !selected;
      slide
        .querySelectorAll("a")
        .forEach((link) => (link.tabIndex = selected ? 0 : -1));
    });
    dots.forEach((dot, i) => {
      const selected = i === active;
      dot.classList.toggle("is-active", selected);
      selected
        ? dot.setAttribute("aria-current", "true")
        : dot.removeAttribute("aria-current");
    });
    carousel.style.setProperty("--active-slide", active);
    if (announce)
      status.textContent =
        language === "pt"
          ? `Projeto ${active + 1} de ${slides.length}: ${names[active]}`
          : `Project ${active + 1} of ${slides.length}: ${names[active]}`;
  };
  const stop = () => {
    clearInterval(timer);
    carousel.classList.add("is-paused");
  };
  const play = () => {
    clearInterval(timer);
    if (
      reducedMotion ||
      carousel.matches(":hover") ||
      carousel.contains(document.activeElement)
    ) {
      carousel.classList.add("is-paused");
      return;
    }
    carousel.classList.remove("is-paused");
    timer = setInterval(() => setSlide(active + 1, false), 5000);
  };
  previous.addEventListener("click", () => {
    setSlide(active - 1);
    play();
  });
  next.addEventListener("click", () => {
    setSlide(active + 1);
    play();
  });
  dots.forEach((dot) =>
    dot.addEventListener("click", () => {
      setSlide(Number(dot.dataset.slide));
      play();
    }),
  );
  carousel.addEventListener("mouseenter", stop);
  carousel.addEventListener("mouseleave", play);
  carousel.addEventListener("focusin", stop);
  carousel.addEventListener("focusout", (event) => {
    if (!carousel.contains(event.relatedTarget)) play();
  });
  carousel.addEventListener("pointerdown", (event) => {
    startX = event.clientX;
  });
  carousel.addEventListener("pointerup", (event) => {
    const distance = event.clientX - startX;
    if (Math.abs(distance) > 55) {
      setSlide(active + (distance < 0 ? 1 : -1));
      play();
    }
  });
  document.addEventListener("visibilitychange", () =>
    document.hidden ? stop() : play(),
  );
  setSlide(0, false);
  play();
}
