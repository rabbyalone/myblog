import React, { useState } from 'react'
import TagsInput from 'react-tagsinput'
import 'react-tagsinput/react-tagsinput.css'

function TagsInputComponent() {
  const [tags, setTags] = useState([])

  const handleTagsChange = (tags) => {
    setTags(tags)
  }

  return (
    <div>
      <h2>Tags Input</h2>
      <TagsInput value={tags} onChange={handleTagsChange} />
      <div>
        {tags.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

export default TagsInputComponent
