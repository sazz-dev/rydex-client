import React, { useState } from "react";

/**
 * AddVehicleUI
 * - Accepts `user` (object) prop to prefill owner and email (optional)
 * - Replace submit handler with your API logic
 */
const AddehicleUI = ({ user = { displayName: "Sazz Rahman", email: "sendmymail24@gmail.com" } }) => {
  const [form, setForm] = useState({
    vehicleName: "",
    category: "",
    availability: "Available",
    image: "",
    location: "",
    pricePerDay: "",
    description: "",
    ownerName: user.displayName || "",
    userEmail: user.email || "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // TODO: Replace with your POST request to server
    setTimeout(() => {
      setLoading(false);
      alert("Vehicle added (mock) — wire this to backend");
    }, 800);
  };

  return (
    <div className="py-16 px-6 lg:px-12 bg-gray-50 dark:bg-[#0b0b0c] min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-gray-700 dark:text-gray-300 mb-10 text-lg">Share your ride with travelers and start earning.</h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Form (spans 8 of 12 on large screens) */}
          <div className="lg:col-span-8">
            <form
              onSubmit={handleSubmit}
              className="bg-white dark:bg-[#111317] rounded-3xl p-8 shadow-lg border border-transparent"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Vehicle Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Vehicle Name
                  </label>
                  <input
                    name="vehicleName"
                    value={form.vehicleName}
                    onChange={handleChange}
                    placeholder="Enter your Vehicle Name"
                    className="w-full px-5 py-3 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0b0b0c] text-gray-900 dark:text-gray-100 placeholder-gray-400"
                  />
                </div>

                {/* Categories */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Categories
                  </label>
                  <select
                    name="category"
                    value={form.category}
                    onChange={handleChange}
                    className="w-full px-5 py-3 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0b0b0c] text-gray-900 dark:text-gray-100"
                  >
                    <option value="">Select Categories</option>
                    <option value="Sedan">Sedan</option>
                    <option value="SUV">SUV</option>
                    <option value="Electric">Electric</option>
                    <option value="Van">Van</option>
                  </select>
                </div>

                {/* Availability */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Availability
                  </label>
                  <select
                    name="availability"
                    value={form.availability}
                    onChange={handleChange}
                    className="w-full px-5 py-3 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0b0b0c] text-gray-900 dark:text-gray-100"
                  >
                    <option>Available</option>
                    <option>Booked</option>
                  </select>
                </div>

                {/* Vehicle Image URL */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Vehicle Image
                  </label>
                  <input
                    name="image"
                    value={form.image}
                    onChange={handleChange}
                    placeholder="High-quality image URL"
                    className="w-full px-5 py-3 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0b0b0c] text-gray-900 dark:text-gray-100 placeholder-gray-400"
                  />
                </div>

                {/* Location */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Location
                  </label>
                  <input
                    name="location"
                    value={form.location}
                    onChange={handleChange}
                    placeholder="e.g. New York"
                    className="w-full px-5 py-3 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0b0b0c] text-gray-900 dark:text-gray-100 placeholder-gray-400"
                  />
                </div>

                {/* Price/day */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Price/day
                  </label>
                  <input
                    name="pricePerDay"
                    value={form.pricePerDay}
                    onChange={handleChange}
                    placeholder="$ Price per day"
                    type="number"
                    className="w-full px-5 py-3 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0b0b0c] text-gray-900 dark:text-gray-100 placeholder-gray-400"
                  />
                </div>
              </div>

              {/* Description (full width) */}
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Description</label>
                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Describe your vehicle's features, condition, and any special amenities..."
                  className="w-full px-6 py-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0b0b0c] text-gray-900 dark:text-gray-100 placeholder-gray-400"
                />
              </div>

              {/* Owner info box */}
              <div className="mt-6 p-6 rounded-xl bg-gray-50 dark:bg-[#0f1720] border border-gray-100 dark:border-gray-800">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                  <div>
                    <label className="text-sm font-medium text-gray-600 dark:text-gray-300">Owner Name</label>
                    <input
                      disabled
                      name="ownerName"
                      value={form.ownerName}
                      onChange={handleChange}
                      className="mt-2 w-full px-5 py-3 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0b0b0c] text-gray-900 dark:text-gray-100"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600 dark:text-gray-300">User Email</label>
                    <input
                      disabled
                      name="userEmail"
                      value={form.userEmail}
                      onChange={handleChange}
                      className="mt-2 w-full px-5 py-3 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0b0b0c] text-gray-900 dark:text-gray-100"
                    />
                  </div>
                </div>

                <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">Auto-filled from your account</p>
              </div>

              {/* Submit button */}
              <div className="mt-8">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-3 bg-black dark:bg-[#242424] text-white py-4 rounded-full text-lg hover:opacity-95 transition"
                >
                  {/* car icon */}
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M3 7h2l2 7h9l3-6H7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="9" cy="19" r="1" fill="currentColor" />
                    <circle cx="18" cy="19" r="1" fill="currentColor" />
                  </svg>
                  {loading ? "Adding..." : "Add Vehicle"}
                </button>
              </div>
            </form>
          </div>

          {/* Right: Tips card (spans 4 of 12 on large screens) */}
          <aside className="lg:col-span-4">
            <div className="bg-white dark:bg-[#111317] rounded-2xl p-8 shadow-lg border border-transparent">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-gradient-to-tr from-indigo-500 to-cyan-400 p-3 rounded-full text-white">
                  {/* bulb icon */}
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M9 18h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M12 2a6 6 0 00-4 10.9V15a2 2 0 002 2h4a2 2 0 002-2v-2.1A6 6 0 0012 2z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center mb-4">Tips for Better Listings</h3>

              <ul className="space-y-4">
                <li className="flex gap-3 items-start">
                  <div className="flex-shrink-0 mt-1 text-blue-600">
                    {/* camera icon */}
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path d="M3 7h2l2-3h8l2 3h2v12H3z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="12" cy="13" r="3" fill="currentColor"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Use High-Quality Images</div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Clear, well-lit photos attract more bookings</p>
                  </div>
                </li>

                <li className="flex gap-3 items-start">
                  <div className="flex-shrink-0 mt-1 text-blue-600">
                    {/* edit icon */}
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path d="M3 21v-3.6l11-11 3.6 3.6-11 11H3z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Write Accurate Descriptions</div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Be honest about your vehicle's condition</p>
                  </div>
                </li>

                <li className="flex gap-3 items-start">
                  <div className="flex-shrink-0 mt-1 text-blue-600">
                    {/* calendar icon */}
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path d="M7 11h10M7 15h6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M3 7h18v12H3z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Keep Availability Updated</div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Regular updates improve booking success</p>
                  </div>
                </li>

                <li className="flex gap-3 items-start">
                  <div className="flex-shrink-0 mt-1 text-blue-600">
                    {/* dollar icon */}
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path d="M12 1v22" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M17 5H9.5a3.5 3.5 0 000 7H14a3.5 3.5 0 010 7H7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Competitive Pricing</div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Research similar vehicles in your area</p>
                  </div>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default AddehicleUI;
