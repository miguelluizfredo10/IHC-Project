const galleryItems = document.querySelectorAll(".gallery__item");
const galleryImages = document.querySelectorAll(".gallery__item img");
const galleryFilter = document.getElementById("gallery-filter");
const lightbox = document.getElementById("lightbox");
const downloadBtn = document.getElementById("download-btn");
const swiperWrapper = document.querySelector(".lightbox-swiper .swiper-wrapper");
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn?.querySelector("i");

if (menuBtn && navLinks && menuBtnIcon) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
  });

  navLinks.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
  });
}

const themeToggle = document.getElementById("theme-toggle");
const htmlElement = document.documentElement;

const savedTheme = localStorage.getItem("theme") || "dark";
htmlElement.classList.toggle("light-mode", savedTheme === "light");
updateThemeIcon(savedTheme);

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const currentTheme = htmlElement.classList.contains("light-mode") ? "light" : "dark";
    const newTheme = currentTheme === "light" ? "dark" : "light";
    
    htmlElement.classList.toggle("light-mode", newTheme === "light");
    localStorage.setItem("theme", newTheme);
    updateThemeIcon(newTheme);
  });
}

function updateThemeIcon(theme) {
  if (!themeToggle) return;
  const icon = themeToggle.querySelector("i");
  if (icon) {
    icon.setAttribute("class", theme === "light" ? "ri-sun-line" : "ri-moon-line");
  }
}

document.querySelectorAll(".nav__links a[href^='#']").forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetElement = document.querySelector(link.getAttribute("href"));
    if (targetElement) {
      event.preventDefault();
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});


let swiperInstance;

galleryImages.forEach((img, index) => {
  const slide = document.createElement("div");
  slide.classList.add("swiper-slide");
  const cloneImg = document.createElement("img");
  cloneImg.src = img.src;
  slide.appendChild(cloneImg);
  swiperWrapper.appendChild(slide);

  img.addEventListener("click", () => {
    openLightbox(index);
  });
});

if (swiperWrapper && galleryImages.length > 0) {
  galleryImages.forEach((img, index) => {
    const slide = document.createElement("div");
    slide.classList.add("swiper-slide");
    const cloneImg = document.createElement("img");
    cloneImg.src = img.src;
    cloneImg.alt = photoData[index]?.title || "Fotografia da galeria";
    slide.appendChild(cloneImg);
    swiperWrapper.appendChild(slide);
    
    if (photoData[index]) {
      img.alt = photoData[index].title + " - " + photoData[index].scientificName;
    }
  });

  galleryItems.forEach((item, index) => {
    item.addEventListener("click", () => {
      openLightbox(index);
    });
  });
}

function filterGallery(category) {
  const galleryGrid = document.getElementById("gallery");
  if (!galleryGrid) return;
  
  galleryGrid.classList.add("filtering");

  setTimeout(() => {
    galleryItems.forEach((item) => {
      const show = category === "all" || item.dataset.category === category;
      item.classList.toggle("hidden", !show);
    });

    galleryGrid.classList.remove("filtering");
  }, 150);
}

function handleFilterClick(event) {
  const button = event.target.closest(".filter-btn");
  if (!button) return;

  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.classList.toggle("active", btn === button);
  });

  filterGallery(button.dataset.category);
}

if (galleryFilter) {
  galleryFilter.addEventListener("click", handleFilterClick);
}

function updateDownloadBtn(index) {
  if (!downloadBtn || !photoData[index]) return;
  const photo = photoData[index];
  downloadBtn.href = photo.src;
  const filename = photo.src.split("/").pop().split("?")[0] || "image.jpg";
  downloadBtn.setAttribute("download", filename);
  
  // Update photo info
  const photoInfo = document.querySelector(".photo-info");
  if (photoInfo) {
    photoInfo.innerHTML = `
      <div class="photo-details">
        <h3>${photo.title}</h3>
        <p class="photo-description">${photo.description}</p>
        <div class="photo-metadata">
          <p><strong>📅 Data:</strong> ${photo.date}</p>
          <p><strong>📍 Local:</strong> ${photo.location}</p>
          <p><strong>📷 Câmera:</strong> ${photo.camera}</p>
          <p><strong>👤 Fotógrafo:</strong> ${photo.photographer}</p>
          <p><strong>🔬 Nome científico:</strong> ${photo.scientificName}</p>
        </div>
      </div>
    `;
  }
}

function openLightbox(index) {
  if (!lightbox) return;
  
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
  if (!lightbox) return;
  
  lightbox.classList.remove("open");
  if (swiperInstance) swiperInstance.destroy(true, true);
}

if (lightbox) {
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });
}

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

document.querySelectorAll(".nav__links a[href^='#']").forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetElement = document.querySelector(link.getAttribute("href"));
    if (targetElement) {
      event.preventDefault();
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
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


