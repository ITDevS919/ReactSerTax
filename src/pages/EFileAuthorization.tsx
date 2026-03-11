import { useState } from 'react';
import { AlertCircle, FileText } from 'lucide-react';

export function EFileAuthorization() {
  const [activeTab, setActiveTab] = useState('federal');
  const [fullName, setFullName] = useState('');
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [declaration1, setDeclaration1] = useState(false);
  const [declaration2, setDeclaration2] = useState(false);
  const [declaration3, setDeclaration3] = useState(false);

  const tabs = [
    { id: 'federal', label: 'Federal' },
    { id: 'california', label: 'California' },
    { id: 'new-york', label: 'New York' },
  ];

  return (
    <div className="max-w-5xl mx-auto p-8">
        <div className="mb-8 flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <FileText className="text-gray-400" size={24} />
              <h1 className="text-2xl font-semibold text-white">E-File Authorization</h1>
            </div>
            <p className="text-gray-400 text-sm">Federal and State Corporate Income Tax Return - Form 1120</p>
          </div>
        </div>

        <div className="bg-[#111111] border border-gray-800 rounded-lg p-6 mb-8">
          <h2 className="text-lg font-semibold text-white mb-2">Jurisdiction Authorization Progress</h2>
          <div className="flex items-center gap-2">
            <span className="text-3xl font-semibold text-white">0</span>
            <span className="text-gray-400">of 3 Authorized</span>
          </div>
          <div className="w-full h-2 bg-gray-800 rounded-full mt-4">
            <div className="h-full bg-amber-600 rounded-full" style={{ width: '0%' }}></div>
          </div>
        </div>

        <div className="bg-[#111111] border border-gray-800 rounded-lg overflow-hidden mb-8">
          <div className="border-b border-gray-800">
            <div className="flex">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 text-sm border-b-2 transition-colors ${
                    activeTab === tab.id
                      ? 'text-white border-amber-600 bg-amber-700/10'
                      : 'text-gray-400 hover:text-gray-200 border-transparent'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="p-6">
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-white mb-4">
                Authorizing: Federal Tax Return
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                Complete the authorization to proceed to the next jurisdiction
              </p>
            </div>

            <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6 mb-8">
              <h4 className="text-white font-medium mb-4">Electronic Filing Authorization</h4>

              <div className="space-y-4 mb-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-sm text-gray-400">Entity Name</span>
                    <p className="text-white">Acme Corporation</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-400">Tax Year</span>
                    <p className="text-white">2025</p>
                  </div>
                </div>

                <div>
                  <span className="text-sm text-gray-400 block mb-1">Form Type</span>
                  <p className="text-white">Form 1120 - U.S. Corporation Income Tax Return</p>
                </div>

                <div>
                  <span className="text-sm text-gray-400 block mb-1">Filing Jurisdictions</span>
                  <p className="text-white">Federal, California, Delaware, New York, Texas, Nevada</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm text-gray-400 mb-2">
                    Full Name (Type to Sign) <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Enter your full legal name"
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-gray-700 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-amber-700 transition-colors"
                  />
                  <p className="text-xs text-gray-500 mt-2">
                    By typing your name, you are providing a legally binding electronic signature.
                  </p>
                </div>

                <div>
                  <label htmlFor="title" className="block text-sm text-gray-400 mb-2">
                    Title/Role <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="title"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="e.g., CEO, President, Authorized Officer"
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-gray-700 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-amber-700 transition-colors"
                  />
                  <p className="text-xs text-gray-500 mt-2">
                    This must be an officer authorized to sign the tax return.
                  </p>
                </div>

                <div>
                  <label htmlFor="date" className="block text-sm text-gray-400 mb-2">
                    Date <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="date"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-amber-700 transition-colors"
                  />
                </div>
              </div>
            </div>

            <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6 mb-8">
              <h4 className="text-white font-medium mb-4">Declarations and Acknowledgements</h4>

              <div className="space-y-4">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={declaration1}
                    onChange={(e) => setDeclaration1(e.target.checked)}
                    className="mt-1 w-4 h-4 bg-[#0a0a0a] border-gray-700 rounded text-amber-600 focus:ring-amber-600 focus:ring-offset-0"
                  />
                  <span className="text-sm text-gray-300">
                    I declare that I have examined this return, including accompanying schedules and statements, and to the best of my knowledge and belief, it is true, correct, and complete.
                  </span>
                </label>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={declaration2}
                    onChange={(e) => setDeclaration2(e.target.checked)}
                    className="mt-1 w-4 h-4 bg-[#0a0a0a] border-gray-700 rounded text-amber-600 focus:ring-amber-600 focus:ring-offset-0"
                  />
                  <span className="text-sm text-gray-300">
                    I understand that under penalties of perjury, this declaration is made by me and not by the tax preparer.
                  </span>
                </label>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={declaration3}
                    onChange={(e) => setDeclaration3(e.target.checked)}
                    className="mt-1 w-4 h-4 bg-[#0a0a0a] border-gray-700 rounded text-amber-600 focus:ring-amber-600 focus:ring-offset-0"
                  />
                  <span className="text-sm text-gray-300">
                    I authorize my tax preparer to electronically file this return and all related documents with the IRS and applicable state tax authorities. I also authorize the IRS and state authorities to discuss this return with my preparer.
                  </span>
                </label>
              </div>
            </div>

            <div className="bg-amber-900/20 border border-amber-800/50 rounded-lg p-4 mb-8">
              <div className="flex items-start gap-3">
                <AlertCircle className="text-amber-600 mt-0.5 flex-shrink-0" size={20} />
                <div>
                  <h5 className="text-amber-200 font-medium mb-2">What Happens Next</h5>
                  <ul className="space-y-1 text-sm text-amber-300/80">
                    <li>• Your signature will date-stamp electronically for your records</li>
                    <li>• You'll receive confirmation emails for each accepted filing</li>
                    <li>• State filings may be accepted at different times — you have not revoke and follow up as needed</li>
                    <li>• If any filing is rejected, we'll contact you and notify you immediately</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-gray-800">
              <button className="px-6 py-2.5 text-gray-400 hover:text-gray-200 transition-colors">
                Cancel
              </button>
              <button
                disabled={!fullName || !title || !date || !declaration1 || !declaration2 || !declaration3}
                className="px-8 py-3 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-medium rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                Authorize Federal
              </button>
            </div>
          </div>
        </div>

        <div className="text-center text-sm text-gray-500">
          Please complete all required fields and acknowledgements to proceed
        </div>
      </div>
  );
}
