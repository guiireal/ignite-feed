import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

export function Comment({ content }) {
  return (
    <div className={styles.comment}>
      <Avatar
        src="https://github.com/diego3g.png"
        alt="Avatar do usuário que está comentando"
        hasBorder={false}
      />

      <div className={styles["comment-box"]}>
        <div className={styles["comment-content"]}>
          <header>
            <div className={styles["author-and-time"]}>
              <strong>Diego</strong>
              <time
                title="20 de fevereiro de 2023 às 19h40"
                dateTime="2023-02-20 19:40:00"
              >
                Cerca de 1h atrás
              </time>
            </div>
            <button title="Excluir comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
