import Image from "next/image"

import styles from "./index.module.css"
import { News } from "@/app/_libs/microcms";


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
                            <span className={styles.tag}>{article.category.name}</span>
                            <span className={styles.date}>
                                <Image
                                    src="/clock.svg"
                                    alt=""
                                    width={16}
                                    height={16}/>
                                {article.publishAt}
                            </span>
                        </dd>
                    </dl>
                </li>
            ))}
        </ul>
    )
}

