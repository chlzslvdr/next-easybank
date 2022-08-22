import type { NextPage } from "next";
import Image from "next/image";
import styles from "@/styles/components/ArticleCard/ArticleCard.module.scss";

const CDN_URL = "https://velaris.sirv.com/easybank";

const ArticleCard: NextPage = ({ article }: any) => {
  return (
    <div className={styles.container}>
      <Image
        className={styles.image}
        alt={article.title}
        src={`${CDN_URL}/${article.image}`}
        width={250}
        height={200}
      />
      <div className={styles.articleInfo}>
        <div className={styles.author}> By {article.author}</div>
        <div className={styles.title}>{article.title}</div>
        <div className={styles.excerpt}>{article.excerpt}</div>
      </div>
    </div>
  );
};

export default ArticleCard;
