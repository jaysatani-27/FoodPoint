import React, { useState, useRef, useEffect } from "react";
import { useDispatchCart, useCart } from "./ContextReducer";
import { ToastContainer, toast } from 'react-toastify';       //notification
import 'react-toastify/dist/ReactToastify.css';

export default function Card(props) {

  let dispatch = useDispatchCart();
  let data = useCart();

  let options = props.options;
  let priceOptions = Object.keys(options);
  let foodItem = props.foodItems;

  const [qty, setQty] = useState(1)
  const [size, setSize] = useState("")
  const priceRef = useRef();



  const handleAddToCart = async () => {

    let food = []
    for (const item of data) {
      if (item.id === foodItem._id) {
        food = item;

        break; 
      }
    }

    if (food !== []) {
      if (food.size === size) {
        await dispatch({ type: "UPDATE", id: foodItem._id, price: finalPrice, qty: qty })
        toast.success("Add To Cart",{autoClose:2000});
        return
      }
      else if (food.size !== size) {
        await dispatch({ type: "ADD", id: foodItem._id, name: foodItem.name, price: finalPrice, qty: qty, size: size })
        toast.success("Add To Cart",{autoClose:2000});
        return
        // await console.log(data)
      }
      toast.success("Add To Cart",{autoClose:2000});
      return
    }
    await dispatch({ type: "ADD", id: foodItem._id, name: foodItem.name, price: finalPrice, qty: qty, size: size })



  }

  let finalPrice = qty * parseInt(options[size]);         //This is where Price is changing


  useEffect(() => {
    setSize(priceRef.current.value)
  }, [])


  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-4">
          <div className="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
            <img src={foodItem.img} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} />

            <div className="card-body">
              <h5 className="card-title" style={{ marginLeft: "9px" }}>{foodItem.name}</h5>

              <div className="container w-100" style={{ padding: "1px" }}>
                {/* Quantity selection */}
                <select className="m-2 h=100 bg-succees rounded" onChange={(e) => setQty(e.target.value)}>
                  {Array.from(Array(6), (e, i) => {
                    return (
                      <option key={i + 1} value={i + 1}>
                        {i + 1}
                      </option>
                    );
                  })}
                </select>

                {/* Size selection */}
                <select className="m-2 h=100 bg-succees rounded" ref={priceRef} onChange={(e) => setSize(e.target.value)}>
                  {priceOptions.map((data) => {
                    return <option key={data} value={data}>{data}</option>
                  })}
                </select>

                <div className="d-inline h-100 fs-5">₹{finalPrice}/-</div>
              </div>
              <hr />

              <button className="btn btn-success justify-center ms-2" onClick={handleAddToCart}>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    
  );
}
