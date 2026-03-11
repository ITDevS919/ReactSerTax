import { useState } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle, Circle } from 'lucide-react';

const steps = [
  {
    title: 'Basic Information',
    description: 'Tell us about your business',
    fields: [
      { label: 'Business Legal Name', type: 'text', placeholder: 'Enter legal entity name' },
      { label: 'Employer Identification Number (EIN)', type: 'text', placeholder: 'XX-XXXXXXX' },
      { label: 'Business Address', type: 'text', placeholder: 'Street address' },
      { label: 'City', type: 'text', placeholder: 'City' },
    ],
  },
  {
    title: 'Income & Revenue',
    description: 'Provide your income information',
    fields: [
      { label: 'Total Gross Revenue', type: 'number', placeholder: '$' },
      { label: 'Cost of Goods Sold', type: 'number', placeholder: '$' },
      { label: 'Gross Profit', type: 'number', placeholder: '$' },
      { label: 'Other Income Sources', type: 'text', placeholder: 'Describe any additional income' },
    ],
  },
  {
    title: 'Business Expenses',
    description: 'List your deductible expenses',
    fields: [
      { label: 'Salaries & Wages', type: 'number', placeholder: '$' },
      { label: 'Supplies & Materials', type: 'number', placeholder: '$' },
      { label: 'Rent or Lease', type: 'number', placeholder: '$' },
      { label: 'Utilities & Phone', type: 'number', placeholder: '$' },
    ],
  },
  {
    title: 'Assets & Depreciation',
    description: 'Information about business property',
    fields: [
      { label: 'Equipment & Machinery', type: 'number', placeholder: '$' },
      { label: 'Vehicles', type: 'number', placeholder: '$' },
      { label: 'Real Estate', type: 'number', placeholder: '$' },
      { label: 'Other Assets', type: 'number', placeholder: '$' },
    ],
  },
  {
    title: 'Review & Submit',
    description: 'Verify your information',
    fields: [],
  },
];

export function GuidedIntake() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Record<string, string>>({});

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const currentStepData = steps[currentStep];
  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className="max-w-4xl mx-auto p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-white mb-2">Tax Intake Questionnaire</h1>
          <p className="text-gray-400">Complete all sections to prepare your tax return</p>
        </div>

        <div className="bg-[#111111] border border-gray-800 rounded-lg overflow-hidden mb-8">
          <div className="p-6 border-b border-gray-800">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm text-gray-400 mb-1">Step {currentStep + 1} of {steps.length}</p>
                <h2 className="text-2xl font-semibold text-white">{currentStepData.title}</h2>
              </div>
              <div className="w-24 h-24 flex items-center justify-center">
                <div className="relative w-20 h-20">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-gray-800"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-amber-600"
                      strokeDasharray={`${progress * 2.827} 282.7`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-sm font-semibold text-white">{Math.round(progress)}%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              {steps.map((step, index) => (
                <div key={index} className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all ${
                      index < currentStep
                        ? 'bg-amber-600 text-white'
                        : index === currentStep
                        ? 'bg-amber-600/20 border border-amber-600 text-amber-500'
                        : 'bg-gray-800 text-gray-500'
                    }`}
                  >
                    {index < currentStep ? '✓' : index + 1}
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`h-0.5 w-8 mx-1 transition-all ${
                        index < currentStep ? 'bg-amber-600' : 'bg-gray-800'
                      }`}
                    ></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="p-6">
            <p className="text-gray-400 text-sm mb-6">{currentStepData.description}</p>

            {currentStep === steps.length - 1 ? (
              <div className="space-y-4">
                <div className="bg-green-900/20 border border-green-800/50 rounded-lg p-4 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 mt-0.5 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="text-green-200 font-medium mb-1">All Sections Complete</h3>
                      <p className="text-green-300/70 text-sm">
                        Your intake information is ready to be reviewed by your tax preparer.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-4 space-y-3">
                  <div className="flex items-center gap-3 pb-3 border-b border-gray-700">
                    <Circle className="text-amber-600" size={16} />
                    <span className="text-gray-300">Basic Information - Completed</span>
                  </div>
                  <div className="flex items-center gap-3 pb-3 border-b border-gray-700">
                    <Circle className="text-amber-600" size={16} />
                    <span className="text-gray-300">Income & Revenue - Completed</span>
                  </div>
                  <div className="flex items-center gap-3 pb-3 border-b border-gray-700">
                    <Circle className="text-amber-600" size={16} />
                    <span className="text-gray-300">Business Expenses - Completed</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Circle className="text-amber-600" size={16} />
                    <span className="text-gray-300">Assets & Depreciation - Completed</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-4">
                {currentStepData.fields.map((field, index) => (
                  <div key={index}>
                    <label className="block text-sm text-gray-400 mb-2">{field.label}</label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      value={formData[field.label] || ''}
                      onChange={(e) => handleInputChange(field.label, e.target.value)}
                      className="w-full px-4 py-3 bg-gray-800/30 border border-gray-700 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-amber-700 transition-colors"
                    />
                  </div>
                ))}
              </div>
            )}

            <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-800">
              <button
                onClick={handlePrev}
                disabled={currentStep === 0}
                className="flex items-center gap-2 px-6 py-2.5 text-gray-400 hover:text-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft size={18} />
                <span>Previous</span>
              </button>

              <div className="text-sm text-gray-500">
                Step {currentStep + 1} of {steps.length}
              </div>

              <button
                onClick={handleNext}
                className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white rounded-lg font-medium transition-all"
              >
                <span>{currentStep === steps.length - 1 ? 'Complete' : 'Next'}</span>
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="text-center text-sm text-gray-500">
          Your responses are automatically saved as you progress
        </div>
      </div>
  );
}
