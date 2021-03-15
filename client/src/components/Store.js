import {useEffect, useState} from 'react'

const Store = (props) => {
    const[items, setItems] = useState(null)

    const getStoreItems = () => {
        fetch('./api/store/', {'credentials': 'include'})
        .then(res => res.json())
        .then(res => {
            setItems(res)
        })
        .catch(err => {
            console.log(err)})
    }
    useEffect(() => {
        getStoreItems()
    },[])

    const updateCart = (itemsToUpdate) => {
        props.setCart(itemsToUpdate)
    }
    return (
        <div>
            <h1>This is the store page</h1>
            <h1>Pizza's</h1>
            {items && (
                items.map((item, i) => (
                    <div key={i}>
                        <p>{item.name}</p>
                        <button onClick={() => updateCart([...props.cart,item])}>Add to cart</button>
                        <select>
                            <option>Medium</option>
                            <option>Large</option>
                        </select>
                        <input type="number" placeholder="Quantity"/>
                    </div>
                ))
            )}
        </div>
    )
}
export default Store