import { AmFlexSchema } from './Flex'
import { AmFlexItemSchema } from './FlexItem'
import { AmNavBarSchema } from './NavBar'
import { AmInputSchema } from './InputItem'
import { AmTextareaSchema } from './TextareaItem'
import { AmPickerSchema } from './Picker'
import { AmWhiteSpaceSchema } from './WhiteSpace'
import { AmWingBlankSchema } from './WingBlank'
import { AmButtonSchema } from './Button'
import { AmDrawerSchema } from './Drawer'

export type AmSchemaType =
  | 'am-flex'
  | 'am-flex-item'
  | 'am-nav-bar'
  | 'am-input'
  | 'am-textarea'
  | 'am-picker'
  | 'am-space'
  | 'am-blank'
  | 'am-button'
  | 'am-drawer';

export type AmSchemaObject =
  | AmFlexSchema
  | AmFlexItemSchema
  | AmNavBarSchema
  | AmInputSchema
  | AmTextareaSchema
  | AmPickerSchema
  | AmWhiteSpaceSchema
  | AmWingBlankSchema
  | AmButtonSchema
  | AmDrawerSchema;
