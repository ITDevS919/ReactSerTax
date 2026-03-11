import { TrendingUp, AlertCircle, DollarSign, PieChart, ArrowUpRight, ArrowDownLeft } from 'lucide-react';

const insights = [
  {
    title: 'Revenue Growth',
    value: '+12.3%',
    change: 'vs last year',
    positive: true,
    metric: 'Total revenue increased from $3.3M to $3.7M',
    icon: TrendingUp,
  },
  {
    title: 'Deduction Rate',
    value: '76.9%',
    change: 'of total income',
    positive: true,
    metric: 'Strong deduction strategy maintained',
    icon: PieChart,
  },
  {
    title: 'Tax Liability',
    value: '$185K',
    change: 'estimated federal tax',
    positive: false,
    metric: 'Based on current year projections',
    icon: DollarSign,
  },
  {
    title: 'Opportunity Alert',
    value: 'Review',
    change: 'depreciation schedules',
    positive: true,
    metric: 'Potential for additional deductions identified',
    icon: AlertCircle,
  },
];

const categories = [
  { name: 'Officer Compensation', amount: 450000, percentage: 15.6, color: 'from-blue-600 to-blue-500' },
  { name: 'Salaries & Wages', amount: 1200000, percentage: 41.7, color: 'from-green-600 to-green-500' },
  { name: 'Operating Expenses', amount: 450000, percentage: 15.6, color: 'from-amber-600 to-amber-500' },
  { name: 'Depreciation', amount: 175000, percentage: 6.1, color: 'from-purple-600 to-purple-500' },
  { name: 'Interest & Taxes', amount: 220000, percentage: 7.6, color: 'from-red-600 to-red-500' },
  { name: 'Other', amount: 105000, percentage: 3.6, color: 'from-gray-600 to-gray-500' },
];

const recommendations = [
  {
    title: 'Equipment Depreciation',
    description: 'Consider utilizing Section 179 deduction for eligible equipment purchases',
    impact: 'Potential savings: $45,000 - $65,000',
    priority: 'High',
  },
  {
    title: 'Quarterly Estimated Taxes',
    description: 'Set up quarterly estimated tax payments to avoid penalties',
    impact: 'Avoid late payment penalties',
    priority: 'Medium',
  },
  {
    title: 'Entity Structure Review',
    description: 'Review current S-Corp election effectiveness for this tax year',
    impact: 'Potential FICA savings: $30,000 - $50,000',
    priority: 'High',
  },
  {
    title: 'Charitable Contributions',
    description: 'Maximize charitable contribution deductions before year-end',
    impact: 'Current: $50,000 | Potential additional: $25,000',
    priority: 'Medium',
  },
];

export function TaxInsights() {
  return (
    <div className="max-w-7xl mx-auto p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-white mb-2">Tax Insights</h1>
          <p className="text-gray-400">Analyze your tax situation and discover optimization opportunities</p>
        </div>

        <div className="grid grid-cols-4 gap-4 mb-8">
          {insights.map((insight, index) => {
            const Icon = insight.icon;
            return (
              <div
                key={index}
                className="bg-[#111111] border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gray-800/50 rounded-lg flex items-center justify-center">
                    <Icon
                      className={`${insight.positive ? 'text-amber-600' : 'text-red-600'}`}
                      size={24}
                    />
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-1">{insight.title}</p>
                <p className="text-2xl font-semibold text-white mb-1">{insight.value}</p>
                <p className="text-xs text-gray-500 mb-3">{insight.change}</p>
                <p className="text-xs text-gray-400 bg-gray-800/30 p-2 rounded">
                  {insight.metric}
                </p>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-3 gap-8 mb-8">
          <div className="col-span-2 bg-[#111111] border border-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-white mb-6">Expense Breakdown</h2>
            <div className="space-y-4">
              {categories.map((cat, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-300">{cat.name}</span>
                    <div className="text-right">
                      <span className="text-sm font-medium text-white">
                        ${(cat.amount / 1000).toFixed(0)}K
                      </span>
                      <span className="text-xs text-gray-500 ml-2">{cat.percentage}%</span>
                    </div>
                  </div>
                  <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${cat.color}`}
                      style={{ width: `${cat.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#111111] border border-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-white mb-6">Tax Summary</h2>
            <div className="space-y-4">
              <div className="pb-4 border-b border-gray-800">
                <p className="text-sm text-gray-400 mb-1">Total Income</p>
                <p className="text-2xl font-semibold text-white">$3.7M</p>
              </div>
              <div className="pb-4 border-b border-gray-800">
                <p className="text-sm text-gray-400 mb-1">Total Deductions</p>
                <p className="text-2xl font-semibold text-white">$2.88M</p>
              </div>
              <div className="pb-4">
                <p className="text-sm text-gray-400 mb-1">Taxable Income</p>
                <p className="text-2xl font-semibold text-white">$797.5K</p>
              </div>
              <div className="pt-4 border-t border-gray-800">
                <p className="text-sm text-gray-400 mb-1">Est. Federal Tax</p>
                <p className="text-2xl font-semibold text-amber-500">$185K</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#111111] border border-gray-800 rounded-lg overflow-hidden">
          <div className="p-6 border-b border-gray-800">
            <h2 className="text-xl font-semibold text-white">Optimization Recommendations</h2>
          </div>

          <div className="divide-y divide-gray-800">
            {recommendations.map((rec, index) => (
              <div key={index} className="p-6 hover:bg-gray-800/20 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{
                    backgroundColor: rec.priority === 'High' ? 'rgba(239, 68, 68, 0.1)' : 'rgba(234, 179, 8, 0.1)',
                  }}>
                    <span style={{
                      color: rec.priority === 'High' ? '#ef4444' : '#eab308',
                      fontSize: '12px',
                      fontWeight: '600',
                    }}>
                      {rec.priority === 'High' ? '!' : '•'}
                    </span>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-white font-semibold mb-1">{rec.title}</h3>
                    <p className="text-gray-400 text-sm mb-2">{rec.description}</p>
                    <div className="flex items-center gap-4">
                      <span className="text-sm font-medium text-amber-500">{rec.impact}</span>
                      <span className={`text-xs px-2 py-1 rounded ${
                        rec.priority === 'High'
                          ? 'bg-red-900/20 text-red-400'
                          : 'bg-amber-900/20 text-amber-400'
                      }`}>
                        {rec.priority} Priority
                      </span>
                    </div>
                  </div>

                  <button className="px-4 py-2 bg-gray-800/50 hover:bg-gray-800 border border-gray-700 text-gray-200 rounded-lg text-sm transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
}
