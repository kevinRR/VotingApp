import { v4 as uuid } from 'uuid';

export const areas = [
  {
    id: uuid(),
    address: {
      country: 'India',
      state: 'Delhi',
      city: 'Gandhinagar',
      street: '2849 Fulton Street'
    },
    code: 'Dhili-Gaanghi-01',
    phone: '304-428-3097'
  },
  {
    id: uuid(),
    address: {
      country: 'India',
      state: 'Rajastan',
      city: 'Kandhar',
      street: '1865  Pleasant Hill Road'
    },
    avatarUrl: '/static/images/avatars/avatar_4.png',
    createdAt: 1555016400000,
    email: 'cao.yu@devias.io',
    code: 'Raj-Kan-22',
    phone: '712-351-5711'
  }
];
