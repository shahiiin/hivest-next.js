import styled from 'styled-components'
import Link from 'next/link'

const H1Styles = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 2.5rem;
  font-weight: var(--font-weight-6x);
  text-align: center !important;
  color: var(--black-color);
`

const ForgetPasswordStyles = styled.main`
  min-height: 100vh !important;
  background: var(--primary-background-color);
`

const ForgetPasswordPage = () => {
  return (
    <ForgetPasswordStyles>
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
                  <p className="text-center">
                    Please enter the email you used for sign up and we'll send a
                    link to reset the password.
                  </p>
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
                      <button className="btn btn-default btn-block ken-btn-primary">
                        Send Reset Link
                      </button>
                    </div>
                    <div className="form-group">
                      <p className="text-center">
                        <span className="mr-1">
                          <Link href="/login">Remember Your Password?</Link>
                        </span>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ForgetPasswordStyles>
  )
}

export default ForgetPasswordPage
