!function(){var t={start:document.querySelector("button[data-start]"),stop:document.querySelector("button[data-stop]")};t.start.addEventListener("click",(function(){a=setInterval((function(){window.document.body.style.background="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),t.start.disabled=!0,t.stop.disabled=!1})),t.stop.addEventListener("click",(function(){clearInterval(a),t.stop.disabled=!0,t.start.disabled=!1}));var a=null}();
//# sourceMappingURL=01-color-switcher.8645ae37.js.map