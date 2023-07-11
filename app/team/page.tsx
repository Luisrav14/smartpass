import RelatedPost from "@/components/Blog/RelatedPost";
import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import NewsLatterBox from "@/components/Contact/NewsLatterBox";
import Image from "next/image";
import TeamList from '@/components/Team'

const BlogSidebarPage = () => {
    return (
        <>
            <section className="overflow-hidden pt-[180px] pb-[120px]">
                <div className="container">
                    <TeamList />
                </div>
            </section>
        </>
    );
};

export default BlogSidebarPage;
