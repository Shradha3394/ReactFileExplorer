import React, { useState } from 'react'

export const Folder = ({ explorer }) => {
    const [isExpand, setIsExpand] = useState(false);

    return (explorer.children ?
        <div>
            <span onClick={(e) => setIsExpand(!isExpand)}  >{explorer.name}</span>
            <div style={{ 'display': isExpand ? 'block' : 'none', marginLeft: '10px' }}  >
                {explorer.children.map(exp => {
                    return <Folder key={explorer.name} explorer={exp} />
                })}
            </div>
        </div>
        :
        <span style={{ marginLeft: '10px' }}>{explorer.name}<br></br></span>
    )
}