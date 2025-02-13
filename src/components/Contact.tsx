import React, { useState } from "react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    alert("Thank you for reaching out!");
  };

  return (
    <section className="bg-[#FBF9F4] py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch with Us</h2>
        
        {/* Form Section */}
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Name Field */}
          <div>
            <label className="block text-gray-800 font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-400 rounded-md px-4 py-2 focus:outline-none focus:border-gray-600"
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-gray-800 font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-400 rounded-md px-4 py-2 focus:outline-none focus:border-gray-600"
            />
          </div>

          {/* Phone Field */}
          <div>
            <label className="block text-gray-800 font-medium mb-1">Phone Number</label>
            <input
              type="text"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full border border-gray-400 rounded-md px-4 py-2 focus:outline-none focus:border-gray-600"
            />
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-gray-800 font-medium mb-1">Message</label>
            <textarea
              name="message"
              placeholder="Write your message here..."
              value={formData.message}
              onChange={handleChange}
              rows={4}
              required
              className="w-full border border-gray-400 rounded-md px-4 py-2 focus:outline-none focus:border-gray-600"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-yellow-300 text-gray-900 font-semibold rounded-md py-3 hover:bg-yellow-400 transition-all"
          >
            Get in Touch
          </button>

        </form>
      </div>
    </section>
  );
};

export default Contact;
