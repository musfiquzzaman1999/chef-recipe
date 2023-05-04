import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// this is bonus section. show tranding racipes

const cards = [
  {
    id: 1,
    title: "Pizza ",
    imageSrc: "https://img.freepik.com/free-photo/mixed-pizza-with-various-ingridients_140725-3790.jpg?w=900&t=st=1683193597~exp=1683194197~hmac=ccefdd800d40e980ba7db6f960f0d5ac1bd6f19f754d0c9daa1103a2dde06261",
    description: "Originating from Naples, pizza is one of the most popular and beloved foods in Italy. It consists of a thin, flat dough topped with tomato sauce, cheese, and various other ingredients such as meat, vegetables, and herbs. Pizza is typically baked in a wood-fired oven, which gives it a crispy crust and smoky flavor.",
  },
  {
    id: 2,
    title: "Pasta",
    imageSrc: "https://img.freepik.com/free-photo/lifestyle-food-pasta-yummy-gourmet_1350-50.jpg?w=900&t=st=1683193555~exp=1683194155~hmac=ef0260b6977e8b75b8efad8af2f3bfbfe2fefcccc63344ef8aaa7d9f46f4f53d",
    description:
      " Pasta is another staple food in Italy and comes in many shapes and sizes. It is usually made from wheat flour, water, and sometimes eggs, and is cooked by boiling it in salted water. It can be served with a variety of sauces, including tomato-based sauces, cream-based sauces, and pesto. Some popular pasta dishes include spaghetti carbonara, lasagne, and fettuccine alfredo.",
  },
  {
    id: 3,
    title: "Gelato",
    imageSrc: "https://img.freepik.com/free-photo/coold-sweet-ice-cream-with-chocolate_144627-7294.jpg?w=900&t=st=1683193670~exp=1683194270~hmac=58777f76d68e8a23af32f2cdd3ef8a3d8fefd0fcc084ac05bd486de1fdcd318a",
    description:
      "Gelato is a type of Italian ice cream that is known for its rich, creamy texture and intense flavors. It is made from milk, sugar, and various flavorings such as fruit, chocolate, or nuts. Unlike traditional ice cream, gelato is churned at a slower speed, which makes it denser and creamier. Some popular gelato flavors include pistachio, chocolate, and stracciatella."






      
  }
];

const AnimatedCard = ({ id, title, imageSrc, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="card relative rounded-lg overflow-hidden shadow-lg"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      layout
    >
      <motion.img
        src={imageSrc}
        alt={title}
        className="h-3/5 object-cover object-center transform-gpu transition-transform hover:scale-105"
        transition={{ duration: 0.2 }}
      />
      <motion.h2
        className="text-lg font-semibold p-2 transition-colors hover:text-pink-500"
        whileHover={{ color: "#FEDCBA" }}
        transition={{ duration: 0.2 }}
      >
        {title}
      </motion.h2>
      <AnimatePresence>
        {isHovered && (
          <motion.p
            className="absolute bottom-0 left-0 right-0 py-2 px-4 bg-white bg-opacity-80 shadow-lg m-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {description}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Extra = () => {
  return (
    <div className="pb-20 mt-12 md:ml-5 lg:ml-5 ml-0">
        <h1 className="text-center text-5xl mb-10 font-semibold ">our trending recipes</h1>
        <div className="flex justify-center gap-4 mt-32">
      {cards.map((card) => (
        <AnimatedCard key={card.id} {...card} />
      ))}
    </div>
    </div>
  );
};

export default Extra;
