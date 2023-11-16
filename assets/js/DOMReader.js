export class DOMReader{
    static get = (attr) => document.querySelector(attr); 
    static getMany = (attr) => Array.from(document.querySelectorAll(attr));
}