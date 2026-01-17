import { type SchemaTypeDefinition } from 'sanity'
import galleryImage from './galleryImage'
import product from './product'
import category from './category'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [galleryImage, product, category],
}
