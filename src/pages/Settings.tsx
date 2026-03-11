import { useState } from 'react';
import { User, Lock, Bell, Eye, EyeOff, CheckCircle, AlertCircle } from 'lucide-react';

export function Settings() {
  const [showPassword, setShowPassword] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [documentNotifications, setDocumentNotifications] = useState(true);
  const [taxAlerts, setTaxAlerts] = useState(true);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(true);

  return (
    <div className="max-w-4xl mx-auto p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-white mb-2">Settings</h1>
          <p className="text-gray-400">Manage your account and preferences</p>
        </div>

        <div className="space-y-6">
          <div className="bg-[#111111] border border-gray-800 rounded-lg overflow-hidden">
            <div className="p-6 border-b border-gray-800 flex items-center gap-3">
              <User className="text-gray-400" size={24} />
              <h2 className="text-xl font-semibold text-white">Account</h2>
            </div>

            <div className="p-6 space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">First Name</label>
                  <input
                    type="text"
                    defaultValue="John"
                    className="w-full px-4 py-3 bg-gray-800/30 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-amber-700 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Last Name</label>
                  <input
                    type="text"
                    defaultValue="Smith"
                    className="w-full px-4 py-3 bg-gray-800/30 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-amber-700 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">Email Address</label>
                <input
                  type="email"
                  defaultValue="john.smith@company.com"
                  className="w-full px-4 py-3 bg-gray-800/30 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-amber-700 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">Company Name</label>
                <input
                  type="text"
                  defaultValue="Acme Corporation"
                  className="w-full px-4 py-3 bg-gray-800/30 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-amber-700 transition-colors"
                />
              </div>

              <div className="pt-4 border-t border-gray-800">
                <button className="px-6 py-2.5 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white rounded-lg font-medium transition-all">
                  Save Changes
                </button>
              </div>
            </div>
          </div>

          <div className="bg-[#111111] border border-gray-800 rounded-lg overflow-hidden">
            <div className="p-6 border-b border-gray-800 flex items-center gap-3">
              <Lock className="text-gray-400" size={24} />
              <h2 className="text-xl font-semibold text-white">Security</h2>
            </div>

            <div className="p-6 space-y-6">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Current Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your current password"
                    className="w-full px-4 py-3 bg-gray-800/30 border border-gray-700 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-amber-700 transition-colors pr-12"
                  />
                  <button
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-gray-500 hover:text-gray-300"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">New Password</label>
                  <input
                    type="password"
                    placeholder="Enter new password"
                    className="w-full px-4 py-3 bg-gray-800/30 border border-gray-700 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-amber-700 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Confirm Password</label>
                  <input
                    type="password"
                    placeholder="Confirm new password"
                    className="w-full px-4 py-3 bg-gray-800/30 border border-gray-700 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-amber-700 transition-colors"
                  />
                </div>
              </div>

              <div className="bg-green-900/20 border border-green-800/50 rounded-lg p-4 flex items-start gap-3">
                <CheckCircle className="text-green-500 mt-0.5 flex-shrink-0" size={20} />
                <div>
                  <h4 className="text-green-200 font-medium mb-1">Two-Factor Authentication</h4>
                  <p className="text-green-300/70 text-sm">
                    {twoFactorEnabled ? 'Enabled - Your account is secured with 2FA' : 'Disabled'}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-800 flex gap-3">
                <button className="px-6 py-2.5 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white rounded-lg font-medium transition-all">
                  Update Password
                </button>
                <button className="px-6 py-2.5 bg-gray-800/50 hover:bg-gray-800 border border-gray-700 text-gray-200 rounded-lg font-medium transition-colors">
                  Manage 2FA
                </button>
              </div>
            </div>
          </div>

          <div className="bg-[#111111] border border-gray-800 rounded-lg overflow-hidden">
            <div className="p-6 border-b border-gray-800 flex items-center gap-3">
              <Bell className="text-gray-400" size={24} />
              <h2 className="text-xl font-semibold text-white">Notifications</h2>
            </div>

            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between py-3">
                <div>
                  <p className="text-white font-medium">Email Notifications</p>
                  <p className="text-sm text-gray-400">Receive updates about your tax return status</p>
                </div>
                <label className="relative inline-flex cursor-pointer">
                  <input
                    type="checkbox"
                    checked={emailNotifications}
                    onChange={(e) => setEmailNotifications(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-600"></div>
                </label>
              </div>

              <div className="flex items-center justify-between py-3 border-t border-gray-800">
                <div>
                  <p className="text-white font-medium">Document Alerts</p>
                  <p className="text-sm text-gray-400">Get notified when documents are requested</p>
                </div>
                <label className="relative inline-flex cursor-pointer">
                  <input
                    type="checkbox"
                    checked={documentNotifications}
                    onChange={(e) => setDocumentNotifications(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-600"></div>
                </label>
              </div>

              <div className="flex items-center justify-between py-3 border-t border-gray-800">
                <div>
                  <p className="text-white font-medium">Tax Insights & Alerts</p>
                  <p className="text-sm text-gray-400">Receive tax optimization recommendations</p>
                </div>
                <label className="relative inline-flex cursor-pointer">
                  <input
                    type="checkbox"
                    checked={taxAlerts}
                    onChange={(e) => setTaxAlerts(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-600"></div>
                </label>
              </div>
            </div>
          </div>

          <div className="bg-[#111111] border border-gray-800 rounded-lg overflow-hidden">
            <div className="p-6 border-b border-gray-800">
              <h2 className="text-xl font-semibold text-white">Account Preferences</h2>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Preferred Tax Form</label>
                <select className="w-full px-4 py-3 bg-gray-800/30 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-amber-700 transition-colors">
                  <option>Form 1120 - C Corporation</option>
                  <option>Form 1120-S - S Corporation</option>
                  <option>Form 1065 - Partnership</option>
                  <option>Form 1040 - Individual</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">Tax Year</label>
                <select className="w-full px-4 py-3 bg-gray-800/30 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-amber-700 transition-colors">
                  <option>2025</option>
                  <option>2024</option>
                  <option>2023</option>
                </select>
              </div>

              <div className="pt-4 border-t border-gray-800">
                <button className="px-6 py-2.5 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white rounded-lg font-medium transition-all">
                  Save Preferences
                </button>
              </div>
            </div>
          </div>

          <div className="bg-red-900/20 border border-red-800/50 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <AlertCircle className="text-red-500 mt-0.5 flex-shrink-0" size={24} />
              <div className="flex-1">
                <h3 className="text-red-200 font-semibold mb-2">Danger Zone</h3>
                <p className="text-red-300/70 text-sm mb-4">
                  Deleting your account is permanent and cannot be undone. All your data will be removed.
                </p>
                <button className="px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors">
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
