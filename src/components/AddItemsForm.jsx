import React from 'react';

const AddItemsForm = () => {
    return (
        <div>
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center">
                            <form className="form-control mb-5">
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Add Work Here</label>
                                    <input type="email" className="form-control" id="exampleFormControlInput1"/>
                                    <div className="d-flex justify-content-end mt-2">
                                        <button type="submit" className="btn btn-primary">Add</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
);
};

export default AddItemsForm;