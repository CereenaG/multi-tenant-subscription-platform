import './Login.css'
function SignUp(){
    return (
        <>
        <form
            className='flex justify-center items-center min-h-screen bg-gray-100'
            id="main-box">
            <div  className='
                border-2 border-green-900
                rounded-xl
                p-10
                w-96
                bg-white
                shadow-lg
                space-y-6
                '>
                <h2 className="text-green-900 text-3xl font-bold text-center">Create your account</h2>
               <div className="flex flex-col space-y-2">
                 <lable htmlFor="email" className="text-green-900 font-medium">Email</lable>
                 <input  className='
                        border-2 border-green-900
                        rounded-md
                        p-2
                        outline-none
                        '
                        id="email"
                        type="email"
                        placeholder="Enter your email"></input>
               </div>
               <div className="flex flex-col space-y-2">
                 <lable htmlFor="full-name" className="text-green-900 font-medium">Full Name</lable>
                 <input className='
                        border-2 border-green-900
                        rounded-md
                        p-2
                        outline-none
                        '
                        id="full-name"
                        type="text"
                        placeholder="Enter your full name"></input>
               </div>

               <div className="flex flex-col space-y-2">
                 <lable htmlFor="password" className="text-green-900 font-medium">Password</lable>
                 <input   className='
                        border-2 border-green-900
                        rounded-md
                        p-2
                        outline-none
                        '
                        id="password"
                        type="password"
                        placeholder="Enter your password"></input>
               </div>

                <button   className='
                    w-full
                    bg-green-900
                    text-white
                    py-2
                    rounded-md
                    hover:opacity-90
                    cursor-pointer
                    '
                    type="submit">Create account</button>
            </div>
        </form>
        </>
    );
}
export default SignUp