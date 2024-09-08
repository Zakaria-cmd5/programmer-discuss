"use client";

import * as actions from "@/actions";
import { Input } from "@nextui-org/react";
import { useSearchParams } from "next/navigation";

const SearchInput = () => {
  const searchParams = useSearchParams();

  return (
    <form action={actions.search}>
      <Input
        placeholder="Search"
        defaultValue={searchParams.get("term") || ""}
        name="term"
      />
    </form>
  );
};

export default SearchInput;
