import { useEffect, useState } from "react";
import Todo from "./components/todo";
import Form from "./components/form";
import request from "./config/request"

function App() {
  const [data, setData] = useState([]);

  const getData = () => {
    request.get("/todos").then((res) => setData(res.data));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Form getData={getData} />
      {data.map((item) => (
        <Todo
          key={item.id}
          id={item.id}
          title={item.title}
          description={item.description}
          getData={getData}
        />
      ))}
    </>
  );
}

export default App;
