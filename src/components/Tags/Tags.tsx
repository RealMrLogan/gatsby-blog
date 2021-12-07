import React from 'react'

const tagMap = {
  tech: ['bg-yellow-lightest', 'text-yellow-darkest'],
  'getting-started': ['bg-green-lightest', 'text-green-darkest'],
  react: ['bg-blue-lightest', 'text-blue-darkest'],
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
