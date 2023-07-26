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
md:text-2xl cc-text-black'
    >
      {before}
      {before && keyword ? <br /> : null}
      <p className='inline text-primary'>{keyword}</p>
      {after}
      {rest ? <br /> : null}
      {rest}
    </h1>
  );
};

export default KeywordHighlight;
