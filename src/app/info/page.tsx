import KeywordHighlight from "@/components/common/text/KeywordHighlight";
import RoomList from "@/components/room/RoomList";
import React from "react";

const page = () => {
  return (
    <div className='cc-page-wrapper'>
      <KeywordHighlight
        keyword='천재 IT교육센터'
        after='에서,'
        rest='교육-인턴-취업, 취준생에서 천재그룹 개발자까지!'
      />
      <a href='https://www.genia.academy/' className='underline mt-10'>
        과정소개 바로가기
      </a>
      <div className='w-full p-24'>
        <RoomList />
      </div>
    </div>
  );
};

export default page;
