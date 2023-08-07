import React from 'react';

const Itemlist = (props) => {
    return (
        <div>
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h3>Work List</h3>
                        </div>
                        <div className="d-flex justify-content-center">
                            <table className="table table-striped">
                                <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col" width="80%">Description</th>
                                    <th scope="col">Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                {props.item.map((items, index) =>
                                    <tr key={items.id}>
                                        <th scope="row">{index + 1}</th>
                                        <td className={items.complete ? "text-decoration-line-through" : ""}>{items.desc}</td>
                                        <td>
                                            <button onClick={() => props.doneButton(items.id)}
                                                    className={!items.complete ? "btn btn-primary" : "btn btn-danger"}> {!items.complete ? "Done" : "Not Done"}
                                            </button>
                                        </td>
                                    </tr>
                                )}

                                </tbody>
                            </table>
                        </div>
                        <div className="d-flex justify-content-end mt-2">
                            <button onClick={props.clearButton} className="btn btn-danger">Clear List</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Itemlist;