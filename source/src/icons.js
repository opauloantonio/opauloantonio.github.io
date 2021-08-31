import { Image } from "@chakra-ui/react";

import django from './assets/django-original.svg';
import python from './assets/python-original.svg';
import react from './assets/react-original.svg';
import redux from './assets/redux-original.svg';
import html5 from './assets/html5-original.svg';
import css3 from './assets/css3-original.svg';
import javascript from './assets/javascript-original.svg';
import postgres from './assets/postgresql-original.svg';
import aws from './assets/amazonwebservices-original.svg';
import heroku from './assets/heroku-original-wordmark.svg';
import git from './assets/git-original.svg';
import github from './assets/github-original.svg';
import githubBlack from './assets/github-black.png'
import csharp from './assets/csharp-original.svg';
import android from './assets/android-original.svg';
import reddit from './assets/reddit-logo.svg';
import twitter from './assets/twitter-logo.jpg';
import unityBlack from './assets/unity-black.svg';
import unityWhite from './assets/unity-white.svg';
import inkscape from './assets/inkscape-icon.svg';
import inkscapeWhite from './assets/inkscape-icon-white.svg';
import linkedin from './assets/linkedin.svg';

export const DjangoIcon = props => <Image alt="Django" title="Django" src={django} {...props} />;

export const ReactIcon = props => <Image alt="ReactJS" title="ReactJS" src={react} {...props} />;

export const PythonIcon = props => <Image alt="Python" title="Python" src={python} {...props} />;

export const HTMLIcon = props => <Image alt="HTML" title="HTML" src={html5} {...props} />;

export const CSSIcon = props => <Image alt="CSS" title="CSS" src={css3} {...props} />;

export const JavaScriptIcon = props => <Image alt="JavaScript" title="JavaScript" src={javascript} {...props} />;

export const ReduxIcon = props => <Image alt="ReduxJS" title="ReduxJS" src={redux} {...props} />;

export const SQLIcon = props => <Image alt="SQL" title="SQL" src={postgres} {...props} />;

export const AWSIcon = props => <Image alt="AWS" title="AWS" src={aws} {...props} />;

export const HerokuIcon = props => <Image alt="Heroku" title="Heroku" src={heroku} {...props} />;

export const GitIcon = props => <Image alt="Git" title="Git" src={git} {...props} />;

export const AndrodIcon = props => <Image alt="Android" title="Android" src={android} {...props} />;

export const CSharpIcon = props => <Image alt="C#" title="C#" src={csharp} {...props} />;

export const GithubIcon = props => <Image alt="Github" title="Github" src={props.dark ? githubBlack : github} {...props} />;

export const RedditIcon = props => <Image alt="Reddit" title="Reddit" src={reddit} {...props} />;

export const TwitterIcon = props => <Image alt="Twitter" title="Twitter" src={twitter} {...props} />;

export const UnityIcon = props => <Image alt="Unity3D" title="Unity3D" src={props.dark ? unityWhite : unityBlack} {...props} />;

export const InkscapeIcon = props => <Image alt="Inkscape" title="Inkscape" src={props.dark ? inkscapeWhite : inkscape} {...props} />;

export const LinkedinIcon = props => <Image alt="LinkedIn" title="LinkedIn" src={linkedin} {...props} />;
