const net = require('net');

// 获取命令行参数中的端口号
const port = process.argv[2];

if (!port) {
  console.error('请提供一个端口号作为参数');
  process.exit(1);
}

const server = net.createServer((socket) => {
  console.log('客户端已连接');

  // 处理接收到的数据
  socket.on('data', (data) => {
    console.log(`收到的数据：${data.toString()}`);
  });

  // 处理连接断开
  socket.on('end', () => {
    console.log('客户端已断开连接');
  });
});

server.listen(port, () => {
  console.log(`服务器正在监听端口 ${port}`);
});
