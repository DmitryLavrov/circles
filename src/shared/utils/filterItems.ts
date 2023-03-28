import {Item, Settings} from '../../processes/store/types'

export const filterItems = (items: Item[], settings: Settings) => {
  return items.filter(item => (
      settings[item.color] &&
      settings[item.form] &&
      (settings.dark === item.dark || settings.light === !item.dark)
    )
  )
}
