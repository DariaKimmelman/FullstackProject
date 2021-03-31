import React, { useState } from 'react';
const storeObject = {
    userName: 'user',
    cart: []
}
export const StoreContext = React.createContext(storeObject)
 const Store = ({ children }) => {
    const [store, updateStore] = useState(storeObject);
     return (<StoreContext.Provider value={[store, updateStore]}>
         {children}
    </StoreContext.Provider>)
}
export default Store;