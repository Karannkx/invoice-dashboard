import './index.css'
import React, { useState } from 'react';
import { ChevronLeft, ChevronDown, Bell, Edit3 } from 'lucide-react';
import {
  BarChart, Bar, Line, XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, ResponsiveContainer
} from 'recharts';

export default function InvoiceDashboard() {
  const [selectedPeriod, setSelectedPeriod] = useState('3Months');
  const [showStatusDropdown, setShowStatusDropdown] = useState(null);
  const [showInvoices, setShowInvoices] = useState(true);

  const statusOptions = ['Paid', 'Unpaid', 'Overdue', 'Partially Paid', 'Awaited', 'Declined', 'Draft'];

  const invoices = [
    { id: 1, client: 'Client Name', amount: '₹1,25,000', date: 'Due 2024-06-15', status: 'Update Status' },
    { id: 2, client: 'Client Name', amount: '₹1,25,000', date: 'Due 2024-06-15', status: 'Unpaid' },
    { id: 3, client: 'Income Trend', amount: '₹1,25,000', date: 'Due 2024-06-15', status: 'Declined' },
    { id: 4, client: 'Income Trend', amount: '₹1,25,000', date: 'Due 2024-06-15', status: 'Paid' },
    { id: 5, client: 'Income Trend', amount: '₹1,25,000', date: 'Due 2024-06-15', status: 'Paid' },
    { id: 6, client: 'Income Trend', amount: '₹1,25,000', date: 'Due 2024-06-15', status: 'Partially Paid' },
    { id: 7, client: 'Income Trend', amount: '₹1,25,000', date: 'Due 2024-06-15', status: 'Paid' },
    { id: 8, client: 'Income Trend', amount: '₹1,25,000', date: 'Due 2024-06-15', status: 'Overdue' },
    { id: 9, client: 'Income Trend', amount: '₹1,25,000', date: 'Due 2024-06-15', status: 'Awaited' },
    { id: 10, client: 'Income Trend', amount: '₹1,25,000', date: 'Due 2024-06-15', status: 'Draft' },
    { id: 11, client: 'Income Trend', amount: '₹1,25,000', date: 'Due 2024-06-15', status: 'Paid' }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Paid': return 'bg-green-500';
      case 'Unpaid': return 'bg-gray-400';
      case 'Overdue': return 'bg-red-500';
      case 'Partially Paid': return 'bg-orange-500';
      case 'Awaited': return 'bg-yellow-500';
      case 'Declined': return 'bg-red-500';
      case 'Draft': return 'bg-gray-300';
      default: return 'bg-purple-600';
    }
  };

  const getStatusTextColor = (status) => {
    switch (status) {
      case 'Draft': return 'text-gray-700';
      default: return 'text-white';
    }
  };

  const monthData = [
    { month: "Jan", income: 4000, momGrowth: 20 },
    { month: "Feb", income: 5000, momGrowth: 30 },
    { month: "Mar", income: 7000, momGrowth: 40 },
    { month: "Apr", income: 3500, momGrowth: -30 },
    { month: "May", income: 5500, momGrowth: 70 },
    { month: "Jun", income: 0, momGrowth: -100 },
  ];

  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(to bottom, rgb(231,205,231), #e0d6f4, #cbe6f9)" }}>
      
      {/* Top Image only on Mobile */}
      <div className="block md:hidden">
        <img
          src="https://res.cloudinary.com/duwg1mctb/image/upload/v1757967300/image_1_k582xe.png"
          alt="Top Banner"
          className="w-full h-8 object-cover"
        />
      </div>

      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center space-x-3">
          <ChevronLeft className="w-6 h-6 text-black" />
          <span className="text-lg font-semibold text-black">Back</span>
        </div>
        <span className="text-lg font-bold text-black">Dashboard</span>
        <div>
          <img
            src="https://res.cloudinary.com/duwg1mctb/image/upload/v1749665204/hacker_sdz3va.png"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-t-[46px] px-6 py-8 mx-0 mt-4 shadow-lg min-h-screen" style={{ boxShadow: "0 4px 6px rgb(44,44,44)" }}>
        
        {/* Create New Invoice */}
        <div className="bg-gray-100 rounded-[32px] p-8 text-center mb-6">
          <div className="w-12 h-12 mx-auto mb-4 relative">
            <img
              src="https://res.cloudinary.com/duwg1mctb/image/upload/v1757959320/create_invoice_fwyfyq.png"
              alt="Plus"
              className="w-12 h-12"
            />
          </div>
          <h2 className="text-xl font-bold bg-gradient-to-b from-pink-500 via-purple-500 to-blue-600 bg-clip-text text-transparent mb-2">
            Create New Invoice
          </h2>
          <p className="text-gray-600 text-sm mb-3">Start by creating and sending new invoice</p>
        </div>

        <p className="text-purple-600 text-xs text-center mb-6">
          Or Upload an existing invoice and set payment reminder
        </p>

        {/* Time Period Section */}
        <div className="bg-white border-2 border-gray-200 rounded-2xl p-4 mb-6">
          <div className="flex justify-between items-center mb-3">
            <span className="text-gray-600 text-sm">Time Period</span>
            <span className="text-gray-400 text-xs">dd/mm/yyyy - dd/mm/yyyy</span>
          </div>
          <div className="space-y-3">
            {/* Top 3 Options */}
            <div className="flex space-x-2 mb-3">
              {['1Month', '3Months', '1Year'].map((period) => (
                <div
                  key={period}
                  onClick={() => setSelectedPeriod(period)}
                  className={`px-4 py-2 rounded-2xl text-sm font-medium cursor-pointer border flex items-center space-x-2 ${
                    selectedPeriod === period
                      ? 'border-purple-400 bg-gradient-to-b from-purple-100 via-pink-50 to-blue-50 text-purple-600'
                      : 'border-gray-200 bg-gray-50 text-gray-600'
                  }`}
                >
                  <span>
                    {period === '1Month' ? '1 Month' : period === '3Months' ? '3 Months' : '1 Year'}
                  </span>
                  {period === '1Year' && (
                    <img
                      src="https://res.cloudinary.com/duwg1mctb/image/upload/v1757959328/Crown_dzh3qa.png"
                      alt="Crown"
                      className="w-4 h-4"
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Custom Option */}
            <div
              onClick={() => setSelectedPeriod('Custom')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-2xl text-sm font-medium cursor-pointer border w-fit ${
                selectedPeriod === 'Custom'
                  ? 'border-purple-400 bg-gradient-to-b from-purple-100 via-pink-50 to-blue-50 text-purple-600'
                  : 'border-gray-200 bg-gray-50 text-gray-600'
              }`}
            >
              <img
                src="https://res.cloudinary.com/duwg1mctb/image/upload/v1757967532/image_2_cn2pbf.png"
                alt="Calendar Icon"
                className="w-5 h-5"
              />
              <span>Custom</span>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-4 col-span-2">
            <span className="text-gray-600 text-sm block mb-1">Total Earnings</span>
            <h3 className="text-2xl font-bold text-purple-600">$1,25,000</h3>
          </div>
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-4">
            <span className="text-gray-600 text-sm block mb-1">Payment Awaited</span>
            <p className="text-xl font-bold text-purple-600">$25,000</p>
          </div>
          <div className="bg-white border-2 border-red-200 rounded-2xl p-4">
            <span className="text-gray-600 text-sm block mb-1">Payment Overdue</span>
            <p className="text-xl font-bold text-purple-600">$25,000</p>
          </div>
        </div>

        {/* Income Trend Chart */}
        <div className="bg-white border-2 border-gray-200 rounded-2xl p-4 mb-6">
          <div className="mb-4">
            <h4 className="font-semibold text-gray-800 text-lg">Income Trend</h4>
            <p className="text-gray-600 text-sm">Your monthly income and growth for the last 6 months.</p>
          </div>
          <div className="w-full h-72">
            <ResponsiveContainer>
              <BarChart data={monthData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis yAxisId="left" orientation="left" stroke="#9333ea" />
                <YAxis yAxisId="right" orientation="right" stroke="#dc2626" />
                <Tooltip />
                <Legend />
                <Bar yAxisId="left" dataKey="income" fill="#9333ea" name="Income" radius={[8, 8, 0, 0]} />
                <Line yAxisId="right" type="monotone" dataKey="momGrowth" stroke="#dc2626" name="MoM Growth" dot />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Invoices Section */}
        <div className="space-y-4">
          <div 
            className="flex items-center justify-between cursor-pointer"
            onClick={() => setShowInvoices(!showInvoices)}
          >
            <h4 className="font-semibold text-gray-800">Your Invoices</h4>
            <ChevronDown className={`w-5 h-5 text-gray-600 transition-transform ${showInvoices ? 'rotate-0' : 'rotate-180'}`} />
          </div>

          {showInvoices && (
            <div className="space-y-3">
              {invoices.map((invoice) => (
                <div key={invoice.id} className="bg-white rounded-xl p-4 border-2 border-gray-200 flex items-center justify-between">
                  <div className="flex-1">
                    <h5 className="font-semibold text-gray-800">{invoice.client}</h5>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="font-bold text-gray-800">{invoice.amount}</span>
                      <span className="text-gray-500 text-sm">{invoice.date}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    {invoice.status === 'Update Status' ? (
                      <div className="relative">
                        <button 
                          onClick={() => setShowStatusDropdown(showStatusDropdown === invoice.id ? null : invoice.id)}
                          className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center space-x-1"
                        >
                          <span>Update Status</span>
                          <ChevronDown className="w-4 h-4" />
                        </button>
                        {showStatusDropdown === invoice.id && (
                          <div className="absolute right-0 top-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 min-w-36">
                            {statusOptions.map((status) => (
                              <button
                                key={status}
                                onClick={() => { setShowStatusDropdown(null); }}
                                className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg"
                              >
                                <span className={`inline-block w-2 h-2 rounded-full mr-2 ${getStatusColor(status)}`}></span>
                                {status}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(invoice.status)} ${getStatusTextColor(invoice.status)}`}>
                        {invoice.status}
                      </span>
                    )}
                    {(invoice.status === 'Overdue' || invoice.status === 'Awaited') && (
                      <Bell className="w-4 h-4 text-gray-400" />
                    )}
                    {invoice.status === 'Draft' && (
                      <Edit3 className="w-4 h-4 text-gray-400" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer with Image */}
        <div className="text-center py-8 mt-8 border-t border-gray-200">
          <img
            src="https://res.cloudinary.com/duwg1mctb/image/upload/v1757965520/image_qe8mfy.png"
            alt="Footer Image"
            className="mx-auto w-68 h-auto"
          />
        </div>
      </div>
    </div>
  );
}
