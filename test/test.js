// ！！！ 以下、変更しないでください。 ！！！
var test = function () {
    "use strict";

    const scripts = document.getElementsByTagName('script');
    const lastScript = scripts[scripts.length - 1];
    const msg = `テスト関数をtest変数に代入してください。\n(${lastScript.src})`;
    console.log(msg);
    alert(msg);
};
window.executeTest = function () {
    "use strict";

    try {
        test();
    } catch (e) {
        console.log(e.stack);
        alert(e.stack);
    };
};
// ！！！ 以上、変更しないでください。 ！！！


// 以下、テストサンプル
import { calc } from "./sample.js";

function testA() {
    alert(calc(30, 5));
};

// テストしたい関数名を代入してください。
test = testA;
// 以上、テストサンプル


