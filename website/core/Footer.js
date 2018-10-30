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
    return `${baseUrl}docs/${language ? `${language}/` : ''}${doc}`;
  }

  pageUrl (doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render () {
    const { config } = this.props;

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
            <a href={this.docUrl('first-steps/getting-started.html', this.props.language)}>
              Getting Started
            </a>
            <a href={this.docUrl('modules/stix-gates/gates-about.html', this.props.language)}>
              Core Modules
            </a>
            <a href={this.docUrl('api', this.props.language)}>
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

        {/*<a*/}
        {/*href="https://code.facebook.com/projects/"*/}
        {/*target="_blank"*/}
        {/*rel="noreferrer noopener"*/}
        {/*className="fbOpenSource">*/}
        {/*<img*/}
        {/*src={`${config.baseUrl}img/oss_logo.png`}*/}
        {/*alt="Facebook Open Source"*/}
        {/*width="170"*/}
        {/*height="45"*/}
        {/*/>*/}
        {/*</a>*/}
        <section className="copyright">{config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
