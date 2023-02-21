import styles from "./Avatar.module.css";

export function Avatar({ src, alt = "Avatar", hasBorder = true }) {
  return (
    <img
      className={hasBorder ? styles["avatar-with-border"] : styles.avatar}
      src={src}
      alt={alt}
    />
  );
}
