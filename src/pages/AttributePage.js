import '../styles/AttributePage.css'
import ReactMarkdown from 'react-markdown';
import {attributeContent} from './data/attribute-system.js';

export default function AttributePage() {
  return (
    <div className="AP-wrapper-main">
      <ReactMarkdown>{attributeContent}</ReactMarkdown>
    </div>
  );
}
