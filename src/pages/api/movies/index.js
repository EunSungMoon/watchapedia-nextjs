// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { faker } from '@faker-js/faker'
export default function handler(req, res) {
  switch (req.method) {
    case 'GET':
      return res.status(200).json({
        items: [
          {
            id: faker.datatype.uuid(),
            categories: '박스오피스 순위',
            movie_list: [
              {
                movieId: faker.datatype.uuid(),
                category: faker.commerce.productMaterial(),
                title: faker.commerce.productName(),
                rate: faker.datatype.number({ min: 0, max: 10, precision: 0.1 }),
                date: faker.date.past(),
                country: faker.address.country(),
              },
              {
                movieId: faker.datatype.uuid(),
                category: faker.commerce.productMaterial(),
                title: faker.commerce.productName(),
                rate: faker.datatype.number({ min: 0, max: 10, precision: 0.1 }),
                date: faker.date.past(),
                country: faker.address.country(),
              },
              {
                movieId: faker.datatype.uuid(),
                category: faker.commerce.productMaterial(),
                title: faker.commerce.productName(),
                rate: faker.datatype.number({ min: 0, max: 10, precision: 0.1 }),
                date: faker.date.past(),
                country: faker.address.country(),
              },
              {
                movieId: faker.datatype.uuid(),
                category: faker.commerce.productMaterial(),
                title: faker.commerce.productName(),
                rate: faker.datatype.number({ min: 0, max: 10, precision: 0.1 }),
                date: faker.date.past(),
                country: faker.address.country(),
              },
              {
                movieId: faker.datatype.uuid(),
                category: faker.commerce.productMaterial(),
                title: faker.commerce.productName(),
                rate: faker.datatype.number({ min: 0, max: 10, precision: 0.1 }),
                date: faker.date.past(),
                country: faker.address.country(),
              },
              {
                movieId: faker.datatype.uuid(),
                category: faker.commerce.productMaterial(),
                title: faker.commerce.productName(),
                rate: faker.datatype.number({ min: 0, max: 10, precision: 0.1 }),
                date: faker.date.past(),
                country: faker.address.country(),
              },
              {
                movieId: faker.datatype.uuid(),
                category: faker.commerce.productMaterial(),
                title: faker.commerce.productName(),
                rate: faker.datatype.number({ min: 0, max: 10, precision: 0.1 }),
                date: faker.date.past(),
                country: faker.address.country(),
              },
            ],
          },
          {
            id: faker.datatype.uuid(),
            categories: '왓챠 Top 10 영화',
            movie_list: [
              {
                movieId: faker.datatype.uuid(),
                category: faker.commerce.productMaterial(),
                title: faker.commerce.productName(),
                rate: faker.datatype.number({ min: 0, max: 10, precision: 0.1 }),
                date: faker.date.past(),
                country: faker.address.country(),
              },
              {
                movieId: faker.datatype.uuid(),
                category: faker.commerce.productMaterial(),
                title: faker.commerce.productName(),
                rate: faker.datatype.number({ min: 0, max: 10, precision: 0.1 }),
                date: faker.date.past(),
                country: faker.address.country(),
              },
              {
                movieId: faker.datatype.uuid(),
                category: faker.commerce.productMaterial(),
                title: faker.commerce.productName(),
                rate: faker.datatype.number({ min: 0, max: 10, precision: 0.1 }),
                date: faker.date.past(),
                country: faker.address.country(),
              },
              {
                movieId: faker.datatype.uuid(),
                category: faker.commerce.productMaterial(),
                title: faker.commerce.productName(),
                rate: faker.datatype.number({ min: 0, max: 10, precision: 0.1 }),
                date: faker.date.past(),
                country: faker.address.country(),
              },
              {
                movieId: faker.datatype.uuid(),
                category: faker.commerce.productMaterial(),
                title: faker.commerce.productName(),
                rate: faker.datatype.number({ min: 0, max: 10, precision: 0.1 }),
                date: faker.date.past(),
                country: faker.address.country(),
              },
              {
                movieId: faker.datatype.uuid(),
                category: faker.commerce.productMaterial(),
                title: faker.commerce.productName(),
                rate: faker.datatype.number({ min: 0, max: 10, precision: 0.1 }),
                date: faker.date.past(),
                country: faker.address.country(),
              },
              {
                movieId: faker.datatype.uuid(),
                category: faker.commerce.productMaterial(),
                title: faker.commerce.productName(),
                rate: faker.datatype.number({ min: 0, max: 10, precision: 0.1 }),
                date: faker.date.past(),
                country: faker.address.country(),
              },
            ],
          },
          {
            id: faker.datatype.uuid(),
            categories: '넷플릭스',
            movie_list: [
              {
                movieId: faker.datatype.uuid(),
                category: faker.commerce.productMaterial(),
                title: faker.commerce.productName(),
                rate: faker.datatype.number({ min: 0, max: 10, precision: 0.1 }),
                date: faker.date.past(),
                country: faker.address.country(),
              },
              {
                movieId: faker.datatype.uuid(),
                category: faker.commerce.productMaterial(),
                title: faker.commerce.productName(),
                rate: faker.datatype.number({ min: 0, max: 10, precision: 0.1 }),
                date: faker.date.past(),
                country: faker.address.country(),
              },
              {
                movieId: faker.datatype.uuid(),
                category: faker.commerce.productMaterial(),
                title: faker.commerce.productName(),
                rate: faker.datatype.number({ min: 0, max: 10, precision: 0.1 }),
                date: faker.date.past(),
                country: faker.address.country(),
              },
              {
                movieId: faker.datatype.uuid(),
                category: faker.commerce.productMaterial(),
                title: faker.commerce.productName(),
                rate: faker.datatype.number({ min: 0, max: 10, precision: 0.1 }),
                date: faker.date.past(),
                country: faker.address.country(),
              },
              {
                movieId: faker.datatype.uuid(),
                category: faker.commerce.productMaterial(),
                title: faker.commerce.productName(),
                rate: faker.datatype.number({ min: 0, max: 10, precision: 0.1 }),
                date: faker.date.past(),
                country: faker.address.country(),
              },
              {
                movieId: faker.datatype.uuid(),
                category: faker.commerce.productMaterial(),
                title: faker.commerce.productName(),
                rate: faker.datatype.number({ min: 0, max: 10, precision: 0.1 }),
                date: faker.date.past(),
                country: faker.address.country(),
              },
              {
                movieId: faker.datatype.uuid(),
                category: faker.commerce.productMaterial(),
                title: faker.commerce.productName(),
                rate: faker.datatype.number({ min: 0, max: 10, precision: 0.1 }),
                date: faker.date.past(),
                country: faker.address.country(),
              },
            ],
          }
        ]
      })
    case 'POST':
      return res.status(201).json({
        data: {
          id: faker.datatype.uuid(),
        }
      })
    default:
      throw new Error('no support method')
  }
}