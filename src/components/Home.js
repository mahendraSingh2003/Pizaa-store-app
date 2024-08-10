// src/components/Home.js
import React from 'react';

function Home (){
return (
  <>
  <div className="d-flex flex-row mb-3">
  <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="1000">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa8QwCqDbNHIz3kCm0KBBYSMIkaEZQda6DRw&s" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="1000">
      <img src="https://www.itruereview.com/wp-content/uploads/2013/08/MAL_36441-600x399.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="1000">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPFVLumVvyIoOyjtrkwKkYOeOCNnHcWHQRiA&s" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
  </div>
  <div className="container col-xxl-8 px-4 py-5">
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div className="col-10 col-sm-8 col-lg-6">
        <img src="https://villarestaurantgroup.com/wp-content/uploads/2023/08/1-1.jpg" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width={700} height={1000} loading="lazy"/>
      </div>
      <div className="col-lg-6">
      <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">THE BEST PLACE TO SATISFY YOUR TUMMY</h1>
        <p className="lead">Pizza Hut.</p><br/>
        <p className="lead">The Best Pizzas Under one Roof.</p>best pizza in town. got pizza? family, friends, and pizza .we owe it all to pizza hand-tossed goodness a smile in every slice.
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Order Now</button>
          <button type="button" className="btn btn-outline-secondary btn-lg px-4">Lets Try</button>
        </div>
      </div>
    </div>
  </div>
</div>
  <div className="container px-4 py-5" id="custom-cards">
    <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
      <div className="col">
        <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundImage: "url('https://lh5.googleusercontent.com/p/AF1QipNcslCk02ufRlxJt5vu9LCEf3tfWNUKS9npSN1b=w260-h175-n-k-no')" }}>
          <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">La Pino'z Pizza</h3>
            <ul className="d-flex list-unstyled mt-auto">
              <li className="me-auto">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-8b4FjxZHeMGMq0mZoV6FjHVFxbj_u_qM_g&s" alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white"/>
              </li>
              <li className="d-flex align-items-center me-3">
                <svg className="bi me-2" width="1em" height="1em"><use href="#geo-fill"></use></svg>
                <small>4.5 *</small>
              </li>
              <li className="d-flex align-items-center">
                <svg className="bi me-2" width="1em" height="1em"><use href="#calendar3"></use></svg>
                <small>20 hours</small>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="col">
        <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/p/AF1QipOjbLMt3WSTb4rt19bGyB2dK3VRHku__2AGA_28=s680-w680-h510')" }}>
          <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Pizza hut </h3>
            <ul className="d-flex list-unstyled mt-auto">
              <li className="me-auto">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-8b4FjxZHeMGMq0mZoV6FjHVFxbj_u_qM_g&s" alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white"/>
              </li>
              <li className="d-flex align-items-center me-3">
                <svg className="bi me-2" width="1em" height="1em"><use href="#geo-fill"></use></svg>
                <small>India</small>
              </li>
              <li className="d-flex align-items-center">
                <svg className="bi me-2" width="1em" height="1em"><use href="#calendar3"></use></svg>
                <small>1d</small>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="col">
        <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundImage: "url('https://lh5.googleusercontent.com/p/AF1QipPgcmG4f6orNflOybvmMSHBlBi-uddk_8m3GnML=w260-h175-n-k-no')" }}>
          <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
            <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">The D Pizza</h3>
            <ul className="d-flex list-unstyled mt-auto">
              <li className="me-auto">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-8b4FjxZHeMGMq0mZoV6FjHVFxbj_u_qM_g&s" alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white"/>
              </li>
              <li className="d-flex align-items-center me-3">
                <svg className="bi me-2" width="1em" height="1em"><use href="#geo-fill"></use></svg>
                <small>2* india</small>
              </li>
              <li className="d-flex align-items-center">
                <svg className="bi me-2" width="1em" height="1em"><use href="#calendar3"></use></svg>
                <small>2d</small>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>
)
}
export default Home;
