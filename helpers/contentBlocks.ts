import { ComponentUnion, ContentBlockReturnType, FactoryReturnType } from '@/types/cms'

export function getContentBlock<T extends ComponentUnion> (content: FactoryReturnType<T>): ContentBlockReturnType<T> {
  switch (content.type) {
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
