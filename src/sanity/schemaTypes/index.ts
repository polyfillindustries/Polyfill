import { type SchemaTypeDefinition } from 'sanity'
import galleryImage from './galleryImage'
import product from './product'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [galleryImage, product],
}
