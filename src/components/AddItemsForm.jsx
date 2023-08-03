import React, {useState} from 'react';
import Itemlist from "./Itemlist.jsx";

const AddItemsForm = () => {
    const [item, setItem] = useState([]);
    const [items, setItems] = useState("");
    console.log(typeof item)
    const addItem = (newitem) => {
        setItem((item) => [...item, newitem])
    }
    const handleAdd = (e) => {
        e.preventDefault();
        const newItems = {desc: items, complete: false, id: Date.now()};
        addItem(newItems);
        setItems("");
    }
    const handleProgress = (id)=> {
        setItem((item) =>
            item.map((selectedItem) =>
                selectedItem.id === id ? {...selectedItem, complete: !selectedItem.complete} : selectedItem
            )
        );
    }
    const handleClear = (e) => {
        e.preventDefault();
        setItem([]);
    }

    return (
        <div>
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center">
                            <form className="form-control mb-5" onSubmit={handleAdd}>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Add Work
                                        Here</label>
                                    <input type="text" required value={items} onChange={(e) => setItems(e.target.value)}
                                           className="form-control" id="exampleFormControlInput1"/>
                                    <div className="d-flex justify-content-end mt-2">
                                        <button type="submit" className="btn btn-primary">Add</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Itemlist item={item} clearButton={handleClear} doneButton={handleProgress}/>
        </div>
    );
};

export default AddItemsForm;