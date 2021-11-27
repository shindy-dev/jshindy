(() => {
    const http = require('http');
    const path = require('path');
    const fs = require('fs');

    const mime = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'text/javascript',
    };

    // サーバーを生成
    http.createServer(requestListener = (request, response) => {
        const filePath = request.url == '/' ? '/index.html' : request.url;
        const fullPath = `${__dirname}${filePath}`;

        // アクセス情報をターミナルに出力
        console.log(`url:${request.url}`);
        console.log(`method:${request.method}`);

        // http ヘッダーを出力
        response.writeHead(statusCode = 200, headers = {
            'Content-Type': mime[path.extname(filePath)] || 'text/plain'
        });
        fs.readFile(fullPath, (error, data) => {
            response.end(data = data, 'utf-8');
        });

    }).listen(port = 8080);
})();