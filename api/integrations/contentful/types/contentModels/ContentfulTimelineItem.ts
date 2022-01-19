import { TimelineItemTypes } from '~/types/cms/components/Timeline'

interface ContentfulTimelineItem {
  name: string;
  title: string;
  subtitle?: string;
  type: TimelineItemTypes,
  description: string;
}

export default ContentfulTimelineItem
