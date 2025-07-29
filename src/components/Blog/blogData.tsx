import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Introducing Next.js 15: What's New?",
    paragraph:
      "Next.js 15 focuses on faster builds and simplified data fetching. Learn about the key changes and how to upgrade your projects.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Samuyl Joshi",
      image: "/images/blog/author-01.png",
      designation: "Frontend Engineer",
    },
    tags: ["nextjs", "release"],
    publishDate: "July 2025",
  },
  {
    id: 2,
    title: "Tailwind CSS v4 Tips and Tricks",
    paragraph:
      "Tailwind CSS v4 introduces new utilities and a more intuitive config. Discover tips for customizing your design system.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Musharof Chy",
      image: "/images/blog/author-02.png",
      designation: "Content Writer",
    },
    tags: ["tailwind", "design"],
    publishDate: "June 2025",
  },
  {
    id: 3,
    title: "Why TypeScript Improves Developer Productivity",
    paragraph:
      "TypeScript provides type safety and IDE support that help catch errors early. See how it streamlines complex codebases.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Software Architect",
    },
    tags: ["typescript", "development"],
    publishDate: "May 2025",
  },
];
export default blogData;
