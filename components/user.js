
export default function User({ user }) {
    return (
        <>
        <div className="user-card">
        <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.phone} </p> 
            <p>{user.address.street} {user.address.suite} {user.address.city} {user.address.zipcode}  </p>
        </div>
        </>
    )
}