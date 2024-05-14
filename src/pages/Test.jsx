import React, { useState } from 'react';

const initialData = [
    { name: "varun", isSelected: false },
    { name: "arun", isSelected: false },
    { name: "anu", isSelected: false },
    { name: "aju", isSelected: false },
    { name: "kiran", isSelected: false },
];

function Test() {
    const [data, setData] = useState(initialData); 
    const [selectAll, setSelectAll] = useState(false);

    const handleChange = (index) => {
        const newData = [...data];
        newData[index].isSelected = !newData[index].isSelected;
        setData(newData);
        setSelectAll(newData.every(item => item.isSelected));
    };

    const handleSelectAll = () => {
        const newValue = !selectAll;
        const newData = data.map(item => ({...item, isSelected: newValue }));
        setData(newData);
        setSelectAll(newValue);
    };

    return (
        <div>
            <div style={{ display: "flex" }}>
                <span>Select all</span>
                <input type='checkbox' checked={selectAll} onChange={handleSelectAll} />
            </div>
            {data.map((item, index) => (
                <div key={index} style={{ border: "2px solid red", width: "40%" }}>
                    <div style={{ padding: 10 }}>
                        <span>{item.name}</span>
                        <input type='checkbox' checked={item.isSelected} onChange={() => handleChange(index)} />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Test;
