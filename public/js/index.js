window.addEventListener("scroll", (e) => {
  e.preventDefault();
  parralax_Up(".name", 0.2);
  parralax_Up(".abbt", 0.2);
  parralax_Up(".abs-text", 0.2);
});
window.onload = () => {
  hideLoading();
  sel(".name").forEach((elem) => {
    elem.classList.add("view");
  });
};

const hideLoading = () => {
  sel("body").forEach((elem) => (elem.style.overflowY = "scroll"));
  sel("#loading").forEach((elem) => (elem.style.height = "0"));
  sel("#loading__").forEach((elem) => (elem.style.height = "0"));
};

const sel = (query) => {
  let elem = document.querySelectorAll(query);
  return elem;
};
parralax_Up = (elem, speed) => {
  const item = sel(elem);
  item.forEach(
    (elem) =>
      (elem.style.transform = `translateY(-${window.scrollY * speed}px)`)
  );
};
