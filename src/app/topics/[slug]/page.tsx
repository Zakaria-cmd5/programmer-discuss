import { fetchPostsByTopicSlug } from "@/db/queries/posts";
import PostCreateForm from "./posts/_components/PostCreateForm";
import PostList from "./posts/_components/PostList";

interface Props {
  params: {
    slug: string;
  };
}

const TopicShowPage = ({ params }: Props) => {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h1 className="text-2xl font-bold mb-2">{params.slug}</h1>
        <PostList fetchData={() => fetchPostsByTopicSlug(params.slug)} />
      </div>
      <div>
        <PostCreateForm slug={params.slug} />
      </div>
    </div>
  );
};

export default TopicShowPage;
