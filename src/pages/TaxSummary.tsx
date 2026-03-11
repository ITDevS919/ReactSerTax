import { useState } from 'react';
import { ChevronLeft, FileText, DollarSign, FileCheck, ChevronDown, ChevronRight } from 'lucide-react';

const taxLines = [
  { line: 6, label: 'Gross rents', current: null, prior: null },
  { line: 7, label: 'Gross royalties', current: null, prior: null },
  { line: 8, label: 'Capital gain net income', current: null, prior: null },
  { line: 10, label: 'Other income', current: 79000, prior: 62000 },
  { line: 11, label: 'Total income', current: 3745000, prior: 3735000, bold: true },
  { line: 12, label: 'Officer compensation', current: 450000, prior: 430000 },
  { line: 13, label: 'Salaries and wages', current: 1200000, prior: 1150000 },
  { line: 14, label: 'Repairs & maintenance', current: 86000, prior: 72000 },
  { line: 15, label: 'Bad debts', current: 35000, prior: 38000 },
  { line: 16, label: 'Rents', current: 240000, prior: 230000 },
  { line: 17, label: 'Taxes and licenses', current: 125000, prior: 118000 },
  { line: 18, label: 'Interest expense', current: 95000, prior: 105000 },
  { line: 19, label: 'Charitable contributions', current: 50000, prior: 45000 },
  { line: 20, label: 'Depreciation', current: 175000, prior: 165000 },
  { line: 26, label: 'Other deductions', current: 425000, prior: 410000 },
  { line: 27, label: 'Total deductions', current: 2880000, prior: 2743000, bold: true },
  { line: 28, label: 'Taxable income before NOL', current: 865000, prior: 967000, bold: true },
  { line: 29, label: 'Net operating loss deduction', current: null, prior: null },
  { line: 29, label: 'Special deductions', current: 87500, prior: 77000 },
  { line: 30, label: 'Taxable income', current: 797500, prior: 890000, bold: true },
];

export function TaxSummary() {
  const [activeTab, setActiveTab] = useState('federal');
  const [leftSidebarOpen, setLeftSidebarOpen] = useState(true);
  const [rightSidebarOpen, setRightSidebarOpen] = useState(true);

  const tabs = [
    { id: 'federal', label: 'Federal' },
    { id: 'california', label: 'California' },
    { id: 'new-york', label: 'New York' },
  ];

  return (
    <div className="flex h-full">
        {leftSidebarOpen && (
          <div className="w-64 bg-[#111111] border-r border-gray-800 flex flex-col">
            <div className="p-4 border-b border-gray-800">
              <div className="flex items-center gap-2 mb-2">
                <ChevronLeft size={18} className="text-gray-400" />
                <span className="text-sm text-gray-400">Form 1120</span>
              </div>
              <h2 className="text-lg font-semibold text-white">Acme Corporation</h2>
            </div>

            <div className="flex-1 overflow-auto p-4">
              <div className="mb-6">
                <button className="w-full px-3 py-2 bg-amber-700/20 text-amber-500 rounded flex items-center gap-2 text-sm font-medium">
                  <FileText size={16} />
                  <span>Income</span>
                </button>
              </div>

              <div className="mb-6">
                <button
                  className="w-full px-3 py-2 text-gray-400 hover:bg-gray-800/50 rounded flex items-center justify-between text-sm"
                  onClick={() => {}}
                >
                  <div className="flex items-center gap-2">
                    <FileText size={16} />
                    <span>Deductions</span>
                  </div>
                  <ChevronDown size={16} />
                </button>
                <div className="ml-6 mt-2 space-y-1">
                  <button className="w-full px-3 py-1.5 text-gray-500 hover:text-gray-300 text-xs text-left rounded hover:bg-gray-800/30">
                    1120 - Line 12
                  </button>
                  <button className="w-full px-3 py-1.5 text-gray-500 hover:text-gray-300 text-xs text-left rounded hover:bg-gray-800/30">
                    Line 13
                  </button>
                </div>
              </div>

              <div>
                <button className="w-full px-3 py-2 text-gray-400 hover:bg-gray-800/50 rounded flex items-center gap-2 text-sm">
                  <FileText size={16} />
                  <span>Tax & Payments</span>
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="p-6 border-b border-gray-800">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-2xl font-semibold text-white mb-1">Tax Summary</h1>
                <p className="text-sm text-gray-400">U.S. Corporation Income Tax Return</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1.5 bg-amber-900/20 border border-amber-800/50 text-amber-400 text-sm rounded">
                  Draft for Review
                </span>
              </div>
            </div>

            <div className="flex gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 text-sm rounded-lg transition-colors ${
                    activeTab === tab.id
                      ? 'bg-amber-700/20 text-amber-500 font-medium'
                      : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/50'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1 overflow-auto p-6">
            <div className="bg-white rounded-lg p-8 max-w-4xl mx-auto">
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Form 1120</h2>
                <p className="text-sm text-gray-600">U.S. Corporation Income Tax Return</p>
              </div>

              <div className="space-y-2">
                {taxLines.map((item, index) => (
                  <div
                    key={index}
                    className={`grid grid-cols-12 gap-4 py-2 px-3 hover:bg-gray-50 rounded transition-colors ${
                      item.bold ? 'font-semibold border-t border-b border-gray-200 bg-gray-50' : ''
                    }`}
                  >
                    <div className="col-span-1 text-sm text-gray-600">{item.line}</div>
                    <div className="col-span-7 text-sm text-gray-900">{item.label}</div>
                    <div className="col-span-2 text-sm text-right text-blue-600">
                      {item.current ? item.current.toLocaleString() : '-'}
                    </div>
                    <div className="col-span-2 text-sm text-right text-gray-500">
                      {item.prior ? item.prior.toLocaleString() : '-'}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-gray-50 rounded-lg text-xs text-gray-600">
                This is an executive summary for review purposes only. All amounts are rounded to the nearest dollar. Final tax liability calculations are prepared by your CPA team.
              </div>
            </div>

            <div className="max-w-4xl mx-auto mt-6">
              <div className="bg-[#111111] border border-gray-800 rounded-lg p-6">
                <p className="text-gray-400 text-sm mb-4">
                  Hover over any line item to view source documents and technical guidance
                </p>

                <div className="border-t border-gray-800 pt-6 mt-6">
                  <h3 className="text-white font-medium mb-4">Review & Approve</h3>
                  <p className="text-gray-400 text-sm mb-6">
                    Please review the draft return above. If you approve, click the button below to proceed with e-filing. If you have questions, you can leave comments in the Documents & Requests section.
                  </p>

                  <button className="w-full py-3 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-medium rounded-lg transition-all flex items-center justify-center gap-2">
                    <FileCheck size={20} />
                    <span>Approve Draft & Proceed to E-File</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {rightSidebarOpen && (
          <div className="w-80 bg-[#111111] border-l border-gray-800 flex flex-col overflow-auto">
            <div className="p-6 border-b border-gray-800">
              <h3 className="text-lg font-semibold text-white mb-2">Line</h3>
              <p className="text-3xl font-semibold text-white mb-1">$8,750,000</p>
              <button className="px-3 py-1.5 bg-gray-800 hover:bg-gray-700 text-gray-200 text-sm rounded transition-colors">
                Quick view
              </button>
            </div>

            <div className="p-6 border-b border-gray-800">
              <h4 className="text-sm font-semibold text-white mb-3">Total revenue from product sales and services</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                Total revenue from product sales and services provided during the tax year, including all cash and credit sales.
              </p>
            </div>

            <div className="p-6 border-b border-gray-800">
              <button className="w-full flex items-center justify-between text-sm text-white hover:text-amber-500 transition-colors mb-4">
                <span className="font-medium">SOURCE DOCUMENTS</span>
                <ChevronDown size={16} />
              </button>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 bg-gray-800/50 rounded hover:bg-gray-800 transition-colors">
                  <div className="flex items-center gap-2">
                    <FileText size={14} className="text-gray-400" />
                    <span className="text-xs text-gray-300">Q4 2025 Bank Statements.pdf</span>
                  </div>
                  <span className="text-xs text-gray-500">1.6MB</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-800/50 rounded hover:bg-gray-800 transition-colors">
                  <div className="flex items-center gap-2">
                    <FileText size={14} className="text-gray-400" />
                    <span className="text-xs text-gray-300">Sales Report 2025.xlsx</span>
                  </div>
                  <span className="px-2 py-0.5 bg-amber-900/20 text-amber-400 text-xs rounded">SUPPORTING</span>
                </div>
              </div>
            </div>

            <div className="p-6 border-b border-gray-800">
              <button className="w-full flex items-center justify-between text-sm text-white hover:text-amber-500 transition-colors mb-4">
                <span className="font-medium">TAX CODE REFERENCES</span>
                <ChevronDown size={16} />
              </button>
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-gray-500 mb-1">IRC M310(a)(1)</p>
                  <p className="text-xs text-gray-400">Reg. §1.61-2</p>
                </div>
              </div>
            </div>

            <div className="p-6 border-b border-gray-800">
              <button className="w-full flex items-center justify-between text-sm text-white hover:text-amber-500 transition-colors mb-4">
                <span className="font-medium">KEY CONSIDERATIONS</span>
                <ChevronRight size={16} />
              </button>
            </div>

            <div className="p-6 border-b border-gray-800">
              <button className="w-full flex items-center justify-between text-sm text-white hover:text-amber-500 transition-colors mb-4">
                <span className="font-medium">LOOKING FORWARD</span>
                <ChevronRight size={16} />
              </button>
            </div>

            <div className="p-6 border-b border-gray-800">
              <button className="w-full flex items-center justify-between text-sm text-white hover:text-amber-500 transition-colors mb-4">
                <span className="font-medium">ADD REVIEW COMMENTS</span>
                <ChevronDown size={16} />
              </button>
              <textarea
                placeholder="Add questions or provide feedback about this line"
                className="w-full px-3 py-2 bg-[#0a0a0a] border border-gray-800 rounded-lg text-sm text-white placeholder-gray-600 focus:outline-none focus:border-amber-700 resize-none"
                rows={4}
              ></textarea>
              <button
                disabled
                className="w-full mt-3 py-2 bg-amber-700/20 text-amber-600 text-sm font-medium rounded-lg transition-all disabled:opacity-50"
              >
                Submit Comment
              </button>
              <p className="text-xs text-gray-500 mt-2">
                Your preparer will receive your comment and follow up if it's needed
              </p>
            </div>
          </div>
        )}
      </div>
  );
}
