import AllowNull from '~/types/common/AllowNull.js'

export type AllowedFilterKeys = 'fields.name' | 'fields.slug' | 'fields.parentPage.fields.slug';

export type QueryFilter = Partial<Record<AllowedFilterKeys, string>>

export type DefaultQuery = {
  'content_type': string;
  include: number;
  locale: string;
  limit: AllowNull<number>;
}

export type ContentfulQuery = DefaultQuery & QueryFilter;

export type PageFilter = {
  'fields.slug'?: string;
  'fields.name'?: string;
  'fields.parentPage.fields.slug'?: string;
}
