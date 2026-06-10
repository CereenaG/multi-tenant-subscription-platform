import { Link } from 'react-router-dom';
import './Login.css';

function Home() {

    return (
        <>

            <header className='px-10 py-5'>

                <nav className='flex justify-between items-center'>

                    <div className='flex gap-6 uppercase tracking-wider'>

                        <a className='border-2 border-[#839958] px-3 py-1 rounded-sm'>
                            features
                        </a>

                        <a className='border-2 border-[#839958] px-3 py-1 rounded-sm'>
                            pricing
                        </a>

                        <a className='border-2 border-[#839958] px-3 py-1 rounded-sm'>
                            about
                        </a>

                    </div>

                    <div className='flex gap-4 uppercase tracking-wider'>

                        <Link
                            to="/login"
                            className='border-2 border-[#839958] px-3 py-1 rounded-sm'
                        >
                            sign in
                        </Link>

                        <Link
                            to="/signup"
                            className='
                            bg-[#839958]
                            text-[#f7f4d5]
                            px-3 py-1
                            rounded-sm
                            '
                        >
                            sign up
                        </Link>

                    </div>

                </nav>

            </header>

            <section
                id="main-page"
                className='
                flex flex-col
                justify-center
                items-start
                min-h-[80vh]
                px-10
                space-y-8
                '
            >

                <div className='max-w-2xl'>

                    <h1 className='text-5xl font-bold leading-tight mb-6'>
                        Build and Manage Your SaaS Billing Platform
                    </h1>

                    <p className='text-xl font-light leading-relaxed text-gray-700'>
                        Manage subscriptions, billing, payments,
                        tenants, invoices, and analytics in one
                        powerful platform designed for modern SaaS businesses.
                    </p>

                </div>

                <Link
                    to="/signup"
                    className='
                    bg-green-900
                    text-[#f7f4d5]
                    uppercase
                    tracking-wider
                    px-6 py-3
                    rounded-full
                    text-sm
                    '
                >
                    Get Started
                </Link>

            </section>

        </>
    );
}

export default Home;