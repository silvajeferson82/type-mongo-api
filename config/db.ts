import mongoose from 'mongoose';
import config from 'config';
import Logger from './logger';

const connect = async () => {

  const dbUri = config.get<string>('dbUri');

  try{
    await mongoose.connect(dbUri);
    Logger.info('MongoDb connect: ok')
  }catch(e) {
    Logger.error(`Erro: ${e}`)
    process.exit(1)
  }
}

export default connect;
