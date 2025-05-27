import React from 'react';

const blogPosts = [
  {
    title: 'The Art of Handcrafted Jewelry',
    date: 'March 15, 2025',
    image: '/images/blog_img01.png',
    excerpt: 'Discover how each piece of our jewelry is thoughtfully designed and meticulously crafted by hand, blending traditional techniques with modern elegance.'
  },
  {
    title: 'Top 5 Jewelry Trends in 2025',
    date: 'April 5, 2025',
    image: '/images/blog_img02.jpg',
    excerpt: 'Layered chains, earthy gemstones, mixed metals, and sustainable materials are reshaping how we accessorize in 2025. See what’s in vogue this year!'
  },
  {
    title: 'Caring for Your Handmade Jewelry',
    date: 'April 18, 2025',
    image: '/images/blog_img03.jpg',
    excerpt: 'Learn the best ways to maintain the beauty of your handcrafted jewelry—from cleaning and storing tips to protecting delicate elements.'
  },
  {
    title: 'Why Handcrafted Jewelry is Always in Style',
    date: 'May 2, 2025',
    image: '/images/blog_img04.jpg',
    excerpt: 'Handmade jewelry carries timeless appeal, unique character, and personal meaning that mass-produced pieces simply can’t match. Here’s why it never goes out of fashion.'
  },
  {
    title: 'Behind the Scenes: Our Jewelry Studio',
    date: 'May 10, 2025',
    image: '/images/blog_img05.jpg',
    excerpt: 'Take a peek into our artisan studio where every piece begins its journey—from sketching to soldering to final polish, it’s all about the process and passion.'
  },
  {
    title: 'How to Style Jewelry with Your Everyday Outfits',
    date: 'May 18, 2025',
    image: '/images/blog_img06.jpg',
    excerpt: 'Jewelry isn’t just for special occasions—learn how to pair your favorite handmade accessories with casual, work, and layered outfits effortlessly.'
  }
];

const Blog = () => {
  return (
    <div className="container blog-page" data-aos="fade-down">
      <h1 className="blog-title">Our Journal</h1>
      <div className="blog-grid">
        {blogPosts.map((post, index) => (
          <div className="blog-card" key={index} data-aos="fade-down"
                  data-aos-delay={index * 100}>
            <img src={post.image} alt={post.title} className="blog-image" />
            <div className="blog-content">
              <h2 className="blog-heading">{post.title}</h2>
              <p className="blog-date">{post.date}</p>
              <p className="blog-excerpt">{post.excerpt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
