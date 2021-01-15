import React from 'react';
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
           <tr>
              <th />
              <th>PRODUTO</th>
              <th>QTD</th>
              <th>SUBTOTAL</th>
              <th />
           </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img src="https://assets.adidas.com/images/w_600,f_auto,q_auto/c67a81869c2f4fd68479a993013f6ee2_9366/Tenis_Run_80s_Preto_F34451_01_standard.jpg" 
                   alt="Tenis" />
            </td>
            <td>
              <strong>Tênis muito massa</strong>
              <span>R$120,00</span>
            </td>
            <td>
              <div>
               <button type="button">
                  <MdRemoveCircleOutline size={20} color="#7159c1" />
               </button>

               <input type="number" readOnly value={2} />

               <button type="button">
                  <MdAddCircleOutline size={20} color="#7159c1" />
               </button>
               </div>
            </td>
            <td>
              <strong>R$240,00</strong>
            </td>
            <td>
              <button type="button">
                 <MdDelete size={20} color="#7159c1"/>
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>
      <footer>
        <button type="button">Finalizar Pedido</button>

        <Total>
          <span>TOTAL</span>
          <strong>R$1920,29</strong>
        </Total>
      </footer>
    </Container>
  )
}

export default Cart;