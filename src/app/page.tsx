import styles from './page.module.css';
import Image from "next/image";

import ButtonLink from "@/app/_components/ButtonLink";
import NewsList from "@/app/_components/NewsList";
import {getNewsList} from "@/app/_libs/microcms";
import {MEMBERS_LIST_LIMIT} from "@/app/_constants";

export default async function Home() {
    const data = await getNewsList({
        limit: MEMBERS_LIST_LIMIT,
    })
    return (
        <>
            <section className={styles.top}>
                <div>
                    <h1 className={styles.title}>テクノロジーの力で世界を変える</h1>
                    <p className={styles.description}>
                        私たちは市場をリードしているグローバルテックカンパニーです。
                    </p>
                </div>
                <Image
                    className={styles.bgimg}
                    src="/img-mv.jpg"
                    alt=""
                    width={4000}
                    height={1200}
                />
            </section>
            <section className={styles.news}>
                <h2 className={styles.newsTitle}>News</h2>
                <NewsList news={data.contents}/>
                <div className={styles.newsLink}>
                    <ButtonLink href="/news">　もっとみる</ButtonLink>
                </div>
            </section>
        </>
    )
}