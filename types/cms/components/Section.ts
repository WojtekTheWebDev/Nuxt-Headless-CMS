import Theme from '@/types/cms/Theme'
import AllowNull from '@/types/common/AllowNull'

interface Section extends Theme {
  title: string;
  contentBlocks: any[];
  fillHeight: boolean;
  backgroundImage: AllowNull<string>;
}

export default Section
