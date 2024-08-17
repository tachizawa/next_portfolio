import { NEWS_LIST_LIMIT} from "@/app/_constants";
import Link from "next/link";
import styles from "./index.module.css";

type Props = {
    total: number;
    currentPage?: number;
    basePath?: string;
};

export default function Pagination( {total,
                                    currentPage = 1,
                                    basePath = "/news"
                                    } : Props) {
    const pages = Array.from(
        {length: Math.ceil(total / NEWS_LIST_LIMIT )},
        (_, i) => i + 1);

    return (
        <nav>
            <ul className={styles.container}>
                {pages.map(page => (
                    <li className={styles.list} key={page}>
                        {currentPage !== page? (
                        <Link href={`${basePath}/p/${page}`} className={styles.item}>
                            {page}
                        </Link>
                        ) : (
                        <span className={`${styles.item} ${styles.current}`}>{page}</span>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    )
};
