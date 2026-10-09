document.addEventListener("DOMContentLoaded", () => {
  // 1. Compulsory Form Validation
  const contactForm = document.getElementById("contact-form");
  const nameInput = document.getElementById("contact-name");
  const emailInput = document.getElementById("contact-email");
  const messageInput = document.getElementById("contact-message");

  const nameError = document.getElementById("name-error");
  const emailError = document.getElementById("email-error");
  const messageError = document.getElementById("message-error");
  const previewBox = document.getElementById("contact-preview");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      nameError.textContent = "";
      emailError.textContent = "";
      messageError.textContent = "";
      previewBox.textContent = "";

      let isValid = true;

      if (nameInput.value.trim() === "") {
        nameError.textContent = "Please enter your name.";
        isValid = false;
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(emailInput.value.trim())) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
      }

      if (messageInput.value.trim() === "") {
        messageError.textContent = "Please enter a message.";
        isValid = false;
      }

      if (isValid) {
        previewBox.textContent = 
          `Form validated successfully!\n` +
          `Name: ${nameInput.value.trim()}\n` +
          `Email: ${emailInput.value.trim()}\n` +
          `Message: ${messageInput.value.trim()}`;
        contactForm.reset();
      }
    });
  }

  // 2. Theme Switcher Feature
  const themeBtn = document.getElementById("theme-toggle");
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const currentTheme = document.body.getAttribute("data-theme");
      if (currentTheme === "dark") {
        document.body.removeAttribute("data-theme");
        themeBtn.textContent = "Switch to Dark Theme";
      } else {
        document.body.setAttribute("data-theme", "dark");
        themeBtn.textContent = "Switch to Light Theme";
      }
    });
  }

  // 3. Study Hours Calculator Feature
  const calcForm = document.getElementById("study-calc-form");
  const calcResult = document.getElementById("calc-result");

  if (calcForm) {
    calcForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const hours = parseFloat(document.getElementById("hours-per-day").value);
      const days = parseInt(document.getElementById("days-per-week").value, 10);

      if (isNaN(hours) || hours <= 0 || hours > 24 || isNaN(days) || days < 1 || days > 7) {
        calcResult.textContent = "Please enter valid values (Hours: 1–24, Days: 1–7).";
        calcResult.style.color = "red";
        return;
      }

      calcResult.style.color = "green";
      calcResult.textContent = `Total Planned Study Time: ${hours * days} hours/week.`;
    });
  }

  // 4. Gallery Viewer Feature
  const galleryData = [
    { src: "images/photo1.jpg", caption: "Photo 1: Working on web development tasks." },
    { src: "images/photo2.jpg", caption: "Photo 2: Campus library coding session." },
    { src: "images/photo3.jpg", caption: "Photo 3: Group study session." }
  ];
  let currentIndex = 0;

  const galleryImg = document.getElementById("gallery-img");
  const galleryCaption = document.getElementById("gallery-caption");
  const prevBtn = document.getElementById("prev-photo-btn");
  const nextBtn = document.getElementById("next-photo-btn");

  if (galleryImg && prevBtn && nextBtn) {
    function updateGallery(index) {
      galleryImg.src = galleryData[index].src;
      galleryCaption.textContent = galleryData[index].caption;
    }

    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex === 0) ? galleryData.length - 1 : currentIndex - 1;
      updateGallery(currentIndex);
    });

    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex === galleryData.length - 1) ? 0 : currentIndex + 1;
      updateGallery(currentIndex);
    });
  }

  // 5. Expandable Content Feature
  const faqBtn = document.getElementById("faq-toggle-btn");
  const faqDetails = document.getElementById("faq-details");

  if (faqBtn && faqDetails) {
    faqBtn.addEventListener("click", () => {
      faqDetails.classList.toggle("hidden");
      faqBtn.textContent = faqDetails.classList.contains("hidden") ? "Show FAQ Details" : "Hide FAQ Details";
    });
  }
});