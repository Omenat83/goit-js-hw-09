const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),o=document.querySelector("body");let l=null,n=!1;e.addEventListener("click",(()=>{n||(n=!0,l=setInterval((()=>{o.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`,console.log("new color")}),1e3))})),t.addEventListener("click",(()=>{n=!1,clearInterval(l),console.log("stop changes")}));
//# sourceMappingURL=01-color-switcher.80f550c4.js.map
