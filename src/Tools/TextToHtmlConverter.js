import { useState } from 'react';

export default function TextToHtmlConverter() {
  const [inputText, setInputText] = useState('');
  const [htmlOutput, setHtmlOutput] = useState('');
  const [mode, setMode] = useState('plain');

  const convertToHtml = () => {
    if (mode === 'markdown') {
      setHtmlOutput(markdownToHtml(inputText));
    } else {
      const paragraphs = inputText.split(/\n\s*\n/);
      const html = paragraphs
        .map(p => p.trim())
        .filter(p => p.length > 0)
        .map(p => `<p>${p}</p>`)
        .join('\n');
      setHtmlOutput(html);
    }
  };

  const markdownToHtml = (text) => {
    // Headers
    text = text.replace(/^# (.*$)/gm, '<h1>$1</h1>');
    text = text.replace(/^## (.*$)/gm, '<h2>$1</h2>');
    text = text.replace(/^### (.*$)/gm, '<h3>$1</h3>');

    // Emphasis
    text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    text = text.replace(/\*(.*?)\*/g, '<em>$1</em>');

    // Lists
    text = text.replace(/^\s*\*\s(.*$)/gm, '<li>$1</li>');
    text = text.replace(/(<li>.*<\/li>)+/g, '<ul>$&</ul>');

    // Links
    text = text.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');

    // Paragraphs
    const paragraphs = text.split(/\n\s*\n/);
    return paragraphs
      .map(p => p.trim())
      .filter(p => p.length > 0)
      .map(p => p.startsWith('<') ? p : `<p>${p}</p>`)
      .join('\n');
  };

  const copyToClipboard = async () => {
    if (!htmlOutput) {
      alert('No HTML to copy! Convert text first.');
      return;
    }
    try {
      await navigator.clipboard.writeText(htmlOutput);
      alert('Copied to clipboard!');
    } catch (err) {
      alert('Failed to copy: ' + err);
    }
  };

  const downloadHtml = () => {
    if (!htmlOutput) {
      alert('No HTML to download! Convert text first.');
      return;
    }
    const blob = new Blob([htmlOutput], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'converted.html';
    a.click();
    URL.revokeObjectURL(url);
  };

  const showMarkdownHelp = () => {
    alert(`Markdown Support:
# Header 1
## Header 2
### Header 3

*italic* or _italic_
**bold** or __bold__

- List item 1
- List item 2

[Link text](https://example.com)`);
  };

  return (
    <div className='tools-wrapper'>
      <div className="TTH-container">
        <h2>Advanced Text to HTML Converter</h2>
        <p>Convert plain text or Markdown to HTML with live preview</p>

        <div className="TTH-tab-buttons">
          <button
            className={mode === 'plain' ? 'active' : ''}
            onClick={() => setMode('plain')}
          >
            Plain Text
          </button>
          <button
            className={mode === 'markdown' ? 'active' : ''}
            onClick={() => setMode('markdown')}
          >
            Markdown
          </button>
        </div>

        <div className="TTH-panels">
          <div className="TTH-panel">
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder={mode === 'markdown' ? 'Enter Markdown here...' : 'Enter plain text here...'}
              className="TTH-converter-textarea"
              spellcheck="false"
            />

            <div className="TTH-button-group">
              <button onClick={convertToHtml} className="TTH-convert-btn">
                Convert to HTML
              </button>
              <button onClick={copyToClipboard} className="TTH-copy-btn">
                Copy HTML
              </button>
              <button onClick={downloadHtml} className="TTH-download-btn">
                Download HTML
              </button>
              {mode === 'markdown' && (
                <button onClick={showMarkdownHelp} className="TTH-markdown-btn">
                  Markdown Help
                </button>
              )}
            </div>

            <h3>HTML Output:</h3>
            <pre className="TTH-html-output">{htmlOutput}</pre>
          </div>

          <div className="TTH-panel">
            <h3>Live Preview:</h3>
            <div
              className="TTH-preview-pane"
              dangerouslySetInnerHTML={{ __html: htmlOutput }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}