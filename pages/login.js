import styled from 'styled-components'
import Link from 'next/link'

const H1Styles = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 2.5rem;
  font-weight: var(--font-weight-6x);
  text-align: center !important;
  color: var(--black-color);
`

const LoginStyles = styled.main`
  min-height: 100vh !important;
  background: var(--primary-background-color);
`

const LoginPage = () => {
  return (
    <LoginStyles>
      <section className="container">
        <div className="row align-self-center">
          <div className="col-md-6 mx-auto pt-5">
            <div className="card border-raduis-1">
              <div className="card-body">
                <div className="text-center mt-1 mb-5">
                  <img src="images/logo.png" alt="Kennstin Hive" />
                  <H1Styles>Kennstin Hive</H1Styles>
                </div>
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="px-md-4">
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        className="form-control"
                      />
                    </div>

                    <div className="form-group">
                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                        className="form-control"
                      />
                    </div>

                    <div className="form-group ml-2">
                      <Link href="/forget-password" className="forget-pass-link">
                        Forget Your Password?
                      </Link>
                    </div>

                    <div className="ml-2 form-group form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                      />
                      <label className="form-check-label" for="exampleCheck1">
                        Remember Account
                      </label>
                    </div>
                    <div className="form-group">
                      <button className="btn btn-default btn-block ken-btn-primary">
                        Login
                      </button>
                    </div>
                    <div className="form-group">
                      <p className="text-center">
                        <span className="mr-1">Don't Have an Account?</span>
                        <Link href="/register">Sign Up</Link>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </LoginStyles>
  )
}

export default LoginPage
