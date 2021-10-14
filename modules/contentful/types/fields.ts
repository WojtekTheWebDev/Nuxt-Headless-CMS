import ContentBlockType from '@/types/cms/factory/ContentBlockType'

export type ContentfulRoute = {
  fields: {
    slug: string;
    name: string;
    title: string;
  }
}

export type ContentfulAsset = {
  fields: {
    title: string;
    file: {
      url: string;
    }
  }
}

export type ContentfulPrivacyPolicy = {
  fields: {
    message: string,
    acceptButtonText: string,
    privacyPolicyPage: {
      fields: {
        slug: string;
        title: string;
      }
    }
  }
}

export type ContentfulHeader = {
  fields: {
    title: string;
    backgroundImage: {
      fields: {
        file: {
          url: string
        }
      }
    }
    backgroundColor: string
  }
}

export type ContentfulSection = {
  sys: {
    contentType: {
      sys: {
        id: ContentBlockType
      }
    }
  },
  fields: {
    [key: string]: unknown
  }
}

export type ContentfulPage = {
  name: string,
  header: Partial<ContentfulHeader>,
  showHeader: boolean,
  metaTitle: string,
  metaDescription: string
  sections: ContentfulSection[]
}
