var jshindy = jshindy || {};

jshindy.define_namespace = (path) => {
  const paths = path.split('.');
  const _global = this;
  paths.reduce((prev, curr) => {
    if (!prev.hasOwnProperty(curr)) prev[curr] = {};
    curr = prev[curr];
    return curr;
  }, _global)
}

// 名前空間に追加
jshindy.define_namespace('jshindy.util.math');

jshindy.util.math = () => {
  alert("Hello world!!");
};



