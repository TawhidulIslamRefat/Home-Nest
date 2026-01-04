import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import {
  FaEdit,
  FaSave,
  FaUserShield,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCalendarAlt,
} from "react-icons/fa";

const Profile = () => {
  const { user, updateUser } = useContext(AuthContext); 
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    role: "",
    status: "",
    avatar: "",
    joinedAt: "",
  });

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || user.displayName || "",
        email: user.email || "",
        phone: user.phone || "",
        address: user.address || "",
        role: user.role || "User",
        status: user.status || "Active",
        avatar: user.photoURL || `https://i.pravatar.cc/150?u=${user.email}`,
        joinedAt: user.createdAt || new Date(),
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    if (updateUser) updateUser(formData); 
    setEditing(false);
  };

  return (
    <div className="w-full min-h-screen bg-gray-100 dark:bg-gray-900 p-8">
      <div className="max-w-6xl mx-auto bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
          <div className="relative">
            <img
              src={formData.avatar}
              alt={formData.name}
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-orange-400 shadow-lg"
            />
            {editing && (
              <input
                type="text"
                name="avatar"
                value={formData.avatar}
                onChange={handleChange}
                placeholder="Avatar URL"
                className="absolute bottom-0 left-0 w-full px-2 py-1 text-xs rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none"
              />
            )}
          </div>

          <div className="flex-1">
            {editing ? (
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2 focus:outline-none border-b border-gray-300 dark:border-gray-700 pb-1"
              />
            ) : (
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                {formData.name}
              </h1>
            )}
            <p className="text-gray-500 dark:text-gray-400 flex items-center gap-2 mt-1">
              <FaUserShield /> {formData.role} •{" "}
              <span
                className={`px-2 py-1 rounded-full ${
                  formData.status === "Active"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {formData.status}
              </span>
            </p>

            <div className="mt-3 space-y-2 text-gray-600 dark:text-gray-300">
              {editing ? (
                <>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none"
                  />
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone"
                    className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none"
                  />
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Address"
                    className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none"
                  />
                </>
              ) : (
                <>
                  <p className="flex items-center gap-2">
                    <FaEnvelope /> {formData.email}
                  </p>
                  <p className="flex items-center gap-2">
                    <FaPhone /> {formData.phone || "Not provided"}
                  </p>
                  <p className="flex items-center gap-2">
                    <FaMapMarkerAlt /> {formData.address || "Not provided"}
                  </p>
                </>
              )}
            </div>
          </div>

          <div className="ml-auto mt-4 md:mt-0">
            {editing ? (
              <button
                onClick={handleSave}
                className="bg-green-500 text-white px-6 py-3 rounded-xl hover:bg-green-600 flex items-center gap-2"
              >
                <FaSave /> Save
              </button>
            ) : (
              <button
                onClick={() => setEditing(true)}
                className="bg-orange-500 text-white px-6 py-3 rounded-xl hover:bg-orange-600 flex items-center gap-2"
              >
                <FaEdit /> Edit
              </button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="p-6 bg-linear-to-r from-orange-400 to-orange-500 text-white rounded-2xl flex flex-col items-center shadow-lg">
            <span className="text-3xl md:text-4xl font-bold">120</span>
            <span className="text-sm mt-1">Posts</span>
          </div>
          <div className="p-6 bg-linear-to-r from-blue-400 to-blue-500 text-white rounded-2xl flex flex-col items-center shadow-lg">
            <span className="text-3xl md:text-4xl font-bold">450</span>
            <span className="text-sm mt-1">Followers</span>
          </div>
          <div className="p-6 bg-linear-to-r from-green-400 to-green-500 text-white rounded-2xl flex flex-col items-center shadow-lg">
            <span className="text-3xl md:text-4xl font-bold">180</span>
            <span className="text-sm mt-1">Following</span>
          </div>
        </div>

        <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl flex items-center gap-3">
          <FaCalendarAlt className="text-orange-500 text-xl" />
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Joined on:{" "}
            {formData.joinedAt
              ? new Date(formData.joinedAt).toLocaleDateString()
              : "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
