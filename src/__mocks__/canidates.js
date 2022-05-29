import { v4 as uuid } from 'uuid';

export const canidates = [
  {
    id: uuid(),
    address: {
      country: 'India',
      state: 'West Bengal',
      city: 'Kolkota',
      street: '2849 Fulton Street'
    },
    avatarUrl: '/static/images/avatars/avatar_3.png',
    createdAt: 1555016400000,
    // email: 'ekaterina.tankova@devias.io',
    name: 'Ekaterina Tankova',
    party_name: 'Party A',
    phone: '304-428-3097'
  },
  {
    id: uuid(),
    address: {
      country: 'India',
      state: 'Dheli',
      city: 'Gandhinagar',
      street: '1865  Pleasant Hill Road'
    },
    avatarUrl: '/static/images/avatars/avatar_4.png',
    createdAt: 1555016400000,
    // email: 'cao.yu@devias.io',
    name: 'Cao Yu',
    party_name: 'Party B',
    phone: '712-351-5711'
  },
  {
    id: uuid(),
    address: {
      country: 'India',
      state: 'Hariyana',
      city: 'Pathanpur',
      street: '4894  Lakeland Park Drive'
    },
    avatarUrl: '/static/images/avatars/avatar_2.png',
    createdAt: 1555016400000,
    // email: 'alexa.richardson@devias.io',
    name: 'Alexa Richardson',
    party_name: 'Party C',
    phone: '770-635-2682'
  },
  {
    id: uuid(),
    address: {
      country: 'India',
      state: 'Odisa',
      city: 'Jamnagar',
      street: '4158  Hedge Street'
    },
    avatarUrl: '/static/images/avatars/avatar_5.png',
    createdAt: 1554930000000,
    // email: 'anje.keizer@devias.io',
    name: 'Anje Keizer',
    party_name: 'Party D',
    phone: '908-691-3242'
  },
];
