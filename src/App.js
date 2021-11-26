import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Components/context/AuthProvider";
import AddService from "./Components/Pages/AddService/AddService";
import Blogs from "./Components/Pages/Blogs/Blogs";
import ExploreDetails from "./Components/Pages/ExplorePlaceDetails/ExploreDetails";
import Home from "./Components/Pages/Home/Home";
import Login from "./Components/Pages/Login/Login";
import ManageOrder from "./Components/Pages/ManageOrders/ManageOrder";
import MyOrders from "./Components/Pages/MyOrders/MyOrders";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Footer from "./Components/Shared/Footer";
import Header from "./Components/Shared/Header";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";
import NotFound from "./Components/Pages/NotFound/NotFound";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/home">
              <Home />
            </Route>
            <Route path="/blogs">
              <Blogs />
            </Route>
            <PrivateRoute path="/placeOrder/:_id">
              <ExploreDetails />
            </PrivateRoute>

            <PrivateRoute path="/myOrders">
              <MyOrders />
            </PrivateRoute>

            <Route path="/manageOrders">
              <ManageOrder />
            </Route>

            <PrivateRoute path="/addService">
              <AddService />
            </PrivateRoute>

            <Route path="/login">
              <Login />
            </Route>

            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
