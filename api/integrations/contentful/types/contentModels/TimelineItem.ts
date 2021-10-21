import { TimelineItemTypes } from '@/types/cms/components/Timeline'

interface TimelineItem {
  name: string;
  title: string;
  subtitle?: string;
  type: TimelineItemTypes,
  description: string;
}

export default TimelineItem
