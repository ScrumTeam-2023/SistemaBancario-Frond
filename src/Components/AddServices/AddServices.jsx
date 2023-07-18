export const AddServices = ({name, description, price, historial, })=>{
    return(
        <>
            <td>{name}</td>
            <td>{description}</td>
            <td>{price}</td>
            <td>{historial}</td>
        </>
    )
}