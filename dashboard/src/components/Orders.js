import React, { useEffect, useState } from "react";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("https://zerodha-clone-coln.onrender.com/allOrders")
      .then((res) => {
        setOrders(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="orders">
      <h3>Orders</h3>

      {orders.length === 0 ? (
        <p>You haven't placed any orders today</p>
      ) : (
        orders.map((order, index) => (
          <div key={index}>
            <p>
              {order.name} - {order.mode} - Qty: {order.qty}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default Orders;