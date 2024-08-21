"use server"

export default async function Products() {

    const getProducts = async () => {
        const res = await fetch('https://dummyjson.com/products');
        return res.json();

    }

    const data = await getProducts();

    return (
        <div>
            {data}
            
            
            </div>
    )

}