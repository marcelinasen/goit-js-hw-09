const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");let d=null;function n(){document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}t.addEventListener("click",(function(){this.disabled=!0,e.disabled=!1,n(),d=setInterval(n,1e3)})),e.addEventListener("click",(function(){this.disabled=!0,t.disabled=!1,clearInterval(d)}));
//# sourceMappingURL=01-color-switcher.e5c2ec1c.js.map