import { resolve } from 'node:dns';

export {};
/**
 * MEMO: Promise
 * - ES6で追加
 * - 非同期処理の結果を扱う仕組み（ → 非同期処理ではない）
 * - 意味合い的には「未来に値を渡す約束」
 * - ネストが深くなるこ
 * とを避けられるためコールバック地獄を回避できる。
 */
console.log('# Promise');
function promiseExample() {
	let instance = new Promise((resolve, reject) => {
		setTimeout(() => {
			const randNum = Math.floor(Math.random() * 11);

			if (randNum < 6) {
				reject(randNum);
			} else {
				resolve(randNum);
			}
		}, 3000);
	});

	/**
	 * 以下の.thenや.catchはメソッドと繋げて記述し、チェーンメソッドと呼ばれる。
	 */
	instance = instance.then((val) => {
		console.log(`6以上なので${val}`);
	});

	instance = instance.catch((errVal) => {
		console.log(`6未満なので${errVal}でエラー`);
	});
}
promiseExample();

/**
 * Promiseチェーン
 */
console.log('# Promiseチェーン');
function promiseChain(cnt) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			cnt++;
			console.log(`${new Date().toTimeString()}:${cnt}回目`);
			if (cnt === 5) {
				reject(cnt);
			} else {
				resolve(cnt);
			}
		}, 3000);
	});
}

promiseChain(0)
	.then((cnt) => {
		return promiseChain(cnt);
	})
	.then((cnt) => {
		return promiseChain(cnt);
	})
	.then((cnt) => {
		return promiseChain(cnt);
	})
	.then((cnt) => {
		return promiseChain(cnt);
	})
	.then((cnt) => {
		return promiseChain(cnt);
	})
	.then((cnt) => {
		return promiseChain(cnt);
	})
	.catch((errCnt) => {
		console.log(`エラー!:${errCnt}回目`);
	})
	.finally(() => {
		console.log('処理終了');
	});

/**
 * Promiseの状態管理
 * - pending(保留中)
 *   - resolve(解決する)、rejectが呼び出される前の状態
 * - fulfilled(達成、内面が充足された) ※successfulは外面や客観的な成功
 *   - resolveが呼び出された状態
 * - rejected(拒否された)
 *   - rejectが呼び出された状態
 */
console.log('# Promiseの状態管理');
function promiseStatus() {
	let promiseResolve, promiseReject;
	const promiseInstance = new Promise((resolve, reject) => {
		promiseResolve = resolve;
		promiseReject = reject;
	});
	console.log(promiseInstance);
	promiseResolve('引数');
	console.log(promiseInstance);
}
promiseStatus();

/**
 * Promiseの並列処理
 */
console.log('# Promiseの並列処理');
/**
 * Promise.all
 * - 全ての非同期処理を並列に実行し、全ての完了を待ってから次の処理を実行したい場合
 * に使用
 */
console.log('- Promise.all');
function promAll(ms) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log(`${ms}秒`);
			resolve(ms);
		}, ms);
	});
}
const wait400 = promAll(400);
const wait500 = promAll(500);
const wait600 = promAll(600);

Promise.all([wait500, wait600, wait400]).then(
	([resolved500, resolved600, resolved400]) => {
		console.log('完了');
		console.log(resolved500, resolved600, resolved400);
	}
);

/**
 * Promise.race
 * - 複数のPromiseインスタンスのいずれかがsettled（fulfilledまたはrejected）の
 * 場合、Promise.raceに続くthenメソッドまたはcatchメソッドを実行する。
 */
console.log('- Promise.race');
function promRace() {
	const promResolve = new Promise((resolve) => {
		setTimeout(() => {
			resolve('Call of resolve');
			console.log('promResolve is end');
		}, 500);
	});

	const promReject = new Promise((_, reject) => {
		setTimeout(() => {
			reject('Call of reject');
			console.log('End of promReject');
		}, 1000);
	});

	Promise.race([promResolve, promReject])
		.then((val) => {
			console.log(val);
		})
		.catch((val) => {
			console.log(val);
		});
}
promRace();

/**
 * Promise.any
 * - 複数のPromiseインスタンスのいずれかがfulfuilledになったタイミングでthenメソ
 * 　ッドに処理を移す。
 * - 全てのPromiseインスタンスがrejectedになった場合、catchメソッドを実行する。
 */
console.log('- Promise.any');
function promAny() {
	const promResolve = new Promise((resolve) => {
		setTimeout(() => {
			resolve('call of resolve');
			console.log('End of promResolve');
		}, 200);
	});

	const promReject = new Promise((_, reject) => {
		setTimeout(() => {
			reject('Call of reject');
			console.log('End of promReject');
		}, 100);
	});

	Promise.any([promResolve, promReject])
		.then((val) => {
			console.log(val);
		})
		.catch((err) => {
			console.log(err);
		});
}
promAny();

/**
 * Promise.allSetted
 * - 全てのPromiseインスタンスの状態がsettled(fulfilledまたはrejected)の場合、
 * 	 thenメソッドに処理を移行する。
 */
console.log('- Promise.allSetted');
function promAllSetted() {
	const promResolve = new Promise((resolve) => {
		setTimeout(() => {
			resolve('Call of resolve');
			console.log('End of promResolve');
		}, 200);
	});

	const promReject = new Promise((_, reject) => {
		setTimeout(() => {
			reject('Call of reject');
			console.log('End of promReject');
		}, 100);
	});

	Promise.allSettled([promResolve, promReject]).then((array) => {
		for (const { status, val, reason } of array) {
			console.log(`${status}:${val}:${reason}`);
		}
	});
}
promAllSetted();

/**
 * Promise.resolve(引数)
 * - fulfilled状態のPromiseインスタンスを返す。
 * - 特定の処理を非同期処理としたい場合に使用する。
 */
console.log('- Promise.resolve(引数)');
function promResolve() {
	let val = 0;
	Promise.resolve().then(() => {
		console.log(val);
	});

	val = 1;
	console.log('End of Global Context(Promise.resolve)');
}
promResolve();

/**
 * Promise.reject(引数)
 * - rejected状態のPromiseインスタンスを返す。
 */
console.log('- Promise.reject(引数)');
function promReject() {
	Promise.reject('Reason').catch((err) => {
		console.error(err);
	});
	console.log('End of Global Context(Promise.reject)');
}
promReject();
