import { Asset, Entry } from 'contentful'
import {
  ContentfulBlog,
  ContentfulFaq,
  ContentfulFaqItem,
  ContentfulIconBox,
  ContentfulIconList,
  ContentfulImageTextBox,
  ContentfulJumbotron,
  ContentfulMediaBox,
  ContentfulModalCard,
  ContentfulModalCardList,
  ContentfulPageLink,
  ContentfulTextBox,
  ContentfulTimelineItem,
  ContentfulTimeline
} from '~/api/integrations/contentful/types/contentModels'
import { AvailableThemes } from '~/types/cms/Theme'

export type ContentfulContentBlock = ContentfulBlog
  | ContentfulFaq
  | ContentfulFaqItem
  | ContentfulIconBox
  | ContentfulIconList
  | ContentfulImageTextBox
  | ContentfulJumbotron
  | ContentfulMediaBox
  | ContentfulModalCard
  | ContentfulModalCardList
  | ContentfulPageLink
  | ContentfulTextBox
  | ContentfulTimelineItem
  | ContentfulTimeline;

interface Section {
  name: string;
  title?: string;
  fillHeight?: boolean;
  contentBlocks: Entry<ContentfulContentBlock>[];
  theme?: AvailableThemes;
  backgroundImage?: Asset
}

export default Section
