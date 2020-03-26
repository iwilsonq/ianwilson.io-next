import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import dark from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';

interface Props {
  language?: string;
  value: string;
}

const CodeBlock: React.FunctionComponent<Props> = ({ language, value }) => {
  return (
    <div className="code-block my-8">
      <SyntaxHighlighter language={language} style={dark}>
        {value}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
