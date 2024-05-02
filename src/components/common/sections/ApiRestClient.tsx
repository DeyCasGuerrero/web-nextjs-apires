// "use client"
// import { User } from "@/types/UserType";
// import { useFetchUsers } from "@/hooks/useGetApiRes";

// function UserClient() {

//     const users:User[]=useFetchUsers();

//     return (
//         <div>
//             <h1>Últimas noticias</h1>
//             <ul>
//                 {users.map(user => (
//                     <div key={user.id}>
//                         <h1>{user.id}</h1>
//                         <p>{user.nombre}</p>
//                         <p>{user.correo}</p>
//                         <p>{user.descripcion}</p>
//                         <p>{user.contraseña}</p>
//                     </div>
//                 ))}
//             </ul>
//         </div>
//     );
// }


// export default UserClient