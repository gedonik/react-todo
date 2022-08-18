import React from 'react';

const TaskItem = ({item}) => {
    return (
        <li className="p-2 border mb-2">
            {item.text}

        </li>
    );
};

export default TaskItem;