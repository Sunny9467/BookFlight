import React from "react";
import { Shield, Lock, Eye, FileText, UserCheck, Mail, Cookie, Database } from "lucide-react";

const Section = ({ id, title, icon: Icon, children }) => (
  <section id={id} className="mb-10 scroll-mt-20">
    <div className="flex items-center gap-3 mb-4">
      <div className="p-2 bg-blue-50 rounded-lg">
        <Icon className="w-5 h-5 text-blue-600" />
      </div>
      <h2 className="text-xl font-bold text-gray-800">{title}</h2>
    </div>
    <div className="text-gray-600 leading-relaxed space-y-4 pl-11">
      {children}
    </div>
  </section>
);

export default function PrivacyPolicy() {
  const navItems = [
    { id: "intro", label: "Introduction", icon: FileText },
    { id: "collection", label: "Information We Collect", icon: Database },
    { id: "usage", label: "How We Use Data", icon: Eye },
    { id: "cookies", label: "Cookies", icon: Cookie },
    { id: "security", label: "Data Security", icon: Lock },
    { id: "rights", label: "Your Rights", icon: UserCheck },
    { id: "contact", label: "Contact Us", icon: Mail },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
        
        {/* SIDE NAV - Desktop Only */}
        <aside className="hidden lg:block w-64 shrink-0">
          <div className="sticky top-8 space-y-1">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4 px-3">
              Contents
            </h3>
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 hover:bg-white hover:text-blue-600 rounded-lg transition-colors shadow-sm hover:shadow-sm group"
              >
                <item.icon className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
                {item.label}
              </a>
            ))}
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main className="flex-1 bg-white shadow-xl shadow-gray-200/50 rounded-3xl p-6 md:p-12 border border-gray-100">
          <header className="mb-12 border-b border-gray-100 pb-8">
            <div className="flex items-center gap-3 text-blue-600 mb-4">
              <Shield className="w-8 h-8" />
              <span className="font-semibold tracking-widest uppercase text-sm">Security Standards</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-gray-500 font-medium">
              Last updated: <span className="text-gray-800">March 25, 2026</span>
            </p>
          </header>

          <Section id="intro" title="1. Introduction" icon={FileText}>
            <p>
              We value your privacy and are committed to protecting your personal
              information. This Privacy Policy explains how we collect, use, and
              safeguard your data when you use our platform.
            </p>
          </Section>

          <Section id="collection" title="2. Information We Collect" icon={Database}>
            <p>We collect information that helps us provide a better experience, including:</p>
            <ul className="list-disc space-y-2 ml-4">
              <li><span className="font-semibold text-gray-700">Identity:</span> Name, email address, and phone number.</li>
              <li><span className="font-semibold text-gray-700">Transaction:</span> Booking history and secured payment tokens.</li>
              <li><span className="font-semibold text-gray-700">Technical:</span> IP addresses, browser type, and usage patterns.</li>
            </ul>
          </Section>

          <Section id="usage" title="3. How We Use Your Information" icon={Eye}>
            <p>Your data allows us to maintain and improve our services:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">To process secure bookings</div>
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">To personalize user experience</div>
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">To provide 24/7 support</div>
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">To send critical security alerts</div>
            </div>
          </Section>

          <Section id="cookies" title="4. Cookies" icon={Cookie}>
            <p>
              We use cookies to keep you logged in and remember your preferences. You can manage these 
              via your browser settings, though some features may be limited if disabled.
            </p>
          </Section>

          <Section id="security" title="5. Data Security" icon={Lock}>
            <p className="bg-blue-50/50 p-4 rounded-xl border border-blue-100 text-blue-900">
              We implement AES-256 encryption and industry-standard security protocols to protect 
              your data from unauthorized access or disclosure.
            </p>
          </Section>

          <Section id="rights" title="6. Your Rights" icon={UserCheck}>
            <p>
              Under data protection laws, you have the right to access, rectify, or erase your 
              personal data. You may also object to processing in certain circumstances.
            </p>
          </Section>

          <Section id="contact" title="7. Contact Us" icon={Mail}>
            <p>Questions or concerns? Our privacy team is here to help.</p>
            <a 
              href="mailto:support@yourwebsite.com" 
              className="inline-block mt-2 font-bold text-lg text-blue-600 hover:text-blue-700 transition-colors underline decoration-2 underline-offset-4"
            >
              support@yourwebsite.com
            </a>
          </Section>
        </main>
      </div>
    </div>
  );
}