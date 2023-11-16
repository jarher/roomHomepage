function createHTMLELements(data) {
  function createElement(object) {
    const element = document.createElement(object.elementName);

    if (object.hasOwnProperty("attributes")) {
      Object.keys(object["attributes"]).forEach((name) => {
        element.setAttribute(name, object.attributes[name]);
      });
    }

    if (object.hasOwnProperty("textContent")) {
      element.textContent = object.textContent;
    }
    return element;
  }
  return data.map((element) => {
    let parent = null;
    let children = null;

    if (element.hasOwnProperty("parent")) {
      parent = createElement(element.parent);
    }
    if (element.parent.hasOwnProperty("children")) {
      children = element.parent.children.map((child) => {
        const newChild = createElement(child);
        if (child.hasOwnProperty("children")) {
          const newSubChild = child.children.map((nwSbChild) =>
            createElement(nwSbChild)
          );
          newSubChild.forEach((sbElement) => newChild.append(sbElement));
        }
        return newChild;
      });
      children.map((chElement) => parent.append(chElement));
    }

    return parent;
  })[0];
}

export class Templates {
  static imgTemplate(imgSrc, imgAlt, index) {
    const elements = [
      {
        parent: {
          elementName: "img",
          attributes: {
            class: "sliderImg",
            src: imgSrc,
            alt: imgAlt,
            "data-index": index,
          },
        },
      },
    ];
    return createHTMLELements(elements);
  }
  static descriptionTemplate({ title, description }, index, type) {
    const className =
      type === "active" ? "sliderContent show" : "sliderContent";

    const elements = [
      {
        parent: {
          elementName: "div",
          attributes: {
            class: className,
            "data-index": index,
          },
          children: [
            {
              elementName: "h2",
              textContent: title,
            },
            {
              elementName: "p",
              textContent: description,
            },
            {
              elementName: "a",
              attributes: {
                class: "redirect",
                href: "./index.html",
              },
              children: [
                {
                  elementName: "span",
                  textContent: "SHOP NOW",
                },
                {
                  elementName: "img",
                  attributes: {
                    src: "./images/icon-arrow.svg",
                    alt: "redirect to shop",
                  },
                },
              ],
            },
          ],
        },
      },
    ];

    return createHTMLELements(elements);
  }

  static sliderControl() {
    const elements = [
      {
        parent: {
          elementName: "div",
          attributes: {
            class: "sliderControl",
          },
          children: [
            {
              elementName: "div",
              attributes: {
                class: "arrowLeft",
              },
              children: [
                {
                  elementName: "img",
                  attributes: {
                    src: "./images/icon-angle-left.svg",
                    alt: "arrow left",
                  },
                },
              ],
            },
            {
              elementName: "div",
              attributes: {
                class: "arrowRight",
              },

              children: [
                {
                  elementName: "img",
                  attributes: {
                    src: "./images/icon-angle-right.svg",
                    alt: "arrow right",
                  },
                },
              ],
            },
          ],
        },
      },
    ];

    return createHTMLELements(elements);
  }
}
