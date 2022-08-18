import React from 'react';

const List = ({list}) => {
    console.log(list);

    return (
        <ul className="max-w-sm m-auto">
            {list.map((item) => {
                return (
                    <li className="p-2 border mb-2" key={item.id}>
                        {item.text}
                    </li>
                )
            })}
        </ul>
    );
};

export default List;