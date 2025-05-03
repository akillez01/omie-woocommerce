import React from 'react';
import { useAlerts } from '../context/AlertContext';
import { AlertTriangle, CheckCircle, Info, X } from 'lucide-react';

export const AlertBar: React.FC = () => {
  const { alerts, removeAlert } = useAlerts();

  if (alerts.length === 0) return null;

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'success':
        return <CheckCircle className="w-5 h-5" />;
      case 'error':
        return <AlertTriangle className="w-5 h-5" />;
      case 'warning':
        return <AlertTriangle className="w-5 h-5" />;
      case 'info':
        return <Info className="w-5 h-5" />;
      default:
        return <Info className="w-5 h-5" />;
    }
  };

  const getAlertColor = (type: string) => {
    switch (type) {
      case 'success':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'error':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'warning':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'info':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="fixed top-16 right-4 z-50 space-y-2 max-w-sm">
      {alerts.map((alert) => (
        <div
          key={alert.id}
          className={`p-4 rounded-md shadow-md border flex items-start justify-between ${getAlertColor(
            alert.type
          )}`}
        >
          <div className="flex items-center">
            <span className="mr-2">{getAlertIcon(alert.type)}</span>
            <span>{alert.message}</span>
          </div>
          <button
            onClick={() => removeAlert(alert.id)}
            className="ml-3 text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
};