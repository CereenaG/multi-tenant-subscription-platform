import './Login.css'

function Login() {
    return (

        <form
            className='flex justify-center items-center min-h-screen bg-gray-100'
            id="main-box"
        >

            <div
                className='
                border-2 border-green-900
                rounded-xl
                p-10
                w-96
                bg-white
                shadow-lg
                space-y-6
                '
            >

                <h2 className="text-green-900 text-3xl font-bold text-center">
                    Sign In
                </h2>

                <div className="flex flex-col space-y-2">

                    <label
                        htmlFor="email"
                        className="text-green-900 font-medium"
                    >
                        Email
                    </label>

                    <input
                        className='
                        border-2 border-green-900
                        rounded-md
                        p-2
                        outline-none
                        '
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                    />

                </div>

                <div className="flex flex-col space-y-2">

                    <label
                        htmlFor="password"
                        className="text-green-900 font-medium"
                    >
                        Password
                    </label>

                    <input
                        className='
                        border-2 border-green-900
                        rounded-md
                        p-2
                        outline-none
                        '
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                    />

                </div>

                <button
                    className='
                    w-full
                    bg-green-900
                    text-white
                    py-2
                    rounded-md
                    hover:opacity-90
                    '
                    type="submit"
                >
                    Submit
                </button>

            </div>

        </form>
    );
}

export default Login;