import React from "react";

function Footer() {
  return (
    <>
      <div className="container ">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top my-20 footer">
          <div className="col-md-4 d-flex align-items-center">
            <a
              href="/"
              className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
            >
              <svg className="bi" width="30" height="24"></svg>
            </a>
            <span className="text-muted">© 2025 Hemant Jangde</span>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
              <a className="text-muted" href="#">
                twitter
              </a>
            </li>
            <li className="ms-3">
              <a className="text-muted" href="#">
                instagram
              </a>
            </li>
            <li className="ms-3">
              <a className="text-muted" href="#">
                facebook
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
}

export default Footer;
