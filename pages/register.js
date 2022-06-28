import styled from 'styled-components'
import Link from 'next/link'

const H1Styles = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 2.5rem;
  font-weight: var(--font-weight-6x);
  text-align: center !important;
  color: var(--black-color);
`

const RegisterStyles = styled.main`
  min-height: 100vh !important;
  background: var(--primary-background-color);
`

const RegisterPage = () => {
  return (
    <RegisterStyles>
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
                    <div className="form-group">
                      <input
                        type="password"
                        name="re-password"
                        id="password"
                        placeholder="Re-Password"
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <button className="btn btn-default btn-block ken-btn-primary">
                        Register
                      </button>
                    </div>
                    <div className="form-group">
                      <p className="text-center">
                        <span className="mr-1">Or</span>{' '}
                        <Link href="/login">
                          You have already have account?
                        </Link>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </RegisterStyles>
  )
}

export default RegisterPage
