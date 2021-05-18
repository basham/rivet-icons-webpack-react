const namespace="rvt-icon",prefix="rvt-icon-",iconVar="--rvt-icon",icons=[...document.querySelectorAll('symbol[id^="rvt-icon-"]')].map((({id:e})=>e.replace(prefix,""))),cssVars=icons.map(((e,t)=>`  --${e}: ${t};`)).join("\n"),style=document.createElement("style");style.innerHTML=`rvt-icon {\n${cssVars}\n}`,document.head.appendChild(style);class RivetIconElement extends HTMLElement{static get observedAttributes(){return["name"]}connectedCallback(){this.innerHTML='\n      <svg aria-hidden="true"><use></use></svg>\n      <span></span>\n    ',this._symbol=this.querySelector("use"),this._sensor=this.querySelector("span"),this._sensor.style.cssText="\n      position: absolute;\n      transition: z-index 0.001ms step-start;\n      visibility: hidden;\n      z-index: var(--rvt-icon);\n    ",this._sensor.addEventListener("transitionstart",this.update.bind(this)),this.update()}disconnectedCallback(){this.innerHTML=""}attributeChangedCallback(){this.render()}update(){const e=getComputedStyle(this._sensor).getPropertyValue(iconVar),t=parseInt(e.trim());this._name=icons[t],this.render()}render(){const e=this._name||this.getAttribute("name");this._symbol&&e&&this._symbol.setAttribute("href",`#rvt-icon-${e}`)}}window.customElements.define(namespace,RivetIconElement);