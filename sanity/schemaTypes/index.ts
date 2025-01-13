import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {postType} from './postType'
import {userType} from './userType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [userType, blockContentType, categoryType, postType],
}
