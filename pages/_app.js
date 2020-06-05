

import ThemeProvider from 'providers/ThemeProvider';
import { library, config } from '@fortawesome/fontawesome-svg-core';
import {
  faBorderAll,
  faList,
  faSortNumericDown,
  faSortNumericUp } from '@fortawesome/free-solid-svg-icons';

config.autoAddCss = false;
library.add(faList, faBorderAll, faSortNumericDown, faSortNumericUp);

import '@fortawesome/fontawesome-svg-core/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'highlight.js/styles/darcula.css';
import 'styles/index.scss';

export default ({Component, pageProps}) =>
  <ThemeProvider>
    <Component {...pageProps} />
  </ThemeProvider>
