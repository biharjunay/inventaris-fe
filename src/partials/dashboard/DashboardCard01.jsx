import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../images/icon-01.svg';
import EditMenu from '../../components/DropdownEditMenu';

function DashboardCard01() {

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <div className="px-5 pt-5">
        <header className="flex justify-between items-start mb-2">
          {/* Icon */}
          <img src={Icon} width="32" height="32" alt="Icon 01" />
          {/* Menu button */}
          <EditMenu align="right" className="relative inline-flex">
            <li>
              <Link className="font-medium text-sm text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-200 flex py-1 px-3" to="#0">
                Show Detail
              </Link>
            </li>
          </EditMenu>
        </header>
        <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2">Komputer</h2>
        <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase mb-1">Total Jumlah</div>
        <div className="flex justify-center items-center h-32 mt-7">
          <div className="text-7xl font-bold text-slate-800 dark:text-slate-100 mr-2">34</div>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard01;
