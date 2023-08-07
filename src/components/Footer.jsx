import React from 'react';

const Footer = (props) => {
    const noItem = <em>No task to do.</em>
    const noOfItems = props.item.length;
    const completedItems = props.item.filter((items) => items.complete).length;
    const hasItem = <em>You have total {noOfItems} tasks on your list. Completed Tasks {completedItems}.</em>
    const allDone = <em>Yahoo!!!You have completed all the tasks.</em>
    return (

        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center fw-bolder h3">
                        {
                            !props.item.length ? noItem :
                                completedItems === noOfItems ? allDone : hasItem
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;