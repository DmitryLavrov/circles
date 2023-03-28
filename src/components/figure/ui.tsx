import React, {FC} from 'react'
import {FormFigureProps} from './types'
import {COLORS} from './const'

export const Figure: FC<FormFigureProps> = ({item}) => {
  const color = COLORS[item.dark ? 'true' : 'false'][item.color]

  return (
    <div style={{
      width:128,
      height:128,
      borderRadius: item.form === "circle" ? 1000 : 0,
      backgroundColor: color,
    }}/>
  )
}
