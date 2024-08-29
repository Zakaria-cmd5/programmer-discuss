import paths from "@/paths";
import Link from "next/link";
import PostShow from "../_components/PostShow";
import CommentCreateForm from "../_components/CommentCreateForm";

interface Props {
  params: {
    slug: string;
    postId: string;
  };
}

const PostShowPage = ({ params }: Props) => {
  const { slug, postId } = params;

  return (
    <div className="space-y-3">
      <Link className="underline decoration-solid" href={paths.topicShow(slug)}>
        {"< "}Back to {slug}
      </Link>
      <PostShow postId={postId} />
      <CommentCreateForm postId={postId}/>
    </div>
  );
};

export default PostShowPage;
