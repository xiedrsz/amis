import { AmFlexSchema } from './Flex'
import { AmFlexItemSchema } from './FlexItem'
import { AmNavBarSchema } from './NavBar'
import { AmInputSchema } from './InputItem'

export type AmSchemaType =
  | 'am-flex'
  | 'am-flex-item'
  | 'am-nav-bar'
  | 'am-input';

export type AmSchemaObject =
  | AmFlexSchema
  | AmFlexItemSchema
  | AmNavBarSchema
  | AmInputSchema;
