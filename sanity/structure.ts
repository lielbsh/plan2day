import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Habit')
    .items([
      S.documentTypeListItem('user').title('User'),
      S.documentTypeListItem('habit').title('Habit'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['habit', 'user'].includes(item.getId()!),
      ),
    ])
