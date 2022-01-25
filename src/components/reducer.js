import {useReducer} from 'react';

export const useHandler = () => {
    const init = { 
        gender: '',
        weight: 0,
        height: 0,
        born: '',
        activity: '',
        goal: '',
        targetWeight: 0,
        diet: '',
        lactosy: false,
        gluten: false,
        excluded1: '',           
        excluded2: '',
        userName: '',
        userEmail: '',
        userPhone:'',
        userInfo:'',
    };
    
    const reducer = (state, action) => {
        switch (action.type) {
            case 'reset': 
                return init;
            case 'change':
                const {name, value, checked, type} = action.element;
                let copyValue = type=='checkbox' ? checked : value;
                return {...state, [name]:copyValue};
            case 'choose':
                let nameLi = action.element.getAttribute('name');
                return {...state, [nameLi]: action.element.innerText};
            default:
                return state;
        }
    }
    const [state, dispatch] = useReducer(reducer, init);
    
    return [state, dispatch];
}