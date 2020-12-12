import React from "react";

const Register = () => {
    return (
        <div>
            <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div class="max-w-md w-full space-y-8">


                    <div>

                        <img class="mx-auto h-12 w-auto" src={images/largesse_logo.png} alt="Largesse Logo" />

                        <h2 class="animate__animated animate__heartBeat mt-6 text-center text-3xl font-extrabold text-gray-900">
                            Largesse</h2>
                    
                    <p class="mt-2 text-center text-sm text-gray-600">
                        <a href="/" class="font-medium text-yellow-500 hover:text-yellow-400"> Sign in </a>
                    </p>
                </div>


                <div class="mt-5 md:mt-0 md:col-span-2">
                    <form action="#" method="POST">
                        <div class="shadow overflow-hidden sm:rounded-md">
                            <div class="px-4 py-5 bg-white sm:p-6">
                                <div class="grid grid-cols-6 gap-6">


                                    <div class="col-span-6 sm:col-span-3">
                                        <label for="first_name" class="block text-sm font-medium text-gray-700">
                                            Name</label>
                                        <input type="text" id="first_name"
                                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>
                                    </div>



                                    <div class="col-span-6 sm:col-span-4">
                                        <label for="email_address" class="block text-sm font-medium text-gray-700">Email
                                        address</label>
                                        <input type="text" id="email_address"
                                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>
                                    </div>

                                </div>


                                <div class="mb-6">
                                    <label class="block text-gray-700 text-sm font-bold mb-2" for="password"> Password </label>
                                    <input
                                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                        id="password" type="password" placeholder="********" />
                                </div>
                            </div>


                            <div class="px-4 py-3 bg-gray-50 sm:px-6">
                                <button type="submit"
                                    class="bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                    Save</button>
                            </div>

                        </div>
                    </form>
                </div>

            </div>
        </div>
        </div>



    );
};

export default Register;
