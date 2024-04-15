import { useState, useEffect} from "react";
import Layout from "@/Components/Layout";
import styles from "./end.module.css";
import axios from "axios";
import Link from "next/link";

export default function End() {
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
  const keyword = "carbon footprint";
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const callNews = () => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=${keyword}&from=2024-04-13&sortBy=popularity&apiKey=${API_KEY}`
      )
      .then(function (response) {
        setNews(response.data.articles.slice(0, 2));
        setIsLoading(false);
      })
      .catch(function (error) {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    callNews();
  }, []);

  return (
    <Layout>
      <section className={styles.end}>
        <div className={styles.text}>
          <p>Thank you!</p>
        </div>
        <section className={styles.newsContainer}>
          <h2>{keyword} news</h2>

          <div className={styles.news}>
            {isLoading ? (
              <div className={styles.loading}>LOADING...</div>
            ) : news.length > 0 ? (
              news.map((item) => {
                return (
                  <Link
                    key={item.url}
                    className={styles.article}
                    href={item.url}
                  >
                    {item.title}
                  </Link>
                );
              })
            ) : (
              <div className={styles.error}>fails loading news</div>
            )}
          </div>
        </section>
      </section>
    </Layout>
  );
}