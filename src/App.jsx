import NavBar from "./components/NavBar/NavBar";
function App() {
  const navBarItems = ["Home", "Quote", "Resturants", "Foods", "Contact"];
  return (
    <>
      <NavBar navBarItems={navBarItems} />
      
    </>
  );
}

export default App;
