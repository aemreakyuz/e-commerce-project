import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { useState } from "react";
import { isDisabled } from "@testing-library/user-event/dist/utils";

export default function PaginationCmp() {
  const [activePage, setActivePage] = useState(1);

  const handleClick = (pageNumber) => {
    setActivePage(pageNumber);
  };

  return (
    <Pagination size="xl" className=" flex justify-center pb-[48px]">
      <PaginationItem>
        <PaginationLink
          href="#"
          className="p-[25px] text-sm text-stone-300 bg-white text-[#23A6F0]"
          onClick={() => handleClick(1)}
        >
          First
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink
          href="#"
          className={`px-[20px] py-[25px] text-sm ${
            activePage === 1
              ? "text-white bg-[#23A6F0] hover:text-[#23A6F0]"
              : "text-stone-300 bg-stone-50"
          }`}
          onClick={() => handleClick(1)}
        >
          1
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink
          href="#"
          className={`px-[20px] py-[25px] text-sm ${
            activePage === 2
              ? "text-white bg-[#23A6F0]"
              : "text-stone-300 bg-stone-50"
          }`}
          onClick={() => handleClick(2)}
        >
          2
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink
          href="#"
          className={`px-[20px] py-[25px] text-sm ${
            activePage === 3
              ? "text-white bg-[#23A6F0]"
              : "text-stone-300 bg-stone-50"
          }`}
          onClick={() => handleClick(3)}
        >
          3
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink
          href="#"
          next
          className="p-[25px] text-sm text-[#23A6F0]"
          onClick={() =>
            handleClick((prev) => (prev === 3 ? isDisabled : prev + 1))
          }
        >
          Next
        </PaginationLink>
      </PaginationItem>
    </Pagination>
  );
}
