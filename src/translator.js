
import { getUI } from "./language.js";
const translateableElements = document.querySelectorAll('[class*="text."]')
translateableElements.forEach((element) => {
	const translationClass = Array.from(element.classList).find((className) =>
		className.startsWith("text.")
	);

	if (!translationClass) {
		return;
	}

	const key = translationClass.replace(/^text\./, "");
	element.textContent = getUI(key);
});
