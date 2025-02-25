import { Transition } from '@headlessui/react';

export default function OtpModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  return (
    <Transition show={isOpen} as="div" className="fixed inset-0 z-10 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pb-20 text-center sm:block sm:p-0">
        <Transition.Child
          as="div"
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          className="fixed inset-0 transition-opacity"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </Transition.Child>

        <span className="hiden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <Transition.Child
          as="div"
          enter="ease-out duration-300"
          enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enterTo="opacity-100 translate-y-0 sm:scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 translate-y-0 sm:scale-100"
          leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          className="inline-block overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
        >
          <div className="px-4 pt-5 pb-4 bg-black sm:p-6 sm:pb-4">
            <div>
              <div className="mt-3 flex flex-col items-center text-center sm:mt-0">
                <img src='/gifs/otp-gif.gif' alt='otp gif' className='h-20 mb-3' />
                <h3 className="text-lg font-medium leading-6" id="modal-title">
                  Access Code
                </h3>
                <div className="mt-2">
                  <p className="mx-10 mt-3">
                    Please enter the one-time password sent to your email.
                  </p>
                  <input
                    type="number"
                    className="w-44 p-2 mt-4 border border-x-0 border-t-0 bg-transparent text-[25px] text-center font-bold outline-none"
                    placeholder="Enter OTP"
                  />
                  <p className='text-center my-5 text-sm font-bold'>Didn't get any code?
                      <span className='text-[var(--lume-yellow)] font-semibold ml-1 underline underline-offset-auto cursor-pointer'>Resend</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 py-3 bg-[#F8BE4FCC] sm:px-6 sm:flex sm:flex-row-reverse">
            {/* Button to be fixed here. Study style first */}
            <button
              type="button"
              className="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-black border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={onClose}
            >
              Submit
            </button>
            <button
              type="button"
              className="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </Transition.Child>
      </div>
    </Transition>
  );
}
