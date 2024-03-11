import React from 'react';
import './product.css';

const ProductList = (props) => {

    const renderList = ({prodlist}) => {

        if(prodlist){
            return prodlist.map((data) => {
                return(
                    <div key={data.id} className="card col-md-3">
                        <div class="row">
                            <div className="card-img">
                            <img className="card-img-top" src={data.img} alt={data.name}/>
                            </div>
                            <hr/>
                            <span className="topTemp">{data.name}</span>
                            </div>
                            <div className="card-body">
                            <span className="max">Rs. {data.price}</span>  
                                <h4 className="card-title">{data.type}</h4>
                                <p className="card-text">
                                    <p className="day">Rs. {data.price}</p>
                                </p>
                        </div>
                    </div>
                )  
            })
        }  
    }
    return(
        <div className="container">
            <div  className="row">
                {renderList(props)}
            </div>
        </div>
    )
}

export default ProductList;