import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

export default function PaginationCmp() {
  return (
    <Pagination size="xl" className=" flex justify-center pb-[48px]">
      <PaginationItem>
        <PaginationLink
          href="#"
          className="p-[25px] text-sm text-stone-300 bg-stone-50"
        >
          First
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink
          href="#"
          className="px-[20px] py-[25px] text-sm text-white bg-[#23A6F0] "
        >
          1
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink
          href="#"
          className="px-[20px] py-[25px] text-sm text-[#23A6F0]"
        >
          2
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink
          href="#"
          className="px-[20px] py-[25px] text-sm text-[#23A6F0]"
        >
          3
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink
          href="#"
          next
          className="p-[25px] text-sm text-[#23A6F0]"
        >
          Next
        </PaginationLink>
      </PaginationItem>
    </Pagination>
  );
}
