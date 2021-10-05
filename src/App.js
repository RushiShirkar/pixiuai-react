import "./App.css";
import Home from "./views/Home";
import MyIdeas from "./views/MyIdeas";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./views/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import { Provider } from "react-redux";
import configureStore, { history } from "./redux/store";
const store = configureStore();

function App() {
  return (
  	<Provider store={store}>
	    <BrowserRouter>
	      <Route exact path="/login" component={Login} />
	      <ProtectedRoute exact path="/" component={Home} />
	      <ProtectedRoute exact path="/myideas" component={MyIdeas} />
	    </BrowserRouter>
	</Provider>
  );
}

export default App;
