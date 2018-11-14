import {isEmpty} from 'lodash';
export function getSelectedItemId(selectedItem, options){
    if(!selectedItem || !options || isEmpty(options)){
        return '';
    };
    return Object.values(options).find(el => el.value === selectedItem).id;
}