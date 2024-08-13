export type News = {
    id: string;
    title: string;
    category: {
        name: string;
    };
    publishAt: string;
    createdAt: string;
};

export type Category = {
    name: string;
}