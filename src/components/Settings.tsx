import React from 'react';
import { useOmie } from '../context/OmieContext';
import { useAlerts } from '../context/AlertContext';
import { Save } from 'lucide-react';

export const Settings: React.FC = () => {
  const { credentials, updateCredentials, testConnection } = useOmie();
  const { addAlert } = useAlerts();
  const [formData, setFormData] = React.useState(credentials);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    updateCredentials(formData);
    
    try {
      const success = await testConnection();
      if (success) {
        addAlert('success', 'Connection successful! Settings saved.');
      } else {
        addAlert('error', 'Failed to connect to Omie. Please check your credentials.');
      }
    } catch (error) {
      addAlert('error', 'An error occurred while testing the connection.');
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Settings</h1>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="appKey" className="block text-sm font-medium text-gray-700">
              App Key
            </label>
            <input
              type="password"
              id="appKey"
              value={formData.appKey}
              onChange={(e) => setFormData({ ...formData, appKey: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="appSecret" className="block text-sm font-medium text-gray-700">
              App Secret
            </label>
            <input
              type="password"
              id="appSecret"
              value={formData.appSecret}
              onChange={(e) => setFormData({ ...formData, appSecret: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <Save className="w-4 h-4 mr-2" />
            Save Settings
          </button>
        </form>
      </div>
    </div>
  );
};