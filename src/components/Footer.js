import { Link } from "react-router-dom";

function Footer(){
    return (
      <>
<footer className="footer mt-auto py-3 bg-body-tertiary">
<div className="container  ">
    <div className="row">
    <div className="col-6">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <li className="nav-item"><Link to="/" className="nav-link px-2 text-body-secondary">Home</Link></li>
      <li className="nav-item"><Link to="/about" className="nav-link px-2 text-body-secondary">About</Link></li>
      <li className="nav-item"><Link to="/items" className="nav-link px-2 text-body-secondary">All Items</Link></li>
      <li className="nav-item"><Link to="/add" className="nav-link px-2 text-body-secondary">Add New Item</Link></li>
      <li className="nav-item"><Link to="/contact" className="nav-link px-2 text-body-secondary">ContactUs</Link></li>
    </ul>
    <p className="text-center text-body-secondary">© 2024 Company, Inc</p>
    </div>
    <div className="col-6">
        <form>
          <h5>Subscribe to our newsletter</h5>
          <p>Monthly digest of what's new and exciting from us.</p>
          <div className="d-flex flex-column flex-sm-row w-100 gap-2">
            <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" className="form-control" placeholder="Email address"/>
            <button className="btn btn-primary" type="button">Subscribe</button>
          </div>
          <p>123, sonkach , khandar ,Sawai madhopur,Rajasthan ,Inida-322001.</p>
        </form>
      </div>
      </div>
</div>
</footer>
      </>
    )
  }


export default Footer;



