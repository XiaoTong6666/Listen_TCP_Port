const net = require('net');
const port = process.argv[2];

if (!port) {
  console.error('举个栗子🌰：node tcp.js 11451');
  process.exit(1);
}

try {
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
      console.error(`我的${port}号口已被用了呜呜X﹏X，麻烦哥哥换一个 吧qwq`);
    } else {
      console.error('嗯？这里有个错误哥哥要看嘛喵~', err);
    }
    process.exit(1);
  });

  server.listen(port, () => {
    console.log(`哥哥记住了噢！请对准我的${port}号口`);
  });
} catch (err) {
  if (err.code === 'ERR_SOCKET_BAD_PORT') {
    console.error(`${port}太大了，我开不了呜呜呜qwq\n你要记住了！大于65535我都承受不住啦，麻烦哥哥小一点(∠・ω< )⌒☆`);
  } else {
    console.error('嗯？这里有个错误哥哥要看嘛喵~', err);
  }
  process.exit(1);
}
