export const singleProduct = [
  {
    id: 1,
    title: 'Pickle, The',
    img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/yCzdS1R27F675iSUIfOHQKxFpiB.jpg',
    info: {
      producer: 'Warner Bros. Pictures',
      price: '$58.94',
      genre: 'Comedy',
      export: 'Japan',
      quantity: 151,
      inStock: true,
    },
    chart: {
      dataKeys: [
        { name: 'reviews', color: '#82ca9d' },
        { name: 'orders', color: '#8884d8' },
        { name: 'stock', color: '#2a8ded' },
      ],
      data: [
        {
          name: 'Sun',
          reviews: 29,
          orders: 52,
          stock: 148,
        },
        {
          name: 'Mon',
          reviews: 34,
          orders: 32,
          stock: 116,
        },
        {
          name: 'Tue',
          reviews: 15,
          orders: 27,
          stock: 89,
        },
        {
          name: 'Wed',
          reviews: 22,
          orders: 28,
          stock: 61,
        },
        {
          name: 'Thu',
          reviews: 36,
          orders: 29,
          stock: 32,
        },
        {
          name: 'Fri',
          reviews: 14,
          orders: 30,
          stock: 2,
        },
        {
          name: 'Sat',
          reviews: 29,
          orders: 2,
          stock: 0,
        },
      ],
    },

    activities: [
      {
        text: '[user] sold [quantity] x [item] for [value]',
        time: '3 day ago',
      },
      {
        text: '[buyer] added [item] into their wishlist',
        time: '1 week ago',
      },
      {
        text: '[buyer] purchased [quantity] x [item] for [value]',
        time: '2 weeks ago',
      },
      {
        text: '[buyer] reviewed [item]',
        time: '1 month ago',
      },
      {
        text: '[user] sold [quantity] x [item] for [value]',
        time: '1 month ago',
      },
      {
        text: '[buyer] reviewed [item]',
        time: '2 months ago',
      },
    ],
  },
  {
    id: 2,
    title: 'American Splendor',
    img: 'https://m.media-amazon.com/images/M/MV5BMjA0MjYxNjY1MV5BMl5BanBnXkFtZTcwNDkwMjAwMQ@@._V1_QL75_UX100_CR0,0,100,148_.jpg',
    info: {
      producer: 'Sony Pictures Classics',
      price: '$15.40',
      genre: 'Comedy|Drama',
      export: 'USA',
      quantity: 92,
      inStock: true,
    },
    chart: {
      dataKeys: [
        { name: 'reviews', color: '#82ca9d' },
        { name: 'orders', color: '#8884d8' },
        { name: 'stock', color: '#2a8ded' },
      ],
      data: [
        {
          name: 'Sun',
          reviews: 20, // Random value for reviews on Sunday
          orders: 40, // Random value for orders on Sunday
          stock: 50, // Initial stock value
        },
        {
          name: 'Mon',
          reviews: 35, // Random value for reviews on Monday
          orders: 25, // Random value for orders on Monday
          stock: 25, // Initial stock value - orders on Monday
        },
        {
          name: 'Tue',
          reviews: 10, // Random value for reviews on Tuesday
          orders: 27, // Reduced order number for Tuesday
          stock: 0, // Initial stock (25) - Orders on Tuesday (27)
        },
        {
          name: 'Wed',
          reviews: 18, // Random value for reviews on Wednesday
          orders: 22, // Reduced order number for Wednesday
          stock: 5, // Initial stock (25) - Orders on Wednesday (22)
        },
        {
          name: 'Thu',
          reviews: 30, // Random value for reviews on Thursday
          orders: 25, // Reduced order number for Thursday
          stock: 0, // Initial stock (5) - Orders on Thursday (25)
        },
        {
          name: 'Fri',
          reviews: 12, // Random value for reviews on Friday
          orders: 10, // Reduced order number for Friday
          stock: 0, // Initial stock (0) - Orders on Friday (10)
        },
        {
          name: 'Sat',
          reviews: 25, // Random value for reviews on Saturday
          orders: 5, // Reduced order number for Saturday
          stock: 0, // Initial stock (0) - Orders on Saturday (5)
        },
      ],
    },
    activities: [
      {
        text: '[user] sold [quantity] x [item] for [value]',
        time: '3 day ago',
      },
      {
        text: '[buyer] added [item] into their wishlist',
        time: '1 week ago',
      },
      {
        text: '[buyer] purchased [quantity] x [item] for [value]',
        time: '2 weeks ago',
      },
      {
        text: '[buyer] reviewed [item]',
        time: '1 month ago',
      },
      {
        text: '[user] sold [quantity] x [item] for [value]',
        time: '1 month ago',
      },
      {
        text: '[buyer] reviewed [item]',
        time: '2 months ago',
      },
    ],
  },

  {
    id: 3,
    title: 'Oak, The (Balanta)',
    img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/7eNbNHfsm7SvyFb8LTzsCQ5WiMK.jpg',
    info: {
      producer: 'Universal Pictures',
      price: '$61.22',
      genre: 'Comedy|Drama',
      quantity: 151,
      inStock: true,
      color: '#2ff11b',
    },
    chart: {
      dataKeys: [
        { name: 'reviews', color: '#82ca9d' },
        { name: 'orders', color: '#8884d8' },
        { name: 'stock', color: '#2a8ded' },
      ],
      data: [
        {
          name: 'Sun',
          reviews: 18, // Random value for reviews on Sunday
          orders: 30, // Random value for orders on Sunday
          stock: 151, // Initial stock value
        },
        {
          name: 'Mon',
          reviews: 27, // Random value for reviews on Monday
          orders: 25, // Random value for orders on Monday
          stock: 121, // Initial stock value - orders on Monday
        },
        {
          name: 'Tue',
          reviews: 15, // Random value for reviews on Tuesday
          orders: 20, // Reduced order number for Tuesday
          stock: 101, // Initial stock (121) - Orders on Tuesday (20)
        },
        {
          name: 'Wed',
          reviews: 20, // Random value for reviews on Wednesday
          orders: 18, // Reduced order number for Wednesday
          stock: 83, // Initial stock (101) - Orders on Wednesday (18)
        },
        {
          name: 'Thu',
          reviews: 25, // Random value for reviews on Thursday
          orders: 15, // Reduced order number for Thursday
          stock: 68, // Initial stock (83) - Orders on Thursday (15)
        },
        {
          name: 'Fri',
          reviews: 14, // Random value for reviews on Friday
          orders: 12, // Reduced order number for Friday
          stock: 56, // Initial stock (68) - Orders on Friday (12)
        },
        {
          name: 'Sat',
          reviews: 35, // Random value for reviews on Saturday
          orders: 5, // Reduced order number for Saturday
          stock: 51, // Initial stock (56) - Orders on Saturday (5)
        },
        {
          name: 'Sun',
          reviews: 29, // Random value for reviews on Sunday
          orders: 8, // Reduced order number for Sunday
          stock: 43, // Initial stock (51) - Orders on Sunday (8)
        },
        {
          name: 'Mon',
          reviews: 24, // Random value for reviews on Monday
          orders: 15, // Reduced order number for Monday
          stock: 28, // Initial stock (43) - Orders on Monday (15)
        },
        {
          name: 'Tue',
          reviews: 17, // Random value for reviews on Tuesday
          orders: 10, // Reduced order number for Tuesday
          stock: 18, // Initial stock (28) - Orders on Tuesday (10)
        },
        {
          name: 'Wed',
          reviews: 28, // Random value for reviews on Wednesday
          orders: 12, // Reduced order number for Wednesday
          stock: 6, // Initial stock (18) - Orders on Wednesday (12)
        },
        {
          name: 'Thu',
          reviews: 19, // Random value for reviews on Thursday
          orders: 8, // Reduced order number for Thursday
          stock: 0, // Initial stock (6) - Orders on Thursday (8)
        },
      ],
    },
    activities: [
      {
        text: '[user] sold [quantity] x [item] for [value]',
        time: '3 day ago',
      },
      {
        text: '[buyer] added [item] into their wishlist',
        time: '1 week ago',
      },
      {
        text: '[buyer] purchased [quantity] x [item] for [value]',
        time: '2 weeks ago',
      },
      {
        text: '[buyer] reviewed [item]',
        time: '1 month ago',
      },
      {
        text: '[user] sold [quantity] x [item] for [value]',
        time: '1 month ago',
      },
      {
        text: '[buyer] reviewed [item]',
        time: '2 months ago',
      },
    ],
  },

  {
    id: 4,
    title: "Endurance: Shackleton's Legendary Antarctic Expedition, The",
    img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/7zWvRlfnDTbmcGw8F28PEx7KX2k.jpg',
    info: {
      producer: 'National Geographic',
      price: '$11.12',
      genre: 'Documentary',
      quantity: 92,
      inStock: true,
      color: '#8e90b6',
    },
    chart: {
      dataKeys: [
        { name: 'reviews', color: '#82ca9d' },
        { name: 'orders', color: '#8884d8' },
        { name: 'stock', color: '#2a8ded' },
      ],
      data: [
        {
          name: 'Sun',
          reviews: 36,
          orders: 6,
          stock: 92,
        },
        {
          name: 'Mon',
          reviews: 45,
          orders: 14,
          stock: 252,
        },
        {
          name: 'Tue',
          reviews: 18,
          orders: 12,
          stock: 229,
        },
        {
          name: 'Wed',
          reviews: 29,
          orders: 9,
          stock: 209,
        },
        {
          name: 'Thu',
          reviews: 27,
          orders: 11,
          stock: 187,
        },
        {
          name: 'Fri',
          reviews: 20,
          orders: 8,
          stock: 167,
        },
        {
          name: 'Sat',
          reviews: 37,
          orders: 7,
          stock: 151,
        },
      ],
    },
  },
];
