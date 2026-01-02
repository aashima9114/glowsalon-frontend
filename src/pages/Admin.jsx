import React, { useState } from 'react';
import { FaCalendarAlt, FaUserFriends, FaMoneyBillWave, FaCheck, FaTimes, FaSignOutAlt, FaChartLine } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Admin = () => {
  const [bookings, setBookings] = useState([
    { id: 1, name: "Priya Singh", service: "Bridal Makeup", date: "2025-10-25", time: "10:00 AM", status: "Pending" },
    { id: 2, name: "Rahul Verma", service: "Haircut & Beard", date: "2025-10-25", time: "11:30 AM", status: "Pending" },
    { id: 3, name: "Sneha Kapoor", service: "Hair Spa", date: "2025-10-26", time: "02:00 PM", status: "Confirmed" },
    { id: 4, name: "Amit Sharma", service: "Facial", date: "2025-10-26", time: "04:00 PM", status: "Pending" },
    { id: 5, name: "Zara Khan", service: "Nail Art", date: "2025-10-27", time: "01:00 PM", status: "Rejected" },
  ]);

  // 2. FUNCTION TO HANDLE STATUS CHANGE
  const updateStatus = (id, newStatus) => {
    setBookings(bookings.map(booking => 
      booking.id === id ? { ...booking, status: newStatus } : booking
    ));
  };

  return (
    <div className="flex min-h-screen bg-gray-100 font-sans">
      
      {/* --- SIDEBAR --- */}
      <aside className="w-64 bg-salon-primary text-white flex flex-col hidden md:flex">
        <div className="p-6 text-2xl font-bold font-serif tracking-wider border-b border-purple-800">
          GLOW<span className="text-pink-300">ADMIN</span>
        </div>
        
        <nav className="flex-grow p-4 space-y-2">
          <div className="flex items-center gap-3 px-4 py-3 bg-white/10 rounded-lg cursor-pointer text-pink-100">
            <FaChartLine /> Dashboard
          </div>
          <div className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 rounded-lg cursor-pointer transition text-gray-300">
            <FaCalendarAlt /> Appointments
          </div>
          <div className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 rounded-lg cursor-pointer transition text-gray-300">
            <FaUserFriends /> Stylists
          </div>
        </nav>

        <div className="p-4 border-t border-purple-800">
          <Link to="/login" className="flex items-center gap-3 px-4 py-3 text-red-300 hover:bg-red-500 rounded-lg transition">
            <FaSignOutAlt /> Logout
          </Link>
        </div>
      </aside>

      {/* --- MAIN CONTENT --- */}
      <main className="flex-1 p-8 overflow-y-auto">
        
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
            <p className="text-gray-500">Welcome back, Admin!</p>
          </div>
          <div className="w-10 h-10 bg-gray-300 rounded-full overflow-hidden">
            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Admin" />
          </div>
        </header>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-purple-500 flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Total Bookings</p>
              <h3 className="text-3xl font-bold text-gray-800">124</h3>
            </div>
            <div className="p-3 bg-purple-100 text-purple-600 rounded-full text-xl"><FaCalendarAlt /></div>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-pink-500 flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Total Revenue</p>
              <h3 className="text-3xl font-bold text-gray-800">₹45,200</h3>
            </div>
            <div className="p-3 bg-pink-100 text-pink-600 rounded-full text-xl"><FaMoneyBillWave /></div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-blue-500 flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">New Customers</p>
              <h3 className="text-3xl font-bold text-gray-800">28</h3>
            </div>
            <div className="p-3 bg-blue-100 text-blue-600 rounded-full text-xl"><FaUserFriends /></div>
          </div>
        </div>

        {/* Recent Bookings Table */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Appointments</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-gray-700 border-b border-gray-100 text-sm uppercase">
                  <th className="py-3 px-2">Customer</th>
                  <th className="py-3 px-2">Service</th>
                  <th className="py-3 px-2">Date & Time</th>
                  <th className="py-3 px-2">Status</th>
                  <th className="py-3 px-2 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm">
                {bookings.map((booking) => (
                  <tr key={booking.id} className="border-b border-gray-50 hover:bg-gray-50 transition">
                    <td className="py-4 px-2 font-medium text-gray-800">{booking.name}</td>
                    <td className="py-4 px-2">{booking.service}</td>
                    <td className="py-4 px-2">{booking.date} <br/> <span className="text-xs text-gray-400">{booking.time}</span></td>
                    <td className="py-4 px-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold 
                        ${booking.status === 'Confirmed' ? 'bg-green-100 text-green-600' : 
                          booking.status === 'Rejected' ? 'bg-red-100 text-red-600' : 
                          'bg-yellow-100 text-yellow-600'}`}>
                        {booking.status}
                      </span>
                    </td>
                    <td className="py-4 px-2 flex justify-center gap-2">
                      {booking.status === 'Pending' && (
                        <>
                          <button 
                            onClick={() => updateStatus(booking.id, 'Confirmed')}
                            className="p-2 bg-green-100 text-green-600 rounded-lg hover:bg-green-200 transition"
                            title="Accept"
                          >
                            <FaCheck />
                          </button>
                          <button 
                            onClick={() => updateStatus(booking.id, 'Rejected')}
                            className="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition"
                            title="Reject"
                          >
                            <FaTimes />
                          </button>
                        </>
                      )}
                      {booking.status !== 'Pending' && <span className="text-gray-400">-</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </main>
    </div>
  );
};

export default Admin;