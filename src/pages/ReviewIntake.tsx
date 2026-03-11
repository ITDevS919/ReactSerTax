import { CheckCircle, Circle, AlertCircle } from 'lucide-react';

const intakeSections = [
  {
    name: 'Basic Business Information',
    description: 'Legal structure, EIN, and business address',
    status: 'complete',
    required: true,
    questions: '3/3',
    documents: 'No documents uploaded',
  },
  {
    name: 'Financial Documents',
    description: 'Bank statements, profit & loss, and balance sheets',
    status: 'complete',
    required: true,
    questions: '4/4',
    documents: 'No documents uploaded',
  },
  {
    name: 'Income & Revenue',
    description: 'Sales records, 1099s, and other income documentation',
    status: 'complete',
    required: true,
    questions: '5/5',
    documents: 'No documents uploaded',
  },
  {
    name: 'Business Expenses & Deductions',
    description: 'Receipts for major purchases, payroll, and operating expenses',
    status: 'complete',
    required: true,
    questions: '6/6',
    documents: 'No documents uploaded',
  },
  {
    name: 'Assets & Depreciation',
    description: 'Property, equipment, and depreciation schedules',
    status: 'complete',
    required: true,
    questions: '4/4',
    documents: 'No documents uploaded',
  },
  {
    name: 'Related Party Transactions',
    description: 'Transactions with officers, shareholders, or affiliates',
    status: 'skipped',
    required: false,
    questions: '4/4',
    documents: 'No documents uploaded',
    note: 'Skipped — we\'ll follow up if needed',
  },
];

export function ReviewIntake() {
  const completedSections = intakeSections.filter(s => s.status === 'complete').length;
  const totalSections = intakeSections.length;

  return (
    <div className="max-w-5xl mx-auto p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-white mb-2">Review Your Intake</h1>
          <p className="text-gray-400">Please review all sections before submitting to your CPA team</p>
        </div>

        <div className="bg-[#111111] border border-gray-800 rounded-lg p-6 mb-8">
          <h2 className="text-lg font-semibold text-white mb-4">Progress</h2>
          <div className="mb-2">
            <div className="flex items-center justify-between mb-2">
              <span className="text-2xl font-semibold text-white">
                {completedSections} of {totalSections} sections complete
              </span>
            </div>
            <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-amber-600 to-amber-700 rounded-full transition-all"
                style={{ width: `${(completedSections / totalSections) * 100}%` }}
              ></div>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <CheckCircle className="text-green-500" size={20} />
            <span className="text-sm text-gray-400">All required sections complete — ready to submit</span>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-4">Intake Sections</h2>
          <div className="space-y-4">
            {intakeSections.map((section, index) => (
              <div
                key={index}
                className="bg-[#111111] border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    {section.status === 'complete' ? (
                      <CheckCircle className="text-green-500" size={24} />
                    ) : section.status === 'skipped' ? (
                      <Circle className="text-gray-600" size={24} />
                    ) : (
                      <AlertCircle className="text-amber-600" size={24} />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-medium text-white">{section.name}</h3>
                      {section.required && (
                        <span className="px-2 py-0.5 bg-red-900/30 border border-red-800/50 text-red-400 text-xs rounded">
                          Required
                        </span>
                      )}
                    </div>
                    <p className="text-gray-400 text-sm mb-4">{section.description}</p>
                    <div className="flex items-center gap-6 text-sm">
                      <div>
                        <span className="text-gray-500">Questions: </span>
                        <span className="text-gray-300">{section.questions}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">{section.documents}</span>
                      </div>
                    </div>
                    {section.note && (
                      <div className="mt-3 text-sm text-amber-500">{section.note}</div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between p-6 bg-[#111111] border border-gray-800 rounded-lg">
          <button className="px-6 py-2.5 text-gray-400 hover:text-gray-200 transition-colors">
            Save as draft
          </button>
          <button className="px-8 py-3 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-medium rounded-lg transition-all flex items-center gap-2">
            Submit to Sovereign Tax
          </button>
        </div>

        <div className="mt-6 p-4 bg-gray-800/30 border border-gray-800 rounded-lg">
          <p className="text-sm text-gray-400">
            Once submitted, your Sovereign Tax team will review your information and begin preparation of your tax return. You'll be notified if any additional information is needed.
          </p>
        </div>
      </div>
  );
}
