const net = require('net');
const port = process.argv[2];
if (!port) {
  console.error('举个栗子🌰：node tcp.js 11451');
  process.exit(1);
}
const server = net.createServer((socket) => {
  console.log('啊~被入了');
  socket.on('data', (data) => {
    process.stdout.write(`弄进来的东西：${data.toString()}`);
  });
  socket.on('end', () => {
    console.log('呜呜呜，出去了');
  });
  socket.on('error', (err) => {
    console.error('嗯？哥哥是用nmap把我入的嘛?呜呜呜为什么不用telnet');
  });
});
server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`我的口${port}已经有在用了，麻烦哥哥换一个吧qwq`);
  } else {
    console.error('嗯？这里有个错误哥哥要看嘛',err);
  }
  process.exit(1);
});
server.listen(port, () => {
  console.log(`记住！请入我的${port}口`);
});
