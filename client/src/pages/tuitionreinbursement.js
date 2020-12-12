import React from "react";

const Tuitionreinbursement = () => {
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
              <a href="home"
                className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-yellow-500 hover:bg-gray-900">Home</a>
              <a href="/charity"
                className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-yellow-500 hover:bg-gray-900">Charity</a>
              <a href="/tuitionreinbursement"
                className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-yellow-500 hover:bg-gray-900">Tuition
                Reinbursement</a>
              <a href="/peerfunding"
                className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-yellow-500 hover:bg-gray-900">Peer
                Funding</a>
            </div>
          </div>

        </div>

    
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <div className="ml-3 relative">
              <button
                className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                id="user-menu" aria-haspopup="true">
                <img className="h-8 w-8 rounded-full" src="" alt=""/>
              </button>
        </div>
      </div>
  
      <div className=" sm:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a href="homePage.html"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-yellow-500 hover:bg-gray-900">Dashboard</a>
          <a href="charity.html"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-yellow-500 hover:bg-gray-900">Charity</a>
          <a href="tuitionReinbursement.html"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-yellow-500 hover:bg-gray-900">Tuition
            Reinbursement</a>
          <a href="peerFunding.html"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-yellow-500 hover:bg-gray-900">Peer
            Funding</a>
        </div>
      </div>
      </div>
      </div>
  </nav>

  
  <header className="bg-white shadow">
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold leading-tight text-gray-900">Tuition Reinbursement</h1>
    </div>
  </header>

  <img src="images/tuition.jpeg"/>

  <main>

    <div className="container-lg">
      <div className="row">
        <div className="col-md-10 mx-auto">
          <div className="contact-form">
            <h1>Tuition Reinbursement Request</h1>
            <p className="hint-text">Upon completion of course, fill out the information below and tell us how
              the course relates to your current career. We will then reach out and and inform you if you are qualified
              for reinbursement! (additional information will be requested upon approval)
            </p>
            <form action="/examples/actions/confirmation.php" method="post">
              <div className="form-group">
                <label for="inputSubject">School</label>
                <input type="text" className="school form-control" id="inputSubject" required></input>
              </div>
              <div className="form-group">
                <label for="inputSubject">Course</label>
                <input type="text" className="course form-control" id="inputSubject" required></input>
              </div>
              <div className="form-group">
                <label for="exampleFormControlSelect1">Grade</label>
                <select className="grade">
                    <option>A</option>
                    <option>A-</option>
                    <option>B</option>
                    <option>B-</option>
                </select>
            </div>
              <div className="form-group">
                <label for="inputMessage">Tell us about the course you are taking and how it applies to your future goals!</label>
                <textarea className="classMessage form-control" id="inputMessage" rows="5" required></textarea>
              </div>
              
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div>
                    <a href="#" id="applyBtn"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-400 md:py-4 md:text-lg md:px-10">
                        Apply!
                    </a>
                </div>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>


  </main>

  </div>

  )
}
export default Tuitionreinbursement;