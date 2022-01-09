import { ComponentUnion, ContentBlockReturnType } from '@/types/cms'
import Theme from '@/types/cms/Theme'

interface Section extends Theme {
  name: string;
  title?: string;
  contentBlocks: ContentBlockReturnType<ComponentUnion>[];
  fillHeight?: boolean;
  backgroundImage?: string;
}

export default Section
