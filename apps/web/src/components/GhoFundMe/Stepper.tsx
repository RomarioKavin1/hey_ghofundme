import React from 'react';

interface StepperProps {
  step: number;
}

function Stepper({ step }: StepperProps) {
  return (
    <ol className="flex w-3/4 items-center text-center text-sm font-medium text-gray-500 sm:text-base dark:text-gray-400">
      <li
        className={`flex items-center md:w-full ${step === 1 ? 'text-blue-600 dark:text-blue-500' : ''} after:border-1 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 after:content-[''] sm:after:inline-block xl:after:mx-10 dark:after:border-gray-700`}
      >
        <span
          className={`after: flex items-center ${step === 1 ? 'sm:after:hidden' : ''} ${step !== 1 && 'text-green-50'} after:mx-2 after:text-gray-200 dark:after:text-gray-500`}
        >
          {step == 2 || step == 3 ? (
            <svg
              aria-hidden="true"
              className={`me-2.5 h-3.5 w-3.5 sm:h-4 sm:w-4 `}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
          ) : (
            <span
              className={`me-2 ${step === 1 ? 'text-blue-600 dark:text-blue-500' : 'text-green-50'}`}
            >
              1
            </span>
          )}
          Select Subscription{' '}
          <span
            className={`hidden ${step === 1 ? 'sm:ms-2 sm:inline-flex' : ''}`}
          />
        </span>
      </li>
      <li
        className={`flex items-center md:w-full ${step === 2 ? 'text-blue-600 dark:text-blue-500' : ''} after:border-1 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 after:content-[''] sm:after:inline-block xl:after:mx-10 dark:after:border-gray-700`}
      >
        <span
          className={`after: flex items-center ${step === 2 ? 'sm:after:hidden' : ''} after:mx-2 after:text-gray-200 dark:after:text-gray-500`}
        >
          {step == 3 ? (
            <svg
              aria-hidden="true"
              className={`me-2.5 h-3.5 w-3.5 sm:h-4 sm:w-4 `}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
          ) : (
            <span
              className={`me-2 ${step === 2 ? 'text-blue-600 dark:text-blue-500' : 'text-green-50'}text-gray-200`}
            >
              2
            </span>
          )}
          Review Subscription{' '}
          <span
            className={`hidden ${step === 2 ? 'sm:ms-2 sm:inline-flex' : ''}`}
          />
        </span>
      </li>
      <li
        className={`flex items-center ${step === 3 ? 'text-blue-600 dark:text-blue-500' : ''}`}
      >
        <span className="me-2">3</span>
        Confirm
      </li>
    </ol>
  );
}

export default Stepper;
