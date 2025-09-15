document.addEventListener("DOMContentLoaded", () => {
  // ✅ القائمة المنسدلة في الهاتف
  const toggleBtn = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  }

  // ✅ زر CTA في الصفحة الرئيسية
  const cta = document.querySelector(".cta");
  if (cta) {
    cta.addEventListener("click", () => {
      alert("🎉 مرحبًا بك في Tarwij! أنشئ صفحتك الذكية الآن.");
    });
  }

  // ✅ حفظ اللغة المختارة
  const langSelect = document.getElementById("languageSelect");
  const savedLang = localStorage.getItem("tarwijLang");
  if (savedLang && langSelect) {
    langSelect.value = savedLang;
    applyLanguage(savedLang);
  }

  langSelect?.addEventListener("change", () => {
    const selectedLang = langSelect.value;
    localStorage.setItem("tarwijLang", selectedLang);
    applyLanguage(selectedLang);
  });

  function applyLanguage(lang) {
    alert(`🌐 تم اختيار اللغة: ${lang === "ar" ? "العربية" : lang === "en" ? "English" : "Français"}`);
  }

  // ✅ نماذج الإدخال التجريبية
  const forms = document.querySelectorAll("form");
  forms.forEach(form => {
    form.addEventListener("submit", e => {
      e.preventDefault();
      alert("✅ تم حفظ البيانات (واجهة تجريبية)");
    });
  });

  // ✅ تفاعل مع بطاقات لوحة التحكم
  const dashboardCards = document.querySelectorAll(".dashboard-card");
  dashboardCards.forEach(card => {
    card.addEventListener("click", () => {
      console.log("📁 فتح القسم:", card.querySelector("h3")?.textContent);
    });
  });

  // ✅ تفاعل مع الإضافات
  const addonButtons = document.querySelectorAll(".addon-card button");
  addonButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      alert("✅ تم تفعيل الإضافة (واجهة تجريبية)");
    });
  });

  // ✅ تفاعل مع المتجر
  const storeButtons = document.querySelectorAll(".product-card button");
  storeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      alert("🛒 تم تنفيذ العملية (واجهة تجريبية)");
    });
  });

  // ✅ تفاعل مع الروابط
  const deleteButtons = document.querySelectorAll(".link-item .delete");
  deleteButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      alert("🗑️ تم حذف الرابط (واجهة تجريبية)");
    });
  });

  const editButtons = document.querySelectorAll(".link-item .edit");
  editButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      alert("✏️ تعديل الرابط غير مفعل بعد");
    });
  });

  // ✅ تفاعل مع بطاقات التحليلات
  const analyticsCards = document.querySelectorAll(".analytics-card");
  analyticsCards.forEach(card => {
    card.addEventListener("click", () => {
      alert("📊 هذه بيانات تجريبية. سيتم ربطها لاحقًا بالتحليلات الحقيقية.");
    });
  });
});
