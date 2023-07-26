import React from "react";

export const ReservationButtonSkeleton = () => {
    return (
        <div
            className='animate-pulse shadow h-24 cursor-pointer w-full rounded-lg dark:border dark:bg-gray-800 dark:border-gray-700 p-4 flex gap-4'>
            <div className='w-16 h-16 bg-gray-100 rounded-md'></div>
        </div>
    );
};

export const ReservationDescriptionSkeleton = () => {
    return (
        <div className="max-w-sm animate-pulse">
            {/*<div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>*/}
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-4"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-4"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-4"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-4"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-4"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-4"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-4"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-4"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-4"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-4"></div>
            {/*<div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>*/}
            {/*<div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>*/}
            {/*<div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>*/}
            {/*<div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>*/}
            <span className="sr-only">Loading...</span>
        </div>);
}

