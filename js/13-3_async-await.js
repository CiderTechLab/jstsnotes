export {};
/**
 * MEMO: async/await
 */
/**
 * async
 * - 関数の先頭に付けることで非同期関数(AsyncFunction)を定義できる。
 * - 非同期関数は戻り値が必ずPromiseインスタンスになる。
 */
function asyncFunc() {
	console.log('# async');
	async function asyncComment() {
		return 'Hello! Asynchronous function!';
	}
	asyncComment().then((returnVal) => {
		console.log(returnVal);
	});
}
asyncFunc();

/**
 * await
 * - Promiseインスタンスの前に記述することで、Promiseのステータスがsettled
 *   （fulfilledまたはrejected）になるまで、後続のコード実行を待機する。
 */
function awaitFunc() {
	const prom = new Promise((resolve) => {
		setTimeout(
			() => resolve('# await\nresolveの引数が取り出されてます!'),
			1000
		);
	});

	(async () => {
		const val = await prom;
		console.log(val);
	})();
}
awaitFunc();

/**
 * awaitでPromiseがRejectの場合
 */
async function awaitRejectFunc() {
	console.log('- awaitでPromiseがRejectの場合');
	(async () => {
		try {
			await Promise.reject('Promise失敗!');
		} catch (err) {
			console.log(err);
		}
	})();
}
awaitRejectFunc();

/**
 * async/awaitでPromiseチェーンの書き換え
 */
function rewitePromiseChain() {
	console.log('# async/awaitでPromiseチェーンの書き換え');
	function makePromise(cnt) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				cnt++;
				console.log(`${cnt}:${new Date().toTimeString()}`);
				if (cnt === 5) {
					reject(cnt);
				} else {
					resolve(cnt);
				}
			}, 1000);
		});
	}

	makePromise(0)
		.then((cnt) => {
			return makePromise(cnt);
		})
		.then((cnt) => {
			return makePromise(cnt);
		})
		.then((cnt) => {
			return makePromise(cnt);
		})
		.then((cnt) => {
			return makePromise(cnt);
		})
		.then((cnt) => {
			return makePromise(cnt);
		})
		.catch((errCnt) => {
			console.error(`エラー！カウント数：${errCnt}`);
		})
		.finally(() => {
			console.log('処理終了');
		});

	async function execute() {
		try {
			let cnt = await makePromise(0);
			cnt = await makePromise(cnt);
			cnt = await makePromise(cnt);
			cnt = await makePromise(cnt);
		} catch (errCnt) {
			console.log(`エラー!${errCnt}`);
		} finally {
			console.log('処理終了');
		}
	}
	(async () => await execute())();
}
rewitePromiseChain();
