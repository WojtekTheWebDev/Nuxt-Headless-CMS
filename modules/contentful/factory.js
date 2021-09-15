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

export function getContentBlock (item) {
  switch (item.sys.contentType.sys.id) {
    case 'section':
      return {
        component: PageSection,
        name: item.fields?.name,
        props: {
          title: item.fields?.title,
          content: item.fields?.contentBlocks.map(getContentBlock),
          theme: item.fields?.theme,
          fillHeight: item.fields?.fillHeight,
          backgroundImage: item.fields?.backgroundImage?.fields?.file?.url
        }
      }
    case 'textBox':
      return {
        component: TextBox,
        name: item.fields?.name,
        props: {
          description: item.fields?.description
        }
      }
    case 'mediaBox':
      return {
        component: MediaBox,
        name: item.fields?.name,
        props: {
          asset: {
            src: item.fields?.asset?.fields?.file?.url,
            type: item.fields?.asset?.fields?.file?.contentType,
            title: item.fields?.asset?.fields?.title
          },
          width: item.fields?.width,
          height: item.fields?.height,
          rounded: item.fields?.rounded
        }
      }
    case 'timeline':
      return {
        component: Timeline,
        name: item.fields?.name,
        props: {
          title: item.fields?.title,
          items: item.fields?.items.map(timelineItem => timelineItem.fields)
        }
      }
    case 'iconList':
      return {
        component: IconList,
        name: item.fields?.name,
        props: {
          title: item.fields?.title,
          icons: item.fields?.icons.map(icon => ({
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
        name: item.fields?.name,
        props: {
          title: item.fields?.title,
          subtitle: item.fields?.subtitle,
          modalCards: (item.fields?.modalCards || []).map(modalCard => ({
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
        name: item.fields?.name,
        props: {
          pages: item.fields?.pages?.map(page => page.fields)
        }
      }
    case 'pageLink':
      return {
        component: PageLink,
        name: item.fields?.name,
        props: {
          text: item.fields?.text,
          type: item.fields?.type,
          slug: item.fields?.page?.fields?.slug,
          parentPageSlug: item.fields?.page?.fields?.parentPage?.fields?.slug
        }
      }
    case 'imageTextBox':
      return {
        component: ImageTextBox,
        name: item.fields?.name,
        props: {
          description: item.fields?.description,
          image: {
            src: item.fields?.image?.fields?.file?.url,
            type: item.fields?.image?.fields?.file?.contentType,
            title: item.fields?.image?.fields?.title
          }
        }
      }
    case 'faq':
      return {
        component: Faq,
        name: item.fields?.name,
        props: {
          title: item.fields?.title,
          items: item.fields?.items.map(faqItem => faqItem.fields)
        }
      }
    case 'jumbotron':
      return {
        component: Jumbotron,
        name: item.fields?.name,
        props: {
          title: item.fields?.title,
          description: item.fields?.description,
          pageLinks: item.fields?.pageLinks.map(pageLink => ({
            text: pageLink.fields?.text,
            type: pageLink.fields?.type,
            slug: pageLink.fields?.page?.fields?.slug,
            parentPageSlug: pageLink.fields?.page?.fields?.parentPage?.fields?.slug
          }))
        }
      }
    default:
      return {
        component: null,
        name: item.fields?.name,
        props: {}
      }
  }
}
