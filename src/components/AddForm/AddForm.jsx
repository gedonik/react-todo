import React, {useEffect, useMemo, useState} from 'react';
import {Input, Button} from 'antd';
import './addForm.scss';

const AddForm = ({add}) => {
    const [value, setValue] = useState('');
    const [isDisableBtn, setIsDisableBtn] = useState(true);

    useEffect(() => {
        value === '' ? setIsDisableBtn(true) : setIsDisableBtn(false);
    }, [value]);

    const addNewTask = (e) => {
        e.preventDefault();
        const newTask = {
            id: Date.now(),
            text: value,
            finished: false,
        }

        add(newTask);
        setValue('');
    }

    return (
        <form className="form" onSubmit={addNewTask}>
            <label htmlFor="taskInput"></label>
            <Input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="form__input"
                id="taskInput"
                name="taskInput"
                placeholder="Type task here..."
            />
            <Button onClick={addNewTask} disabled={isDisableBtn} type="primary">Add</Button>
        </form>
    );
};

export default AddForm;