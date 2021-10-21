import { ContentBlockReturnType } from '../contentBlocks'
import Theme from '@/types/cms/Theme'
import AllowNull from '@/types/common/AllowNull'

interface Section extends Partial<Theme> {
  title: string;
  contentBlocks: any[];
  fillHeight: boolean;
  backgroundImage: AllowNull<string>;
}

export default Section
