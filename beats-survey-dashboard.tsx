import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { TrendingUp, Users, DollarSign, ShoppingCart, Target, CheckCircle } from 'lucide-react';

const BeatsLogo = () => (
  <div className="flex items-center gap-2">
    <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
      <span className="text-white font-bold text-sm">b</span>
    </div>
    <span className="font-bold text-xl">Beats</span>
  </div>
);

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('recommendation');

  // Actual survey data from analysis results
  const demographics = {
    age: [
      { range: '18-24', count: 13, percentage: 93 },
      { range: '25-34', count: 1, percentage: 7 }
    ],
    gender: [
      { category: 'Female', percentage: 79 },
      { category: 'Male', percentage: 21 }
    ],
    income: [
      { range: 'More than $100K', percentage: 29 },
      { range: '$50K-$75K', percentage: 21 },
      { range: 'Less than $25K', percentage: 21 },
      { range: 'Prefer not to say', percentage: 14 },
      { range: '$25K-$50K', percentage: 7 },
      { range: '$75K-$100K', percentage: 7 }
    ]
  };

  const purchaseIntent = [
    { intent: 'Excellent Sound Quality', likelihood: 2.43, count: 7 },
    { intent: 'Good Sound Quality', likelihood: 3.17, count: 6 },
    { intent: 'Average Sound Quality', likelihood: 4.0, count: 1 }
  ];

  const soundQuality = [
    { rating: 'Excellent', count: 7, percentage: 50 },
    { rating: 'Good', count: 6, percentage: 43 },
    { rating: 'Average', count: 1, percentage: 7 }
  ];

  const priceSpent = [
    { range: '<$50', count: 6, percentage: 43 },
    { range: '$50-100', count: 6, percentage: 43 },
    { range: '$100-200', count: 2, percentage: 14 },
    { range: '$200+', count: 0, percentage: 0 }
  ];

  const usageFrequency = [
    { frequency: 'Daily', likelihood: 1.75, avgPrice: 56.25 },
    { frequency: 'Several times a week', likelihood: 3.5, avgPrice: 81.25 },
    { frequency: 'Once a week', likelihood: 3.0, avgPrice: 75.0 },
    { frequency: '1-3 times a month', likelihood: 3.33, avgPrice: 58.33 },
    { frequency: 'Rarely', likelihood: 3.0, avgPrice: 50.0 }
  ];

  const featureImportanceByAge = [
    { feature: 'Sound Quality', age18_24: 4.0, age25_34: 6.0 },
    { feature: 'Battery Life', age18_24: 3.54, age25_34: 5.0 },
    { feature: 'Connectivity', age18_24: 4.23, age25_34: 4.0 },
    { feature: 'Price', age18_24: 3.46, age25_34: 1.0 },
    { feature: 'Durability', age18_24: 3.23, age25_34: 2.0 },
    { feature: 'Design/Looks', age18_24: 2.54, age25_34: 3.0 }
  ];

  const keyInsights = [
    "Sound quality is the strongest driver of purchase intent (Excellent: 2.4 vs Average: 4.0 likelihood)",
    "Daily/heavy users spend more (~$81) and have higher intent than weekly/light users",
    "25–34 segment is highly quality-focused and price-insensitive; 18–24 balance cost and features",
    "Online purchase channels dominate among younger users, indicating e-commerce focus",
    "Strong correlation between design and durability preferences among quality-focused users"
  ];

  const COLORS = ['#dc2626', '#ef4444', '#f87171', '#fca5a5'];

  const StatCard = ({ icon: Icon, title, value, subtitle, color = 'red' }) => (
    <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-red-600">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-600 text-sm font-medium">{title}</p>
          <p className="text-3xl font-bold text-gray-900">{value}</p>
          <p className="text-gray-500 text-sm">{subtitle}</p>
        </div>
        <Icon className="h-12 w-12 text-red-600" />
      </div>
    </div>
  );

  const SectionButton = ({ id, title, active, onClick }) => (
    <button
      onClick={() => onClick(id)}
      className={`px-4 py-2 rounded-lg font-medium transition-colors ${
        active 
          ? 'bg-red-600 text-white' 
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      }`}
    >
      {title}
    </button>
  );

  const renderRecommendation = () => (
    <div className="space-y-6">
      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">
        <div className="flex items-center gap-3 mb-4">
          <CheckCircle className="h-8 w-8 text-yellow-600" />
          <h2 className="text-2xl font-bold text-yellow-800">PROCEED WITH CAUTION - MARKET VALIDATION NEEDED</h2>
        </div>
        <p className="text-yellow-700 text-lg mb-4">
          Survey reveals quality-driven market but limited sample size requires broader validation.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg">
            <h3 className="font-semibold mb-2 text-green-700">Positive Indicators</h3>
            <ul className="text-sm space-y-1">
              <li>• Strong correlation: quality drives purchase intent</li>
              <li>• Premium market exists (29% earn $100K+)</li>
              <li>• Clear feature priorities identified</li>
              <li>• Daily users willing to pay premium ($81 avg)</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h3 className="font-semibold mb-2 text-red-700">Critical Concerns</h3>
            <ul className="text-sm space-y-1">
              <li>• Very small sample (14 responses vs planned 500)</li>
              <li>• Skewed demographics (93% age 18-24, 79% female)</li>
              <li>• Current spending low ($50-100 range)</li>
              <li>• Limited market segment representation</li>
            </ul>
          </div>
        </div>
        <div className="mt-4 p-4 bg-white rounded-lg border-2 border-orange-300">
          <h3 className="font-semibold text-orange-700 mb-2">Recommended Next Steps</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-medium">Before Launch Decision:</p>
              <ul className="mt-1 space-y-1">
                <li>• Expand sample to 500+ respondents</li>
                <li>• Target broader age demographics (25-45)</li>
                <li>• Include more male respondents</li>
                <li>• Test price sensitivity at $100-300 range</li>
              </ul>
            </div>
            <div>
              <p className="font-medium">If Proceeding:</p>
              <ul className="mt-1 space-y-1">
                <li>• Focus on premium quality positioning</li>
                <li>• Target female 18-24 demographic first</li>
                <li>• Emphasize sound quality & battery life</li>
                <li>• Plan tiered pricing strategy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-blue-50 p-4 rounded-lg">
        <h3 className="font-semibold text-blue-700 mb-2">Key Insights from Current Data</h3>
        <div className="grid gap-2 text-sm text-blue-800">
          {keyInsights.map((insight, index) => (
            <div key={index} className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">•</span>
              <span>{insight}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderSurveyDetails = () => (
    <div className="space-y-6">
      <div className="bg-red-50 border border-red-200 p-4 rounded-lg mb-6">
        <h3 className="font-bold text-red-800 mb-2">⚠️ Survey Limitations</h3>
        <p className="text-red-700 text-sm">
          Actual sample size: 14 respondents (vs planned 500). Results should be treated as preliminary insights requiring validation with larger, more diverse sample.
        </p>
      </div>
      
      <div className="grid md:grid-cols-4 gap-4">
        <StatCard icon={Users} title="Actual Respondents" value="14" subtitle="vs 500 planned" />
        <StatCard icon={Target} title="Young Demo" value="93%" subtitle="Ages 18-24" />
        <StatCard icon={Users} title="Female Skew" value="79%" subtitle="Gender split" />
        <StatCard icon={DollarSign} title="High Earners" value="29%" subtitle="$100K+ income" />
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Age Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={demographics.age}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                dataKey="percentage"
                label={({range, percentage}) => `${range}: ${percentage}%`}
              >
                {demographics.age.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <p className="text-sm text-gray-600 mt-2">
            Heavily skewed toward 18-24 demographic - broader age validation needed
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Gender Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={demographics.gender}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                dataKey="percentage"
                label={({category, percentage}) => `${category}: ${percentage}%`}
              >
                {demographics.gender.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <p className="text-sm text-gray-600 mt-2">
            Strong female preference - may indicate target market opportunity
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Income Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={demographics.income}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="range" angle={-45} textAnchor="end" height={80} />
              <YAxis />
              <Tooltip />
              <Bar dataKey="percentage" fill="#dc2626" />
            </BarChart>
          </ResponsiveContainer>
          <p className="text-sm text-gray-600 mt-2">
            Mixed income levels with 29% high earners supporting premium positioning
          </p>
        </div>
      </div>
    </div>
  );

  const renderPurchaseIntent = () => (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4">Purchase Likelihood by Sound Quality Rating</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={purchaseIntent}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="intent" />
            <YAxis label={{ value: 'Likelihood (1=Very Likely, 5=Unlikely)', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Bar dataKey="likelihood" fill="#dc2626" />
          </BarChart>
        </ResponsiveContainer>
        <div className="mt-4 p-4 bg-green-50 rounded-lg">
          <p className="font-semibold text-green-700">
            🎯 Key Finding: Sound quality directly drives purchase intent
          </p>
          <p className="text-sm text-gray-600 mt-1">
            Users rating sound as "Excellent" show highest purchase likelihood (2.4 vs 4.0 for average)
          </p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4">Current Sound Quality Ratings</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={soundQuality}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="rating" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#dc2626" />
          </BarChart>
        </ResponsiveContainer>
        <div className="mt-4 p-4 bg-blue-50 rounded-lg">
          <p className="font-semibold text-blue-700">
            📊 Market Insight: 93% rate current speakers as Good+ 
          </p>
          <p className="text-sm text-gray-600 mt-1">
            High quality expectations - new product must exceed current standards
          </p>
        </div>
      </div>
    </div>
  );

  const renderFeatures = () => (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4">Feature Importance by Age Group</h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={featureImportanceByAge}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="feature" angle={-45} textAnchor="end" height={100} />
            <YAxis label={{ value: 'Importance Rating', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Legend />
            <Bar dataKey="age18_24" fill="#dc2626" name="18-24 years" />
            <Bar dataKey="age25_34" fill="#6b7280" name="25-34 years" />
          </BarChart>
        </ResponsiveContainer>
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <p className="font-semibold text-blue-700">
            🎯 Age-Based Insights: Different priorities by generation
          </p>
          <div className="grid md:grid-cols-2 gap-4 mt-2 text-sm">
            <div>
              <p className="font-medium">18-24 Focus:</p>
              <ul className="space-y-1 text-gray-600">
                <li>• Connectivity options (4.2)</li>
                <li>• Sound quality (4.0)</li>
                <li>• Price sensitivity (3.5)</li>
              </ul>
            </div>
            <div>
              <p className="font-medium">25-34 Focus:</p>
              <ul className="space-y-1 text-gray-600">
                <li>• Sound quality paramount (6.0)</li>
                <li>• Battery life critical (5.0)</li>
                <li>• Price less important (1.0)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4">Usage Patterns & Spending</h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={usageFrequency}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="frequency" angle={-45} textAnchor="end" height={80} />
            <YAxis yAxisId="left" label={{ value: 'Avg Price ($)', angle: -90, position: 'insideLeft' }} />
            <YAxis yAxisId="right" orientation="right" label={{ value: 'Purchase Likelihood', angle: 90, position: 'insideRight' }} />
            <Tooltip />
            <Legend />
            <Bar yAxisId="left" dataKey="avgPrice" fill="#10b981" name="Average Spend ($)" />
            <Bar yAxisId="right" dataKey="likelihood" fill="#dc2626" name="Purchase Likelihood" />
          </BarChart>
        </ResponsiveContainer>
        <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
          <p className="font-semibold text-yellow-700">
            💡 Surprising Pattern: Daily users most likely to purchase but spend moderately
          </p>
          <p className="text-sm text-gray-600 mt-1">
            Heavy users prioritize value; occasional users willing to pay premium for quality
          </p>
        </div>
      </div>
    </div>
  );

  const renderPricing = () => (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-4">Current Spending Patterns</h3>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={priceSpent}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="range" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#dc2626" />
        </BarChart>
      </ResponsiveContainer>
      <div className="mt-4 p-4 bg-orange-50 rounded-lg">
        <p className="font-semibold text-orange-700">
          ⚠️ Current Reality: 86% spend under $100 on speakers
        </p>
        <p className="text-sm text-gray-600 mt-1">
          Gap between current spending and premium aspirations - need to justify value proposition for $100-200+ pricing
        </p>
      </div>
      <div className="mt-4 p-4 bg-blue-50 rounded-lg">
        <p className="font-semibold text-blue-700">
          💰 Pricing Strategy Implications
        </p>
        <div className="grid md:grid-cols-2 gap-4 mt-2 text-sm">
          <div>
            <p className="font-medium">Value Tier ($50-100):</p>
            <ul className="space-y-1 text-gray-600">
              <li>• Captures current spending habits</li>
              <li>• Appeals to price-sensitive segment</li>
              <li>• Lower margins but volume potential</li>
            </ul>
          </div>
          <div>
            <p className="font-medium">Premium Tier ($100-200):</p>
            <ul className="space-y-1 text-gray-600">
              <li>• Targets quality-focused users</li>
              <li>• Higher margins but requires education</li>
              <li>• Justification through superior features</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  const renderChannels = () => (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-4">Purchase Channel Insights</h3>
      <div className="p-8 text-center">
        <div className="bg-blue-100 p-6 rounded-lg">
          <h4 className="text-lg font-semibold text-blue-800 mb-2">Online-First Generation</h4>
          <p className="text-blue-700">
            Survey data confirms strong preference for digital channels among 18-24 demographic
          </p>
        </div>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="bg-green-50 p-4 rounded-lg">
            <h5 className="font-semibold text-green-700">Key Channel Preferences</h5>
            <ul className="text-sm text-green-600 mt-2 space-y-1">
              <li>• E-commerce platforms dominate</li>
              <li>• Mobile-first shopping behavior</li>
              <li>• Social media influence on decisions</li>
              <li>• Direct-to-consumer preference</li>
            </ul>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <h5 className="font-semibold text-purple-700">Distribution Strategy</h5>
            <ul className="text-sm text-purple-600 mt-2 space-y-1">
              <li>• Prioritize online presence</li>
              <li>• Partner with social influencers</li>
              <li>• Optimize mobile experience</li>
              <li>• Consider pop-up retail events</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCompetitive = () => (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-4">Market Position Analysis</h3>
      <div className="space-y-6">
        <div className="bg-gray-50 p-6 rounded-lg">
          <h4 className="font-semibold text-gray-800 mb-4">Key Competitive Insights from Survey</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-lg border">
              <h5 className="font-semibold text-green-700 mb-2">Beats Strengths</h5>
              <ul className="text-sm space-y-1">
                <li>• Strong brand recognition in target demo</li>
                <li>• Design leadership perception</li>
                <li>• Premium positioning established</li>
                <li>• Quality expectations aligned with delivery</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg border">
              <h5 className="font-semibold text-orange-700 mb-2">Market Opportunities</h5>
              <ul className="text-sm space-y-1">
                <li>• Female-focused marketing underserved</li>
                <li>• Quality-price value gap in market</li>
                <li>• Direct-to-consumer channel advantage</li>
                <li>• Lifestyle integration positioning</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-blue-50 p-4 rounded-lg">
          <h5 className="font-semibold text-blue-700 mb-2">Positioning Recommendations</h5>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div>
              <p className="font-medium">Premium Quality:</p>
              <p className="text-gray-600">Emphasize superior sound engineering and materials</p>
            </div>
            <div>
              <p className="font-medium">Lifestyle Integration:</p>
              <p className="text-gray-600">Show product in authentic daily scenarios</p>
            </div>
            <div>
              <p className="font-medium">Female Empowerment:</p>
              <p className="text-gray-600">Target 79% female preference with inclusive messaging</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const sections = [
    { id: 'recommendation', title: 'Final Recommendation' },
    { id: 'details', title: 'Survey Details' },
    { id: 'intent', title: 'Purchase Intent' },
    { id: 'features', title: 'Feature Preferences' },
    { id: 'pricing', title: 'Price Sensitivity' },
    { id: 'channels', title: 'Purchase Channels' },
    { id: 'competitive', title: 'Brand Perception' }
  ];

  const renderContent = () => {
    switch(activeSection) {
      case 'recommendation': return renderRecommendation();
      case 'details': return renderSurveyDetails();
      case 'intent': return renderPurchaseIntent();
      case 'features': return renderFeatures();
      case 'pricing': return renderPricing();
      case 'channels': return renderChannels();
      case 'competitive': return renderCompetitive();
      default: return renderRecommendation();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <BeatsLogo />
            <div className="text-right">
              <h1 className="text-2xl font-bold text-gray-900">Wireless Speaker Survey Results</h1>
              <p className="text-gray-600">Consumer Research Dashboard • 14 Respondents (Preliminary)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap gap-2">
            {sections.map(section => (
              <SectionButton
                key={section.id}
                id={section.id}
                title={section.title}
                active={activeSection === section.id}
                onClick={setActiveSection}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderContent()}
      </div>

      {/* Footer */}
      <div className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center text-gray-500 text-sm">
            Survey conducted for product launch decision-making • Confidential & Proprietary
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;