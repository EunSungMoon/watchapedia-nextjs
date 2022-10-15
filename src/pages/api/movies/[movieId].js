import { faker } from '@faker-js/faker';

export default function handler(req, res) {
  const { movieId } = req.query;
  switch (req.method) {
    case 'GET':
      return res.status(200).json({
        item: {
          movieId: movieId,
          title: faker.commerce.productName(),
          country: faker.address.country(),
          description: faker.commerce.productDescription(),
          openDate: faker.date.past(),
          genre: [faker.commerce.product, faker.commerce.product()],
          hour: faker.datatype.number({ min: 1, max: 12 }),
          minute: faker.datatype.number({ min: 0, max: 59 }),
          age: faker.datatype.number(),
          staff:[
            {
              name:faker.name.fullName(),
              position:faker.name.jobType(),
            }
          ]
        }
      })
  }
}