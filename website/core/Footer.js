/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl (doc, language) {
    const baseUrl = this.props.config.baseUrl;

    return `${baseUrl}docs/${doc}`;
  }

  pageUrl (doc, language) {
    const baseUrl = this.props.config.baseUrl;

    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render () {
    const { config, language } = this.props;

    return (
      <footer className="nav-footer" style={{ backgroundColor: config.colors.background }} id="footer">
        <section className="sitemap">
          <a href={config.baseUrl} className="nav-home">
            <img
              src={config.baseUrl + config.footerIcon}
              alt={config.title}
              width="66"
              height="58"
            />
          </a>
          <div>
            <h5>Docs</h5>
            <a href={this.docUrl('the-basics/about-stix.html', language)}>
              The Basics
            </a>
            <a href={this.docUrl('modules/stix-gates/gates-about.html', language)}>
              Core Modules
            </a>
            <a href={this.docUrl('api', language)}>
              API Reference
            </a>
          </div>
          <div>
            <h5>Community</h5>
            {/*<a href={this.pageUrl('users.html', this.props.language)}>*/}
              {/*User Showcase*/}
            {/*</a>*/}
            <a href="https://spoonx-slack.herokuapp.com/">Slack</a>
            {/*<a*/}
              {/*href="http://stackoverflow.com/questions/tagged/stix"*/}
              {/*target="_blank"*/}
              {/*rel="noreferrer noopener">*/}
              {/*Stack Overflow*/}
            {/*</a>*/}
            <a
              href="https://twitter.com/spoonx"
              target="_blank"
              rel="noreferrer noopener">
              Twitter
            </a>
          </div>
          <div>
            <h5>Repositories</h5>
            {/*<a href={`${config.baseUrl}blog`}>Blog</a>*/}
            <a href="https://github.com/SpoonX/stix">stix</a>
            <a href="https://github.com/SpoonX/stix-gates">stix-gates</a>
            <a href="https://github.com/SpoonX/stix-wetland">stix-wetland</a>
            <a href="https://github.com/SpoonX/stix-cli">stix-cli</a>
          </div>
        </section>
        <section className="copyright">{config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
