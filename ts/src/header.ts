/**
 * @author S.K
 */
export {};

function generateHeader(): void {
	const htmlCode = `
	<h1>
		<span class="header__title--js">JS</span>&nbsp;&amp;&nbsp;
    <span class="header__title--ts">TS</span>
    <br class="title-linebreak" />&nbsp;Learn&nbsp;Notes&#x1f4da;
	</h1>`;

	let headerElement = document.querySelector('header');
	if (headerElement) {
		headerElement.innerHTML = htmlCode;
	}
}

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', generateHeader);
} else {
	generateHeader();
}
