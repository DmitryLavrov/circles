import React from 'react'
import {Figure} from '../figure/ui'
import {getItems} from '../../processes/store/itemsSlice'
import {Space} from 'antd'
import {useAppSelector} from '../../processes/store/hooks'
import {getSettings} from '../../processes/store/settingsSlice'
import {filterItems} from '../../shared/utils/filterItems'

export const Figures = () => {
  const items = useAppSelector(getItems())
  const settings = useAppSelector((getSettings()))
  const filteredItems = filterItems(items, settings)
  const {columns} = useAppSelector(getSettings())

  return (
    <Space style={{justifyContent: 'center', width: '100%'}}>
      <div style={{display: 'grid', gridTemplateColumns: `repeat(${columns}, 1fr)`, gridGap: 20}}>
        {filteredItems.map((item, key) => <Figure key={key} item={item}/>)}
      </div>
    </Space>
  )
}
