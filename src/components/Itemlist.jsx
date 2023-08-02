import React from 'react';

const Itemlist = () => {
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
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>
                                        <button className="btn btn-primary me-2">Edit</button>
                                        <button className="btn btn-danger">Done</button>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="d-flex justify-content-end mt-2">
                            <button className="btn btn-danger">Clear List</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Itemlist;