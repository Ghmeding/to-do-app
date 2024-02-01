import React from 'react';

interface ListProps {
  name: string;
  messageCount?: number;
}

export const ListHeader = ( props: ListProps ) => {
  
  const signOut: any = () => {
    console.log("signout");
  }

  return (
    <div className="list-header">
      <h1>{props.name}</h1>
      <div className={"button-container"}> 
        <button className={"create"}>ADD NEW</button>
        <button className={"signout"} onClick={signOut}>SIGN OUT</button>
      </div>
    </div>
  );
}

export default ListHeader;