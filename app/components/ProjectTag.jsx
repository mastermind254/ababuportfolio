import React from 'react'

const ProjectTag = ({name, onClick, isSelected}) => {
    const buttonStyles = isSelected
    ? "text-white border-orange-500"
    : "text-white border-slate-600 rounded-full hover-border-white"
  return (
    <button className={`${buttonStyles} rounded-full  border-2 px-5 py-3 text-xl cursor-pointer`}
    onClick={ () => onClick(name)}>
        {name}
    </button>
  )
}

export default ProjectTag