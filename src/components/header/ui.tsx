import React from 'react'
import {Button, Checkbox, Form, Space} from 'antd'
import {MenuOutlined} from '@ant-design/icons'
import {CheckboxChangeEvent} from 'antd/es/checkbox'
import {useNavigate} from 'react-router-dom'
import {paths} from '../../processes/rootes/paths'
import {useSelector} from 'react-redux'
import {getSettings, updateFilter} from '../../processes/store/settingsSlice'
import {useAppDispatch} from '../../processes/store/hooks'
import {FilterParameter, FilterPayload} from '../../processes/store/types'

const Header = () => {
  const settings = useSelector(getSettings())
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleFilter = (payload: FilterPayload) => {
    dispatch(updateFilter(payload))
  }

  const handleCheckbox = (e: CheckboxChangeEvent) => {
    handleFilter({parameter: e.target.name as FilterParameter, value: e.target.checked})
  }

  const onClick = () => {
    navigate(paths.menu)
  }

  return (
    <Space
      align="center"
      style={{marginBottom: '1rem', justifyContent: 'space-between', width: '100%'}}>

      <Button
        type="ghost"
        icon=<MenuOutlined/>
        size="large" onClick={onClick}
      />

      <Form>
        <Checkbox
          name="circle"
          checked={settings.circle}
          onChange={handleCheckbox}
        >Круги</Checkbox>

        <Checkbox
          name="square"
          checked={settings.square}
          onChange={handleCheckbox}
        >Квадраты</Checkbox>
      </Form>

    </Space>
  )
}

export default Header
