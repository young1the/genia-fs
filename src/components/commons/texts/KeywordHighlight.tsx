interface KeywordHighlightProps {
  keyword: string;
  before?: string;
  after?: string;
}

const KeywordHighlight = (props: KeywordHighlightProps) => {
  const { before = "", keyword, after } = props;
  return (
    <h1
      className='text-xl font-bold
leading-tight tracking-tight
text-gray-900 md:text-2xl dark:text-white'
    >
      {before}
      <br />
      <p className='inline text-green-600'>{keyword}</p>
      {after}
    </h1>
  );
};

export default KeywordHighlight;
