import React from 'react';

const TableOfContents = ({ headings }) => {
  return (
    <div className="my-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Table of Contents</h2>
      <nav>
        <ul className="space-y-2">
          {headings.map((heading) => (
            <li 
              key={heading.id}
              className={`hover:text-red-600 ${
                heading.depth === 2 ? 'ml-0' : 'ml-4'
              }`}
            >
              <a href={`#${heading.id}`}>{heading.value}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default TableOfContents;