import Image from "next/image";
import styles from "./index.module.css"
import { FormatData } from "@/app/_libs/utils";

type DateProps = {
    date: string;
}

export default function Date({date} : DateProps) {
    return (
        <span className={styles.date}>
            <Image src="/clock.svg"
                   alt=""
            width={16}
            height={16}
            loading="eager"/>
            {FormatData(date)}
        </span>
    )
}