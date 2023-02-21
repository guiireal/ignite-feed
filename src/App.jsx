import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      name: "Guilherme França",
      avatar_url: "https://github.com/guiireal.png",
      role: "Software Engineer",
    },
    published_at: new Date("2023-02-21 15:00:00"),
    content: [
      {
        type: "PARAGRAPH",
        content: "Fala galeraa 👋",
      },
      {
        type: "PARAGRAPH",
        content: `Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀`,
      },
      {
        type: "LINK",
        content: "jane.design/doctorcare",
        url: "https://jane.design/doctorcare",
      },
      {
        type: "HASHTAG",
        content: "#novoprojeto",
      },
      {
        type: "HASHTAG",
        content: "#nlw",
      },
      {
        type: "HASHTAG",
        content: "#rocketseat",
      },
    ],
  },
  {
    id: 2,
    author: {
      name: "Mayk Brito",
      avatar_url: "https://github.com/maykbrito.png",
      role: "Educator",
    },
    published_at: new Date("2023-02-20 12:00:00"),
    content: [
      {
        type: "PARAGRAPH",
        content: "Salve galera!",
      },
      {
        type: "PARAGRAPH",
        content: `Top demais! 🚀`,
      },
    ],
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(({ id, author, content, published_at }) => (
            <Post
              key={id}
              author={author}
              content={content}
              publishedAt={published_at}
            />
          ))}
        </main>
      </div>
    </div>
  );
}
