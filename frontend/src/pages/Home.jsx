import { Link } from 'react-router-dom';
import './index.css';
import Features from './Features';
import Work from './Work'
import Pricing from './Pricing';
function Home() {

    return (
        <>

            <header
  className="
  sticky
  top-0
  z-50
  bg-white/80
  backdrop-blur-md
  border-b
  border-gray-100
  px-10
  py-5
  "
>

                <nav className='flex justify-between items-center'>
<div className='flex items-center gap-12'>

  <h1 className='text-2xl font-bold text-green-700'>
    CerRec
  </h1>
                    <div className='flex gap-6 uppercase tracking-wider'>

                        <a href="#features" className='text-gray-600 hover:text-green-600 transition'>
                            features
                        </a>

                        <a className='text-gray-600 hover:text-green-600 transition'>
                            pricing
                        </a>

                        <a className='text-gray-600 hover:text-green-600 transition'>
                            about
                        </a>

                    </div>
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
  className="
  min-h-[85vh]
  flex
  flex-col
  justify-center
  items-center
  text-center
  px-6
  bg-gradient-to-b
  from-green-50
  to-white
  "
>

  <span
    className="
    bg-green-100
    text-green-700
    px-4
    py-2
    rounded-full
    text-sm
    font-medium
    mb-6
    "
  >
    Multi-Tenant SaaS Billing Platform
  </span>

  <h1
    className="
    text-5xl
    md:text-7xl
    font-bold
    text-gray-900
    max-w-5xl
    leading-tight
    "
  >
    Simplify Subscription Billing
    <span className="text-green-600">
      {" "}for Modern SaaS
    </span>
  </h1>

  <p
    className="
    mt-8
    text-xl
    text-gray-600
    max-w-3xl
    leading-relaxed
    "
  >
    Manage subscriptions, payments, invoices,
    tenant organizations, analytics and revenue
    tracking from a single enterprise-grade platform.
  </p>

 <div className="flex flex-col md:flex-row gap-12 md:gap-16 mt-16">

    <Link
      to="/signup"
      className="
      bg-green-600
      hover:bg-green-700
      text-white
      px-8
      py-4
      rounded-xl
      font-semibold
      transition
      "
    >
      Start Free Trial
    </Link>

    <button
      className="
      border
      border-gray-300
      px-8
      py-4
      rounded-xl
      font-semibold
      hover:bg-gray-50
      transition
      "
    >
      View Demo
    </button>

  </div>

  <div className="flex gap-16 mt-16">

    <div>
      <h3 className="text-3xl font-bold text-green-600">
        10K+
      </h3>
      <p className="text-gray-500">
        Active Users
      </p>
    </div>

    <div>
      <h3 className="text-3xl font-bold text-green-600">
        $5M+
      </h3>
      <p className="text-gray-500">
        Revenue Processed
      </p>
    </div>

    <div>
      <h3 className="text-3xl font-bold text-green-600">
        99.9%
      </h3>
      <p className="text-gray-500">
        Uptime
      </p>
    </div>

  </div>

</section>
            
<Features/>
<Work/>
<Pricing/>
        </>
    );
}

export default Home;