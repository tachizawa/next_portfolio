import React from "react";
import Sheet from "@/app/_components/Sheet";
import Hero from "@/app/_components/Hero";

type LayoutProps = {
    children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
    return (
        <>
            <Hero title="Members" sub={"メンバー"} />
            <Sheet>{children}</Sheet>
        </>
    )
}