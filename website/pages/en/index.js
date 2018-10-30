const React         = require('react');
const CompLibrary   = require('../../core/CompLibrary.js');
const MarkdownBlock = CompLibrary.MarkdownBlock;
/* Used to read markdown */
const Container  = CompLibrary.Container;
const GridBlock  = CompLibrary.GridBlock;
const siteConfig = require(`${process.cwd()}/siteConfig.js`);

function imgUrl (img) {
  return `${siteConfig.baseUrl}img/${img}`;
}

function docUrl (doc, language) {
  return `${siteConfig.baseUrl}docs/${language ? `${language}/` : ''}${doc}`;
}

function pageUrl (page, language) {
  return siteConfig.baseUrl + (language ? `${language}/` : '') + page;
}

const whyStix = [
  {
    content   : 'Easily split up and reuse parts of your domain. Simply plug in a module like user or shopping cart; configure it and get going. Creating and using modules is easy. They\'re just regular directories. No magic. No directory scanning, no prefixes, just your own code.',
    image     : imgUrl('module.svg'),
    imageAlign: 'top',
    title     : 'Module Based',
  },
  {
    content   : 'Written with and for TypeScript projects. Although it does work with flow and ES6 based projects, the focus is on TypeScript. Some of the reasons stix is so fast can also be attributed to its use of new features and lazy nature of service loading.',
    image     : imgUrl('fast.svg'),
    imageAlign: 'top',
    title     : 'Modern',
  },
  {
    content   : 'Proven to work and scale. This includes inversion of control, service managers and injectors for controllers and commands making it easy to create highly reusable and configurable modules for your API, or the CLI.',
    image     : imgUrl('pattern.svg'),
    imageAlign: 'top',
    title     : 'Design Patterns',
  },
];

const stixContent = [
  {
    content   : 'Stix comes with a command line environment. Just as you can create API endpoints, you can create CLI commands. Using stix-cli you automatically get help output, as well as support for autocomplete on the cli, or as some call it "tabtab support".',
    image     : imgUrl('cli.svg'),
    imageAlign: 'top',
    title     : 'Command-line',
  },
  {
    content   : 'We all love documentation. We all hate writing it. Especially swagger documentation. That\'s why stix-swagger (for real, we nailed naming these modules) automatically generates your swagger docs for you. Installing it will directly document your endpoints for you.',
    image     : imgUrl('api.svg'),
    imageAlign: 'top',
    title     : 'API Documentation',
  },
  {
    content   : 'Feared by some, loved by many. Code generators. Quickly scaffold your boilerplate using generators. Initialize a new module, add a controller, create a new entity. All without writing a single line of code. The code generated is basic and simple and thus there\'s no magic. Scaffold and code away.',
    image     : imgUrl('generator.svg'),
    imageAlign: 'top',
    title     : 'Code Generators',
  },
];

const modules = [
  {
    content   : 'Stix ❤️ Wetland ORM. Offered as a module (and because of that completely optional) stix works really well with Wetland. The aptly named stix-wetland provides utilities to make working with the database a lot more fun. Besides the separation of concerns (for example the Repository and Unit of Work patterns) you also get utilities for default.',
    image     : imgUrl('stix_wetland.svg'),
    imageAlign: 'top',
    title     : 'Databases',
  },
  {
    content   : 'Stix-gates offers security and enrichment to your endpoints. Configure the gates to pass before executing any specific action to filter out unauthorized requests , invalid parameters or enrich the request with for example a user or ACL rules. Gates are basically dynamic middleware, only applying to the routes you configure them for.',
    image     : imgUrl('stix_gates.svg'),
    imageAlign: 'top',
    title     : 'Gates',
  },
];

class Button extends React.Component {
  render () {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button homeButton" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: '_self',
};

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const HalfCube = () => (
  <img src={siteConfig.cube} className="halfCube" />
);

const Cube = () => (
  <img src={siteConfig.cube} className="cube" />
);

const ProjectTitle = () => (
  <h2 className="projectTitle">
    A module-based,<br />TypeScript-first Node.js® framework.
  </h2>
);

const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
);

class HomeSplash extends React.Component {
  render () {
    const language = this.props.language || '';

    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle />
          {/*<PromoSection>*/}
          {/*<Button href="#try">Try It Out</Button>*/}
          {/*<Button href={docUrl('doc1.html', language)}>Example Link</Button>*/}
          {/*<Button href={docUrl('doc2.html', language)}>Example Link 2</Button>*/}
          {/*</PromoSection>*/}
        </div>
      </SplashContainer>
    );
  }
}

const Block = props => (
  <Container
    padding={props.padding || ['bottom', 'top']}
    id={props.id}
    background={props.background}>
    <GridBlock align="center" contents={props.children} layout={props.layout} className={props.className} />
  </Container>
);

const Features = (props) => (
  <React.Fragment>
    <h3 className="sectionTitle">{props.title}</h3>
    <Block layout="threeColumn" padding={['bottom']}>
      {props.content}
    </Block>
  </React.Fragment>
);

const Card = (props) => (
  <div className="blockElement card alignCenter imageAlignTop twoByGridBlock" style={{ position: 'relative' }}>
    {props.cube && <Cube />}
    <div key={props.title}>
      <img src={props.image} />
      <div className="blockContent">
        <h2>
          <MarkdownBlock>{props.title}</MarkdownBlock>
        </h2>
        <MarkdownBlock>{props.content}</MarkdownBlock>
      </div>
    </div>
  </div>
);

const Modules = (props) => (
  <Container
    padding={['bottom', 'top']}
    id={props.id}>
    <h3 className="sectionTitle container paddingBottom">{props.title}</h3>
    <div className="gridBlock cardBlock">
      {modules.map(({ title, content, image }, index) => {
        return <Card cube={index === 0} title={title} content={content} image={image} />;
      })}
    </div>
  </Container>
);

const Showcase = props => {
  if ((siteConfig.users || []).length === 0) {
    return null;
  }

  const showcase = siteConfig.users.filter(user => user.pinned).map(user => (
    <a href={user.infoLink} key={user.infoLink}>
      <img src={user.image} alt={user.caption} title={user.caption} />
    </a>
  ));

  return (
    <div className="productShowcaseSection paddingBottom">
      <h2>Who is Using This?</h2>
      <p>This project is used by all these people</p>
      <div className="logos">{showcase}</div>
      <div className="more-users">
        <a className="button" href={pageUrl('users.html', props.language)}>
          More {siteConfig.title} Users
        </a>
      </div>
    </div>
  );
};

class Index extends React.Component {
  render () {
    const language = this.props.language || '';

    return (
      <div>
        <HalfCube />
        <HomeSplash language={language} />
        <div className="mainContainer">
          <Features content={whyStix} title="Why Stix?" />
          <Features content={stixContent} title="What does it contain?" />
          <Modules content={modules} title="Core modules" />
          {/*<FeatureCallout />*/}
          {/*<StixCli />*/}
          {/*<TryOut />*/}
          {/*<Description />*/}
          {/*<Showcase language={language} />*/}
        </div>
      </div>
    );
  }
}

module.exports = Index;
