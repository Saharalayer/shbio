document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  toggleBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  document.querySelector(".cta").addEventListener("click", () => {
    alert("🎉 مرحبًا بك في Tarwij! أنشئ صفحتك الذكية الآن.");
  });
});
