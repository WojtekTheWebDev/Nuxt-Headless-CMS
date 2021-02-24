import PageSection from '@/components/cms/PageSection'
import TextBox from '@/components/cms/TextBox'

const CONTENT_BLOCKS = {
  section: 'section',
  textBox: 'textBox'
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
  }
}
