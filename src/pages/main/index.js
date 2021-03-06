import React, { Component } from 'react';
// import api from '../../services/api';
import axios from 'axios';
import './styles.css';

export default class Main extends Component {

    state = {
        products: [],
    }

    componentDidMount(){
    
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await axios.get('https://rocketseat-node.herokuapp.com/api/products');
        console.log(response.data.docs);
        
        this.setState({products: response.data.docs})
    }

    render() {

        const { products } = this.state;

        return(
           <div className="product-list">
               {products.map(product => (
                  <article key={product._id}>
                      <strong> {product.title} </strong>
                      <p>{product.description} </p>

                      <a href="">Acessar</a>
                  </article>
               ))}

               <div className="actions">
                   <button>Anterior</button>
                   <button>Próximo</button>
               </div>
           </div>
        )
    }
}