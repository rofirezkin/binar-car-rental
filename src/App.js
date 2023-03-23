import Navbar from "./components/Navbar";
import Card from "./components/Card";
import FormInput from "./components/FormInput";

//props dan state adalah bagaimana caranya component react kita menghandle data
// erat kaitannya dengan data flow di component react kita


const App = () => {
  return (
    <div>
      <Navbar />
      <Card description="Binar Bagus Banget" reviewer="rijarmdh" />
      <FormInput />
    </div>
  );
};

export default App;
