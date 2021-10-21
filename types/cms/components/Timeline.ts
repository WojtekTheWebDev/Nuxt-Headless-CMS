import Theme from '~/types/cms/Theme'

export type TimelineItemTypes = 'NONE' | 'EDUCATION' | 'WORK_EXPERIENCE' | 'CERTIFICATION'

export interface TimelineItem {
  name: string,
  type: TimelineItemTypes,
  title: string,
  subtitle: string,
  description: string
}

interface Timeline extends Partial<Theme> {
  title: string,
  items: TimelineItem[]
}

export default Timeline
