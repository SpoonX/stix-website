const React       = require('react');
const ReactDom = require('react-dom');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const Markdown = CompLibrary.MarkdownBlock;
const renderMarkdown = require('../../core/renderMarkdown.js');

const siteConfig = require(`${process.cwd()}/siteConfig.js`);

function docUrl(doc, language) {
  return `${siteConfig.baseUrl}docs/${language ? `${language}/` : ''}${doc}`;
}

class Api extends React.Component {


  render() {

    return (
      <Container>
        <span id='md' />
        <script
          dangerouslySetInnerHTML={{ __html: `
          fetch('https://api.github.com/repos/SpoonX/stix-gates/contents/README.md' , {
            headers: { 'accept': 'application/vnd.github.v3.raw' }
          })
            .then(res => res.text())
            .then(res => {
            console.log(renderMarkdown)
            return renderMarkdown(res)
            });
          `
          }}
        />
      </Container>
    );
  }
}

module.exports = Api;
