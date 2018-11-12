import {isEmpty} from 'lodash';
export function getSelectedItemId(selectedItem, options){
    if(!selectedItem || !options || isEmpty(options)){
        return '';
    };
    console.log("ASJKDLAKSDLJASD", Object.values(options).find(el => el.value === selectedItem).id)
    return Object.values(options).find(el => el.value === selectedItem).id;
}