import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  total: number;
  synced?: number;
  pending?: number;
  label?: string;
  value?: number;
  icon: React.ReactNode;
}

export const StatsCard: React.FC<StatsCardProps> = ({
  title,
  total,
  synced,
  pending,
  label,
  value,
  icon,
}) => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        {icon}
      </div>
      
      <div className="mt-4">
        <div className="text-2xl font-semibold text-gray-900">{total}</div>
        {synced !== undefined && pending !== undefined ? (
          <div className="mt-2 space-y-1">
            <div className="text-sm text-gray-600">
              Synced: <span className="font-medium text-green-600">{synced}</span>
            </div>
            <div className="text-sm text-gray-600">
              Pending: <span className="font-medium text-yellow-600">{pending}</span>
            </div>
          </div>
        ) : label && value !== undefined ? (
          <div className="mt-2 text-sm text-gray-600">
            {label}: <span className="font-medium">{value}</span>
          </div>
        ) : null}
      </div>
    </div>
  );
};