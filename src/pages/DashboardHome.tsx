import React from 'react';
import { Navigate } from 'react-router-dom';

export const DashboardHome: React.FC = () => {
  return <Navigate to="/dashboard/heal" replace />;
};
