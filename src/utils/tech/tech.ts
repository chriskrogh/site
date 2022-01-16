import { FaCloud, FaHardHat, FaLink, FaPlug } from 'react-icons/fa';
import {
  SiAmazonaws,
  SiAndroid,
  SiApollographql,
  SiAzurefunctions,
  SiChai,
  SiCsharp,
  SiCss3,
  SiCypress,
  SiDocker,
  SiDotnet,
  SiExpress,
  SiFigma,
  SiGithubactions,
  SiGraphql,
  SiHtml5,
  SiIonic,
  SiJava,
  SiJavascript,
  SiJest,
  SiKubernetes,
  SiMicrosoftazure,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiRedis,
  SiSolidity,
  SiSwift,
  SiTravisci,
  SiTypescript,
} from 'react-icons/si';

import { IconLink, TECH } from './types';

export const TechIconLinks: Record<TECH, IconLink> = {
  [TECH.ANDROID]: {
    icon: SiAndroid,
    link: 'https://developer.android.com/',
  },
  [TECH.APOLLO]: {
    icon: SiApollographql,
    link: 'https://www.apollographql.com/',
  },
  [TECH.AWS]: {
    icon: SiAmazonaws,
    link: 'https://aws.amazon.com/',
  },
  [TECH.AZURE]: {
    icon: SiMicrosoftazure,
    link: 'https://azure.microsoft.com/',
  },
  [TECH.AZURE_FUNCTIONS]: {
    icon: SiAzurefunctions,
    link: 'https://azure.microsoft.com/en-us/services/functions/',
  },
  [TECH.CSHARP]: {
    icon: SiCsharp,
    link: 'https://github.com/dotnet/csharplang',
  },
  [TECH.CSS]: {
    icon: SiCss3,
    link: 'https://www.w3.org/TR/CSS/#css',
  },
  [TECH.CHAI]: {
    icon: SiChai,
    link: 'https://www.chaijs.com/',
  },
  [TECH.CYPRESS]: {
    icon: SiCypress,
    link: 'https://www.cypress.io/',
  },
  [TECH.DOCKER]: {
    icon: SiDocker,
    link: 'https://www.docker.com/',
  },
  [TECH.DOTNET]: {
    icon: SiDotnet,
    link: 'https://dotnet.microsoft.com/',
  },
  [TECH.ETHERS]: {
    icon: FaCloud,
    link: 'https://docs.ethers.io/',
  },
  [TECH.EXPRESS]: {
    icon: SiExpress,
    link: 'http://expressjs.com/',
  },
  [TECH.FIGMA]: {
    icon: SiFigma,
    link: 'https://www.figma.com/',
  },
  [TECH.GITHUB_ACTIONS]: {
    icon: SiGithubactions,
    link: 'https://github.com/features/actions',
  },
  [TECH.GRAPHQL]: {
    icon: SiGraphql,
    link: 'https://graphql.org/',
  },
  [TECH.HARDHAT]: {
    icon: FaHardHat,
    link: 'https://hardhat.org/',
  },
  [TECH.HTML]: {
    icon: SiHtml5,
    link: 'https://html.com/html5/',
  },
  [TECH.IONIC]: {
    icon: SiIonic,
    link: 'https://ionicframework.com/',
  },
  [TECH.JAVA]: {
    icon: SiJava,
    link: 'https://www.java.com/',
  },
  [TECH.JAVASCRIPT]: {
    icon: SiJavascript,
    link: 'https://www.javascript.com/',
  },
  [TECH.JEST]: {
    icon: SiJest,
    link: 'https://jestjs.io/',
  },
  [TECH.KUBERNETES]: {
    icon: SiKubernetes,
    link: 'https://kubernetes.io/',
  },
  [TECH.MONGO]: {
    icon: SiMongodb,
    link: 'https://www.mongodb.com/',
  },
  [TECH.MYSQL]: {
    icon: SiMysql,
    link: 'https://www.mysql.com/',
  },
  [TECH.NEXTJS]: {
    icon: SiNextdotjs,
    link: 'https://nextjs.org/',
  },
  [TECH.NODE]: {
    icon: SiNodedotjs,
    link: 'https://nodejs.org/',
  },
  [TECH.PYTHON]: {
    icon: SiPython,
    link: 'https://www.python.org/',
  },
  [TECH.REACT]: {
    icon: SiReact,
    link: 'https://reactjs.org/',
  },
  [TECH.REACT_NATIVE]: {
    icon: SiReact,
    link: 'https://reactnative.dev/',
  },
  [TECH.REDIS]: {
    icon: SiRedis,
    link: 'https://redis.io/',
  },
  [TECH.RELAY]: {
    icon: FaLink,
    link: 'https://relay.dev/',
  },
  [TECH.SOLIDITY]: {
    icon: SiSolidity,
    link: 'https://soliditylang.org/',
  },
  [TECH.SWIFT]: {
    icon: SiSwift,
    link: 'https://developer.apple.com/swift/',
  },
  [TECH.TRAVIS_CI]: {
    icon: SiTravisci,
    link: 'https://www.travis-ci.com/',
  },
  [TECH.TYPECHAIN]: {
    icon: FaPlug,
    link: 'https://github.com/dethcrypto/TypeChain',
  },
  [TECH.TYPESCRIPT]: {
    icon: SiTypescript,
    link: 'https://www.typescriptlang.org/',
  },
};
