import { ComponentUnion, ContentBlockReturnType } from '@/types/cms'
import Theme from '@/types/cms/Theme'
import AllowNull from '@/types/common/AllowNull'

interface Section extends Partial<Theme> {
  title: string;
  contentBlocks: ContentBlockReturnType<ComponentUnion>[];
  fillHeight: boolean;
  backgroundImage: AllowNull<string>;
}

export default Section
