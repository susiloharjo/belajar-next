import React from 'react';

export default function CardLine({ title, children, warna }) {
  return (
    <div className={`w-full bg-white rounded-lg p-4 shadow-md ${warna}`}>
      <div className="text-md text-slate-200">{title}</div>
      <div className="text-2xl font-light text-gray-700 text mt-3">
        {children}
      </div>
    </div>
  );
}
