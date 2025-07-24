"use client";

import { motion } from "framer-motion";

type LandingPageData = {
  organizationName: string;
  about: string;
  history: string;
  phone: string;
  email: string;
};

export default function PreviewContent({ data }: { data: LandingPageData }) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section
        className="bg-indigo-600 text-white py-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}>
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
            {data.organizationName}
          </h1>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        className="py-16 bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">About Us</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 mb-8 leading-relaxed">{data.about}</p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Our History</h3>
              <p className="text-gray-600 leading-relaxed">{data.history}</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        className="py-16 bg-gray-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
          <div className="max-w-xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="mb-4">
                <h4 className="text-lg font-semibold mb-2">Phone</h4>
                <p className="text-gray-600">{data.phone}</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Email</h4>
                <p className="text-gray-600">{data.email}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
