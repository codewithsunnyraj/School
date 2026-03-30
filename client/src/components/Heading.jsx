import React from 'react'

const Heading = ({title,subtitle,layout}) => {
  return (
    <div className={layout}>
        <div>
            <h5 className='text-xl'>{subtitle}</h5>
            <h1 className='text-2xl md:text-3xl lg:text-5xl'>{title}</h1>
        </div>
    </div>
  )
}

export default Heading