import KeywordHighlight from "@/components/common/text/KeywordHighlight";
import React from "react";

const Page = () => {
  return (
    <div className='cc-page-wrapper'>
      <KeywordHighlight
        keyword='Google 애널리틱스'
        after='를 사용하여 사이트 통계를 확인할 수 있습니다.'
      />
      <a
        href='https://analytics.google.com/analytics/web/?hl=ko#/p401389946/reports/intelligenthome'
        className='underline'
      >
        CHUNGCHUN28 Google Analytics
      </a>
    </div>
  );
};

export default Page;
