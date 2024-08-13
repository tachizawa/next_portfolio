import Image from "next/image"

import styles from "./index.module.css"
import { News } from "@/app/_libs/microcms";
import Category from "@/app/_components/Category";
import Date from "@/app/_components/Date";


type Props = {
    news: News[]
};

export default function NewsList({ news }: Props) {
    if (news.length === 0) {
        return <p className={styles.link}>記事がありません</p>
    }
    return (
        <ul>
            {news.map((article) => (
                <li key={article.id} className={styles.list}>
                    <div className={styles.link}>
                        <Image
                            className={styles.image}
                            src="/no-image.png"
                            alt="no image"
                            width={1200}
                            height={630} />
                    </div>
                    <dl className={styles.content}>
                        <dt className={styles.title}>{article.title}</dt>
                        <dd className={styles.meta}>
                            <Category category={article.category}/>
                            <Date date={article.publishAt ?? article.createdAt}/>
                        </dd>
                    </dl>
                </li>
            ))}
        </ul>
    )
}

