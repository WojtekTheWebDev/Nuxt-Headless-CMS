import { prepareHeader } from './utils'

export function prepareContent (item) {
  const baseFields = {
    type: item.sys?.contentType?.sys?.id || 'none',
    name: item.fields?.name
  }

  switch (item.sys.contentType.sys.id) {
    case 'section':
      return {
        ...baseFields,
        props: {
          title: item.fields?.title,
          content: item.fields?.contentBlocks.map(prepareContent),
          theme: item.fields?.theme,
          fillHeight: item.fields?.fillHeight,
          backgroundImage: item.fields?.backgroundImage?.fields?.file?.url
        }
      }
    case 'textBox':
      return {
        ...baseFields,
        props: {
          description: item.fields?.description
        }
      }
    case 'mediaBox':
      return {
        ...baseFields,
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
        ...baseFields,
        props: {
          title: item.fields?.title,
          items: item.fields?.items.map(timelineItem => timelineItem.fields)
        }
      }
    case 'iconList':
      return {
        ...baseFields,
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
        ...baseFields,
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
        ...baseFields,
        props: {
          pages: item.fields?.pages?.map(page => ({
            name: page.fields.name,
            slug: page.fields.slug,
            description: page.fields.description || page.fields.metaDescription,
            header: prepareHeader(page.fields.header)
          }))
        }
      }
    case 'pageLink':
      return {
        ...baseFields,
        props: {
          text: item.fields?.text,
          type: item.fields?.type,
          slug: item.fields?.page?.fields?.slug,
          parentPageSlug: item.fields?.page?.fields?.parentPage?.fields?.slug
        }
      }
    case 'imageTextBox':
      return {
        ...baseFields,
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
        ...baseFields,
        props: {
          title: item.fields?.title,
          items: item.fields?.items.map(faqItem => faqItem.fields)
        }
      }
    case 'jumbotron':
      return {
        ...baseFields,
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
        ...baseFields,
        props: {}
      }
  }
}
