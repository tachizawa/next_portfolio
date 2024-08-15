import Image from "next/image";
import styles from "./page.module.css";

const data = {
    contexts: [
        {
            id: "1",
            image: {
                url: "/img-member1.jpg",
                width: 240,
                height: 240,
            },
            name: "デイビット・チャン",
            position: "CEO",
            profile:
             "グローバルテクノロジー企業での豊富な蹴権を持つリーダー。" +
                "以前は王手ソフトウェア企業の成就お幹部として勤務し、試飲市場進出や終映規制長に成功" +
                "自身の経験と洞察力により、業界のトレンドを見極めて先着的な方針を策定し、会社の成長を牽引している。",
        },
        {
            id: "2",
            image: {
                url: "/img-member2.jpg",
                width: 240,
                height: 240,
            },
            name: "エミリー・サンダース",
            position: "COO",
            profile:
                "グローバル企業での運営管理と組織改革の毛権豊富なエグゼクティブ。" +
                "以前は製造業回でCOOとして勤務し、生還効率の工場や寝室管理の最適化に成功。" +
                "戦略的なマインドセットと組織の能力強化に対する専門知識は、会社の成長と効率化に大きく貢献している。",
        },
        {
            id: "3",
            image: {
                url: "/img-member3.jpg",
                width: 240,
                height: 240,
            },
            name: "ジョン・ウィルソン",
            position: "CTO",
            profile:
                "先進技術の研究開発ち製品イノベーションの分野で優れた経歴を持つテクノロジーエキスパート。" +
                "以前は、大手テクノロジ０企業の研究開発部門で主任エンジニアとして勤務し、革新的な製品の開発に携わった" +
                "最新の技術とトレンドに精通し、当社の製品ポートフォリオを革新的かつ競争力のあるものにするためにリサーチと開発をリードしている。"
        },
    ],
}

export default function Page() {
    return (
        <div className={styles.container}>
            {data.contexts.length === 0 ? (
                <p className={styles.empty}>メンバーが登録されていません</p>
            ) : (
                <ul>
                    {data.contexts.map((members) => (
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
            )};
        </div>
    )
}