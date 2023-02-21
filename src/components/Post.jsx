import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import React, { useState } from "react";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const publishedAtFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  const publishedAtRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleStoreComment(event) {
    event.preventDefault();

    setComments([...comments, newComment]);
    setNewComment("");
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatar_url} alt="Avatar do usuário" />
          <div className={styles["author-info"]}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={publishedAtFormatted} dateTime={publishedAt.toISOString()}>
          {publishedAtRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>
        {content.map((item, index) => {
          if (item.type === "PARAGRAPH") {
            return <p key={index}>{item.content}</p>;
          } else if (item.type === "LINK") {
            return (
              <p key={index}>
                <a
                  href={item.url ?? item.content}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.content}
                </a>
              </p>
            );
          } else if (item.type === "HASHTAG") {
            return (
              <React.Fragment key={index}>
                <a href="#">{item.content}</a>{" "}
              </React.Fragment>
            );
          } else {
            return <React.Fragment key={index}>{item.content}</React.Fragment>;
          }
        })}
      </div>
      <form onSubmit={handleStoreComment} className={styles["comment-form"]}>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder="Deixe um comentário"
          value={newComment}
          onChange={(event) => setNewComment(event.target.value)}
        />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles["comment-list"]}>
        {comments.map((comment) => (
          <Comment content={comment} />
        ))}
      </div>
    </article>
  );
}
