

export const User = ({name,surname,username,DPI,AccNo,location,phone,email,jobSite,ingresos,balance,movement,role}) => {
  return (
   <>
   <td>{name}</td>
   <td>{surname}</td>
   <td>{username}</td>
   <td>{DPI}</td>
   <td>{AccNo}</td>
   <td>{location}</td>
   <td>{phone}</td>
   <td>{email}</td>
   <td>{jobSite}</td>
   <td>{ingresos}</td>
   <td>{balance}</td>
   <td>{movement}</td>
   <td>{role}</td>

   </>
  )
}
