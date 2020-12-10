import React from "react";

const Home = () => {
    return (
        <div>
            <div classname="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div classname="max-w-md w-full space-y-8">

                    {/* <!-- Logo Name DIV --> */}
                    <div>
                        {/* <!-- Logo --> */}
                        <img classname="mx-auto h-12 w-auto" src="images/largesse_logo.png" alt="Largesse Logo" />
                        {/* <!-- Title --> */}
                        <h2 classname="animate__animated animate__heartBeat mt-6 text-center text-3xl font-extrabold text-gray-900">
                            Largesse</h2>
                        {/* <!-- Sign up Form Link --> */}
                        <p classname="mt-2 text-center text-sm text-gray-600">
                            <a href="logIn.html" classname="font-medium text-yellow-500 hover:text-yellow-400"> Sign in </a>
                        </p>
                    </div>

                    {/* <!-- Form DIV --> */}
                    <div classname="mt-5 md:mt-0 md:col-span-2">
                        <Form action="#" method="POST">
                            <div classname="shadow overflow-hidden sm:rounded-md">
                                <div classname="px-4 py-5 bg-white sm:p-6">
                                    <div classname="grid grid-cols-6 gap-6">

                                        {/* <!-- First Name --> */}
                                        <div classname="col-span-6 sm:col-span-3">
                                            <Form.label for="first_name" classname="block text-sm font-medium text-gray-700">
                                                Name</Form.label>
                                            <Form.Control type="text" id="first_name"
                                                classname="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                        </div>


                                        {/* <!-- Email Address --> */}
                                        <div classname="col-span-6 sm:col-span-4">
                                            <Form.label for="email_address" classname="block text-sm font-medium text-gray-700">Email
                                    address</Form.label>
                                            <Form.Control type="text" id="email_address"
                                                classname="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                        </div>

                                    </div>

                                    {/* <!-- Password --> */}
                                    <div classname="mb-6">
                                        <Form.label classname="block text-gray-700 text-sm font-bold mb-2" for="password"> Password </Form.label>
                                        <Form.Control
                                            classname="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                            id="password" type="password" placeholder="********" />
                                    </div>
                                </div>

                                {/* <!-- Save Button --> */}
                                <div classname="px-4 py-3 bg-gray-50 sm:px-6">
                                    <Button type="submit"
                                        classname="bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                        Save</Button>
                                </div>

                            </div>
                        </Form>
                    </div>

                </div>
            </div>

        </div>
    )
};

export default Home;