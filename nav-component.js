let template = document.currentScript.ownerDocument.querySelector('template');

let clone = document.importNode(template.content, true);

let proto = Object.create(HTMLElement.prototype);

proto.createdCallback = function () {
    let root = this.createShadowRoot();
    root.appendChild(clone);
}

document.registerElement('app-nav', {
    prototype: proto
});