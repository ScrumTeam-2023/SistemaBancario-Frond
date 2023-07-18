export const Transfer = ({sourceAccount,destinationAccount,amount,date,DPI}) =>{
    
    return(
    <>
    <td>{sourceAccount}</td>
    <td>{destinationAccount}</td>
    <td>{amount}</td> 
    <td>{date}</td>
    <td>{DPI}</td>
    </>
    )
    
}