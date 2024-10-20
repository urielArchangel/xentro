import React from 'react'

const DataIcon = ({color,className}:{color?:string,className?:string }) => {
  return (
<svg width="14" height="16" className={className} viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.99251 0.155884H2.01383V2.13456H0.0351562V14.0066H2.01383V15.9853H3.99251V14.0066H5.97119V2.13456H3.99251V0.155884ZM13.8859 4.11324H11.9072V0.155884H9.92854V4.11324H7.94986V11.0386H9.92854V15.9853H11.9072V11.0386H13.8859V4.11324Z" fill={color}/>
</svg>

  )
}

export default DataIcon