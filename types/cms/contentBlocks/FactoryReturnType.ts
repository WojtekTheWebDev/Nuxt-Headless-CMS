import { BaseFields, ComponentUnion } from './index'

interface FactoryReturnType<T extends ComponentUnion> extends BaseFields {
  props: T
};

export default FactoryReturnType
