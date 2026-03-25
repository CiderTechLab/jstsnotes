# 16-1\_モジュールのエクスポート

## 書き方

```module.html
<script type="module">
~
</script>
```

```module.html（head内）
<script type="module" src="[ファイル名].js">
```

## 名前付きエクスポート

```module.js
/**
 * 変数のエクスポート
 * - 変数宣言の前にexportをつける
 */
export let name = "モジュール"
export const name = "モジュール";
```

```
/**
 * 一括エクスポート
 * - 一括で変数宣言時と同じ
 */
export let val1 = "[値1]", val2 = "[値2]";
```

```
/**
 * 関数、ジェネレータ関数、クラスのエクスポート
 */
export function exportedFunction() {}
export function* exportedGenerator() {}
export class ExportedClass {}
```

## デフォルトエクスポート

- デフォルトエクスポートで定義した機能は、モジュールをインポートする際に任意の名前で呼び出すことができます。

```module.js
/**
 * 無名関数のデフォルトエクスポート
 */
export default function(){}
```

```module.js
/**
 * 名前付き関数のデフォルトエクスポート
 * - 名前は任意で、モジュールをインポートする際に使用されません。
 */
export default function exportedFunction() {}
```

```module.js
/**
 * アロー関数のデフォルトエクスポート
 */
export default () => {};
```

```module.js
/**
 * クラスのデフォルトエクスポート
 */
 export default class {}
```

```module.js
/**
 * クラスのデフォルトエクスポート（名前付き）
 * - クラス名は任意で、モジュールをインポートする際に使用されません。
 */
export default class ExportedClass {}
```

```module.js
/**
 * as defaultを付与すると、デフォルトエクスポートとしてエクスポートされる。
 */
function normalFunction() {}
export { normalFunction as default };
```

## モジュールの集約

```module.js
/**
 * デフォルトエクスポートを含む、全ての機能をエクスポート
 */
export * from "./module.js";
```

```module.js
/**
 * デフォルトエクスポートを含む、全ての機能をsubObjectのプロパティとしてエクスポート
 */
export * as subObject from "./module.js";
```

```module.js
/**
 * 特定機能だけデフォルトエクスポート
 */
export { subVal, subFunc, SubClass } from "./module.js";
```

```module.js
/**
 * 別名を付与してデフォルトエクスポート
 */
export {
  subVal as renamedVal,
  subFunc as renamedFunc,
  SubClass as RenamedClass
} from "./module.js";
```

```module.js
/**
 * デフォルトエクスポート
 */
export { default } from "./module.js";
```
