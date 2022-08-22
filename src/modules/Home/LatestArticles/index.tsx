import type { NextPage } from "next";
import ArticleCard from "@/components/ArticleCard/index";
import { ARTICLE_EXCERPTS } from "@/common/constants/article-excerpts";
import styles from "@/styles/modules/Home/LatestArticles.module.scss";

const LatestArticles: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Latest Articles</div>

      <div className={styles.card}>
        {ARTICLE_EXCERPTS.map((article: any) => {
          return <ArticleCard key={article.key} article={article} />;
        })}
      </div>
    </div>
  );
};

export default LatestArticles;
