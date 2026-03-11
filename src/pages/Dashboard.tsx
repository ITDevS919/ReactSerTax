//import { Layout } from '../components/Layout';
import { AlertCircle, CheckCircle, Clock, TrendingUp, FileText, DollarSign, Users, ArrowRight } from 'lucide-react';

export function Dashboard() {
  return (
//    <Layout currentPage="dashboard">
      <div className="max-w-7xl mx-auto p-8">
        <div className="mb-8 flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-white mb-2">Welcome back, John</h1>
            <p className="text-gray-400">Here's what's happening with your tax return</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-500 mb-2">Tax Year 2025</p>
            <p className="text-2xl font-semibold text-white">Acme Corporation</p>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 mb-8">
          <div className="bg-[#111111] border border-gray-800 rounded-lg p-6">
            <div className="flex items-center justify-between mb-3">
              <p className="text-gray-400 text-sm">Status</p>
              <Clock className="text-amber-600" size={20} />
            </div>
            <p className="text-2xl font-semibold text-white mb-1">In Progress</p>
            <p className="text-xs text-gray-500">3 of 6 sections complete</p>
          </div>

          <div className="bg-[#111111] border border-gray-800 rounded-lg p-6">
            <div className="flex items-center justify-between mb-3">
              <p className="text-gray-400 text-sm">Estimated Tax</p>
              <DollarSign className="text-green-600" size={20} />
            </div>
            <p className="text-2xl font-semibold text-white mb-1">$185,000</p>
            <p className="text-xs text-gray-500">Federal liability</p>
          </div>

          <div className="bg-[#111111] border border-gray-800 rounded-lg p-6">
            <div className="flex items-center justify-between mb-3">
              <p className="text-gray-400 text-sm">Documents</p>
              <FileText className="text-blue-600" size={20} />
            </div>
            <p className="text-2xl font-semibold text-white mb-1">6</p>
            <p className="text-xs text-gray-500">Uploaded</p>
          </div>

          <div className="bg-[#111111] border border-gray-800 rounded-lg p-6">
            <div className="flex items-center justify-between mb-3">
              <p className="text-gray-400 text-sm">Team Members</p>
              <Users className="text-purple-600" size={20} />
            </div>
            <p className="text-2xl font-semibold text-white mb-1">2</p>
            <p className="text-xs text-gray-500">Assigned</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8 mb-8">
          <div className="col-span-2">
            <div className="bg-[#111111] border border-gray-800 rounded-lg overflow-hidden">
              <div className="p-6 border-b border-gray-800">
                <h2 className="text-xl font-semibold text-white">Return Overview</h2>
              </div>

              <div className="p-6 space-y-6">
                <div className="flex items-start gap-4 pb-6 border-b border-gray-800">
                  <div className="w-12 h-12 rounded-full bg-amber-700/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="text-amber-600" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold mb-1">Intake in Progress</h3>
                    <p className="text-sm text-gray-400">You've completed 3 of 6 sections</p>
                    <div className="mt-3 w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-amber-600" style={{ width: '50%' }}></div>
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-gray-800/50 hover:bg-gray-800 border border-gray-700 text-gray-200 rounded-lg text-sm transition-colors flex items-center gap-2">
                    Continue
                    <ArrowRight size={16} />
                  </button>
                </div>

                <div className="flex items-start gap-4 pb-6 border-b border-gray-800">
                  <div className="w-12 h-12 rounded-full bg-green-700/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="text-green-600" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold mb-1">Documents Uploaded</h3>
                    <p className="text-sm text-gray-400">6 documents ready for review</p>
                  </div>
                  <button className="px-4 py-2 bg-gray-800/50 hover:bg-gray-800 border border-gray-700 text-gray-200 rounded-lg text-sm transition-colors flex items-center gap-2">
                    View
                    <ArrowRight size={16} />
                  </button>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-700/20 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="text-blue-600" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold mb-1">Tax Insights Available</h3>
                    <p className="text-sm text-gray-400">View optimization opportunities</p>
                  </div>
                  <button className="px-4 py-2 bg-gray-800/50 hover:bg-gray-800 border border-gray-700 text-gray-200 rounded-lg text-sm transition-colors flex items-center gap-2">
                    Explore
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-amber-900/20 border border-amber-800/50 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <AlertCircle className="text-amber-600 mt-0.5 flex-shrink-0" size={20} />
                <div>
                  <h3 className="text-amber-200 font-semibold mb-1">Action Required</h3>
                  <p className="text-amber-300/70 text-sm mb-3">
                    Your tax preparer requested additional bank statements
                  </p>
                  <button className="text-xs text-amber-400 hover:text-amber-300 font-medium flex items-center gap-1">
                    View Request <ArrowRight size={12} />
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-blue-900/20 border border-blue-800/50 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Clock className="text-blue-600 mt-0.5 flex-shrink-0" size={20} />
                <div>
                  <h3 className="text-blue-200 font-semibold mb-1">Filing Deadline</h3>
                  <p className="text-blue-300/70 text-sm mb-3">
                    Federal return due: April 15, 2026
                  </p>
                  <button className="text-xs text-blue-400 hover:text-blue-300 font-medium flex items-center gap-1">
                    View Deadlines <ArrowRight size={12} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#111111] border border-gray-800 rounded-lg overflow-hidden">
          <div className="p-6 border-b border-gray-800 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-white">Recent Activity</h2>
            <button className="text-sm text-gray-400 hover:text-gray-200 transition-colors">View All</button>
          </div>

          <div className="divide-y divide-gray-800">
            <div className="p-4 hover:bg-gray-800/20 transition-colors flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-amber-700/20 flex items-center justify-center flex-shrink-0">
                <FileText className="text-amber-600" size={18} />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-200">
                  <span className="font-medium">You</span> uploaded Equipment Receipts.pdf
                </p>
                <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
              </div>
            </div>

            <div className="p-4 hover:bg-gray-800/20 transition-colors flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-700/20 flex items-center justify-center flex-shrink-0">
                <Clock className="text-blue-600" size={18} />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-200">
                  <span className="font-medium">Sarah Chen</span> requested additional documents
                </p>
                <p className="text-xs text-gray-500 mt-1">1 day ago</p>
              </div>
            </div>

            <div className="p-4 hover:bg-gray-800/20 transition-colors flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-green-700/20 flex items-center justify-center flex-shrink-0">
                <CheckCircle className="text-green-600" size={18} />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-200">
                  <span className="font-medium">Michael Torres</span> completed income review
                </p>
                <p className="text-xs text-gray-500 mt-1">3 days ago</p>
              </div>
            </div>

            <div className="p-4 hover:bg-gray-800/20 transition-colors flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-purple-700/20 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="text-purple-600" size={18} />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-200">
                  Tax insights updated based on your submissions
                </p>
                <p className="text-xs text-gray-500 mt-1">1 week ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
//    </Layout>
  );
}
