import './index.css';
import {
  CreditCard,
  Building2,
  ShieldCheck,
  Wallet,
  FileText,
  BarChart3,
  TrendingUp,
  Headphones,
  Check
} from "lucide-react";

function Features() {

  const features = [
    {
      icon: <CreditCard size={28} />,
      title: "Subscription Management",
      desc: "Create, manage, and customize subscription plans with flexible billing cycles and trial periods.",
      points: [
        "Multiple billing cycles",
        "Upgrade / Downgrade",
        "Cancel anytime",
        "Trial period support"
      ]
    },
    {
      icon: <Building2 size={28} />,
      title: "Multi-Tenant Architecture",
      desc: "Secure and scalable multi-tenant architecture to manage multiple organizations from one platform.",
      points: [
        "Tenant isolation",
        "Separate workspaces",
        "Company management",
        "Data security"
      ]
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "Secure Authentication",
      desc: "Enterprise-grade security with JWT authentication and role-based access control.",
      points: [
        "JWT Authentication",
        "Role-based access",
        "BCrypt encryption",
        "Session security"
      ]
    },
    {
      icon: <Wallet size={28} />,
      title: "Billing & Payments",
      desc: "Integrate with Razorpay/Stripe for secure payments and automate your billing workflow.",
      points: [
        "Multiple payment methods",
        "Payment history",
        "Failed payment handling",
        "Auto reconciliation"
      ]
    },
    {
      icon: <FileText size={28} />,
      title: "Invoice Management",
      desc: "Automatically generate and send professional invoices to your customers.",
      points: [
        "PDF invoice download",
        "Custom invoice templates",
        "Tax handling",
        "Invoice history"
      ]
    },
    {
      icon: <BarChart3 size={28} />,
      title: "Admin Dashboard",
      desc: "Get a complete overview of your business with powerful dashboards and reports.",
      points: [
        "Revenue analytics",
        "User management",
        "Plan management",
        "System settings"
      ]
    },
    {
      icon: <TrendingUp size={28} />,
      title: "Analytics & Reports",
      desc: "Track your growth with real-time analytics and insightful business reports.",
      points: [
        "Monthly recurring revenue",
        "Subscription growth",
        "Churn rate tracking",
        "Export reports"
      ]
    },
    {
      icon: <Headphones size={28} />,
      title: "Support & Notifications",
      desc: "Keep your users informed with email notifications and excellent customer support.",
      points: [
        "Email notifications",
        "Payment alerts",
        "Invoice reminders",
        "24/7 support"
      ]
    }
  ];

  return (
    <section id="features" className="max-w-7xl mx-auto px-6 lg:px-8 py-24">

      {/* Heading */}
      <div className="text-center mb-16">

        <h4 className="uppercase text-green-600 font-bold tracking-[3px] mb-3">
          Powerful Features
        </h4>

        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Built for Modern SaaS Businesses
        </h2>

        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
          All the tools you need to streamline your billing and grow your business.
        </p>

      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        {features.map((feature, index) => (
          <div
            key={index}
            className="
              h-full
              border
              border-gray-200
              rounded-2xl
              p-6
              bg-white
              shadow-sm
              hover:shadow-xl
              hover:-translate-y-1
              transition-all
              duration-300
            "
          >

            {/* Icon */}
            <div className="
              w-14
              h-14
              rounded-xl
              bg-green-100
              text-green-600
              flex
              items-center
              justify-center
              mb-5
            ">
              {feature.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-gray-900 mb-3 min-h-[56px]">
              {feature.title}
            </h3>

            {/* Description */}
            <p className="text-gray-500 text-sm leading-relaxed mb-5">
              {feature.desc}
            </p>

            {/* Points */}
            <ul className="space-y-3">

              {feature.points.map((point, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 text-sm text-gray-700"
                >
                  <Check
                    size={16}
                    className="text-green-600 flex-shrink-0"
                  />

                  {point}
                </li>
              ))}

            </ul>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Features;