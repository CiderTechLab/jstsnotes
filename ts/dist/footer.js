function generateFooter() {
    const htmlCode = `			
    <p>&copy;JS&nbsp;&amp;&nbsp;TS&nbsp;Learn&nbsp;Notes<span>
    Powered by&nbsp;<a href="https://cidertechlab.github.io/">CiderTechLab</a></span></p>`;
    let footerElement = document.querySelector('footer');
    if (footerElement) {
        footerElement.innerHTML = htmlCode;
    }
}
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', generateFooter);
}
else {
    generateFooter();
}
export {};
