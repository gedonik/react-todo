import React from 'react';
import { Input, Button } from 'antd';
import './addForm.scss';

const AddForm = () => {
    return (
        <form className="form">
            <label htmlFor="taskInput"></label>
            <Input className="form__input" id="taskInput" name="taskInput" placeholder="Type task here..." />
            <Button type="primary">Add</Button>
        </form>
    );
};

export default AddForm;