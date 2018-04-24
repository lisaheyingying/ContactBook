import { Contact } from './contact'

export const ADDRESS_BOOK_HEAD = [
    { key: '_id', value: 'ID' },
    { key: 'name', value: 'Name' },
    { key: 'city', value: 'Location' },
    { key: 'officeAddress', value: 'Office' },
    { key: 'officePhone', value: 'Office Phone' },
    { key: 'cellPhone', value: 'Cell' }
];

export const mockContacts: Contact[] = [
    {_id: 1, name: 'zhang x', city: 'shanghai', officeAddress: 'F1-01', officePhone: '3456', cellPhone: '111222'},
    {_id: 2, name: 'wang x', city: 'shanghai', officeAddress: 'F1-02', officePhone: '77688', cellPhone: '87654566'},
    {_id: 3, name: 'cang x', city: 'shanghai', officeAddress: 'F2-02', officePhone: '17688', cellPhone: '37654566'}
];

