// src/components/About.js
import React from 'react';

const About = () => {
    return (
        <>
<div className="container my-5">
    <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
      <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
        <h1 className="display-4 fw-bold lh-1 text-body-emphasis">Pizza Perfect,Slice of Heaven Your Pizza, Your WayFast Pizza, Fresh Flavor Pizza on Demand</h1>
        <p className="lead">Pizza is one of the ultimate comfort foods, having won over the hearts and tastebuds of countless generations world-wide since the early 19th century. 
In the immortal words of Mary-Kate and Ashley Olsen "gimme pizza, p-i-z-z-a!".
In the United States, pizzerias are an incredibly popular segment in the restaurant industry, responsible for $46 billion in sales in 2020. </p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
          <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">CheckOut</button>
          <button type="button" className="btn btn-outline-secondary btn-lg px-4">Contact Us</button>
        </div>
      </div>
      <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
          <img className="rounded-lg-3" src="https://www.allrecipes.com/thmb/D73VvwH_cG06pVzh05oitTocYV8=/0x512/filters:no_upscale():max_bytes(150000):strip_icc()/48727-Mikes-homemade-pizza-DDMFS-beauty-4x3-BG-2974-a7a9842c14e34ca699f3b7d7143256cf.jpg" alt="" width="620"/>
      </div>
    </div>
  </div>



<div className="row row-cols-1 row-cols-md-3 g-4">
<div className="col">
<div className="card h-100">
  <img src="https://api.dominos.co.in/prod-olo-api/images/Home_Paytm_20210519.jpg" height={300} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Farm House</h5>
    <p className="card-text">A pizza that goes ballistic on veggies! Check out this mouth watering overload of crunchy, crisp capsicum, succulent mushrooms and fresh tomatoes.</p>
  </div>
  <div className="card-footer">
    <small className="text-body-secondary">Last updated 3 mins ago</small>
  </div>
</div>
</div>
<div className="col">
<div className="card h-100">
  <img src="https://api.dominos.co.in/prod-olo-api/images/Home_airtel_30082020.jpg" height={300} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Peppy Paneer</h5>
    <p className="card-text">Chunky paneer with crisp capsicum and spicy red pepper - quite a mouthful!.</p>
  </div>
  <div className="card-footer">
    <small className="text-body-secondary">Last updated 3 mins ago</small>
  </div>
</div>
</div>
<div className="col">
<div className="card h-100">
  <img src="https://api.dominos.co.in/prod-olo-api/images/Dominos_Mobi_Home_20210503.jpg" height={300} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Deluxe Veggie</h5>
    <p className="card-text">For a vegetarian looking for a BIG treat that goes easy on the spices, this one's got it all.. The onions, the capsicum, those delectable mushrooms - with paneer and golden corn to top it all..</p>
  </div>
  <div className="card-footer">
    <small className="text-body-secondary">Last updated 3 mins ago</small>
  </div>
</div>
</div>
</div>
        </>
    )
  };

export default About;
