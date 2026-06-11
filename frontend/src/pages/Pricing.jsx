import { Check, Shield } from "lucide-react";

function Pricing() {

  const plans = [
    {
      name: "Free",
      subtitle: "Perfect for getting started",
      price: "$0",
      button: "Get Started",
      features: [
        "1 Tenant / Workspace",
        "Up to 2 Users",
        "Basic Subscription Management",
        "Manual Invoicing",
        "Email Support"
      ]
    },
    {
      name: "Basic",
      subtitle: "For small businesses",
      price: "$19",
      button: "Start Free Trial",
      features: [
        "5 Tenants / Workspaces",
        "Up to 10 Users",
        "Subscription Management",
        "Automated Invoicing",
        "Payment Integration",
        "Email Support"
      ]
    },
    {
      name: "Pro",
      subtitle: "For growing businesses",
      price: "$49",
      popular: true,
      button: "Start Free Trial",
      features: [
        "Unlimited Tenants",
        "Up to 50 Users",
        "Advanced Subscription Management",
        "Automated Invoicing & Reminders",
        "Multiple Payment Gateways",
        "Analytics & Reports",
        "Priority Support"
      ]
    },
    {
      name: "Enterprise",
      subtitle: "For large organizations",
      price: "Custom",
      button: "Contact Sales",
      features: [
        "Unlimited Tenants",
        "Unlimited Users",
        "Advanced Permissions",
        "Custom Workflows",
        "Dedicated Account Manager",
        "Analytics & Insights",
        "24/7 Priority Support",
        "Custom Integrations"
      ]
    }
  ];

  return (
    <section
      id="pricing"
      className="max-w-7xl mx-auto py-24 px-6"
    >

      {/* Heading */}

      <div className="text-center mb-16">

        <h4 className="uppercase text-green-600 font-bold tracking-[3px] mb-4">
          Pricing Plans
        </h4>

        <h2 className="text-5xl font-bold text-gray-900 mb-6">
          Simple, Transparent Pricing
          <br />
          That Grows With You
        </h2>

        <p className="text-gray-500 text-lg max-w-3xl mx-auto">
          Choose the perfect plan for your business.
          Upgrade, downgrade, or cancel anytime
          with no hidden fees.
        </p>

      </div>

      {/* Monthly / Yearly Toggle */}

      <div className="flex justify-center mb-16">

        <div className="bg-green-50 rounded-full p-2 flex">

          <button className="bg-green-100 text-green-700 font-semibold px-12 py-3 rounded-full">
            Monthly
          </button>

          <button className="px-12 py-3 font-semibold text-gray-600">
            Yearly
          </button>

        </div>

      </div>

      {/* Pricing Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        {plans.map((plan, index) => (

          <div
            key={index}
            className={`
              relative
              rounded-3xl
              border
              bg-white
              shadow-sm
              p-8
              flex
              flex-col
              ${plan.popular
                ? "border-green-500 shadow-lg"
                : "border-gray-200"}
            `}
          >

            {plan.popular && (
              <div className="absolute top-0 left-0 right-0 bg-green-600 text-white text-center py-2 rounded-t-3xl text-sm font-semibold">
                MOST POPULAR
              </div>
            )}

            <div className={plan.popular ? "mt-8" : ""}>

              <h3 className="text-4xl font-bold text-center mb-3">
                {plan.name}
              </h3>

              <p className="text-center text-gray-500 mb-8">
                {plan.subtitle}
              </p>

              <div className="text-center mb-10">

                <span
                  className={`text-6xl font-bold ${
                    plan.popular
                      ? "text-green-600"
                      : "text-gray-900"
                  }`}
                >
                  {plan.price}
                </span>

                {plan.price !== "Custom" && (
                  <span className="text-gray-500 text-xl">
                    {" "} /month
                  </span>
                )}

              </div>

              <ul className="space-y-4 mb-10">

                {plan.features.map((feature, i) => (

                  <li
                    key={i}
                    className="flex items-center gap-3"
                  >

                    <Check
                      size={18}
                      className="text-green-600 flex-shrink-0"
                    />

                    <span className="text-gray-700">
                      {feature}
                    </span>

                  </li>

                ))}

              </ul>

            </div>

            <button
              className={`
                mt-auto
                w-full
                py-4
                rounded-xl
                font-semibold
                transition
                ${
                  plan.popular
                    ? "bg-green-600 text-white hover:bg-green-700"
                    : "border border-gray-300 hover:bg-gray-50"
                }
              `}
            >
              {plan.button}
            </button>

          </div>

        ))}

      </div>

      {/* Bottom Note */}

      <div className="flex justify-center mt-12">

        <div className="flex flex-wrap items-center justify-center gap-4 text-gray-500">

          <Shield className="text-green-600" />

          <span>14-day free trial</span>

          <span>•</span>

          <span>No credit card required</span>

          <span>•</span>

          <span>Cancel anytime</span>

        </div>

      </div>

    </section>
  );
}

export default Pricing;