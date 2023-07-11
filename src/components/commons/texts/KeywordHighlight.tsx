interface KeywordHighlightProps {
  keyword: string;
  before?: string;
  after?: string;
  rest?: string;
}

const KeywordHighlight = (props: KeywordHighlightProps) => {
  const { before, keyword, after, rest } = props;
  return (
    <h1
      className='text-xl font-bold
leading-tight tracking-tight
text-gray-900 md:text-2xl dark:text-white'
    >
      {before}
      {before && keyword ? <br /> : null}
      <p className='inline text-green-600'>{keyword}</p>
      {after}
      {rest ? <br /> : null}
      {rest}
    </h1>
  );
};

export default KeywordHighlight;
