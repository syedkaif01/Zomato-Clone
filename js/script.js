// Fade in search box on load
window.addEventListener("load", () => {
  const searchBox = document.querySelector(".search-box");
  searchBox.style.opacity = "0";
  searchBox.style.transform = "translateY(30px)";
  searchBox.style.transition = "all 0.8s ease-in-out";

  setTimeout(() => {
    searchBox.style.opacity = "1";
    searchBox.style.transform = "translateY(0)";
  }, 200);
});
