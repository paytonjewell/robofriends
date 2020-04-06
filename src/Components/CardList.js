import React from 'react';
import Card from './Card';


const CardList = ({robots}) => {
    return (
        <div className = "mt4 mb6">   
        {
            robots.map((robot, i) => {
                return (<Card
                    key={robots[i]}
                    id={robots[i].id}
                    name={robots[i].name}
                    email={robots[i].email}/>
                    )
                })
            }
            </div>
            );
        }
        
        export default CardList;