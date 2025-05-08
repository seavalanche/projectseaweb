import { useState } from 'react';

export default function TextToHtmlConverter() {
  const [inputText, setInputText] = useState('');
  const [htmlOutput, setHtmlOutput] = useState('');

  const convertToHtml = () => {
    const paragraphs = inputText.split(/\n\s*\n/);
    const html = paragraphs
      .map(p => p.trim())
      .filter(p => p.length > 0)
      .map(p => `<p>${p}</p>`)
      .join('\n');
    setHtmlOutput(html);
  };

  return (
    <div className="TTH-panel">
      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder={'Enter plain text here...'}
        className="TTH-converter-textarea"
        spellCheck="false"
      />
      <div className="TTH-button-group">
        <button onClick={convertToHtml} className="TTH-convert-btn">
          Convert to HTML
        </button>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: htmlOutput }}
      />
    </div>
  );
}