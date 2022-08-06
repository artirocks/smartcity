import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Client from "./components/Client/Client";
import UpdateData from "./components/Banks/UpdateData";
import Bank from "./components/Banks/Bank";
import AdminPortal from "./components/Admin/AdminPortal";
import AddAuth from "./components/Admin/AddAuth";
import ProtectedRoute from "./components/utils/Protected";
import NewUser from "./components/Client/NewUser";
import UpdateRecord from "./components/Client/UpdateRecord";
import VideoPageClient from "./components/VideoCall/VideoPageClient";
import VideoPageAgent from "./components/VideoCall/VideoPageAgent";

import "antd/dist/antd.css";
import "font-awesome/css/font-awesome.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer"
import Welcome from "./components/Welcome";
import UserDashboardComponent from "./components/Client/UserDashboardComponent";

function App() {
  return (
    <Router>
      <Header/>
      
      <Switch>
      <div >
        <Route exact path="/" component={Welcome} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/client" component={Client} />
        <ProtectedRoute exact path="/userDashboard" component={UserDashboardComponent} />
        <ProtectedRoute exact path="/bank" component={Bank} />
        <ProtectedRoute exact path="/bank/update" component={UpdateData} /> 
        <Route exact path="/admin" component={AdminPortal} />
        <Route exact path="/admin/AddAuth" component={AddAuth} />
        <Route exact path="/client/UpdateRecord" component={UpdateRecord} />
        <Route exact path="/user/NewUser" component={NewUser} />
        </div>
       
      </Switch>
    </Router>
  );
}

export default App;
