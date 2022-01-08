import { Entry } from 'contentful'
import TimelineItem from './TimelineItem'

interface Timeline {
  name: string;
  title?: string;
  items: Entry<TimelineItem>[]
}

export default Timeline
