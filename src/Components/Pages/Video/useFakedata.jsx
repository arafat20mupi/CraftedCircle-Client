import { faker } from '@faker-js/faker';

const createRandomUser = () => {
    return {
        id: `user_${Date.now()}_${Math.floor(Math.random() * 1000)}`, 
        name: faker.name.fullName(),
        email: faker.internet.email(),
        avatar: faker.image.avatar(),
        phone: faker.phone.number(),
        date: faker.date.past().toLocaleString(),
        description: faker.lorem.sentence(),
        address: {
            city: faker.address.city(),
            street: faker.address.streetAddress(),
        },
    };
};
const users = faker.helpers.multiple(createRandomUser, {
    count: 50,
  });
const useFakedata = () => {
    return {users}
};

export default useFakedata;