!function(){var t=document.querySelector(".js-button-start"),e=document.querySelector(".js-button-stop"),n=null;e.disabled=!0,t.addEventListener("click",(function(){t.disabled=!0,e.disabled=!1,n=setInterval((function(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0));document.body.style.backgroundColor=t}),1e3)})),e.addEventListener("click",(function(){clearInterval(n),t.disabled=!1,e.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.eaab58f1.js.map
