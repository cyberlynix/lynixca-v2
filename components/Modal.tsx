export default function Modal({ callback }: any) {

    return (
        <div
            className="relative z-30"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
        >
            {/*
    Background backdrop, show/hide based on modal state.

    Entering: "ease-out duration-300"
From: "opacity-0"
To: "opacity-100"
    Leaving: "ease-in duration-200"
From: "opacity-100"
To: "opacity-0"
  */}
            <div className="fixed inset-0 bg-darker bg-opacity-90 transition-opacity" />
            <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    {/*
  Modal panel, show/hide based on modal state.

  Entering: "ease-out duration-300"
    From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    To: "opacity-100 translate-y-0 sm:scale-100"
  Leaving: "ease-in duration-200"
    From: "opacity-100 translate-y-0 sm:scale-100"
    To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
*/}
                    <div className="relative transform overflow-hidden bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                        <div className="bg-dark px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                    <h3
                                        className="text-xl font-semibold leading-6 text-white"
                                        id="modal-title"
                                    >
                                        Authentication Disabled
                                    </h3>
                                    <div className="mt-2">
                                        <p className="text-md text-gray-400">
                                            Authentication has been disabled to protect users information and credentials. <br/><br/>
                                            <strong>Error Code: LYNIXAPI_UNSUPPORTED_AUTH (5001)</strong>
                                        </p>
                                        <div className="flex justify-center mt-5">
                                            <button onClick={() => callback(false)} className="auth-btn-2 h-full flex items-center bg-green-600 font-semibold mt-5">
                                                <span>Understood</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}