import React from 'react'

export default function ProgressingHeader({content}) {
    
  return (
    <>
    
    {content.split("\n").map((line, index) => {
        return (
            <span key={index}>
            {line}
            <br />
            </span>
        );
    })}
    
    </>
  )
}
