!function(){var e={input:document.querySelector("input"),textarea:document.querySelector("textarea"),button:document.querySelector("button"),form:document.querySelector(".feedback-form")};console.log(e),e.form.addEventListener("submit",(function(t){t.preventDefault();var o={email:"".concat(e.input.value),message:"".concat(e.textarea.value)};console.log(o),function(e){JSON.stringify(e);localStorage.setItem("feedback-form-state",JSON.stringify(e))}(o),e.input.value="",e.textarea.value=""}))}();
//# sourceMappingURL=03-feedback.4be9470e.js.map