import React from 'react';
import './Profile.css';

export default class UserName extends React.Component {
    
        state = {
            produce: []
        }
    
    
    componentDidMount() {
        let userId = localStorage.getItem('current-user-id');
        const request = new Request(`https://ephaig-web.herokuapp.com/api/v1/${userId}/products-ordered`, {
            headers: new Headers({
              'Authorization': localStorage.getItem('x-access-token'),
            })
        });
    
        fetch(request)
        .then(res => res.json())
        .then(data => { 
            let produce = this.state.produce;
            for (let index = 0; index < data.orders.length; index++) {
                let product = data.orders[index].product,
                quantity = data.orders[index].quatity,
                status = data.orders[index].status,
                productsId = data.orders[index].productsId;
                const element = {product: product, quantity: quantity, status: status, productsId: productsId};
                //console.log(element)
                produce.push(element)
            }
            this.setState({
                produce: produce
            })
        })
        .catch(err => {
            console.log(err);
        })
        
    }
    render() {
        let produce = this.state.produce;
        for (let i = 0; i < produce.length; i++) {
            const ulTag = document.querySelector('#list');
            const list = document.createElement('li');
            const editLink = document.createElement('a');
            const delLink = document.createElement('a');
            const element = `${produce[i].product}, ${produce[i].quantity}, ${produce[i].status}`;
            const edit = 'Edit';
            const remove = 'Delete';
            let textnode = document.createTextNode(element);
            let editNode = document.createTextNode(edit);
            let deleteNode = document.createTextNode(remove);
            if(produce[i].status === "Pending" || produce[i].status ==='Started' ){
                editLink.appendChild(editNode);
                delLink.appendChild(deleteNode);
                list.appendChild(textnode);
                list.appendChild(editLink).setAttribute("href", `/${produce[i].productsId}/update`);
                list.appendChild(delLink).setAttribute("href", `/${produce[i].productsId}/delete`);
                ulTag.appendChild(list)
            } else {
                list.appendChild(textnode);
                ulTag.appendChild(list)
            }
        } 
        return (
            <div className="display-orders" >
                <div className="col-12" ><h5>Orders(Products, quantity and status)</h5></div>
                <div id="orders-con"><ul id="list"></ul></div>
            </div>
            
        )
    }
}