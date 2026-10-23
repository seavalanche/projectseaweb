import '../styles/AttributePage.css'
import ReactMarkdown from 'react-markdown';
import {attributeContent} from './data/attribute-system.js';
import attribute from '../assets/attributes/attributes.webp';

export default function AttributePage() {
  return (
    <div className="AP-wrapper-main">
      <img src={attribute} alt='Attribute Table' />
      <ReactMarkdown>{attributeContent}</ReactMarkdown>
    </div>
  );
}
