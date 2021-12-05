// node server.js [port] で実行
(() => {
    const http = require('http');
    const fs = require('fs');
    const path = require('path');
    const mime = {
        ".html": "text/html",
        ".css": "text/css",
        ".js": "text/javascript"
        // 読み取りたいMIMEタイプはここに追記
    };
    // リスナ用引数
    const hostname = process.env.IP || '127.0.0.1';
    const port = process.argv.length > 2 ? process.argv[2] : process.env.PORT || 8080;

    // サーバーを生成
    http.createServer((req, res) => {
        const filePath = req.url == '/' ? `${req.url}index.html`: `${req.url}`;
        const fullPath = `${__dirname}${filePath}`;
        
        // アクセス情報をターミナルに出力
        console.log(`URL:  ${req.url}`);
        console.log(`Method:  ${req.method}`);
        console.log(`FilePath:  ${filePath}`);

        fs.readFile(fullPath, (err, data)=> {
            res.writeHead(statusCode = 200, headers = {
                'Content-Type': mime[path.extname(filePath)] || "text/plain"
            });
            res.end(data, 'utf-8');
        });
    })
    // エラーハンドラ
    .on('error', err=>console.log(err))
    // サーバー起動
    .listen(port, hostname, ()=>console.log(`Server running at ${hostname}:${port}`));

})();