# 16-1\_モジュールのインポート

## 静的インポート

```module.js
/**
 * 名前付きエクスポートをインポート
 */
import { val1, val2 } from "./module.js";
```

```module.js
/**
 * 別名でインポート
 */
import { val1 as renamedVal1, val2 as renamedVal2 } from "./module.js";
```

```module.js
/**
 * デフォルトエクスポート、名前付きエクスポートをmoduleObjectのプロパティとして
 *インポート
 */
import * as moduleObject from "./module.js";
```
