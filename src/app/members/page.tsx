import Image from "next/image";
import styles from "./page.module.css";
import {getMembersList} from "@/app/_libs/microcms";
import {MEMBERS_LIST_LIMIT} from "@/app/_constants";

export default async function Page() {
    const data = await getMembersList({ limit: MEMBERS_LIST_LIMIT });
    return (
        <div className={styles.container}>
            {data.contents.length === 0 ? (
                <p className={styles.empty}>メンバーが登録されていません</p>
            ) : (
                <ul>
                    {data.contents.map((members) => (
                        <li key={members.id} className={styles.list}>
                            <Image
                                src={members.image.url}
                                alt=""
                                width={members.image.width}
                                height={members.image.height}
                                className={styles.image}
                            />
                            <dl>
                                <dt className={styles.name}>{members.name}</dt>
                                <dt className={styles.position}>{members.position}</dt>
                                <dt className={styles.profile}>{members.profile}</dt>
                            </dl>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}