import React from "react";

const Peerfunding = () => {
  return (
    <div>
      <nav className="bg-black">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0 flex items-center">
                <img
                  className="block lg:hidden h-8 w-auto"
                  src="images/largesse_logo.png"
                  alt="Largesse Logo"
                />
                <img
                  className="hidden lg:block h-8 w-auto"
                  src="images/largesse_logo.png"
                  alt="Largess Logo"
                />
              </div>

              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  <a
                    href="homePage.html"
                    className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-yellow-500 hover:bg-gray-900"
                  >
                    Dashboard
                  </a>
                  <a
                    href="charity.html"
                    className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-yellow-500 hover:bg-gray-900"
                  >
                    Charity
                  </a>
                  <a
                    href="tuitionReinbursement.html"
                    className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-yellow-500 hover:bg-gray-900"
                  >
                    Tuition Reinbursement
                  </a>
                  <a
                    href="peerFunding.html"
                    className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-yellow-500 hover:bg-gray-900"
                  >
                    Peer Funding
                  </a>
                </div>
              </div>
            </div>

            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="ml-3 relative">
                <div>
                  <button
                    className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    id="user-menu"
                    aria-haspopup="true"
                  >
                    <img className="h-8 w-8 rounded-full" src="" alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className=" sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="homePage.html"
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-yellow-500 hover:bg-gray-900"
              >
                Dashboard
              </a>
              <a
                href="charity.html"
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-yellow-500 hover:bg-gray-900"
              >
                Charity
              </a>
              <a
                href="tuitionReinbursement.html"
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-yellow-500 hover:bg-gray-900"
              >
                Tuition Reinbursement
              </a>
              <a
                href="peerFunding.html"
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-yellow-500 hover:bg-gray-900"
              >
                Peer Funding
              </a>
            </div>
          </div>
        </div>
      </nav>

      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">
            {" "}
            Peer Funding{" "}
          </h1>
        </div>
      </header>

      <img src="images/header.jpeg" />

      <main>
        <div className="container-lg">
          <div className="row">
            <div className="col-md-10 mx-auto">
              <div className="contact-form">
                <h1>Largesse Peer-to-Peer Donations</h1>
                <p className="hint-text">
                  Donate here to help co-workers in need!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container-lg">
          <div className="row">
            <div className="col-md-10 mx-auto">
              <div className="contact-form">
                <h1>Post an anonymous message</h1>
                <p className="hint-text">
                  Say a few kind words to inspire hope!
                </p>
                <form>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      placeholder="Write a thoughtful message..."
                    ></textarea>
                    <label
                      className="hint-text"
                      for="exampleFormControlSelect1"
                    >
                      Donation Amount
                    </label>
                    <select className="hint-text">
                      <option>$25</option>
                      <option>$50</option>
                      <option>$75</option>
                      <option>$100</option>
                    </select>

                    <div className="contact-form">
                      <h1>Donate here to help co-workers in need!</h1>
                      <p className="hint-text">
                        Donate and leave an anonymous message
                      </p>
                      <label for="exampleFormControlSelect1">
                        Donation Amount
                      </label>
                      <select className="peerAmount">
                        <option>25</option>
                        <option>50</option>
                        <option>75</option>
                        <option>100</option>
                      </select>
                      <form>
                        <div className="form-group">
                          <textarea
                            className="peerMessage form-control"
                            id="exampleFormControlTextarea1"
                            rows="3"
                            placeholder="Write a thoughtful message..."
                          ></textarea>

                          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                            <div>
                              <a
                                href="#"
                                id="peerBtn"
                                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-400 md:py-4 md:text-lg md:px-10"
                              >
                                Donate!
                              </a>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Peerfunding;
