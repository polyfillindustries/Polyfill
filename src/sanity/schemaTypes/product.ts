import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
      validation: (Rule) => Rule.required(),
      description: 'Select the category this product belongs to',
    }),
    defineField({
      name: 'name',
      title: 'Product Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    // Crucial for Next.js dynamic routing
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Unique identifier for the product URL (Click the generate button to auto-fill)',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'alias',
      title: 'Famous / Locally Known Name',
      type: 'string',
      description: 'e.g., "Dana" or specific market slang',
      // Optional field
    }),
    defineField({
      name: 'industryServed',
      title: 'Industries Served',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
      description: 'Press enter after typing an industry (e.g., Automotive, Textile)',
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'images',
      title: 'Product Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alt Text',
              description: 'Describe the image for SEO and accessibility',
              validation: (Rule) => Rule.required(),
            }
          ]
        }
      ],
      options: {
        layout: 'grid',
      },
      // Ensure at least one image is uploaded
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'endProducts',
      title: 'Products that can be made',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
      description: 'e.g., Plastic Chairs, Water Tanks, Pipes (Press enter after each item)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Product Description',
      type: 'text',
      rows: 4,
      description: 'Brief overview of the product',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'technicalSpecs',
      title: 'Technical Specifications',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'key',
              type: 'string',
              title: 'Property',
              description: 'e.g., Density, Melt Flow Index, Tensile Strength',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'value',
              type: 'string',
              title: 'Value',
              description: 'e.g., 0.95 g/cm³, 2.0 g/10 min',
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              key: 'key',
              value: 'value',
            },
            prepare({ key, value }) {
              return {
                title: key,
                subtitle: value,
              }
            },
          },
        },
      ],
      description: 'Click + to add technical specifications as key-value pairs',
    }),
  ],
})
