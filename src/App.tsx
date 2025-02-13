import React, { useState } from 'react';
import { 
  Zap, 
  Upload, 
  Activity, 
  Newspaper, 
  LogOut, 
  Bot, 
  AlertTriangle, 
  Lightbulb, 
  ArrowLeft,
  Calendar,
  TrendingUp,
  DollarSign,
  Leaf,
  ExternalLink,
  Tv,
  Smartphone,
  Fan,
  Refrigerator,
  Laptop,
  Wifi
} from 'lucide-react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [bills, setBills] = useState<File[]>([]);
  const [isSignup, setIsSignup] = useState(false);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setBills([...Array.from(e.target.files)]);
    }
  };

  const consumptionData = {
    labels: ['January', 'February', 'March'],
    datasets: [
      {
        label: 'kWh Usage',
        data: [420, 380, 310],
        backgroundColor: 'rgba(34, 197, 94, 0.5)',
        borderColor: 'rgb(34, 197, 94)',
        borderWidth: 1,
      },
    ],
  };

  const applianceData = {
    labels: ['HVAC', 'Lighting', 'Kitchen', 'Electronics', 'Others'],
    datasets: [
      {
        data: [35, 20, 25, 15, 5],
        backgroundColor: [
          'rgba(34, 197, 94, 0.7)',
          'rgba(59, 130, 246, 0.7)',
          'rgba(249, 115, 22, 0.7)',
          'rgba(168, 85, 247, 0.7)',
          'rgba(107, 114, 128, 0.7)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const recommendations = [
    {
      icon: <Tv className="w-5 h-5 text-green-500" />,
      title: "Smart TV Usage",
     // saving: "$15/month",
      description: "Enable power saving mode and reduce brightness during evening hours"
    },
    {
      icon: <Fan className="w-5 h-5 text-blue-500" />,
      title: "HVAC Optimization",
     // saving: "$45/month",
      description: "Set temperature to 78°F in summer and use ceiling fans"
    },
    {
      icon: <Refrigerator className="w-5 h-5 text-orange-500" />,
      title: "Refrigerator Settings",
     // saving: "$20/month",
      description: "Keep temperature between 37-40°F and clean coils regularly"
    },
    {
      icon: <Laptop className="w-5 h-5 text-purple-500" />,
      title: "Electronics Management",
     // saving: "$25/month",
      description: "Use power strips to eliminate phantom energy consumption"
    },
    {
      icon: <Wifi className="w-5 h-5 text-gray-500" />,
      title: "Smart Home Integration",
     // saving: "$30/month",
      description: "Install smart plugs to automate device power management"
    }
  ];

  const AuthForm = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full">
        <div className="flex items-center justify-center mb-8">
          <Zap className="w-8 h-8 text-green-500" />
          <h1 className="text-3xl font-bold ml-2 text-gray-800">EcoWatt</h1>
        </div>

        {isSignup ? (
          <>
            <div className="mb-6">
              <button
                onClick={() => setIsSignup(false)}
                className="flex items-center text-gray-600 hover:text-green-500 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-1" />
                Back to Sign In
              </button>
              <h2 className="text-2xl font-semibold text-gray-800 mt-4">Create Account</h2>
              <p className="text-gray-600 mt-1">Join us in saving energy today</p>
            </div>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              <button
                onClick={() => setIsLoggedIn(true)}
                className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors"
              >
                Create Account
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-800">Welcome Back</h2>
              <p className="text-gray-600 mt-1">Sign in to continue to EcoWatt</p>
            </div>
            <div className="space-y-4">
              <div>
                <label htmlFor="signin-email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="signin-email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="signin-password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  id="signin-password"
                  placeholder="••••••••"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              <button
                onClick={() => setIsLoggedIn(true)}
                className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors"
              >
                Sign In
              </button>
              <div className="text-center">
                <span className="text-gray-600">Don't have an account?</span>
                <button
                  onClick={() => setIsSignup(true)}
                  className="ml-2 text-green-500 hover:text-green-600 font-medium"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );

  const Dashboard = () => (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Zap className="w-6 h-6 text-green-500" />
              <span className="ml-2 text-xl font-semibold">EcoWatt</span>
            </div>
            <div className="flex space-x-8">
              <button
                onClick={() => setActiveTab('home')}
                className={`${activeTab === 'home' ? 'text-green-500' : 'text-gray-600'} hover:text-green-500`}
              >
                Home
              </button>
              <button
                onClick={() => setActiveTab('activity')}
                className={`${activeTab === 'activity' ? 'text-green-500' : 'text-gray-600'} hover:text-green-500`}
              >
                Activity
              </button>
              <button
                onClick={() => setActiveTab('news')}
                className={`${activeTab === 'news' ? 'text-green-500' : 'text-gray-600'} hover:text-green-500`}
              >
                News
              </button>
              <button
                onClick={() => setIsLoggedIn(false)}
                className="text-gray-600 hover:text-red-500"
              >
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {activeTab === 'home' && (
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-6">
                <Bot className="w-12 h-12 text-green-500" />
                <div className="ml-4">
                  <h2 className="text-xl font-semibold">Upload Bills for Analysis</h2>
                  <p className="text-gray-600">Upload your last three months' electricity bills for AI-powered analysis</p>
                </div>
              </div>
              
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <input
                  type="file"
                  multiple
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="bill-upload"
                />
                <label
                  htmlFor="bill-upload"
                  className="cursor-pointer flex flex-col items-center"
                >
                  <Upload className="w-12 h-12 text-gray-400 mb-4" />
                  <span className="text-gray-600">Click to upload bills</span>
                  <span className="text-sm text-gray-500 mt-2">PDF, JPG, or PNG files accepted</span>
                </label>
              </div>
            </div>

            {bills.length > 0 && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                      <Activity className="w-5 h-5 text-green-500 mr-2" />
                      Monthly Consumption Trends
                    </h3>
                    <div className="h-64">
                      <Bar 
                        data={consumptionData}
                        options={{
                          responsive: true,
                          maintainAspectRatio: false,
                          plugins: {
                            legend: {
                              position: 'top' as const,
                            },
                            title: {
                              display: false,
                            },
                          },
                        }}
                      />
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                      <Activity className="w-5 h-5 text-blue-500 mr-2" />
                      Energy Usage Distribution
                    </h3>
                    <div className="h-64">
                      <Doughnut 
                        data={applianceData}
                        options={{
                          responsive: true,
                          maintainAspectRatio: false,
                          plugins: {
                            legend: {
                              position: 'right' as const,
                            },
                          },
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-lg font-semibold mb-6 flex items-center">
                    <AlertTriangle className="w-5 h-5 text-yellow-500 mr-2" />
                    Personalized Recommendations
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {recommendations.map((rec, index) => (
                      <div key={index} className="p-4 border border-gray-200 rounded-lg hover:border-green-500 transition-colors">
                        <div className="flex items-center justify-between mb-3">
                          <div className="p-2 bg-gray-50 rounded-lg">
                            {rec.icon}
                          </div>
                          <span className="text-green-600 font-semibold"></span>
                        </div>
                        <h4 className="font-medium text-gray-900 mb-2">{rec.title}</h4>
                        <p className="text-sm text-gray-600">{rec.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'activity' && (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-xl font-semibold mb-6">Recent Activity</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Calendar className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">March Bill Analysis Complete</p>
                    <p className="text-gray-600 text-sm">Your March electricity bill has been analyzed</p>
                    <p className="text-sm text-green-600 mt-1">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <TrendingUp className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">Consumption Decreased</p>
                    <p className="text-gray-600 text-sm">Your energy usage decreased by 15% compared to last month</p>
                    <p className="text-sm text-green-600 mt-1">1 day ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-100 p-2 rounded-lg">
                    <DollarSign className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">Potential Savings Found</p>
                    <p className="text-gray-600 text-sm">We identified potential savings of $45/month based on your usage patterns</p>
                    <p className="text-sm text-green-600 mt-1">2 days ago</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-xl font-semibold mb-6">Achievement Progress</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <Leaf className="w-6 h-6 text-green-500" />
                    <span className="text-sm font-medium text-gray-600">Level 2</span>
                  </div>
                  <h3 className="font-medium">Energy Saver</h3>
                  <div className="mt-2 h-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-green-500 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">60% to Level 3</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'news' && (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-xl font-semibold mb-6">Latest Energy News</h2>
              <div className="grid gap-6">
                <article className="border-b border-gray-200 pb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-green-600 font-medium">Energy Efficiency</span>
                    <span className="text-sm text-gray-500">March 15, 2024</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">New Smart Home Technologies That Save Energy</h3>
                  <p className="text-gray-600 mb-4">Discover the latest smart home innovations that can help reduce your energy consumption and save money on bills.</p>
                  <a href="#" className="text-green-600 hover:text-green-700 font-medium inline-flex items-center">
                    Read More
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </article>

                <article className="border-b border-gray-200 pb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-green-600 font-medium">Policy Updates</span>
                    <span className="text-sm text-gray-500">March 14, 2024</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Government Announces New Energy Rebate Program</h3>
                  <p className="text-gray-600 mb-4">Learn about the new government initiatives to help homeowners upgrade to energy-efficient appliances.</p>
                  <a href="#" className="text-green-600 hover:text-green-700 font-medium inline-flex items-center">
                    Read More
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </article>

                <article className="pb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-green-600 font-medium">Tips & Tricks</span>
                    <span className="text-sm text-gray-500">March 13, 2024</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">10 Simple Ways to Reduce Your Energy Bill This Summer</h3>
                  <p className="text-gray-600 mb-4">Expert tips on keeping your home cool without breaking the bank during the hot summer months.</p>
                  <a href="#" className="text-green-600 hover:text-green-700 font-medium inline-flex items-center">
                    Read More
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </article>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );

  return isLoggedIn ? <Dashboard /> : <AuthForm />;
}

export default App;