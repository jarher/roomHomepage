import { DOMManipulation } from "./DOMManipulation.js";
import { DOMReader } from "./DOMReader.js";
import { data } from "./data.js";
import { Slider } from "./slider.js";
import { Templates } from "./templates.js";

export class listenEvent {
  static run() {
    let index = 0;
    const modalNav = new DOMManipulation(".modalNav");
    const navContainer = new DOMManipulation(".navContainer");
    const sliderContainerImg = new DOMManipulation(".sliderContainerImg");
    const sliderContainerText = new DOMManipulation(".sliderContainerText");

    function renderImg() {
      if (window.matchMedia("(max-width: 1024px)").matches) {
        data.forEach((object, index) => {
          sliderContainerImg.append(
            Templates.imgTemplate(object.mobileImg, object.imgAlt, index)
          );
        });
      } else {
        data.forEach((object, index) => {
          sliderContainerImg.append(
            Templates.imgTemplate(object.desktopImg, object.imgAlt, index)
          );
        });
      }
      sliderContainerImg.append(Templates.sliderControl());
      Array.from(DOMReader.getMany(".sliderImg")).forEach((element, index) => {
        index === 0 ? (element.style.opacity = 1) : (element.style.opacity = 0);
      });
    }

    document.addEventListener("click", (e) => {
      if (e.target.parentElement.className === "menuIconBtn") {
        modalNav.removeClass("hide");
        modalNav.addClass("show");
        setTimeout(() => {
          navContainer.addClass("moveToRight");
        }, 100);
      }

      if (e.target.parentElement.className === "navCloseBtn") {
        navContainer.removeClass("moveToRight");
        modalNav.removeClass("show");
        setTimeout(() => {
          modalNav.addClass("hide");
        }, 300);
      }

      if (e.target.parentElement.className === "arrowLeft") {
        index = index <= 0 ? 2 : --index;
        const slider = new Slider(index);
        slider.sliderImg(
          Array.from(DOMReader.getMany(".sliderImg")),
          "moveLeft"
        );
        slider.sliderText(Array.from(DOMReader.getMany(".sliderContent")));
      }

      if (e.target.parentElement.className === "arrowRight") {
        index = index >= 2 ? 0 : ++index;
        const slider = new Slider(index);
        slider.sliderImg(
          Array.from(DOMReader.getMany(".sliderImg")),
          "moveRight"
        );
        slider.sliderText(Array.from(DOMReader.getMany(".sliderContent")));
      }
    });

    document.addEventListener("DOMContentLoaded", (e) => {
      sliderContainerImg.cleanContent();
      renderImg();

      data.forEach((object, index) => {
        index === 0
          ? sliderContainerText.append(
              Templates.descriptionTemplate(object, index, "active")
            )
          : sliderContainerText.append(
              Templates.descriptionTemplate(object, index, null)
            );
      });
    });

    window.addEventListener("resize", (e) => {
      sliderContainerImg.cleanContent();
      renderImg();
    });
  }
}
