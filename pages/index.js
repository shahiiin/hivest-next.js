import Link from 'next/link'
import styled from 'styled-components'
import Nav from './../components/styles/nav'
import Footer from './../components/styles/footer'
const MainStyles = styled.main``

const HeroStyles = styled.section`
  padding-top: 3rem !important;
  background: url(/images/landing/s2.png) left bottom no-repeat,
    url(/images/landing/s1.png) right bottom no-repeat,
    url(/images/landing/sv1.svg) left bottom no-repeat,
    url(/images/landing/sv2.svg) right bottom no-repeat,
    linear-gradient(to bottom, #1d1f23, #40454d);

  @media (max-width: 826px) {
    background: url(/images/landing/sv1.svg) left bottom no-repeat,
      linear-gradient(to bottom, #1d1f23, #40454d);
  }
`

const BenefitsStyles = styled.section`
  padding-bottom: 3rem !important;
  .benefits-item hr {
    border: 0.063rem solid #f8c337;
    width: 4rem;
  }

  .benefits-item p {
    color: rgba(64, 64, 64, 0.8);
  }
`
const StatStyles = styled.section`
  background: url(/images/landing/stat/sv5.svg) left center no-repeat,
    url(/images/landing/stat/sv4.svg) right center no-repeat, #29343b;
  margin-top: 10rem !important;
  margin-bottom: 1rem !important;
  padding: 3rem 0 !important;

  .uprow {
    position: relative;
    top: -10rem;
  }

  @media (max-width: 767px) {
    .stat-item {
      border: none !important;
    }
    .rounded-pill {
      border-radius: 1rem !important;
    }
    
    .uprow {
    position: relative;
    top: 0;
  }

  }
`
const TimelineStyles = styled.section`
  padding: 3rem 0 !important;

  @media (max-width: 767px) {
    .time-line-item {
      margin: 2.5rem 0;
    }
    .col-title {
      order: 1;
      margin-top: -1.5rem;
    }
  }
`

const ChannelsStyles = styled.section`
  padding: 3rem 0 !important;
  background: linear-gradient(180deg, #29343b 0%, #1e272d 100%);
  .table td,
  .table th {
    padding: 0.5rem;
  }
`
const CreatechannelStyles = styled.section`
  padding: 3rem 0 !important;
`
function HomePage() {
  return (
    <>
      <MainStyles>
        <Nav />
        <HeroStyles>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="slider-item text-center text-light">
                  <h1 className="mb-3">
                    Earn Up to 20% APY on RIF and DUSK with <br />
                    Kennesin Hive
                  </h1>
                  <p className="mb-3">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been <br />
                    the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of
                    <br />
                    type and scrambled it to make a type specimen book.
                  </p>
                  <button className="btn btn-warning px-4 my-2">
                    Get Started
                  </button>
                  <div className="mt-4">
                    <img
                      className="img-fluid"
                      src="/images/landing/hero1.png"
                      alt="Kennesin Hive Get Started"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </HeroStyles>
        <BenefitsStyles>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="header-section">
                  <h2 className="mt-5 h1 text-center">
                    Benefits of using a resume builder
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="benefits-item text-center">
                  <img
                    className="mt-5"
                    src="/images/landing/benfits/AI-driven.svg"
                    alt="AI - Driven"
                  />
                  <h4 className="mt-3">AI - Driven</h4>
                  <hr className="w-25 text-warning" />
                  <p>
                    Lorem Ipsum is simply dummy <br />
                    text of the printing and typesetting <br />
                    industry
                  </p>
                  <a className="text-decoration-none" href="#"><span className="text-warning">Read more</span></a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="benefits-item text-center">
                  <img
                    className="mt-5"
                    src="/images/landing/benfits/Risk-management.svg"
                    alt="Risk Management"
                  />
                  <h4 className="mt-3">Risk Management</h4>
                  <hr className="w-25 text-warning" />
                  <p>
                    Lorem Ipsum is simply dummy <br />
                    text of the printing and typesetting <br />
                    industry
                  </p>
                  <a className="text-decoration-none" href="#"><span className="text-warning">Read more</span></a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="benefits-item text-center">
                  <img
                    className="mt-5"
                    src="/images/landing/benfits/Average-profits.svg"
                    alt="Avrage Profit"
                  />
                  <h4 className="mt-3">Avrage Profit</h4>
                  <hr className="w-25 text-warning" />
                  <p>
                    Lorem Ipsum is simply dummy <br />
                    text of the printing and typesetting <br />
                    industry
                  </p>
                  <a className="text-decoration-none" href="#"><span className="text-warning">Read more</span></a>
                </div>
              </div>
            </div>
          </div>
        </BenefitsStyles>
        <StatStyles>
          <div className="container py-4">
            <div className="row bg-white rounded-pill py-5 uprow shadow">
            <div className="col-md-4 mb-4 mb-md-0">
                <div className="stat-item text-center">
                  <div>
                    <img
                      className="mr-2 mb-4"
                      src="/images/landing/stat/st1.svg"
                      alt="Average profits"
                    />
                    <h2 className="h1 d-inline-block">434 $</h2>
                  </div>
                  <span className="h5">Average profits</span>
                </div>
              </div>
              <div className="col-md-4 mb-4 mb-md-0">
                <div className="stat-item text-center border-left">
                  <div>
                    <img
                      className="mr-2 mb-4"
                      src="/images/landing/stat/st2.svg"
                      alt="Average profits"
                    />
                    <h2 className="h1 d-inline-block">523</h2>
                  </div>
                  <span className="h5">Channels Count</span>
                </div>
              </div>
              <div className="col-md-4 mb-4 mb-md-0">
                <div className="stat-item text-center  border-left">
                  <div>
                    <img
                      className="mr-2 mb-4"
                      src="/images/landing/stat/st3.svg"
                      alt="Average profits"
                    />
                    <h2 className="h1 d-inline-block">982</h2>
                  </div>
                  <span className="h5">Users Count</span>
                </div>
              </div>
            </div>
          </div>
        </StatStyles>
        <TimelineStyles>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="header-section">
                  <h2 className="mt-5 h1 text-center">How it work</h2>
                </div>
              </div>
            </div>
          </div>

          <div className="container py-2 mt-4 mb-4">
            <div className="row no-gutters align-items-center time-line-item">
              <div className="col-md py-2">
                <div className="card shadow rounded-pill">
                  <div className="card-body d-flex flex-row align-items-center px-4">
                    <div className="mr-3 mb-0 h2 text-warning">
                      <i className="far fa-comment-dots"></i>
                    </div>
                    <p className="card-text mb-0 ">
                      Sign-up for the lessons and speakers that coincide with
                      your course syllabus.
                    </p>
                    <div className="ml-3 mb-0 h2">01</div>
                  </div>
                </div>
              </div>
              <div className="col-md-1 text-center flex-column d-none d-md-flex">
                <div className="row h-50">
                  <div className="col  border-right">&nbsp;</div>
                  <div className="col">&nbsp;</div>
                </div>
                <h5 className="m-2">
                  <span className="badge badge-pill bg-light border">
                    &nbsp;
                  </span>
                </h5>
                <div className="row h-50">
                  <div className="col border-right">&nbsp;</div>
                  <div className="col">&nbsp;</div>
                </div>
              </div>
              <div className="col-md col-title py-2">
                <div className="card shadow d-inline-flex float-md-left bg-warning rounded-pill">
                  <div className="card-body  px-4 py-2">
                    <h4 className="card-title m-0">Answer Questions</h4>
                  </div>
                </div>
              </div>
            </div>

            <div className="row no-gutters align-items-center time-line-item">
              <div className="col-md col-title py-2">
                <div className="card shadow d-inline-flex float-md-right bg-warning rounded-pill">
                  <div className="card-body  px-4 py-2">
                    <h4 className="card-title m-0">Sync Exchange</h4>
                  </div>
                </div>
              </div>
              <div className="col-md-1 text-center flex-column d-none d-md-flex">
                <div className="row h-50">
                  <div className="col border-right">&nbsp;</div>
                  <div className="col">&nbsp;</div>
                </div>
                <h5 className="m-2">
                  <span className="badge badge-pill bg-light border">
                    &nbsp;
                  </span>
                </h5>
                <div className="row h-50">
                  <div className="col border-right">&nbsp;</div>
                  <div className="col">&nbsp;</div>
                </div>
              </div>
              <div className="col-md py-2">
                <div className="card shadow rounded-pill">
                  <div className="card-body d-flex flex-row-reverse align-items-center px-4">
                    <div className="ml-3 mb-0 h2 text-warning">
                      <i className="fas fa-sync-alt"></i>
                    </div>
                    <p className="card-text mb-0 ">
                      Sign-up for the lessons and speakers that coincide with
                      your course syllabus.
                    </p>
                    <div className="mr-3 mb-0 h2">02</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row no-gutters align-items-center time-line-item">
              <div className="col-md py-2">
                <div className="card shadow rounded-pill">
                  <div className="card-body d-flex flex-row align-items-center px-4">
                    <div className="mr-3 mb-0 h2 text-warning">
                      <i className="far fa-check-circle"></i>
                    </div>
                    <p className="card-text mb-0 ">
                      Sign-up for the lessons and speakers that coincide with
                      your course syllabus.
                    </p>
                    <div className="ml-3 mb-0 h2">03</div>
                  </div>
                </div>
              </div>
              <div className="col-md-1 text-center flex-column d-none d-md-flex">
                <div className="row h-50">
                  <div className="col  border-right">&nbsp;</div>
                  <div className="col">&nbsp;</div>
                </div>
                <h5 className="m-2">
                  <span className="badge badge-pill bg-light border">
                    &nbsp;
                  </span>
                </h5>
                <div className="row h-50">
                  <div className="col border-right">&nbsp;</div>
                  <div className="col">&nbsp;</div>
                </div>
              </div>
              <div className="col-md col-title py-2">
                <div className="card shadow d-inline-flex float-md-left bg-warning rounded-pill">
                  <div className="card-body  px-4 py-2">
                    <h4 className="card-title m-0">Choose Plan</h4>
                  </div>
                </div>
              </div>
            </div>

            <div className="row no-gutters align-items-center time-line-item">
              <div className="col-md col-title py-2">
                <div className="card shadow d-inline-flex float-md-right bg-warning rounded-pill">
                  <div className="card-body  px-4 py-2">
                    <h4 className="card-title m-0">Start Earning</h4>
                  </div>
                </div>
              </div>
              <div className="col-md-1 text-center flex-column d-none d-md-flex">
                <div className="row h-50">
                  <div className="col border-right">&nbsp;</div>
                  <div className="col">&nbsp;</div>
                </div>
                <h5 className="m-2">
                  <span className="badge badge-pill bg-light border">
                    &nbsp;
                  </span>
                </h5>
                <div className="row h-50">
                  <div className="col border-right">&nbsp;</div>
                  <div className="col">&nbsp;</div>
                </div>
              </div>
              <div className="col-md py-2">
                <div className="card shadow rounded-pill">
                  <div className="card-body d-flex flex-row-reverse align-items-center px-4">
                    <div className="ml-3 mb-0 h2 text-warning">
                      <i className="far fa-gem"></i>
                    </div>
                    <p className="card-text mb-0 ">
                      Sign-up for the lessons and speakers that coincide with
                      your course syllabus.
                    </p>
                    <div className="mr-3 mb-0 h2">04</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TimelineStyles>
        <ChannelsStyles>
          <div className="container-fluid">
            <div className="row py-5">
              <div className="col-lg-4">
                <div className="des-channels mb-5">
                  <h2 className="text-white">Earn more money with...</h2>
                  <p className="my-4 text-justify text-light">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                  <button
                    type="button"
                    className="btn btn-outline-warning px-5"
                  >
                    Get Start
                  </button>
                </div>
              </div>

              <div className="col-lg-8">
                <div className="row">
                  <div className="col-md-4">
                    <div className="card bg-light mb-3">
                      <div className="card-header bg-gray py-5"></div>
                      <div className="card-body">
                        <h5 className="card-text">Channel Name</h5>
                        <span className="text-tit text-secondary">Creator</span>
                        <br />
                        <div className="d-flex justify-content-between">
                          <span className="text-tit text-secondary">
                            Last Profit:
                          </span>
                          <p style={{ color: '#49DF3E' }}>+3%</p>
                          <h4>23.2$</h4>
                        </div>
                        <div class="table-responsive">
                          <table className="table table-borderless">
                            <thead>
                              <tr>
                                <th
                                  className="text-tit font-weight-light text-secondary"
                                  scope="col"
                                >
                                  Market Base
                                </th>
                                <th
                                  className="text-tit font-weight-light text-secondary"
                                  scope="col"
                                >
                                  Num OF SUB
                                </th>
                                <th
                                  className="text-tit font-weight-light text-secondary"
                                  scope="col"
                                >
                                  Risk
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="text-tit ">PAN - BTC</td>
                                <td className="text-tit ">134</td>
                                <td className="text-tit ">Medium</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card bg-light mb-3">
                      <div className="card-header bg-gray py-5"></div>
                      <div className="card-body">
                        <h5 className="card-text">Channel Name</h5>
                        <span className="text-tit text-secondary">
                          Creator
                        </span>{' '}
                        <br />
                        <div className="d-flex justify-content-between">
                          <span className="text-tit text-secondary">
                            Last Profit:
                          </span>
                          <p style={{ color: '#49DF3E' }}>+3%</p>
                          <h4>23.2$</h4>
                        </div>
                        <div class="table-responsive">
                          <table className="table table-borderless">
                            <thead>
                              <tr>
                                <th
                                  className="text-tit font-weight-light text-secondary"
                                  scope="col"
                                >
                                  Market Base
                                </th>
                                <th
                                  className="text-tit font-weight-light text-secondary"
                                  scope="col"
                                >
                                  Num OF SUB
                                </th>
                                <th
                                  className="text-tit font-weight-light text-secondary"
                                  scope="col"
                                >
                                  Risk
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="text-tit ">PAN - BTC</td>
                                <td className="text-tit ">134</td>
                                <td className="text-tit ">Medium</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card bg-light mb-3">
                      <div className="card-header bg-gray py-5"></div>
                      <div className="card-body">
                        <h5 className="card-text">Channel Name</h5>
                        <span className="text-tit text-secondary">Creator</span>
                        <br />
                        <div className="d-flex justify-content-between">
                          <span className="text-tit text-secondary">
                            Last Profit:
                          </span>
                          <p style={{ color: '#49DF3E' }}>+3%</p>
                          <h4>23.2$</h4>
                        </div>
                        <div class="table-responsive">
                          <table className="table table-borderless">
                            <thead>
                              <tr>
                                <th
                                  className="text-tit font-weight-light text-secondary"
                                  scope="col"
                                >
                                  Market Base
                                </th>
                                <th
                                  className="text-tit font-weight-light text-secondary"
                                  scope="col"
                                >
                                  Num OF SUB
                                </th>
                                <th
                                  className="text-tit font-weight-light text-secondary"
                                  scope="col"
                                >
                                  Risk
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="text-tit ">PAN - BTC</td>
                                <td className="text-tit ">134</td>
                                <td className="text-tit ">Medium</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ChannelsStyles>

        <CreatechannelStyles>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="create-hannel-content text-center">
                  <img
                    src="/images/landing/earn-up.svg"
                    alt="earn-up"
                    class="mt-5 mb-5"
                  />
                  <h1>
                    Earn Up to 20% APY on RIF and DUSK with <br />
                    Kennesin Hive
                  </h1>
                  <h4 className="mt-5 mb-5">Create Channel</h4>
                  <p className="text-secondary">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industryLorem Ipsum is simply dummy text of the
                    printing and typesetting industry Lorem Ipsum is simply
                    dummy text of the printing and typesetting industry
                  </p>
                  <button className="btn btn-warning px-4 my-2">
                    Make channel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </CreatechannelStyles>
      </MainStyles>
      <Footer />
    </>
  )
}

export default HomePage
