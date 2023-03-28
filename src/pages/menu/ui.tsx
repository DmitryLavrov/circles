import React from 'react'
import {Figures} from '../../components/figures/ui'
import {Checkbox, Form, InputNumber, Modal, Radio, RadioChangeEvent, Space} from 'antd'
import {useNavigate} from 'react-router-dom'
import {paths} from 'processes/rootes/paths'
import './menu.scss'
import {useSelector} from 'react-redux'
import {getSettings, updateColumns, updateFilter} from 'processes/store/settingsSlice'
import {FilterParameter, FilterPayload} from 'processes/store/types'
import {useAppDispatch} from 'processes/store/hooks'
import {CheckboxChangeEvent} from 'antd/es/checkbox'
import {RadioValue} from './types'

export const Menu = () => {
  const settings = useSelector(getSettings())
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleCancel = () => {
    navigate(paths.home)
  }

  const handleFilter = (payload: FilterPayload) => {
    dispatch(updateFilter(payload))
  }

  const handleColumns = (value: number | null) => {
    dispatch(updateColumns(value as number))
  }

  const handleCheckbox = (e: CheckboxChangeEvent) => {
    handleFilter({parameter: e.target.name as FilterParameter, value: e.target.checked})
  }

  const handleRadio = (e: RadioChangeEvent) => {
    handleFilter({
      parameter: 'dark',
      value: ((e.target.value === RadioValue.All) || (e.target.value === RadioValue.Dark))
    })
    handleFilter({
      parameter: 'light',
      value: ((e.target.value === RadioValue.All) || (e.target.value === RadioValue.Light))
    })
  }

  const radioValue = settings.dark
    ? settings.light
      ? RadioValue.All
      : RadioValue.Dark
    : settings.light
      ? RadioValue.Light
      : RadioValue.Nothing

  return (
    <>
      <Figures/>
      <Modal
        open
        onCancel={handleCancel}
        footer={null}
        closable={false}
        width="208px"
        style={{marginLeft: 0, top: '4rem'}}
      >
        <Form>
          <Space direction="vertical" style={{marginBottom: '2rem'}}>
            <Checkbox
              name="red"
              className="red"
              checked={settings.red}
              onChange={handleCheckbox}
            >красные</Checkbox>

            <Checkbox
              name="green"
              className="green"
              checked={settings.green}
              onChange={handleCheckbox}
            >зеленые</Checkbox>

            <Checkbox
              name="blue"
              className="blue"
              checked={settings.blue}
              onChange={handleCheckbox}
            >синие</Checkbox>

            <Checkbox
              name="yellow"
              className="yellow"
              checked={settings.yellow}
              onChange={handleCheckbox}
            >желтые</Checkbox>
          </Space>

          <Radio.Group
            value={radioValue}
            onChange={handleRadio}
            style={{marginBottom: '2rem'}}>
            <Space direction="vertical">
              <Radio value={RadioValue.All}>Все</Radio>
              <Radio value={RadioValue.Dark}>Темные</Radio>
              <Radio value={RadioValue.Light}>Светлые</Radio>
            </Space>
          </Radio.Group>

          <Form.Item label="колонок">
            <InputNumber
              min={1}
              max={9}
              value={settings.columns}
              onChange={handleColumns}
              style={{width: '3rem'}}/>
          </Form.Item>

        </Form>
      </Modal>
    </>
  )
}
