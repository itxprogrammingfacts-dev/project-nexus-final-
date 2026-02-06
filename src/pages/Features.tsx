import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Zap, Users, Calendar, Shield, TrendingUp, MessageSquare } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card, CardBody, CardHeader } from '../components/ui/Card';

export const Features: React.FC = () => {
  const features = [
    {
      icon: <Zap size={24} />,
      title: 'Smart Matching',
      description: 'AI-powered matching algorithm connects you with the right investors or entrepreneurs',
    },
    {
      icon: <Calendar size={24} />,
      title: 'Meeting Scheduler',
      description: 'Easy-to-use calendar system to schedule and manage meetings',
    },
    {
      icon: <Users size={24} />,
      title: 'Collaboration Tools',
      description: 'Built-in collaboration features to work together seamlessly',
    },
    {
      icon: <Shield size={24} />,
      title: 'Secure & Safe',
      description: 'Your data is protected with enterprise-grade security',
    },
    {
      icon: <TrendingUp size={24} />,
      title: 'Analytics Dashboard',
      description: 'Track your progress and growth with detailed insights',
    },
    {
      icon: <MessageSquare size={24} />,
      title: 'Real-time Updates',
      description: 'Get instant notifications about new opportunities',
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
        <h1 className="text-3xl font-bold text-gray-900">Features</h1>
      </div>

      <Card>
        <CardHeader>
          <h2 className="text-2xl font-semibold text-gray-900">Platform Features</h2>
          <p className="text-gray-600 mt-2">Discover all the powerful tools available</p>
        </CardHeader>
        
        <CardBody>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 border border-gray-200 rounded-lg hover:border-primary-300 hover:shadow-md transition-all"
              >
                <div className="text-primary-600 mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Features;
