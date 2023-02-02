const data = {
  products: [
    // each product is an object
    {
      name: 'Nike Slim Shirt',
      //it is what you see on the url, so it will be url friendly, like a url
      slug: 'nike-slim-shirt',
      category: 'Shirts',
      //we have to add / before images folder path
      image: '/images/p1.jpg',
      price: 120,
      countInStock: 10,
      brand: 'nike',
      rating: 4.5,
      numReviews: 10,
      descriptiton: 'high quality shirt',
    },
    {
      name: 'Nike Slim Pant',
      //it is what you see on the url, so it will be url friendly, like a url
      slug: 'nike-slim-pant',
      category: 'Pants',
      image: '/images/p2.jpg',
      price: 25,
      countInStock: 15,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 14,
      descriptiton: 'high quality product',
    },
    {
      name: 'Adidas Fit Shirt',
      //it is what you see on the url, so it will be url friendly, like a url
      slug: 'adidas-fit-shirt',
      category: 'Shirts',
      image: '/images/p3.jpg',
      price: 250,
      countInStock: 20,
      brand: 'Adidas',
      rating: 4.0,
      numReviews: 10,
      descriptiton: 'high quality shirt',
    },
    {
      name: 'Adidas Fit Pant',
      //it is what you see on the url, so it will be url friendly, like a url
      slug: 'adidas-fit-pant',
      category: 'Pants',
      image: '/images/p4.jpg',
      price: 65,
      countInStock: 5,
      brand: 'Puma',
      rating: 4.0,
      numReviews: 10,
      descriptiton: 'high quality shirt',
    },
  ],
};

export default data;
