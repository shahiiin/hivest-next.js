import Link from 'next/link'
import styled from 'styled-components'

const Logo = '/images/logo.png'

const HeaderStyles = styled.header`
  background: var(--dark-color) !important;
`

const NavbarStyles = styled.nav`
 background: var(--dark-color) !important;
  .navbar-nav .nav-item .nav-link {
    padding: 0.5rem 1.5rem;
  }
`

const Navbar = () => {
  return (
    <HeaderStyles>
      <div className="container">
        <div className="row">
          <div className="col">
            <NavbarStyles className="navbar navbar-dark bg-dark navbar-expand-lg py-4">
              <a className="navbar-brand h6 text-warning mb-0" href="/">
                <img
                  src={Logo}
                  className="d-inline-block mr-2"
                  alt="KENNSTIN HIVE"
                />
                KENNSTIN HIVE
              </a>

              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="/">
                      Home <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Weblog
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      About us
                    </a>
                  </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                  <Link href="/register">
                    <button
                      type="button"
                      className="btn btn-outline-warning mr-3"
                    >
                      Register Now
                    </button>
                  </Link>
                  <Link href="/login">
                    <button className="btn btn-outline-light border-0">
                      Sign in
                    </button>
                  </Link>
                </form>
              </div>
            </NavbarStyles>
          </div>
        </div>
      </div>
    </HeaderStyles>
  )
}

export default Navbar
