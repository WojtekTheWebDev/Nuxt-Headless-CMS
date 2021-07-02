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

export function parseCMSBlock (contentBlock) {
  switch (contentBlock.sys.contentType.sys.id) {
    case 'section':
      return {
        component: PageSection,
        name: contentBlock.fields?.name,
        props: {
          title: contentBlock.fields?.title,
          content: contentBlock.fields?.contentBlocks,
          theme: contentBlock.fields?.theme
        }
      }
    case 'textBox':
      return {
        component: TextBox,
        name: contentBlock.fields?.name,
        props: {
          description: contentBlock.fields?.description
        }
      }
    case 'mediaBox':
      return {
        component: MediaBox,
        name: contentBlock.fields?.name,
        props: {
          asset: {
            src: contentBlock.fields?.asset?.fields?.file?.url,
            type: contentBlock.fields?.asset?.fields?.file?.contentType,
            title: contentBlock.fields?.asset?.fields?.title
          },
          width: contentBlock.fields?.width,
          height: contentBlock.fields?.height,
          rounded: contentBlock.fields?.rounded
        }
      }
    case 'timeline':
      return {
        component: Timeline,
        name: contentBlock.fields?.name,
        props: {
          title: contentBlock.fields?.title,
          items: contentBlock.fields?.items.map(timelineItem => timelineItem.fields)
        }
      }
    case 'iconList':
      return {
        component: IconList,
        name: contentBlock.fields?.name,
        props: {
          title: contentBlock.fields?.title,
          icons: contentBlock.fields?.icons.map(icon => ({
            name: icon.fields?.name,
            title: icon.fields?.title,
            icon: {
              src: icon.fields?.icon?.fields?.file?.url,
              alt: icon.fields?.icon?.fields?.title
            }
          }))
        }
      }
    case 'modalCardList':
      return {
        component: ModalCardList,
        name: contentBlock.fields?.name,
        props: {
          title: contentBlock.fields?.title,
          subtitle: contentBlock.fields?.subtitle,
          modalCards: (contentBlock.fields?.modalCards || []).map(modalCard => ({
            name: modalCard.fields?.name,
            title: modalCard.fields?.title,
            description: modalCard.fields?.description,
            image: {
              src: modalCard.fields?.image?.fields?.file?.url,
              alt: modalCard.fields?.image?.fields?.title
            }
          }))
        }
      }
    case 'blog':
      return {
        component: Blog,
        name: contentBlock.fields?.name,
        props: {
          pages: contentBlock.fields?.pages?.map(page => page.fields)
        }
      }
    case 'pageLink':
      return {
        component: PageLink,
        name: contentBlock.fields?.name,
        props: {
          text: contentBlock.fields?.text,
          type: contentBlock.fields?.type,
          slug: contentBlock.fields?.page?.fields?.slug,
          parentPageSlug: contentBlock.fields?.page?.fields?.parentPage?.fields?.slug
        }
      }
    case 'imageTextBox':
      return {
        component: ImageTextBox,
        name: contentBlock.fields?.name,
        props: {
          description: contentBlock.fields?.description,
          image: {
            src: contentBlock.fields?.image?.fields?.file?.url,
            type: contentBlock.fields?.image?.fields?.file?.contentType,
            title: contentBlock.fields?.image?.fields?.title
          }
        }
      }
    case 'faq':
      return {
        component: Faq,
        name: contentBlock.fields?.name,
        props: {
          title: contentBlock.fields?.title,
          items: contentBlock.fields?.items.map(faqItem => faqItem.fields)
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
