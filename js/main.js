document.addEventListener("DOMContentLoaded", () => {
  // زر القائمة على الهاتف
  const toggleBtn = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  }

  // زر CTA في الصفحة الرئيسية
  const cta = document.querySelector(".cta");
  if (cta) {
    cta.addEventListener("click", () => {
      alert("🎉 مرحبًا بك في Tarwij! أنشئ صفحتك الذكية الآن.");
    });
  }

  // منع إرسال النماذج بدون backend
  const forms = document.querySelectorAll("form");
  forms.forEach(form => {
    form.addEventListener("submit", e => {
      e.preventDefault();
      alert("✅ تم حفظ البيانات (واجهة تجريبية)");
    });
  });
});
