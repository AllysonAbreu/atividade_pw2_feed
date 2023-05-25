import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import styles from "./App.module.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/allysonabreu.png",
      name: "Allyson Abreu",
      role: "BackEnd Develop/Data Scientist",
    },
    content: [
      { type: "paraghaph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifólio. Trata da aplicação de um modelo de Machine Learning para prever a probabilidade de um paciente ter ou não diabetes. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "👉 cliqueaqui/mlaleatorio" },
    ],
    publishedAt: new Date("2023-05-24 12:00:11"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/fabioladiniz97.png",
      name: "Fabíola Diniz",
      role: "Dev FullStack",
    },
    content: [
      { type: "paraghaph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de publicar um artigo sobre como criar um site do zero usando ReactJS, NextJS e TypeScript. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "👉 sitealeatorio/reactjs" },
    ],
    publishedAt: new Date("2023-05-24 12:00:11"),
  },
  {
    id: 3,
    author: {
      avatarUrl: "https://github.com/pk-anderson.png",
      name: "Patrick Anderson",
      role: "DevOps Engineer",
    },
    content: [
      { type: "paraghaph", content: "Fala pessoal 👋" },
      {
        type: "paragraph",
        content:
          "Finalmente finalizei meu novo portfólio. Acesse e deixe seu feedback",
      },
      {
        type: "paragraph",
        content: "Aguardo vocês lá!",
      },
      { type: "link", content: "👉 devops.site" },
    ],
    publishedAt: new Date("2023-05-24 12:00:11"),
  },
];

export function App(props) {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {/* Listagem de posts */}
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
