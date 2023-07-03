interface TitleTextProps {
  title: string;
}

const TitleText = (props: TitleTextProps) => {
  const { title } = props;
  return (
    <h1 className='text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
      {title}
    </h1>
  );
};

export default TitleText;
