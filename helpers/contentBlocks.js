import PageSection from '@/components/cms/PageSection'
import TextBox from '@/components/cms/TextBox'
import MediaBox from '@/components/cms/MediaBox'
import Timeline from '@/components/cms/Timeline'
import IconList from '@/components/cms/IconList'
import ModalCardList from '@/components/cms/ModalCardList'
import Blog from '@/components/cms/Blog'
import PageLink from '@/components/cms/PageLink'
import ImageTextBox from '@/components/cms/ImageTextBox'
import Faq from '~/components/cms/Faq'
import Jumbotron from '~/components/cms/Jumbotron'

export function getContentBlock (content) {
  switch (content.type) {
    case 'section':
      return {
        ...content,
        component: PageSection,
        props: {
          ...content.props,
          contentBlocks: content.props.content.map(item => getContentBlock(item))
        }
      }
    case 'textBox':
      return {
        ...content,
        component: TextBox
      }
    case 'mediaBox':
      return {
        ...content,
        component: MediaBox
      }
    case 'timeline':
      return {
        ...content,
        component: Timeline
      }
    case 'iconList':
      return {
        ...content,
        component: IconList
      }
    case 'modalCardList':
      return {
        ...content,
        component: ModalCardList
      }
    case 'blog':
      return {
        ...content,
        component: Blog
      }
    case 'pageLink':
      return {
        ...content,
        component: PageLink
      }
    case 'imageTextBox':
      return {
        ...content,
        component: ImageTextBox
      }
    case 'faq':
      return {
        ...content,
        component: Faq
      }
    case 'jumbotron':
      return {
        ...content,
        component: Jumbotron
      }
    default:
      return {
        ...content,
        component: null
      }
  }
}
