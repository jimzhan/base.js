import { ObjectID } from 'mongodb';

const Key = () => ObjectID().toHexString();

export default Key;
