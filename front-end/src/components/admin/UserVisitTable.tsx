import React from "react";
import { VisitDataProps } from "./Statistic";

const UserVisitTable = ({ data }: VisitDataProps) => {
  return (
    <table className='shadow-md w-full text-sm text-left text-gray-500 dark:text-gray-400'>
      <thead className='text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
        <tr>
          <th className='px-6 py-3'>날짜</th>
          <th className='px-6 py-3'>방문자</th>
        </tr>
      </thead>
      <tbody>
        {data.map((ele) => {
          return (
            <tr key={`visitdata+${ele.date}`}>
              <td className='px-6 py-3'>{ele.date.toISOString()}</td>
              <td className='px-6 py-3'>{ele.visitors}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default UserVisitTable;
