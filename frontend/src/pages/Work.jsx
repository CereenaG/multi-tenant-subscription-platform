import {
  UserPlus,
  CreditCard,
  Wallet,
  LayoutDashboard
} from "lucide-react";

function HowItWorks() {

  const steps = [
    {
      number: 1,
      icon: <UserPlus size={40} />,
      title: "Create Account",
      description: "Sign up and create your account in minutes."
    },
    {
      number: 2,
      icon: <CreditCard size={40} />,
      title: "Choose a Plan",
      description: "Select a plan that fits your business needs."
    },
    {
      number: 3,
      icon: <Wallet size={40} />,
      title: "Make Payment",
      description: "Securely complete your payment."
    },
    {
      number: 4,
      icon: <LayoutDashboard size={40} />,
      title: "Access Dashboard",
      description: "Start managing your subscriptions and billing."
    }
  ];

  return (
    <section
      id="how-it-works"
      className="
      max-w-7xl
      mx-auto
      my-24
      px-8
      py-20
      bg-green-50
      rounded-3xl
      "
    >

      {/* Heading */}
      <div className="text-center mb-16">

        <h4 className="uppercase text-green-600 font-bold tracking-[3px] mb-4">
          How It Works
        </h4>

        <h2 className="text-4xl font-bold text-gray-900">
          Get Started in 4 Simple Steps
        </h2>

      </div>

      {/* Steps */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {steps.map((step) => (
          <div
            key={step.number}
            className="flex flex-col items-center text-center relative"
          >

            {/* Icon Circle */}
            <div
              className="
              w-24
              h-24
              rounded-full
              border-2
              border-green-200
              bg-white
              flex
              items-center
              justify-center
              text-green-600
              mb-4
              "
            >
              {step.icon}
            </div>

            {/* Number Circle */}
            <div
              className="
              w-10
              h-10
              rounded-full
              bg-green-600
              text-white
              flex
              items-center
              justify-center
              font-bold
              mb-5
              "
            >
              {step.number}
            </div>

            {/* Title */}
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">
              {step.title}
            </h3>

            {/* Description */}
            <p className="text-gray-500 max-w-[220px]">
              {step.description}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default HowItWorks;