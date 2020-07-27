import React from 'react';
import { UserCard} from "./UserCard/UserCard";

export const WhoToFollow = () => {

    const fakeData = [
        { name: "Pepe",
          email: "pepe@email.com",
          picture: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        },
        {
          name: "María",
          email: "maria@gmail.com",
          picture: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        }
    ]

return (
    <div className="WhoToFollow">
        <h3>A quién seguir?</h3>
        <hr/>
        {fakeData.map(user => <UserCard user={user}/>)}
    </div>
    )
}