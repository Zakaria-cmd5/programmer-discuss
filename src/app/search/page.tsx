import { fetchPostsBySearchTerm } from "@/db/queries/posts";
import { redirect } from "next/navigation";
import PostList from "../topics/[slug]/posts/_components/PostList";

interface Props {
  searchParams: {
    term: string;
  };
}

const SearchPage = ({ searchParams }: Props) => {
  const { term } = searchParams;

  if (!term) redirect("/");

  return (
    <div>
      <PostList fetchData={() => fetchPostsBySearchTerm(term)} />
    </div>
  );
};

export default SearchPage;
