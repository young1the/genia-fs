import * as SVG from "@/components/commons/svgs";
import Link from "next/link";

const NewReservationButton = () => {
  return (
    <Link href='/reservation/new'>
      <div className='w-full h-24 rounded-lg shadow hover:bg-gray-100 p-2 flex items-center justify-center'>
        <SVG.Plus className='w-12 h-12' />
      </div>
    </Link>
  );
};

export default NewReservationButton;
