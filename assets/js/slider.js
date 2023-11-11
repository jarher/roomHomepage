export class Slider {
  constructor(index) {
    this.index = index;
  }
  sliderImg(elements, direction) {
    if (direction === "moveLeft") {
      elements.forEach((element) => {
        if (Number.parseInt(element.dataset.index) === this.index) {
          element.style.transform = "translateX(0%)";
          element.style.zIndex = 2;
          return;
        }
        setTimeout(() => {
          element.style.transform = "translateX(100%)";
          element.style.zIndex = 1;
        }, 300);
      });
    }
  }
  sliderText(elements) {
    elements.forEach((element) => {
      Number.parseInt(element.dataset.index) === this.index
        ? element.classList.add("show")
        : element.classList.remove("show");
    });
  }
}
