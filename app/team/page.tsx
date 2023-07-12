import RelatedPost from "@/components/Blog/RelatedPost";
import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import NewsLatterBox from "@/components/Contact/NewsLatterBox";
import Image from "next/image";
import TeamList from '@/components/Team'
import SectionTitle from "@/components/Common/SectionTitle";

const BlogSidebarPage = () => {
    return (
        <>
            <section className="overflow-hidden pt-[100px] pb-[100px]" id="team">
                <div className="container">
                <SectionTitle title="Our Team" paragraph="" center />
                    <TeamList />
                </div>
            </section>
        </>
    );
};

export default BlogSidebarPage;
