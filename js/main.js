document.addEventListener("DOMContentLoaded", () => {
  const cta = document.querySelector(".cta");
  if (cta) {
    cta.addEventListener("click", () => {
      alert("مرحبًا بك في Tarwij! 👋 صفحتك الذكية تبدأ من هنا.");
    });
  }
});
