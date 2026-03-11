import React from 'react';
import { NavLink } from 'react-router-dom';

const base = 'block px-4 py-2 rounded';
const active = 'bg-gray-200 font-semibold';
const inactive = 'hover:bg-gray-100';

function linkClass({ isActive }: { isActive: boolean }) {
  return `${base} ${isActive ? active : inactive}`;
}

export default function LeftNav() {
  return (
    <nav className="w-56 h-screen border-r bg-white">
      <div className="p-4 text-lg font-bold">Sovereign</div>
      <ul className="p-2 space-y-1">
        <li>
          <NavLink to="/dashboard" className={linkClass}>
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/status" className={linkClass}>
            Status Tracker
          </NavLink>
        </li>
        <li>
          <NavLink to="/guided-intake" className={linkClass}>
            Guided Intake
          </NavLink>
        </li>
        <li>
          <NavLink to="/documents" className={linkClass}>
            Document Center
          </NavLink>
        </li>
        <li>
          <NavLink to="/intake" className={linkClass}>
            Review Intake
          </NavLink>
        </li>
        <li>
          <NavLink to="/summary" className={linkClass}>
            Tax Summary
          </NavLink>
        </li>
        <li>
          <NavLink to="/efile" className={linkClass}>
            E-File Authorization
          </NavLink>
        </li>
        <li>
          <NavLink to="/insights" className={linkClass}>
            Tax Insights
          </NavLink>
        </li>
        <li>
          <NavLink to="/settings" className={linkClass}>
            Settings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
