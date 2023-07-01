export const Transfer = ({sourceAccount,destinationAccount,amount,date}) =>{
    
    return(
    <>
    <td>{sourceAccount}</td>
    <td>{destinationAccount}</td>
    <td>{amount}</td> 
    <td>{date}</td>
    </>
    )
    
}