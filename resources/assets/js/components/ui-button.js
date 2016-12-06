let UIButton = Object.create(HTMLButtonElement.prototype);

UIButton.initializeHoverAnimation = function(html) {
  let currentAnimateElement = this.querySelector('.animate');
  if(currentAnimateElement) {
    currentAnimateElement.innerHTML = html;
  } else {
    let elm = document.createElement('div');
    elm.innerHTML = html;
    elm.className = 'animate';
    this.appendChild(elm);
  }
};

UIButton.addLabeledIcon = function(iconClass) {
  let currentIcon = this.querySelector('.fa');
  if(currentIcon) {
    currentIcon.className = iconClass;
  } else {
    let elm = document.createElement('i');
    elm.className = iconClass;
    this.appendChild(elm);
  }
}

UIButton.wrapContentInContainer = function() {
  if(this.querySelector('.content')) {
    return;
  }
  let html = this.innerHTML;
  this.innerHTML = `<div class="content">${html}</div>`;
};

UIButton.initializeIcon = function(iconClass) {
  if(this.childNodes.length === 0) {
    this.classList.add('icon');
  } else {
    this.classList.add('icon-left');
  }
  this.addLabeledIcon(this.getAttribute('icon'));
};

UIButton.createdCallback = function() {
  if(this.getAttribute('icon')) {
    this.initializeIcon(this.getAttribute('icon'));
  }

  if(this.getAttribute('animate')) {
    this.wrapContentInContainer();
    this.initializeHoverAnimation(this.getAttribute('animate'));
  }
};

UIButton.attributeChangedCallback = function(attrName, oldVal, newVal) {
  if(attrName === 'animate') {
    this.wrapContentInContainer();
    this.initializeHoverAnimation(newVal);
  }

  if(attrName === 'icon') {
    this.addLabeledIcon(newVal);
  }
};

module.exports = document.registerElement('ui-button', {
  prototype: UIButton
});