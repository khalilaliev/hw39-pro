import Car from "./components/Card/Card";
import Link from "./components/Link/Link";

function App() {
  return (
    <>
      <div className="navbar">
        <div className="navbar-start">
          <Link text="Hillel" />
        </div>
        <div className="navbar-center">
          <Link text="Home" />
          <Link text="About" />
          <Link text="Contact" />
          <Link text="Projects" />
        </div>
      </div>
      <div className="container ">
        <div className="flex gap-5 flex-nowrap mt-8">
          <Car
            title="Title number one"
            content="Content number one"
            btn="first"
          />
          <Car
            title="Title number two"
            content="Content number two"
            btn="second"
          />
          <Car
            title="Title number three"
            content="Content number three"
            btn="third"
          />
          <Car
            title="Title number four"
            content="Content number four"
            btn="fourth"
          />
        </div>
      </div>
    </>
  );
}

export default App;
