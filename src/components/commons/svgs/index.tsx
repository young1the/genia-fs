interface SVGProps {
  className?: string;
  fill?: string;
}
export const Calendar = ({ className, fill = "currentColor" }: SVGProps) => {
  return (
    <div className={className}>
      <svg // calendar
        xmlns='http://www.w3.org/2000/svg'
        fill={fill}
        viewBox='0 0 24 24'
      >
        <path d='M19,4H17V3a1,1,0,0,0-2,0V4H9V3A1,1,0,0,0,7,3V4H5A3,3,0,0,0,2,7V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4Zm1,15a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V12H20Zm0-9H4V7A1,1,0,0,1,5,6H7V7A1,1,0,0,0,9,7V6h6V7a1,1,0,0,0,2,0V6h2a1,1,0,0,1,1,1Z' />
      </svg>
    </div>);
};
export const Chat = ({ className, fill = "currentColor" }: SVGProps) => {
  return (
    <div className={className}>
      <svg xmlns='http://www.w3.org/2000/svg' fill={fill} viewBox='0 0 24 24'>
        <path d='M14.77,5.87a1,1,0,0,0,1.36-.37A1,1,0,0,1,18,6a1,1,0,0,1-1,1,1,1,0,0,0,0,2,3,3,0,1,0-2.6-4.5A1,1,0,0,0,14.77,5.87ZM19.07,13a1,1,0,0,0-1.12.86A7,7,0,0,1,11,20H5.41l.65-.65a1,1,0,0,0,0-1.41A7,7,0,0,1,11,6a1,1,0,0,0,0-2A9,9,0,0,0,4,18.61L2.29,20.29a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h8a9,9,0,0,0,8.93-7.87A1,1,0,0,0,19.07,13Zm-1.69-2.93A1,1,0,0,0,16.8,10l-.18.06-.18.09-.15.13a1,1,0,0,0-.21.32A.84.84,0,0,0,16,11a1,1,0,0,0,.07.39,1,1,0,0,0,.22.32A1,1,0,0,0,17,12a1,1,0,0,0,1-1,.84.84,0,0,0-.08-.38,1.07,1.07,0,0,0-.54-.54Z' />
      </svg>
    </div>);
};
export const Clock = ({ className, fill = "currentColor" }: SVGProps) => {
  return (
    <div className={className}>
      <svg // 시계
        fill={fill}
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='m15.09814 12.63379-2.09814-1.21094v-4.42285a1 1 0 0 0 -2 0v5a.99985.99985 0 0 0 .5.86621l2.59814 1.5a1.00016 1.00016 0 1 0 1-1.73242zm-3.09814-10.63379a10 10 0 1 0 10 10 10.01114 10.01114 0 0 0 -10-10zm0 18a8 8 0 1 1 8-8 8.00917 8.00917 0 0 1 -8 8z' />
      </svg>
    </div>);
};
export const Location = ({ className, fill = "currentColor" }: SVGProps) => {
  return (
    <div className={className}>
      <svg // location
        xmlns='http://www.w3.org/2000/svg'
        fill={fill}
        viewBox='0 0 24 24'
      >
        <path d='M11,11.9V17a1,1,0,0,0,2,0V11.9a5,5,0,1,0-2,0ZM12,4A3,3,0,1,1,9,7,3,3,0,0,1,12,4Zm4.21,10.42a1,1,0,1,0-.42,2C18.06,16.87,19,17.68,19,18c0,.58-2.45,2-7,2s-7-1.42-7-2c0-.32.94-1.13,3.21-1.62a1,1,0,1,0-.42-2C4.75,15.08,3,16.39,3,18c0,2.63,4.53,4,9,4s9-1.37,9-4C21,16.39,19.25,15.08,16.21,14.42Z' />
      </svg>
    </div>);
};
export const MeetingBoard = ({ className, fill = "currentColor" }: SVGProps) => {
  return (
    <div className={className}>
      <svg fill={fill} viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
        <path d='m7 10h2a1 1 0 0 0 0-2h-2a1 1 0 0 0 0 2zm14-6h-8v-1a1 1 0 0 0 -2 0v1h-8a1 1 0 0 0 -1 1v10a3 3 0 0 0 3 3h4.59l-2.3 2.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l2.29-2.3v1.59a1 1 0 0 0 2 0v-1.59l2.29 2.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-2.3-2.29h4.59a3 3 0 0 0 3-3v-10a1 1 0 0 0 -1-1zm-1 11a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1-1v-9h16zm-13-1h6a1 1 0 0 0 0-2h-6a1 1 0 0 0 0 2z' />
      </svg>
    </div>);
};
export const Desktop = ({ className, fill = "currentColor" }: SVGProps) => {
  return (
    <div className={className}>
      <svg fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M19,3H5A3,3,0,0,0,2,6v8a3,3,0,0,0,3,3h6v2H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2H13V17h6a3,3,0,0,0,3-3V6A3,3,0,0,0,19,3Zm1,11a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V6A1,1,0,0,1,5,5H19a1,1,0,0,1,1,1Z" />
      </svg>
    </div>);
};
export const Beam = ({ className, fill = "currentColor" }: SVGProps) => {
  return (
    <div className={className}>
      <svg fill={fill} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m4 15h2a2 2 0 0 1 2 2v2h1v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2h1v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2h1v3h-22v-3h1v-2a2 2 0 0 1 2-2m7-8 4 3-4 3zm-7-5h16a2 2 0 0 1 2 2v9.54c-.59-.35-1.27-.54-2-.54v-9h-16v9c-.73 0-1.41.19-2 .54v-9.54a2 2 0 0 1 2-2z" /></svg>
    </div>);
};
export const List = ({ className, fill = "currentColor" }: SVGProps) => {
  return (
    <div className={className}>
      <svg fill={fill} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6.29 14.29-.29.3v-7.59a1 1 0 0 0 -2 0v7.59l-.29-.3a1 1 0 0 0 -1.42 1.42l2 2a1 1 0 0 0 .33.21.94.94 0 0 0 .76 0 1 1 0 0 0 .33-.21l2-2a1 1 0 0 0 -1.42-1.42zm4.71-6.29h10a1 1 0 0 0 0-2h-10a1 1 0 0 0 0 2zm10 3h-10a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2zm0 5h-10a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2z" /></svg>
    </div>
  )
}
