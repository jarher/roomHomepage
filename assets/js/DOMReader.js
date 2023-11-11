export class DOMReader{
    static get = (attr) => document.querySelector(attr); 
    static getMany = (attr) => document.querySelectorAll(attr);
}