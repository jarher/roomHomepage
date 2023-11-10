document.querySelector(".menuIconBtn").addEventListener("click", (e) => {
  document.querySelector(".modalNav").classList.remove("hide");
  document.querySelector(".modalNav").classList.add("showModal");
  setTimeout(() => {
    document.querySelector(".navContainer").classList.add("moveToRight");
  }, 100);
});

document.querySelector(".navCloseBtn").addEventListener("click", (e) => {
  document.querySelector(".navContainer").classList.remove("moveToRight");
  document.querySelector(".modalNav").classList.remove("showModal");
  setTimeout(() => {
    document.querySelector(".modalNav").classList.add("hide");
  }, 300);
});
