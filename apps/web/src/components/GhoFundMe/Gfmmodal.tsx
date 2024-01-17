import React from 'react';

function Gfmmodal() {
  return (
    <div>
      <div
        aria-hidden="true"
        className="h-modal fixed left-0 right-0 top-4 z-50 hidden items-center justify-center overflow-y-auto overflow-x-hidden md:inset-0 md:h-full"
        id="authentication-modal"
      >
        <div className="relative h-full w-full max-w-md px-4 md:h-auto">
          <div className="relative rounded-lg bg-white shadow dark:bg-gray-700">
            <div className="flex justify-end p-2">
              <button
                className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white"
                data-modal-toggle="authentication-modal"
                type="button"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clip-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    fill-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <form
              action="#"
              className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8"
            >
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                Sign in to our platform
              </h3>
              <div>
                <label
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
                  htmlFor="email"
                >
                  Your email
                </label>
                <input
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500 sm:text-sm dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                  id="email"
                  name="email"
                  placeholder="name@company.com"
                  type="email"
                />
              </div>
              <div>
                <label
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
                  htmlFor="password"
                >
                  Your password
                </label>
                <input
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500 sm:text-sm dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                  id="password"
                  name="password"
                  placeholder="••••••••"
                  type="password"
                />
              </div>
              <div className="flex justify-between">
                <div className="flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      aria-describedby="remember"
                      className="focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-blue-300 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                      id="remember"
                      type="checkbox"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      className="font-medium text-gray-900 dark:text-gray-300"
                      htmlFor="remember"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  className="text-sm text-blue-700 hover:underline dark:text-blue-500"
                  href="#"
                >
                  Lost Password?
                </a>
              </div>
              <button
                className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="submit"
              >
                Login to your account
              </button>
              <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                Not registered?{' '}
                <a
                  className="text-blue-700 hover:underline dark:text-blue-500"
                  href="#"
                >
                  Create account
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>

      <p className="mt-5">
        This modal element is part of a larger, open-source library of Tailwind
        CSS components. Learn more by going to the official{' '}
        <a className="text-blue-600 hover:underline" href="#" target="_blank">
          Flowbite Documentation
        </a>
        .
      </p>
    </div>
  );
}

export default Gfmmodal;
