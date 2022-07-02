import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [tutorials, setTutorials] = useState();
  const url = "https://axios-example-cw.herokuapp.com/api/tutorials";

  //get (load from api)
  const getTutorials = async () => {
    try {
      const { data } = await axios.get(url);
      setTutorials(data);
    } catch (error) {
      console.log(error);
    }
  };
  // Post (Create)
  const addTutorial = async (tutorial) => {
    try {
      await axios.post(url, tutorial);
    } catch (error) {
      console.log(error);
    }
    getTutorials();
  };
  //! Sadece Component Mount olduğunda istek yapar
  useEffect(() => {
    getTutorials();
  }, []);

  console.log(tutorials);

  // getTutorials();

  return (
    <>
      <AddTutorial addTutorial={addTutorial} />
      <TutorialList tutorials={tutorials} />
    </>
  );
};

export default Home;
