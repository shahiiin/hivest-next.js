import styled from 'styled-components'

const FooterStyles = styled.footer`
  padding: 3rem 0 !important;
  margin-top: 1.5rem !important;
  background: #29343b;
  .subscribe input {
    background: #94999d;
    border-color: #94999d;
  }
  .links-footer ul li a {
    color: #d0d2d4;
  }
  .social-icons ul li a {
    color: #d0d2d4;
  }
`

const Footer = () => {
  return (
    <FooterStyles>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="about-footer">
              <a className="" href="#">
                <img
                  src="/images/logo-footer.png"
                  alt="KENNSTIN HIVE"
                />
                <h1 className="h5 text-white d-inline-block ml-2">
                  KENNSTIN HIVE
                </h1>
              </a>
              <p></p>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="links-footer">
              <h3 className="text-white h5 mb-3">Title of this col</h3>
              <ul className="list-inline d-inline-block">
                <li className="">
                  <a href="#"> Normal content</a>
                </li>
                <li className="">
                  <a href="#"> Normal content</a>
                </li>
                <li className="">
                  <a href="#"> Normal content</a>
                </li>
                <li className="">
                  <a href="#"> Normal content</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="links-footer">
              <h3 className="text-white h5 mb-3">Title of this col</h3>
              <ul className="list-inline">
                <li className="">
                  <a href="#"> Normal content</a>
                </li>
                <li className="">
                  <a href="#"> Normal content</a>
                </li>
                <li className="">
                  <a href="#"> Normal content</a>
                </li>
                <li className="">
                  <a href="#"> Normal content</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="links-footer">
              <h3 className="text-white h5 mb-3">Title of this col</h3>
              <ul className="list-inline">
                <li className="">
                  <a href="#"> Normal content</a>
                </li>
                <li className="">
                  <a href="#"> Normal content</a>
                </li>
                <li className="">
                  <a href="#"> Normal content</a>
                </li>
                <li className="">
                  <a href="#"> Normal content</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row my-5">
          <div className="col-lg-6">
            <div className="social-icons mb-4">
              <h3 className="text-white h5 mb-3">Follow us on</h3>
              <ul className="list-inline">
                <li className="list-inline-item">
                  <a className="h3" href="#">
                    <i className="fab fa-github"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="h3" href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="h3" href="#">
                    <i className="fab fa-telegram-plane"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="h3" href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="subscribe mb-4">
              <form className="">
                <div className="form-row">
                  <div className="col-8">
                    <input
                      type="text"
                      className="form-control mb-2 mr-sm-2"
                      id="inlineFormInputName2"
                      placeholder=""
                    />
                  </div>
                  <div className="col-4">
                    <button type="submit" className="btn btn-warning mb-2 px-4">
                      Subscribe
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </FooterStyles>
  )
}

export default Footer
