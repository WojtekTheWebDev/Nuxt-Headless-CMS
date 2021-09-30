import Theme from '@/types/cms/Theme'

type TimelineItemTypes = 'EDUCATION' | 'WORK_EXPERIENCE' | 'CERTIFICATION'

export interface TimelineItem {
  name: string,
  type: TimelineItemTypes,
  title: string,
  subtitle: string,
  description: string
}

interface Timeline extends Theme {
  title: string,
  items: TimelineItem[]
}

export default Timeline
