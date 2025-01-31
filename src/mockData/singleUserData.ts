export type UserInfo = {
  id: number;
  title: string;
  firstName: string;
  lastName: string;
  emailAddress: string;
  phoneNumber: string;
  img: string;
  salesTotal: string;
  verified: boolean;
  info: {
    username: string;
    fullname: string;
    email: string;
    phone: string;
    salesTotal: string;
    status: string;
  };
  chart: {
    dataKeys: { name: string; color: string }[];
    data: {
      name: string;
      sales: number;
      revenue: number;
      comission: number;
    }[];
  };
  activities: {
    text: string;
    time: string;
  }[];
};

export const singleUser: UserInfo[] = [
  {
    id: 1,
    title: 'Pierce Frost',
    firstName: 'Pierce',
    lastName: 'Frost',
    emailAddress: 'pfrost0@digg.com',
    phoneNumber: '(123) 456-7890',
    img: 'https://randomuser.me/api/portraits/men/2.jpg',
    salesTotal: '$12418.99',
    verified: true,
    info: {
      username: 'pFrost82',
      fullname: 'Pierce Frost',
      email: 'pfrost0@digg.com',
      phone: '(123) 456-7890',
      salesTotal: '$12418.99',
      status: 'verified',
    },
    chart: {
      dataKeys: [
        {
          name: 'sales',
          color: '#82ca9d',
        },
        {
          name: 'revenue',
          color: '#8884d8',
        },
        {
          name: 'comission',
          color: '#2a8ded',
        },
      ],
      data: [
        {
          name: 'Sun',
          sales: 42,
          revenue: 3492,
          comission: 279.36,
        },
        {
          name: 'Mon',
          sales: 30,
          revenue: 2566,
          comission: 205.28,
        },
        {
          name: 'Tue',
          sales: 25,
          revenue: 1867,
          comission: 149.36,
        },
        {
          name: 'Wed',
          sales: 33,
          revenue: 4243,
          comission: 339.44,
        },
        {
          name: 'Thu',
          sales: 22,
          revenue: 1654,
          comission: 132.32,
        },
        {
          name: 'Fri',
          sales: 48,
          revenue: 5387,
          comission: 430.96,
        },
        {
          name: 'Sat',
          sales: 19,
          revenue: 1902,
          comission: 152.16,
        },
      ],
    },
    activities: [
      {
        text: '[user] sold [quantity] x [item] for [value]',
        time: '3 day ago',
      },
      {
        text: '[user] sold [quantity] x [item] for [value]',
        time: '1 week ago',
      },
      {
        text: '[user] sold [quantity] x [item] for [value]',
        time: '2 weeks ago',
      },
      {
        text: '[user] sold [quantity] x [item] for [value]',
        time: '1 month ago',
      },
      {
        text: '[user] sold [quantity] x [item] for [value]',
        time: '1 month ago',
      },
      {
        text: '[user] sold [quantity] x [item] for [value]',
        time: '2 months ago',
      },
    ],
  },
  {
    id: 2,
    title: 'Maddi Minget',
    firstName: 'Maddi',
    lastName: 'Minget',
    emailAddress: 'mminget1@woothemes.com',
    phoneNumber: '(234) 567-8901',
    img: 'https://randomuser.me/api/portraits/women/67.jpg',
    salesTotal: '$9040.21',
    verified: false,
    info: {
      username: 'mMinget23',
      fullname: 'Maddi Minget',
      email: 'mminget1@woothemes.com',
      phone: '(234) 567-8901',
      salesTotal: '$9040.21',
      status: 'unverified',
    },
    chart: {
      dataKeys: [
        {
          name: 'sales',
          color: '#82ca9d',
        },
        {
          name: 'revenue',
          color: '#8884d8',
        },
        {
          name: 'comission',
          color: '#2a8ded',
        },
      ],
      data: [
        {
          name: 'Sun',
          sales: 32,
          revenue: 2783,
          comission: 222.64,
        },
        {
          name: 'Mon',
          sales: 23,
          revenue: 2013,
          comission: 161.04,
        },
        {
          name: 'Tue',
          sales: 45,
          revenue: 3887,
          comission: 310.96,
        },
        {
          name: 'Wed',
          sales: 51,
          revenue: 4449,
          comission: 355.92,
        },
        {
          name: 'Thu',
          sales: 18,
          revenue: 1582,
          comission: 126.56,
        },
        {
          name: 'Fri',
          sales: 37,
          revenue: 3147,
          comission: 251.76,
        },
        {
          name: 'Sat',
          sales: 26,
          revenue: 2263,
          comission: 181.04,
        },
      ],
    },
    activities: [
      {
        text: '[user] sold [quantity] x [item] for [value]',
        time: '3 day ago',
      },
      {
        text: '[user] sold [quantity] x [item] for [value]',
        time: '1 week ago',
      },
      {
        text: '[user] sold [quantity] x [item] for [value]',
        time: '2 weeks ago',
      },
      {
        text: '[user] sold [quantity] x [item] for [value]',
        time: '1 month ago',
      },
      {
        text: '[user] sold [quantity] x [item] for [value]',
        time: '1 month ago',
      },
      {
        text: '[user] sold [quantity] x [item] for [value]',
        time: '2 months ago',
      },
    ],
  },
  {
    id: 3,
    title: 'NSA Evasion Champion',
    firstName: 'Edward',
    lastName: 'Snowden',
    emailAddress: 'Fuck@NSA.gov',
    phoneNumber: '(420) 232-2356',
    img: 'https://images-na.ssl-images-amazon.com/images/I/91daxCrnYXL.jpg',
    salesTotal: '$420.69',
    verified: true,
    info: {
      username: 'Ed Snowden',
      fullname: 'Edward Snowden',
      email: 'Fuck@NSA.gov',
      phone: '(420) 232-2356',
      salesTotal: '$420.69',
      status: 'verified',
    },
    chart: {
      dataKeys: [
        {
          name: 'sales',
          color: '#82ca9d',
        },
        {
          name: 'revenue',
          color: '#8884d8',
        },
        {
          name: 'comission',
          color: '#2a8ded',
        },
      ],
      data: [
        {
          name: 'Sun',
          sales: 42,
          revenue: 3492,
          comission: 279.36,
        },
        {
          name: 'Mon',
          sales: 30,
          revenue: 2566,
          comission: 205.28,
        },
        {
          name: 'Tue',
          sales: 25,
          revenue: 1867,
          comission: 149.36,
        },
        {
          name: 'Wed',
          sales: 33,
          revenue: 4243,
          comission: 339.44,
        },
        {
          name: 'Thu',
          sales: 22,
          revenue: 1654,
          comission: 132.32,
        },
        {
          name: 'Fri',
          sales: 48,
          revenue: 5387,
          comission: 430.96,
        },
        {
          name: 'Sat',
          sales: 19,
          revenue: 1902,
          comission: 152.16,
        },
      ],
    },
    activities: [
      {
        text: '[user] sold [quantity] x [item] for [value]',
        time: '3 day ago',
      },
      {
        text: '[user] sold [quantity] x [item] for [value]',
        time: '1 week ago',
      },
      {
        text: '[user] sold [quantity] x [item] for [value]',
        time: '2 weeks ago',
      },
      {
        text: '[user] sold [quantity] x [item] for [value]',
        time: '1 month ago',
      },
      {
        text: '[user] sold [quantity] x [item] for [value]',
        time: '1 month ago',
      },
      {
        text: '[user] sold [quantity] x [item] for [value]',
        time: '2 months ago',
      },
    ],
  },
];