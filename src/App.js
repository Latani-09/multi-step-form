import "./App.css";
import { useState, useEffect } from "react";
import Home from "./Components/Home.js";
import Ques1 from "./Components/Ques1.js";
import Ques2 from "./Components/Ques2.js";
import Ques3 from "./Components/Ques3.js";
import Ques4 from "./Components/Ques4.js";
import Ques5 from "./Components/Ques5.js";
import Ques6 from "./Components/Ques6.js";
import Ques7 from "./Components/Ques7.js";
import Ques8 from "./Components/Ques8.js";
import Ques9 from "./Components/Ques9.js";
import End from "./Components/End.js";
import { setCacheForm } from "./services/CacheService.js";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [countries, setCountries] = useState([]);
  const [email, setEmail] = useState();
  const [country, setCountry] = useState({code:'LK'});
  const [phone, setPhoneNum] = useState();
  const [linkedIn,setlinkedIn]=useState();
  const [selectedRange, setSelectedRange] = useState();
  const [level, setLevel] = useState({key:'',level:''});
  const [agree,setAgree]=useState('');
  const [langOptions, setLangOptions] = useState([
    { key: "A", language: "Solidity", selected: false },
    { key: "B", language: "Rust", selected: false },
    { key: "C", language: "Node.js", selected: false },
    { key: "D", language: "Typescript", selected: false },
    { key: "E", language: "Javascript", selected: false },
    { key: "F", language: "C", selected: false },
    { key: "G", language: "C++", selected: false },
    { key: "H", language: "C#", selected: false },
    { key: "I", language: "SQL", selected: false },
    { key: "J", language: "Python", selected: false },
    { key: "K", language: "Assembly Language", selected: false },
    { key: "L", language: "Haskell", selected: false },
    { key: "M", language: "R", selected: false },
    { key: "N", language: ".NET", selected: false },
    { key: "O", language: "Other", selected: false },
  ]);

  const experienceOptions = [
    {
      key: "A",
      level: "No experience (I have never programmed before.)",
      
    },
    {
      key: "B",
      level:
        "Beginner (I have played with some introductory coding lessons and tutorials.)",
      
    },
    {
      key: "C",
      level:
        "Intermediate (I have completed some coding classes or tutorials.)",
      
    },
    {
      key: "D",
      level: "Advanced (I can build applications.)",
      
    },
    {
      key: "E",
      level: "Professional (I am an experienced software engineer.)",
  
    },
  ];
  const ranges = [
    { key: "A", range: ">$30000" },
    { key: "B", range: "$30,000-$50,000" },
    { key: "C", range: "$50,000-$80,000" },
    { key: "D", range: "$80,000-$120,000" },
    { key: "E", range: "$12,0000-$250,000" },
    { key: "F", range: "$250,000 or more" },
  ];

  const renderQuestion = () => {
    switch (activeIndex) {
      case 0:
        return <Home handleSwitch={handleSwitch} />;
      case 1:
        return (
          <Ques1
            handleSwitch={handleSwitch}
            firstname={firstname}
            lastname={lastname}
            setFirstName={setFirstName}
            setLastName={setLastName}
          />
        );
      case 2:
        return (
          <Ques2
            handleSwitch={handleSwitch}
            email={email}
            setEmail={setEmail}
          />
        );
      case 3:
        return (
          <Ques3
            handleSwitch={handleSwitch}
            country={country}
            setSelectedCountry={setCountry}
            countries={countries}
          />
        );
      case 4:
        return (
          <Ques4
            handleSwitch={handleSwitch}
            phoneNo={phone}
            setPhoneNum={setPhoneNum}
            country={country}
            setSelectedCountry={setCountry}
            countries={countries}
          />
        );
      case 5:
        return (
          <Ques5
            handleSwitch={handleSwitch}
            options={langOptions}
            setOptions={setLangOptions}
          />
        );
      case 6:
        return (
          <Ques6
            handleSwitch={handleSwitch}
            level={level}
            setLevel={setLevel}
            options={experienceOptions}
          />
        );
      case 7:
        return (
          <Ques7
            handleSwitch={handleSwitch}
            selectedRange={selectedRange}
            setSelectedRange={setSelectedRange}
            options={ranges}
          />
        );
      case 8:
        return <Ques8 handleSwitch={handleSwitch} agree={agree} setAgree={setAgree} />;
      case 9:
        return (
          <Ques9
            handleSwitch={handleSwitch}
            linkedIn={linkedIn}
            setlinkedIn={setlinkedIn}
          />
        );
      case 10:
        return(
          <End/>);
      default:
        return <Home handleSwitch={handleSwitch} />;
    }
  };

  const handleSwitch = (action, data) => {
    setCacheForm("form", data);
    setActiveIndex(activeIndex + action);
  };
  useEffect(() => {
    fetch("/countriesData.json")
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <Provider store={store}>
      <div className="App">
        <header></header>
        {renderQuestion()}

        <footer>
          
        </footer>
      </div>
    </Provider>
  );
}

export default App;
