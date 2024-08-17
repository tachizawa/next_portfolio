import {getCategoryDetail, getNewsList} from "@/app/_libs/microcms";
import { notFound } from "next/navigation";
import NewsList from "@/app/_components/NewsList";
import {NEWS_LIST_LIMIT} from "@/app/_constants";
import Category from "@/app/_components/Category";
import Pagination from "@/app/_components/Pagination";

type Props = {
    params: {
        id: string;
    }
}

export default async function Page( {params}: Props) {
    const category = await getCategoryDetail(params.id).catch(notFound);

    const { contents: news, totalCount } = await getNewsList({
        limit: NEWS_LIST_LIMIT,
        filters: `category[equals]${category.id}`,
    });

    return (
        <>
            <p>
                <Category category={category} />
            </p>
            <NewsList news={news} />
            <Pagination total={totalCount}
                        basePath={`/news/category/${category.id}`} />
        </>
    );
}