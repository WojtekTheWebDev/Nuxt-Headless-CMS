import BaseFields from './BaseFields'
import Section from '@/types/cms/components/Section'

interface FactoryReturnType<T> extends BaseFields {
  props: T extends Section ? Section : Omit<T, 'theme'>
};

export default FactoryReturnType
