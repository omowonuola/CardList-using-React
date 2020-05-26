import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.css";


class CardView extends Component {
    render() {
        const { data, images} = this.props;

        const values = data.map((items, id) => {
            return (
                <div className="card" style={{width: "18rem"}} key={items.id}>
                    <div className="card-img-top">
                        <img src={images[id]}  alt="" key={items.id}></img>
                    </div>
                    
                    <div className="card-body">
                        <h5 className="card-title">Name: {items.name}</h5>
                        <p className="card-text">UserName: {items.username}</p>
                        <p className="card-text">Email: {items.email}</p>
                        <p className="card-text">Address: {`${items.username}, ${items.address.city}`}</p>
                        <p className="card-text">Phone Number: {items.phone}</p>
                    </div>
                </div>
            );
        });
    return <div className="card-columns container">{values}</div>;
    }
}


export default CardView;