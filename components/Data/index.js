import bcrypt from 'bcryptjs';
const data = {
  users: [
    {
      name: "osama",
      email: "admin@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
    {
      name: "test",
      email: "user@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
  ],
  products: [
    {
      id: 1,
      name: "LAPTOP",
      slug: "lapt123op",
      category: "Shirts",
      image: "/assets/laptop.png",
      price: 799.99,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description:
        "Et placeat odio voluptas saepe ullam enim sed. Sint rem sint. Ex enim aperiam consequatur. Est temporibus ab. Pariatur aut ut temporibus culpa. Aut adipisci veniam esse. Quidem dolor corporis consequuntur non sunt et neque. Aut dolorem repellat quo architecto sint minima doloremque. At quae laborum incidunt vel voluptas dolor similique aut. Aut sunt saepe tempore eos sint ut amet voluptatibus dicta. Nihil nemo animi. Est laboriosam tempore. Porro id voluptates a nesciunt natus qui. Qui mollitia iusto. Perspiciatis reiciendis laborum consequuntur sint porro omnis et facere. Voluptatem vitae quo. Similique atque cumque culpa temporibus consequatur voluptatibus id. Cupiditate alias quas non ab veritatis et. Sed et qui consequatur aut. Eum consequuntur necessitatibus veritatis voluptatem qui velit repellat numquam tempore. Qui quam eos modi. Libero corporis ut et. Eligendi est expedita aspernatur non repellendus nihil perferendis. Et deserunt doloremque esse. Iusto veniam odio consequatur sint illum. Quis dolor doloribus. Nemo ut sit adipisci dolores iure. Est qui rerum ullam mollitia molestiae magnam porro at fugit. Neque ut debitis ut porro rerum. Occaecati temporibus voluptatem quo eaque. Voluptas impedit veritatis dolore assumenda. Aut doloribus unde repellat pariatur consequatur. Blanditiis voluptas aut tempora facilis fugi.",
    },
    {
      id: 2,
      name: "Canon Eos 80D DSLR Camera",
      slug: "laptasd123op",
      category: "Shirts",
      image: "/assets/APPLE AIRPODS.png",
      price: 799.99,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description:
        "Et placeat odio voluptas saepe ullam enim sed. Sint rem sint. Ex enim aperiam consequatur. Est temporibus ab. Pariatur aut ut temporibus culpa. Aut adipisci veniam esse. Quidem dolor corporis consequuntur non sunt et neque. Aut dolorem repellat quo architecto sint minima doloremque. At quae laborum incidunt vel voluptas dolor similique aut. Aut sunt saepe tempore eos sint ut amet voluptatibus dicta. Nihil nemo animi. Est laboriosam tempore. Porro id voluptates a nesciunt natus qui. Qui mollitia iusto. Perspiciatis reiciendis laborum consequuntur sint porro omnis et facere. Voluptatem vitae quo. Similique atque cumque culpa temporibus consequatur voluptatibus id. Cupiditate alias quas non ab veritatis et. Sed et qui consequatur aut. Eum consequuntur necessitatibus veritatis voluptatem qui velit repellat numquam tempore. Qui quam eos modi. Libero corporis ut et. Eligendi est expedita aspernatur non repellendus nihil perferendis. Et deserunt doloremque esse. Iusto veniam odio consequatur sint illum. Quis dolor doloribus. Nemo ut sit adipisci dolores iure. Est qui rerum ullam mollitia molestiae magnam porro at fugit. Neque ut debitis ut porro rerum. Occaecati temporibus voluptatem quo eaque. Voluptas impedit veritatis dolore assumenda. Aut doloribus unde repellat pariatur consequatur. Blanditiis voluptas aut tempora facilis fugi.",
    },
    {
      id: 3,
      name: "Logitech G-Series Gaming Mouse",
      slug: "laasdpt123op",
      category: "Shirts",
      image: "/assets/canon.png",
      price: 799.99,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description:
        "Et placeat odio voluptas saepe ullam enim sed. Sint rem sint. Ex enim aperiam consequatur. Est temporibus ab. Pariatur aut ut temporibus culpa. Aut adipisci veniam esse. Quidem dolor corporis consequuntur non sunt et neque. Aut dolorem repellat quo architecto sint minima doloremque. At quae laborum incidunt vel voluptas dolor similique aut. Aut sunt saepe tempore eos sint ut amet voluptatibus dicta. Nihil nemo animi. Est laboriosam tempore. Porro id voluptates a nesciunt natus qui. Qui mollitia iusto. Perspiciatis reiciendis laborum consequuntur sint porro omnis et facere. Voluptatem vitae quo. Similique atque cumque culpa temporibus consequatur voluptatibus id. Cupiditate alias quas non ab veritatis et. Sed et qui consequatur aut. Eum consequuntur necessitatibus veritatis voluptatem qui velit repellat numquam tempore. Qui quam eos modi. Libero corporis ut et. Eligendi est expedita aspernatur non repellendus nihil perferendis. Et deserunt doloremque esse. Iusto veniam odio consequatur sint illum. Quis dolor doloribus. Nemo ut sit adipisci dolores iure. Est qui rerum ullam mollitia molestiae magnam porro at fugit. Neque ut debitis ut porro rerum. Occaecati temporibus voluptatem quo eaque. Voluptas impedit veritatis dolore assumenda. Aut doloribus unde repellat pariatur consequatur. Blanditiis voluptas aut tempora facilis fugi.",
    },
    {
      id: 4,
      name: "Amazon Echo Dot 3rd Generation",
      slug: "lapt1gda23op",
      category: "Shirts",
      image: "/assets/PS5.webp",
      price: 799.99,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description:
        "Et placeat odio voluptas saepe ullam enim sed. Sint rem sint. Ex enim aperiam consequatur. Est temporibus ab. Pariatur aut ut temporibus culpa. Aut adipisci veniam esse. Quidem dolor corporis consequuntur non sunt et neque. Aut dolorem repellat quo architecto sint minima doloremque. At quae laborum incidunt vel voluptas dolor similique aut. Aut sunt saepe tempore eos sint ut amet voluptatibus dicta. Nihil nemo animi. Est laboriosam tempore. Porro id voluptates a nesciunt natus qui. Qui mollitia iusto. Perspiciatis reiciendis laborum consequuntur sint porro omnis et facere. Voluptatem vitae quo. Similique atque cumque culpa temporibus consequatur voluptatibus id. Cupiditate alias quas non ab veritatis et. Sed et qui consequatur aut. Eum consequuntur necessitatibus veritatis voluptatem qui velit repellat numquam tempore. Qui quam eos modi. Libero corporis ut et. Eligendi est expedita aspernatur non repellendus nihil perferendis. Et deserunt doloremque esse. Iusto veniam odio consequatur sint illum. Quis dolor doloribus. Nemo ut sit adipisci dolores iure. Est qui rerum ullam mollitia molestiae magnam porro at fugit. Neque ut debitis ut porro rerum. Occaecati temporibus voluptatem quo eaque. Voluptas impedit veritatis dolore assumenda. Aut doloribus unde repellat pariatur consequatur. Blanditiis voluptas aut tempora facilis fugi.",
    },
    {
      id: 5,
      name: "Sony Playstation 4 Pro",
      slug: "lapt12asdff3op",
      category: "Shirts",
      image: "/assets/logitech.png",
      price: 799.99,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description:
        "Et placeat odio voluptas saepe ullam enim sed. Sint rem sint. Ex enim aperiam consequatur. Est temporibus ab. Pariatur aut ut temporibus culpa. Aut adipisci veniam esse. Quidem dolor corporis consequuntur non sunt et neque. Aut dolorem repellat quo architecto sint minima doloremque. At quae laborum incidunt vel voluptas dolor similique aut. Aut sunt saepe tempore eos sint ut amet voluptatibus dicta. Nihil nemo animi. Est laboriosam tempore. Porro id voluptates a nesciunt natus qui. Qui mollitia iusto. Perspiciatis reiciendis laborum consequuntur sint porro omnis et facere. Voluptatem vitae quo. Similique atque cumque culpa temporibus consequatur voluptatibus id. Cupiditate alias quas non ab veritatis et. Sed et qui consequatur aut. Eum consequuntur necessitatibus veritatis voluptatem qui velit repellat numquam tempore. Qui quam eos modi. Libero corporis ut et. Eligendi est expedita aspernatur non repellendus nihil perferendis. Et deserunt doloremque esse. Iusto veniam odio consequatur sint illum. Quis dolor doloribus. Nemo ut sit adipisci dolores iure. Est qui rerum ullam mollitia molestiae magnam porro at fugit. Neque ut debitis ut porro rerum. Occaecati temporibus voluptatem quo eaque. Voluptas impedit veritatis dolore assumenda. Aut doloribus unde repellat pariatur consequatur. Blanditiis voluptas aut tempora facilis fugi.",
    },
  ],
};
export default data;
