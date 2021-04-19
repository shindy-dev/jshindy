function main() {
    string();
};

export { main };

function number() {

};

function boolean() {

};

function string() {
    const str1 = "hoge";
    const str2 = 'huga';
    const str3 = `
    バッククォートでエスケープなし改行
    複数行を書くときに便利
インデントもスペースとして認識されるから注意。
    `;
    console.log(str3);
    const str4 = "エスケープあり改行\n数行書くときに使うかも";
    console.log(str4);
    const int1 = 10;
    const str5 = `りんごの数：${int1}`;
    console.log(str5);
    const str6 = "連" + "結";
    console.log(str6);
    const strArr = ["報", "相"];
    const str7 = strArr.join("連");
    console.log(str7);
};

function array() {

};

function object() {

};