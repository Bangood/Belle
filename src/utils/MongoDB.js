import Mongoose from 'mongoose';

export default class MongoDB {
  static defaultOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  static name = 'MongoDB';

  static async init($uri, $options = MongoDB.defaultOptions) {
    return new Promise(($resolve, $reject) => {
      Mongoose.connect($uri, $options);
      Mongoose.connection.on('connecting', () => {
        console.log(`开始连接${MongoDB.name}`);
      });
      Mongoose.connection.on('connected', () => {
        console.log(`${MongoDB.name}数据库连接到`, $uri);
        $resolve();
      });
      Mongoose.connection.on('disconnected', () => {
        console.log(`${MongoDB.name}断开连接`);
      });
      Mongoose.connection.on('close', () => {
        console.log(`${MongoDB.name}关闭连接`);
      });
      Mongoose.connection.on('reconnected', () => {
        console.log(`${MongoDB.name}重新连接`);
      });
      Mongoose.connection.on('error', ($err) => {
        console.log(`${MongoDB.name}错误`, $err);
        $reject($err.message);
      });
      Mongoose.connection.on('fullsetup', () => {
        console.log(`${MongoDB.name} fullsetup`);
      });
      Mongoose.connection.on('all', () => {
        console.log(`${MongoDB.name} all`);
      });
      Mongoose.connection.on('reconnectFailed', () => {
        console.log(`${MongoDB.name} reconnectFailed`);
      });
    });
  }
}
