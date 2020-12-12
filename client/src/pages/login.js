import React from "react";

const Login = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
    
          <div>
            
            <img className="mx-auto h-12 w-auto" src="images/largesse_logo.png" alt="Largesse Logo" />
        
            <h2 className="animate__animated animate__heartBeat mt-6 text-center text-3xl font-extrabold text-gray-900">Largesse
            </h2>
            
            <p className="mt-2 text-center text-sm text-gray-600">
              <a href="createAccount.html" className="font-medium text-yellow-500 hover:text-yellow-400"> Create account with company ID </a>
            </p>
          </div>
    
          
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" for="username"> Username </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username" type="text" placeholder="Username" />
            </div>
        
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" for="password"> Password </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password" type="password" placeholder="********" />
            </div>
            
            <div className="flex items-center justify-between">
              <button type="button"
                className="bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Sign In</button>
            </div>
          </form>
    
        </div>
      </div>
    )
};

export default Login;