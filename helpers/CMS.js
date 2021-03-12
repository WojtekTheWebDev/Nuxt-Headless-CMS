import PageSection from '@/components/cms/PageSection'
import TextBox from '@/components/cms/TextBox'
import MediaBox from '@/components/cms/MediaBox'
import Timeline from '@/components/cms/Timeline'

const CONTENT_BLOCKS = {
  section: 'section',
  textBox: 'textBox',
  mediaBox: 'mediaBox',
  timeline: 'timeline'
}

export function parseCMSBlock (contentBlock) {
  switch (contentBlock.sys.contentType.sys.id) {
    case CONTENT_BLOCKS.section:
      return {
        component: PageSection,
        name: contentBlock.fields?.name,
        props: {
          title: contentBlock.fields?.title,
          content: contentBlock.fields?.contentBlocks,
          theme: contentBlock.fields?.theme
        }
      }
    case CONTENT_BLOCKS.textBox:
      return {
        component: TextBox,
        name: contentBlock.fields?.name,
        props: {
          description: contentBlock.fields?.description
        }
      }
    case CONTENT_BLOCKS.mediaBox:
      return {
        component: MediaBox,
        name: contentBlock.fields?.name,
        props: {
          asset: contentBlock.fields?.asset?.fields,
          width: contentBlock.fields?.width,
          height: contentBlock.fields?.height,
          rounded: contentBlock.fields?.rounded
        }
      }
    case CONTENT_BLOCKS.timeline:
      return {
        component: Timeline,
        name: contentBlock.fields?.name,
        props: {
          items: contentBlock.fields?.items.map(timelineItem => timelineItem.fields)
        }
      }
    default:
      return {
        component: null,
        name: contentBlock.fields?.name,
        props: {}
      }
  }
}
