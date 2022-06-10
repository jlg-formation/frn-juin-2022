import {NativeModules} from 'react-native';

const {DeviceInfoModule} = NativeModules;

export interface DeviceInfoModuleType {
  getUniqueId: (str: string) => Promise<string>;
}

export default DeviceInfoModule as DeviceInfoModuleType;
