export const Deposit = ({serviceId,serviceName,servicePrice,userName,userBalance,date}) =>{
    
    return(
    <>
    <td>{serviceId}</td>
    <td>{serviceName}</td> 
    <td>{servicePrice}</td>
    <td>{userName}</td>
    <td>{userBalance}</td>
    <td>{date}</td>

    </>
    )
    
}