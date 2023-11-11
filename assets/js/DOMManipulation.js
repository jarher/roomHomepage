import { DOMReader } from "./DOMReader.js";

export class DOMManipulation {
  constructor(element) {
    this.element = element;
  }
  addClass = (className) =>
    DOMReader.get(this.element).classList.add(className);

  removeClass = (className) =>
    DOMReader.get(this.element).classList.remove(className);

  append = (child) => DOMReader.get(this.element).append(child);

  cleanContent = () => (DOMReader.get(this.element).innerHTML = "");

}
