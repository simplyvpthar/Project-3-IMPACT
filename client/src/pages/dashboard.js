import React from "react";

const Dashboard = () => {
  return (
    <div>
      <nav class="bg-black">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0 flex items-center">
                <img
                  className="block lg:hidden h-8 w-auto"
                  src="images/largesse_logo.png"
                  alt="Largesse logo"
                />
                <img
                  className="hidden lg:block h-8 w-auto"
                  src="images/largesse_logo.png"
                  alt="Largesse Logo"
                />
              </div>

              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  <a
                    href="/dashboard"
                    className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-yellow-500 hover:bg-gray-900"
                  >
                    Dashboard
                  </a>
                  <a
                    href="/charity"
                    className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-yellow-500 hover:bg-gray-900"
                  >
                    Charity
                  </a>
                  <a
                    href="/scholarship"
                    className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-yellow-500 hover:bg-gray-900"
                  >
                    Scholarships
                  </a>
                  <a
                    href="/pureFunding"
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
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-yellow-500 hover:bg-gray-900"
              >
                Dashboard
              </a>
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-yellow-500 hover:bg-gray-900"
              >
                Charity
              </a>
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-yellow-500 hover:bg-gray-900"
              >
                Scholarships
              </a>
              <a
                href="#"
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
            ****{" "}
          </h1>
        </div>
      </header>

      <main></main>
    </div>
  );
};

export default Dashboard;
