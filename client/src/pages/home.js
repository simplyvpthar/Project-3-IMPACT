import React from "react";

const Home = () => {
  return (
    
    <div>

  <nav className="bg-black">

    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div className="relative flex items-center justify-between h-16">

        
        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">

          <div className="flex-shrink-0 flex items-center">
            <img className="block lg:hidden h-8 w-auto" src="images/largesse_logo.png" alt="Largesse Logo"/>
            <img className="hidden lg:block h-8 w-auto" src="images/largesse_logo.png" alt="Largesse Logo"/>
          </div>

          
          <div className="hidden sm:block sm:ml-6">
            <div className="flex space-x-4">
              <a href="#"
                className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-yellow-500 hover:bg-gray-900">Dashboard</a>
              <a href="charity.html"
                className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-yellow-500 hover:bg-gray-900">Charity</a>
              <a href="tuitionReinbursement.html"
                className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-yellow-500 hover:bg-gray-900">Tuition Reinbursement</a>
              <a href="peerFunding.html"
                className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-yellow-500 hover:bg-gray-900">Peer
                Funding</a>
            </div>
          </div>

        </div>

    
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <div className="ml-3 relative">
            <div>
              <button
                className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                id="user-menu" aria-haspopup="true">
                <img className="h-8 w-8 rounded-full" src="" alt=""/>
              </button>
            </div>
          </div>
        </div>

      </div>

      
      <div className=" sm:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a href="/home"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-yellow-500 hover:bg-gray-900">Home</a>
          <a href="/charity"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-yellow-500 hover:bg-gray-900">Charity</a>
          <a href="/tuitionreinbursement"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-yellow-500 hover:bg-gray-900">Tuition Reinbursement</a>
          <a href="/peerfunding"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-yellow-500 hover:bg-gray-900">Peer
            Funding</a>
        </div>
      </div>

    </div>
  </nav>

  
  <header className="bg-white shadow">
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold leading-tight text-gray-900"> Home </h1>
    </div>
  </header>

    <img src="images/fingers.jpeg"/>
  
  <main>

    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">

      <main>
        <div className="lg:text-center">
           <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Overview</h2> 
          <h1 className="text-9xl tracking-tight font-extrabold text-yellow-500">Largesse</h1>

          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">At <b className="text-yellow-500">Largesse</b>, we understand that the communities where
            we operate are far more than just the physical locations of our facilities. These communities are made up of
            our families, coworkers and neighbors. They are also the places where our employees choose to live and raise
            their families, and where our future workforce is educated and trained. <b className="text-yellow-500">Largesse</b> is committed to supporting
            our
            employees, their family members and the people of communities.</p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">This program focuses on making a positive
            difference
            through our contributions, deeper connections, and close relationships with organizations that make our
            society better. The program will encompass all <b className="text-yellow-500">Largesse</b> employees, geographies and will include options for
            employees to contribute in addition to the <b className="text-yellow-500">Largesse</b> annual contribution. Together, giving with <b className="text-yellow-500">Largesse</b>.</p>
        </div>
      </main>
      </div>
      </main>
      
      <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div className="sm:text-center lg:text-left">
          
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">Charity</span>
            <span className="block text-yellow-500 xl:inline">brought to you by Largesse</span>
          </h1>
          
          <ul className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            <li>Partner with a charitable organization globally and provide an annual donation with  <b className="text-yellow-500">Largesse</b>.</li>
            <br/>
            <li>All charity options are reputable organizations.</li>
            <br/>
            <li>Donate a minimum of $25 or give with Largesse and make a $100 contribution to the charity of your choice!</li>
</ul>
          
    
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div>
              <a href="/charity"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-400 md:py-4 md:text-lg md:px-10">
                Get started
              </a>
            </div>
          </div>
        </div>
      </main>

    
      <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div className="sm:text-center lg:text-left">
          
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">Tuition Reinbursement</span>
            <span className="block text-yellow-500 xl:inline">brought to you by Largesse</span>
          </h1>
          
          <ul className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            
            <li>In the process of continuing your education?  Fill out the form on the tuition reinbursement page and see
              if you qualify!</li>
            <br/>
            <li>Applicants that complete a college credit with a B average or better will be considered for reinbursement
              if the course is relevant to their current or future role.
            </li>
            
          </ul>
          
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div>
              <a href="/tuitionreinbursement"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-400 md:py-4 md:text-lg md:px-10">
                Get started
              </a>
            </div>
          </div>
        </div>
      </main>

      
      <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div className="sm:text-center lg:text-left">
    
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">Peer Funding</span>
            <span className="block text-yellow-500 xl:inline">brought to you by Largesse</span>
          </h1>
          
          <ul className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            <li>Internal fund set up to assist employees in time of need.</li>
            <br/>
            <li>Employees submit individual requests for themselves, for someone else; or even several employees.
              (tornado, other natural disaster, etc.).</li>
            <br/>
            <li>  <b className="text-yellow-500">Largesse</b> guarantees a minimum balance for the fund; otherwise it is funded by employee contributions.</li>
          </ul>
        
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div>
              <a href="/peerfunding"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-400 md:py-4 md:text-lg md:px-10">
                Get started
              </a>
            </div>
          </div>
        </div>
  </main>
  </div>
  
  )
}

export default Home;