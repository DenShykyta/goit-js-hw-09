const t={start:document.querySelector("button[data-start]"),stop:document.querySelector("button[data-stop]")};t.start.addEventListener("click",(function(){e=setInterval((()=>{window.document.body.style.background=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),t.start.disabled=!0,t.stop.disabled=!1})),t.stop.addEventListener("click",(function(){clearInterval(e),t.stop.disabled=!0,t.start.disabled=!1}));let e=null;
//# sourceMappingURL=01-color-switcher.4259749b.js.map
