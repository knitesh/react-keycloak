import React, { Component } from 'react';
import Keycloak from 'keycloak-js';
import UserInfo from './UserInfo';
import Logout from './Logout';

class Secured extends Component {

    constructor(props) {
        super(props);
        this.state = { keycloak: null, authenticated: false }
    }

    componentDidMount() {
        const keycloak = Keycloak('/keycloak.json');
        keycloak.init({ onLoad: 'login-required' }).then(authenticated => {
            this.setState({ keycloak: keycloak, authenticated: authenticated })
        })
        /* login-required is one of two possible values to be passed as 
        he onLoadparameter; it will authenticate the client if the user has 
        already logged in to Keycloak, or redirect the browser to the login page if he has not. 
        The other option is check-sso: it will only authenticate the client if the user has already logged in, 
        otherwise the client will remain unauthenticated without automatic redirection.*/
    }
    render() {
        if (this.state.keycloak) {
            if (this.state.authenticated) return (
                <div>
                    <p>This is a Keycloak-secured component of your application. You shouldn't be able
                to see this unless you've authenticated with Keycloak.</p>
                    <UserInfo keycloak={this.state.keycloak} />
                    <Logout keycloak={this.state.keycloak} />
                </div>
            ); else return (<div>Unable to authenticate!</div>)
        }
        return (
            <div>Initializing Keycloak...</div>
        );
    }

}

export default Secured;

/*const kc = new Keycloak('/keycloak.json');
kc.init({onLoad: "login-required", promiseType: 'native'})
  .then(authenticated => {
    if (authenticated) {
      store.getState().keycloak = kc;
      ReactDOM.render(app, document.getElementById("app"));
    }
  });

axios.interceptors.request.use(config => (
  kc.updateToken(5)
    .then(() => {
      config.headers.Authorization = 'Bearer ' + kc.token;
      return Promise.resolve(config)
    })
    .catch(kc.login)
));
*/