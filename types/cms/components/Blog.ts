import Theme from '@/types/cms/Theme'
import Image from '@/types/common/Image'

export interface BlogPage {
  name: string,
  title: string,
  description: string,
  slug: string,
  image: Image
  parentPageSlug?: string,
}

interface Blog extends Partial<Theme> {
  pages: BlogPage[]
}

export default Blog
