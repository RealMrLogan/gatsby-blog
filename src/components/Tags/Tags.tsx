import React from "react"

const tagMap = {
  'tech': ['bg-blue-lightest', 'text-blue-darkest'],
  'getting-started': ['bg-green-lightest', 'text-green-darkest']
}

export const Tags = ({ tags }) => {
  return (
    <div className='flex gap-1'>
      {React.Children.toArray(
        tags.map((tag) => (
          <span className={`px-3 py-1 rounded-full ${tagMap[tag.toLowerCase()].join(' ')}`}>{tag}</span>
        ))
      )}
    </div>
  )
}