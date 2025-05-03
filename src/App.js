import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Category } from "./pages/Category";
import { Recipe } from "./pages/Recipe";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main className="container content">
          <Switch>
            <Route exact path="/">
               <Home/>
            </Route> 
            <Route path="/about" component={About} />
            <Route path="/contacts" component={Contact} />
            <Route path="/category/:name" component={Category} />
            <Route path="/meal/:id" component={Recipe} />

            
            <Route component={NotFound} />
          </Switch>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
