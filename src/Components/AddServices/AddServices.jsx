export const AddServices = ({name, description, price, historial, DPI})=>{
    return(
        <>
            <td>{name}</td>
            <td>{description}</td>
            <td>{price}</td>
            <td>{historial}</td>
            <td>{DPI}</td>
        </>
    )
}