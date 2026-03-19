export {};
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readFile } from 'fs/promises';
/**
 * MEMO: fetch関数
 * - 非同期処理になる。
 * - Node.js環境下のためjsonファイルのパス指定が通常と異なるらしく、
 *   (URL形式のみサポート、相対パスは使えない。)
 *   GitHub Copilot(Claude Haiku 4.5)を利用して修正。
 */
// 以下定数で現在のディレクトリを動的に取得
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function fetchFunc() {
	console.log('# fetch関数');

	// ファイルパスを相対パスから絶対パスにパース
	const filePath = join(__dirname, '13-4_fetch.json');

	// try~catchでエラーハンドリング（ファイル操作のため）
	(async () => {
		try {
			const fileContent = await readFile(filePath, 'utf-8');
			const data = JSON.parse(fileContent);
			for (const { key, value } of data) {
				console.log(`${key}:${value}`);
			}
		} catch (err) {
			console.error('Error:', err);
		}
	})();
}
fetchFunc();
