export class Slider {
  constructor(index) {
    this.index = index;
  }
  sliderImg(elements, direction) {
    if (direction === "moveLeft") {
      elements.forEach((element) => {
        element.style.zIndex = 1;
        element.style.opacity = 0;
        element.style.transform = "translateX(100%)";
      });

      elements[this.index].style.transform = "translateX(0%)";
      elements[this.index].style.zIndex = 2;
      elements[this.index].style.opacity = 1;
    }
    if (direction === "moveRight") {
      elements.forEach((element) => {
        element.style.transform = "translateX(-100%)";
        element.style.zIndex = 1;
        element.style.opacity = 0;
      });
      elements[this.index].style.transform = "translateX(0%)";
      elements[this.index].style.zIndex = 2;
      elements[this.index].style.opacity = 1;
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
