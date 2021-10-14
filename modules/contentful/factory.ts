/* eslint-disable no-redeclare */
import { prepareHeader } from './utils'
import FactoryReturnType from '@/types/cms/factory/FactoryReturnType'
import ContentBlockType from '@/types/cms/factory/ContentBlockType'
import BaseFields from '@/types/cms/factory/BaseFields'
import {
  Faq,
  IconList,
  ImageTextBox,
  Jumbotron,
  MediaBox,
  ModalCardList,
  PageLink,
  Section,
  TextBox,
  Timeline
} from '@/types/cms'

export function prepareContent(type: 'section', item: any): FactoryReturnType<Section>
export function prepareContent(type: 'textBox', item: any): FactoryReturnType<TextBox>
export function prepareContent(type: 'mediaBox', item: any): FactoryReturnType<MediaBox>
export function prepareContent(type: 'timeline', item: any): FactoryReturnType<Timeline>
export function prepareContent(type: 'iconList', item: any): FactoryReturnType<IconList>
export function prepareContent(type: 'modalCardList', item: any): FactoryReturnType<ModalCardList>
export function prepareContent(type: 'pageLink', item: any): FactoryReturnType<PageLink>
export function prepareContent(type: 'imageTextBox', item: any): FactoryReturnType<ImageTextBox>
export function prepareContent(type: 'faq', item: any): FactoryReturnType<Faq>
export function prepareContent(type: 'jumbotron', item: any): FactoryReturnType<Jumbotron>
export function prepareContent (type: ContentBlockType, item: any) {
  const baseFields: BaseFields = {
    type,
    name: item.fields?.name
  }

  switch (type) {
    case 'section':
      return {
        ...baseFields,
        props: {
          title: item.fields?.title,
          contentBlocks: item.fields?.contentBlocks.map(prepareContent),
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
            alt: item.fields?.asset?.fields?.title,
            type: item.fields?.asset?.fields?.file?.contentType
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
          items: item.fields?.items.map((timelineItem: any) => timelineItem.fields)
        }
      }
    case 'iconList':
      return {
        ...baseFields,
        props: {
          title: item.fields?.title,
          icons: item.fields?.icons.map((icon: any) => ({
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
          modalCards: (item.fields?.modalCards || []).map((modalCard: any) => ({
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
          pages: item.fields?.pages?.map((page: any) => ({
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
            alt: item.fields?.image?.fields?.title
          }
        }
      }
    case 'faq':
      return {
        ...baseFields,
        props: {
          title: item.fields?.title,
          items: item.fields?.items.map((faqItem: any) => faqItem.fields)
        }
      }
    case 'jumbotron':
      return {
        ...baseFields,
        props: {
          title: item.fields?.title,
          description: item.fields?.description,
          pageLinks: item.fields?.pageLinks.map((pageLink: any) => ({
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
