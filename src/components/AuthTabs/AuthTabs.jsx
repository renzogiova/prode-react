import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import Login from '../Login/Login';
import Signup from '../Signup/Signup';

function AuthTabs() {
  return (
    <div>
      <Tabs justify defaultActiveKey="login" id="uncontrolled-tab-example">
        <Tab eventKey="login" title="Login">
          <Login />
        </Tab>
        <Tab eventKey="signup" title="Signup">
          <Signup />
        </Tab>
      </Tabs>
    </div>
  )
}

export default AuthTabs