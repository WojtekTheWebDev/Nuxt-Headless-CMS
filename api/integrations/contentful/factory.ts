/* eslint-disable no-redeclare */
import { prepareHeader } from './utils'
import {
  Section,
  TextBox as ContentfulTextBox,
  MediaBox as ContentfulMediaBox,
  Timeline as ContentfulTimeline,
  IconList as ContentfulIconList,
  ModalCardList as ContentfulModalCardList,
  Blog as ContentfulBlog,
  PageLink as ContentfulPageLink,
  ImageTextBox as ContentfulImageTextBox,
  Faq as ContentfulFaq,
  Jumbotron as ContentfulJumbotron
} from './types/contentModels'
import {
  TextBox,
  MediaBox,
  Timeline,
  IconList,
  ModalCardList,
  Blog,
  PageLink,
  ImageTextBox,
  Faq,
  Jumbotron
} from '~/types/cms/components'
import { ArrayElement } from '~/types/common'
import { FactoryReturnType } from '~/types/cms'

export function prepareContent (item: ArrayElement<Section['contentBlocks']>): FactoryReturnType<TextBox>;
export function prepareContent (item: ArrayElement<Section['contentBlocks']>): FactoryReturnType<MediaBox>;
export function prepareContent (item: ArrayElement<Section['contentBlocks']>): FactoryReturnType<Timeline>;
export function prepareContent (item: ArrayElement<Section['contentBlocks']>): FactoryReturnType<IconList>;
export function prepareContent (item: ArrayElement<Section['contentBlocks']>): FactoryReturnType<ModalCardList>;
export function prepareContent (item: ArrayElement<Section['contentBlocks']>): FactoryReturnType<Blog>;
export function prepareContent (item: ArrayElement<Section['contentBlocks']>): FactoryReturnType<PageLink>;
export function prepareContent (item: ArrayElement<Section['contentBlocks']>): FactoryReturnType<ImageTextBox>;
export function prepareContent (item: ArrayElement<Section['contentBlocks']>): FactoryReturnType<Faq>;
export function prepareContent (item: ArrayElement<Section['contentBlocks']>): FactoryReturnType<Jumbotron>;
export function prepareContent (item: ArrayElement<Section['contentBlocks']>) {
  const type = item.sys.contentType.sys.id
  const baseFields = {
    type,
    name: item.fields.name
  }

  switch (type) {
    case 'textBox': {
      const fields = item.fields as ContentfulTextBox
      return {
        ...baseFields,
        props: {
          description: fields.description
        } as TextBox
      }
    }
    case 'mediaBox': {
      const fields = item.fields as ContentfulMediaBox
      return {
        ...baseFields,
        props: {
          asset: {
            src: fields.asset.fields.file.url,
            alt: fields.asset.fields.title,
            type: fields.asset.fields.file.contentType
          },
          width: fields.width,
          height: fields.height,
          rounded: fields.rounded
        } as MediaBox
      }
    }
    case 'timeline': {
      const fields = item.fields as ContentfulTimeline
      return {
        ...baseFields,
        props: {
          title: fields.title,
          items: fields.items.map(timelineItem => timelineItem.fields)
        } as Timeline
      }
    }
    case 'iconList': {
      const fields = item.fields as ContentfulIconList
      return {
        ...baseFields,
        props: {
          title: fields.title,
          icons: fields.icons.map(icon => ({
            name: icon.fields.name,
            title: icon.fields.title,
            icon: {
              src: icon.fields.icon.fields.file.url,
              alt: icon.fields.icon.fields.title
            }
          }))
        } as IconList
      }
    }
    case 'modalCardList': {
      const fields = item.fields as ContentfulModalCardList
      return {
        ...baseFields,
        props: {
          title: fields.title,
          subtitle: fields.subtitle,
          modalCards: fields.modalCards.map(modalCard => ({
            name: modalCard.fields.name,
            title: modalCard.fields.title,
            description: modalCard.fields.description,
            image: {
              src: modalCard.fields.image.fields.file.url,
              alt: modalCard.fields.image.fields.title
            }
          }))
        } as ModalCardList
      }
    }
    case 'blog': {
      const fields = item.fields as ContentfulBlog
      return {
        ...baseFields,
        props: {
          pages: fields.pages.map((page) => {
            const header = prepareHeader(page.fields)
            return {
              name: page.fields.name,
              title: page.fields.title,
              slug: page.fields.slug,
              description: page.fields.description || page.fields.metaDescription,
              image: {
                src: header.backgroundImage,
                alt: header.title
              },
              parentPageSlug: page.fields.parentPage?.fields.slug
            }
          })
        } as Blog
      }
    }
    case 'pageLink': {
      const fields = item.fields as ContentfulPageLink
      return {
        ...baseFields,
        props: {
          text: fields.text,
          type: fields.type,
          slug: fields.page.fields.slug,
          parentPageSlug: fields.page.fields.parentPage?.fields.slug
        } as PageLink
      }
    }
    case 'imageTextBox': {
      const fields = item.fields as ContentfulImageTextBox
      return {
        ...baseFields,
        props: {
          description: fields.description,
          image: {
            src: fields.image.fields.file.url,
            alt: fields.image.fields.title
          }
        } as ImageTextBox
      }
    }
    case 'faq': {
      const fields = item.fields as ContentfulFaq
      return {
        ...baseFields,
        props: {
          title: fields.title,
          items: fields.items.map(faqItem => faqItem.fields)
        } as Faq
      }
    }
    case 'jumbotron': {
      const fields = item.fields as ContentfulJumbotron
      return {
        ...baseFields,
        props: {
          title: fields.title,
          description: fields.description,
          pageLinks: fields.pageLinks?.map(pageLink => ({
            text: pageLink.fields.text,
            type: pageLink.fields.type,
            slug: pageLink.fields.page.fields.slug,
            parentPageSlug: pageLink.fields.page.fields.parentPage?.fields.slug
          }))
        } as Jumbotron
      }
    }
    default:
      return {
        ...baseFields,
        props: {}
      }
  }
}
