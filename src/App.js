import './App.scss';
import {useState} from "react";
import Header from "./components/Header";
import AddForm from "./components/AddForm/AddForm";
import TaskList from "./components/TaskList";
import Footer from "./components/Footer";

function App() {
    const [list, setList] = useState([
        {id: 1, text: 'task1', finished: false},
        {id: 2, text: 'task2', finished: true},
        {id: 3, text: 'task3', finished: false},
    ]);

    const addNewTask = (newTask) => {
        setList([...list, newTask]);
    }

    const isCompleted = (id) => {
        const copy = [...list];
        const current = copy.find(item => item.id === id);
        current.finished = !current.finished;
        setList(copy);
    }

    const removeTask = (taskId) => {
        setList(list.filter((item) => item.id !== taskId));
    }

    return (
        <div className="App">
            <Header/>
            <AddForm add={addNewTask}/>
            {list.length
                ?
                <TaskList list={list} isCompleted={isCompleted} remove={removeTask}/>
                :
                <div className="text-center mb-2 font-bold text-red-600">Task list is empty!</div>
            }
            <Footer list={list}/>
        </div>
    );
}

export default App;
