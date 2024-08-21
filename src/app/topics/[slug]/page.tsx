import PostCreateForm from "./posts/_components/PostCreateForm";

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
      </div>
      <div>
        <PostCreateForm slug={params.slug}/>
      </div>
    </div>
  );
};

export default TopicShowPage;
