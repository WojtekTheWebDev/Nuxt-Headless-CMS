import { BaseFields, ComponentUnion } from '~/types/cms'

interface FactoryReturnType<T extends ComponentUnion> extends BaseFields {
  props: T
};

export default FactoryReturnType
