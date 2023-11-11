export class Templates {
  static imgTemplate(imgSrc, imgAlt, index) {
    const img = document.createElement("img");
    img.className = "sliderImg";
    img.src = imgSrc;
    img.alt = imgAlt;
    img.dataset.index = index
    return img;
  }
  static descriptionTemplate({ title, description }, index, type) {
    const sliderContent = document.createElement("div");
    type === "active"
      ? (sliderContent.className = "sliderContent show")
      : (sliderContent.className = "sliderContent");

    sliderContent.dataset.index = index;
    const heading = document.createElement("h2");
    heading.textContent = title;
    const paragraph = document.createElement("p");
    paragraph.textContent = description;
    const anchor = document.createElement("a");
    anchor.className = "redirect";
    anchor.href = "./index.html";
    const span = document.createElement("span");
    span.textContent = "SHOP NOW";
    const arrowImg = document.createElement("img");
    arrowImg.src = "./images/icon-arrow.svg";
    arrowImg.alt = "redirect to shop";

    anchor.append(span);
    anchor.append(arrowImg);

    sliderContent.append(heading);
    sliderContent.append(paragraph);
    sliderContent.append(anchor);

    return sliderContent;
  }
  static sliderControl() {
    const sliderControl = document.createElement("div");
    sliderControl.className = "sliderControl";

    const arrowContainerLeft = document.createElement("div");
    arrowContainerLeft.className = "arrowContainer arrowLeft";
    const imgLeft = document.createElement("img");
    imgLeft.src = "./images/icon-angle-left.svg";
    imgLeft.alt = "arrow left";
    arrowContainerLeft.append(imgLeft);

    const arrowContainerRight = document.createElement("div");
    arrowContainerRight.className = "arrowContainer arrowLeft";
    const imgRight = document.createElement("img");
    imgRight.src = "./images/icon-angle-right.svg";
    imgRight.alt = "arrow left";
    arrowContainerRight.append(imgRight);

    sliderControl.append(arrowContainerLeft);
    sliderControl.append(arrowContainerRight);

    return sliderControl;
  }
}
