/**
 * オブジェクト型
 */
/**
 * オブジェクト型の宣言
 */
function objType() {
    console.log('# オブジェクト型の宣言');
    let vegitable;
    vegitable = {
        name: 'トマト',
        value: 100,
    };
    console.log(vegitable);
    // vegitable = 'キャベツ';
    // ERROR: 型 'string' を型 '{ name: string; value: number; }' に割り当てることはできません。ts(2322)
}
objType();
/**
 * オブジェクト型のエイリアス
 */
function objTypeAlias() {
    console.log('# オブジェクト型のエイリアス');
    let vegitable; // 変数vegitableに型Vegiを割り当てる
    vegitable = {
        name: 'きゅうり',
        value: 80,
    };
    console.log(vegitable);
}
objTypeAlias();
/**
 * 構造的型付け
 */
function structuralType() {
    console.log('# 構造的型付け');
    const fullName = {
        firstName: '山田',
        lastName: '太郎',
    };
    let first = fullName;
    let last = fullName;
    console.log(first.firstName + ' ' + last.lastName);
}
structuralType();
export {};
