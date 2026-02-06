import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, HelpCircle, MessageCircle, Mail, Phone, ChevronDown } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card, CardBody, CardHeader } from '../components/ui/Card';

export const Help: React.FC = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How do I create my profile?',
      answer: 'Visit the profile section in settings and fill in your details. Add your startup information or investment preferences.',
    },
    {
      question: 'How can I search for investors/startups?',
      answer: 'Use the search bar on your dashboard. Filter by industry, location, and other criteria to find the best matches.',
    },
    {
      question: 'How do I schedule a meeting?',
      answer: 'Navigate to Calendar and click "Schedule Meeting". Select the date, time, and meeting type (video or in-person).',
    },
    {
      question: 'Is my data secure?',
      answer: 'Yes, we use enterprise-grade encryption to protect your data. All transactions are secure and private.',
    },
    {
      question: 'How can I contact support?',
      answer: 'You can reach our support team via email at support@nexus.com or through the contact form below.',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link to="/dashboard">
          <Button variant="outline" size="sm">
            <ArrowLeft size={18} className="mr-2" />
            Back
          </Button>
        </Link>
        <h1 className="text-3xl font-bold text-gray-900">Need Assistance?</h1>
      </div>

      {/* Contact Options */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-primary-50 border-primary-100">
          <CardBody className="text-center">
            <Mail size={32} className="text-primary-600 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Email Support</h3>
            <p className="text-sm text-gray-600 mb-4">support@nexus.com</p>
            <Button variant="outline" size="sm" fullWidth>
              Send Email
            </Button>
          </CardBody>
        </Card>

        <Card className="bg-secondary-50 border-secondary-100">
          <CardBody className="text-center">
            <MessageCircle size={32} className="text-secondary-600 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Live Chat</h3>
            <p className="text-sm text-gray-600 mb-4">Chat with our team</p>
            <Button variant="outline" size="sm" fullWidth>
              Open Chat
            </Button>
          </CardBody>
        </Card>

        <Card className="bg-accent-50 border-accent-100">
          <CardBody className="text-center">
            <Phone size={32} className="text-accent-600 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Phone Support</h3>
            <p className="text-sm text-gray-600 mb-4">+1 (555) 123-4567</p>
            <Button variant="outline" size="sm" fullWidth>
              Call Us
            </Button>
          </CardBody>
        </Card>
      </div>

      {/* FAQ Section */}
      <Card>
        <CardHeader className="flex items-center gap-2">
          <HelpCircle size={20} className="text-primary-600" />
          <h2 className="text-lg font-semibold text-gray-900">FAQs</h2>
        </CardHeader>
        
        <CardBody className="space-y-2">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                className="w-full p-4 flex items-center justify-between hover:bg-gray-50"
              >
                <span className="font-medium text-gray-900 text-left">{faq.question}</span>
                <ChevronDown
                  size={20}
                  className={`text-gray-600 transition-transform ${
                    expandedFaq === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {expandedFaq === index && (
                <div className="px-4 py-3 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-600 text-sm">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </CardBody>
      </Card>

      {/* Contact Form */}
      <Card>
        <CardHeader>
          <h2 className="text-lg font-semibold text-gray-900">Send us a Message</h2>
        </CardHeader>
        
        <CardBody className="space-y-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Subject</label>
            <input
              type="text"
              placeholder="How can we help?"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              placeholder="Describe your issue..."
              rows={5}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>

          <Button fullWidth>Send Message</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Help;
