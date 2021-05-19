const namespace="rvt-icon",prefix="rvt-icon-",iconVar="--rvt-icon",icons=[...document.querySelectorAll('symbol[id^="rvt-icon-"]')].map((({id:e})=>e.replace(prefix,""))),cssVars=icons.map(((e,t)=>`  --${e}: ${t};`)).join("\n"),style=document.createElement("style");style.innerHTML=`rvt-icon {\n${cssVars}\n}`,document.head.appendChild(style);class RivetIconElement extends HTMLElement{static get observedAttributes(){return["name"]}connectedCallback(){this.innerHTML='<svg aria-hidden="true"><use></use></svg><span data-sensor></span>',this._symbol=this.querySelector("use"),this._sensor=this.querySelector("[data-sensor]"),this._sensor.addEventListener("transitionstart",this.update.bind(this)),this.update()}disconnectedCallback(){this.innerHTML=""}attributeChangedCallback(){this.update()}update(){const e=getComputedStyle(this._sensor).getPropertyValue(iconVar),t=parseInt(e.trim());this._name=icons[t],this.render()}render(){const e=this._name||this.getAttribute("name");this._symbol&&e&&this._symbol.setAttribute("href",`#rvt-icon-${e}`)}}window.customElements.define(namespace,RivetIconElement);