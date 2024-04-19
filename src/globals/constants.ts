import { ProjectProps } from "../models/Project";

export const myProjects: ProjectProps[] = [
  {
    id: 1,
    icon: "social-media-icon.png",
    name: "Social media app",
    link: "https://zzzdreamm.github.io/social-app/",
    description:
      "A social media app that allows you to post and comment, like, dislike, and delete posts.",
    hoverImage: [
      "social-app3.png",
      "friendLink-3.jpg",
      "friendLink-1.png",
      "friendLink-2.jpg",
    ],
    side: "left",
    backgroundColor: "#f5f5f5",
  },
  {
    id: 2,
    icon: "tradeiti-logo.png",
    name: "TradEiti",
    link: "https://github.com/ZZZdreamm/Tradeiti",
    description:
      "TradEITI is a web application designed to facilitate the exchange of class hours among students. The problem I have encountered during my first year of studies was the lack of an available platform for exchanging class hours between students.",
    hoverImage: ["tradeiti1.png", "tradeiti2.png", "tradeiti3.png"],
    side: "right",
    backgroundColor: "black",
  },
  {
    id: 3,
    icon: "kahoot-icon.webp",
    name: "Kahoot like game",
    link: "https://zzzdreamm.github.io/Cacarrot/",
    description:
      "A game that allows you to create and play quizzes with others",
    hoverImage: ["cacarrot-1.png", "cacarrot-2.png", "cacarrot-3.jpg"],
    side: "left",
    backgroundColor: "#aaaaaa",
  },

  {
    id: 4,
    icon: "news-icon.png",
    name: "News app",
    link: "https://hot-news-cyan.vercel.app/",
    description:
      "A news app which allows searching internet for most recent news on topic of your choice.",
    hoverImage: ["hot-news-1.png", "hot-news-2.png", "hot-news-3.png"],
    side: "right",
    backgroundColor: "#dddddd",
  },
  {
    id: 5,
    icon: "nestjs-icon.jpg",
    name: "NestJS server",
    link: "https://github.com/ZZZdreamm/nestJS-server",
    description:
      "A backend server in Node.js using NestJS framework used for all apps that were mentioned before.",
    hoverImage: [
      "nestjs-icon3.jpg",
      "firebase-icon.png",
      "jwttoken.png",
      "swagger-icon.jpg",
    ],
    side: "left",
    backgroundColor: "#5f5f5f",
  },
];
