import React from 'react';
import {CheckOutlined, DeleteOutlined} from '@ant-design/icons';
import {Button} from 'antd';
import './taskItem.scss';

const TaskItem = ({item, remove, isCompleted}) => {

    return (
        <li className="p-2 border mb-2 flex justify-between items-center item">
            <span onClick={() => isCompleted(item.id)} className={`flex items-center ${item.finished ? 'line-through': ''}`}>
                {item.finished && <CheckOutlined className="item__check"/>}
                {item.text}
           </span>
            <Button onClick={() => remove(item.id)} className="item__btn" type="danger" shape="square"
                    icon={<DeleteOutlined/>}/>
        </li>
    );
};

export default TaskItem;