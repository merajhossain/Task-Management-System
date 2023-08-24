import React, { useEffect, useState } from "react"
import { Col, Container, Row, Button, Modal } from "react-bootstrap"
import CompleteTasksList from "./components/CompleteTasksList"
import Footer from "./components/Footer"
import Header from "./components/Header"
import InProgressTasksList from "./components/InProgressTasksList"
import TodoTaskLists from "./components/TodoTasksLists"

function App() {
  const [taskData, setTaskData] = useState("");
  const [todo, setTodo] = useState("");
  const [ongoing, setOngoing] = useState("");
  const [done, setDone] = useState("");

  const handleChildData = (data) => {
    setTaskData(data)
  };
  useEffect(() => {
    localStorage.setItem(taskData.type, JSON.stringify(taskData));
    switch (taskData.type) {
      case "todo":
        setTodo(taskData);
        break;
      case "ongoing":
        setOngoing(taskData);
          break;
      case "done":
        setDone(taskData);
          break;
      default:
        return setTaskData(taskData)
    }
  }, [taskData])

  return (
    <>
      <Header sendDataToMainComponent={handleChildData} />
      <div className="container-fluid py-5">
        <Container>
          <Row>
            <Col xs={12} md={4}>
              <TodoTaskLists todoList={todo}/>
            </Col>
            <Col xs={12} md={4}>
              <InProgressTasksList ongoing={ongoing}/>
            </Col>
            <Col xs={12} md={4}>
              <CompleteTasksList done={done}/>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  )
}

export default App
