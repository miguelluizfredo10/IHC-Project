const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");
const galleryImages = document.querySelectorAll(".gallery__grid img");
const galleryGrid = document.getElementById("gallery");
const galleryFilter = document.getElementById("gallery-filter");
const lightbox = document.getElementById("lightbox");
const downloadBtn = document.getElementById("download-btn");
const swiperWrapper = document.querySelector(".lightbox-swiper .swiper-wrapper");

let swiperInstance;

// Criar slides no lightbox
galleryImages.forEach((img, index) => {
  const slide = document.createElement("div");
  slide.classList.add("swiper-slide");
  const cloneImg = document.createElement("img");
  cloneImg.src = img.src;
  slide.appendChild(cloneImg);
  swiperWrapper.appendChild(slide);

  // Evento de clique para abrir no índice certo
  img.addEventListener("click", () => {
    openLightbox(index);
  });
});

function filterGallery(category) {
  if (galleryGrid) {
    galleryGrid.classList.add("filtering");
  }

  setTimeout(() => {
    galleryImages.forEach((img) => {
      const imgCategory = img.dataset.category;
      const show = category === "all" || imgCategory === category;
      img.classList.toggle("hidden", !show);
    });

    if (galleryGrid) {
      galleryGrid.classList.remove("filtering");
    }
  }, 150);
}

function handleFilterClick(event) {
  const button = event.target.closest(".filter-btn");
  if (!button) return;

  const category = button.dataset.category;

  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.classList.toggle("active", btn === button);
  });

  filterGallery(category);
}

galleryFilter?.addEventListener("click", handleFilterClick);

function updateDownloadBtn(index) {
  if (!downloadBtn) return;
  const imageSrc = galleryImages[index]?.src;
  if (!imageSrc) return;
  const filename = imageSrc.split("/").pop().split("?")[0] || "image.jpg";
  downloadBtn.href = imageSrc;
  downloadBtn.setAttribute("download", filename);
}

function openLightbox(index) {
  lightbox.classList.add("open");
  swiperInstance = new Swiper(".lightbox-swiper", {
    loop: true,
    initialSlide: index,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    on: {
      init() {
        updateDownloadBtn(this.realIndex);
      },
      slideChange() {
        updateDownloadBtn(this.realIndex);
      },
    },
  });
}

function closeLightbox() {
  lightbox.classList.remove("open");
  if (swiperInstance) swiperInstance.destroy(true, true);
}

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const navAnchors = document.querySelectorAll(".nav__links a[href^='#']");
navAnchors.forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      event.preventDefault();
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".about__container .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".about__container .section__description", {
  ...scrollRevealOption,
  delay: 500,
  interval: 500,
});
ScrollReveal().reveal(".about__container img", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".service__container .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".service__container .section__description", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".service__card", {
  duration: 1000,
  delay: 1000,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});

ScrollReveal().reveal(".blog__content .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".blog__content h4", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".blog__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".blog__content .blog__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

const instagram = document.querySelector(".instagram__flex");

Array.from(instagram.children).forEach((item) => {
  const duplicateNode = item.cloneNode(true);
  duplicateNode.setAttribute("aria-hidden", true);
  instagram.appendChild(duplicateNode);
});


