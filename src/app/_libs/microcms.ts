import type {MicroCMSImage, MicroCMSListContent, MicroCMSQueries} from "microcms-js-sdk";
import {createClient} from "microcms-js-sdk";
import Category from "@/app/_components/Category";

export type News = {
    title: string;
    description: string;
    content: string;
    thumbnail?: MicroCMSImage;
    category: Category;
} & MicroCMSListContent;

export type Category = {
    name: string;
} & MicroCMSListContent;

export type Member = {
    name: string;
    position: string;
    profile: string;
    image: MicroCMSImage
} & MicroCMSListContent;

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
    throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

if (!process.env.MICROCMS_API_KEY) {
    throw new Error("MICROCMS_API_KEY is required");
}

const client = createClient({
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
    apiKey: process.env.MICROCMS_API_KEY,
})

export const getMembersList = async (queries?: MicroCMSQueries) => {
    return await client.getList<Member>({
        endpoint: "members",
        queries
    });
}

export const getNewsList = async (queries?: MicroCMSQueries) => {
    return await client.getList<News>({
        endpoint: "news",
        queries,
    });
}

export const getNewsDetail = async (contentId: string, queries?: MicroCMSQueries) => {
    return await client.getListDetail<News>({
        endpoint: "news",
        contentId,
        queries
    });
}

export const getCategoryDetail = async (
    contentId: string,
    queries?: MicroCMSQueries
) => {
    return await client.getListDetail<Category>({
        endpoint: "categories",
        contentId,
        queries
    });
}