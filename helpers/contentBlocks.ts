import FactoryReturnType from '~/types/cms/factory/FactoryReturnType'
import Section from '~/types/cms/components/Section'

interface ContentBlock<T> extends FactoryReturnType<T> {
  component: (() => Promise<typeof import('*.vue')>) | null
}

const isSection = (p: any): p is Section => !!p.contentBlocks

export function getContentBlock<T> (content: FactoryReturnType<T>): ContentBlock<T> {
  switch (content.type) {
    case 'section':
      return {
        ...content,
        component: () => import('@/components/cms/PageSection.vue'),
        props: isSection(content.props)
          ? {
              ...content.props,
              contentBlocks: content.props.contentBlocks.map(item => getContentBlock(item))
            }
          : { ...content.props }
      }
    case 'textBox':
      return {
        ...content,
        component: () => import('@/components/cms/TextBox.vue')
      }
    case 'mediaBox':
      return {
        ...content,
        component: () => import('@/components/cms/MediaBox.vue')
      }
    case 'timeline':
      return {
        ...content,
        component: () => import('@/components/cms/Timeline.vue')
      }
    case 'iconList':
      return {
        ...content,
        component: () => import('@/components/cms/IconList.vue')
      }
    case 'modalCardList':
      return {
        ...content,
        component: () => import('@/components/cms/ModalCardList.vue')
      }
    case 'blog':
      return {
        ...content,
        component: () => import('@/components/cms/Blog.vue')
      }
    case 'pageLink':
      return {
        ...content,
        component: () => import('@/components/cms/PageLink.vue')
      }
    case 'imageTextBox':
      return {
        ...content,
        component: () => import('@/components/cms/ImageTextBox.vue')
      }
    case 'faq':
      return {
        ...content,
        component: () => import('@/components/cms/Faq.vue')
      }
    case 'jumbotron':
      return {
        ...content,
        component: () => import('@/components/cms/Jumbotron.vue')
      }
    default:
      return {
        ...content,
        component: null
      }
  }
}
