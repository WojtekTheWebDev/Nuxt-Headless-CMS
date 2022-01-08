import { ComponentUnion, FactoryReturnType } from '~/types/cms'

interface ContentBlockReturnType<T extends ComponentUnion> extends FactoryReturnType<T> {
  component: (() => Promise<typeof import('*.vue')>) | null
}

export default ContentBlockReturnType
