import { AmFlexSchema } from './Flex'
import { AmFlexItemSchema } from './FlexItem'
import { AmNavBarSchema } from './NavBar'
import { AmInputSchema } from './InputItem'
import { AmTextareaSchema } from './TextareaItem'

export type AmSchemaType =
  | 'am-flex'
  | 'am-flex-item'
  | 'am-nav-bar'
  | 'am-input'
  | 'am-textarea';

export type AmSchemaObject =
  | AmFlexSchema
  | AmFlexItemSchema
  | AmNavBarSchema
  | AmInputSchema
  | AmTextareaSchema;
