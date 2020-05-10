import { NativeModules } from 'react-native';

type ReactNativeHooksType = {
  multiply(a: number, b: number): Promise<number>;
};

const { ReactNativeHooks } = NativeModules;

export default ReactNativeHooks as ReactNativeHooksType;
