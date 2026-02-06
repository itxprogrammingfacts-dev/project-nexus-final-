import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Bell, Lock, User, Save } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card, CardBody, CardHeader } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';

export const Settings: React.FC = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [emailUpdates, setEmailUpdates] = useState(true);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link to="/dashboard">
          <Button variant="outline" size="sm">
            <ArrowLeft size={18} className="mr-2" />
            Back
          </Button>
        </Link>
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
      </div>

      {/* Account Settings */}
      <Card>
        <CardHeader className="flex items-center gap-2">
          <User size={20} className="text-primary-600" />
          <h2 className="text-lg font-semibold text-gray-900">Account Settings</h2>
        </CardHeader>
        
        <CardBody className="space-y-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              placeholder="your.email@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>

          <Button leftIcon={<Save size={18} />} className="mt-4">
            Save Changes
          </Button>
        </CardBody>
      </Card>

      {/* Notification Settings */}
      <Card>
        <CardHeader className="flex items-center gap-2">
          <Bell size={20} className="text-primary-600" />
          <h2 className="text-lg font-semibold text-gray-900">Notifications</h2>
        </CardHeader>
        
        <CardBody className="space-y-4">
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div>
              <p className="font-medium text-gray-900">Push Notifications</p>
              <p className="text-sm text-gray-600">New messages and updates</p>
            </div>
            <input
              type="checkbox"
              checked={notificationsEnabled}
              onChange={(e) => setNotificationsEnabled(e.target.checked)}
              className="w-5 h-5 text-primary-600 rounded"
            />
          </div>

          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div>
              <p className="font-medium text-gray-900">Email Updates</p>
              <p className="text-sm text-gray-600">Weekly digest and opportunities</p>
            </div>
            <input
              type="checkbox"
              checked={emailUpdates}
              onChange={(e) => setEmailUpdates(e.target.checked)}
              className="w-5 h-5 text-primary-600 rounded"
            />
          </div>
        </CardBody>
      </Card>

      {/* Privacy & Security */}
      <Card>
        <CardHeader className="flex items-center gap-2">
          <Lock size={20} className="text-primary-600" />
          <h2 className="text-lg font-semibold text-gray-900">Security</h2>
        </CardHeader>
        
        <CardBody className="space-y-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>

          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div>
              <p className="font-medium text-gray-900">Profile Visibility</p>
              <p className="text-sm text-gray-600">Visible to other users</p>
            </div>
            <Badge variant="success">Public</Badge>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Settings;
