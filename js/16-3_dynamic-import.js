let promise = import('./16-3_dynamic-import_module.js');
promise.then((moduleObj) => {
	moduleObj.exportedFunc();
});

(async () => {
	let { exportedFunc } = await import('./16-3_dynamic-import_module.js');
	exportedFunc();
})();
