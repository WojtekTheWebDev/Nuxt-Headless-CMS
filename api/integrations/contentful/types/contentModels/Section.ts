import { Entry } from 'contentful'
import {
  Blog,
  Faq,
  FaqItem,
  IconBox,
  IconList,
  ImageTextBox,
  Jumbotron,
  MediaBox,
  ModalCard,
  ModalCardList,
  PageLink,
  TextBox,
  TimelineItem,
  Timeline
} from '~/api/integrations/contentful/types/contentModels'
import { AvailableThemes } from '~/types/cms/Theme'

export type ContentBlock = Blog
  | Faq
  | FaqItem
  | IconBox
  | IconList
  | ImageTextBox
  | Jumbotron
  | MediaBox
  | ModalCard
  | ModalCardList
  | PageLink
  | TextBox
  | TimelineItem
  | Timeline;

interface Section {
  name: string;
  title?: string;
  fillHeight?: boolean;
  contentBlocks: Entry<ContentBlock>[];
  theme?: AvailableThemes
}

export default Section
