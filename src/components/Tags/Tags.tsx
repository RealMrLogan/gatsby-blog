import React from 'react'

const tagMap = {
  tech: ['bg-yellow-100', 'text-yellow-800'],
  javascript: ['bg-green-100', 'text-green-800'],
  react: ['bg-blue-100', 'text-blue-800'],
  'getting-started': ['bg-purple-100', 'text-purple-800'],
  general: ['bg-orange-100', 'text-orange-800'],
}

export const Tags = ({ tags }) => (
  <div className="flex flex-wrap gap-1 my-2">
    {React.Children.toArray(
      tags.map((tag) => (
        <span className={`px-3 py-1 rounded-full ${tagMap[tag.toLowerCase()].join(' ')}`}>{tag}</span>
      )),
    )}
  </div>
)
