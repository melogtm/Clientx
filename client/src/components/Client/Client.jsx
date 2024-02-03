export default function Client({name, email, phone}) {
  return (
    <tr className="client">
            <td className="clientItem">
            {name}
            </td>
            <td className="clientItem">
            {email}
            </td>   
            <td className="clientItem">
            {phone}
            </td>
    </tr>
  )
}
