/**
 * @author S.K
 */
export {};

function generateAsideLeft(): void {
	const htmlCode = `
	<h2 class="text-xl font-bold mb-4">サイト目次</h2>
	<ul class="ml-0">
    <li><a href="/">Home</a></li>
  </ul>
	<h3 class="text-lg mt-4 mb-2">JavaScript/TypeScript共通</h3>
  <ul class="ml-0">
		<li><a href="/about.html">概要</a></li>
	</ul>
	<h3 class="text-lg mt-4 mb-2">TypeScript</h3>
	<ul class="ml-0">
		<li><a href="/errorcode.html">TypeScriptエラーコード一覧</a></li>
	</ul>`;

	let asideLeftElement = document.querySelector('.aside-left');
	if (asideLeftElement) {
		asideLeftElement.innerHTML = htmlCode;
	}
}

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', generateAsideLeft);
} else {
	generateAsideLeft();
}
