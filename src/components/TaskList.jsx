import React from 'react';
import TaskItem from "./TaskItem";

const TaskList = ({list, remove, isCompleted}) => {
    return (
        <ul className="max-w-sm m-auto">
            {list.map((item) => {
                return (
                    <TaskItem item={item} key={item.id} isCompleted={isCompleted} remove={remove} />
                )
            })}
        </ul>
    );
};

export default TaskList;