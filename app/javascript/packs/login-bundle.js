import ReactOnRails from 'react-on-rails';

import { Login } from '../bundles/Login/Login';
import { Projects } from '../bundles/Projects/Projects';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  Login,
  Projects,
});
