import { Entry } from 'contentful'
import ContentfulTimelineItem from './ContentfulTimelineItem'

interface ContentfulTimeline {
  name: string;
  title?: string;
  items: Entry<ContentfulTimelineItem>[]
}

export default ContentfulTimeline
