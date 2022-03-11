export const Grocelist=({panther,deleteGroce})=>{
    return (
        <div>
            <h1>{panther.title}</h1>
            <button onClick={(()=>{deleteGroce(panther.id)})}>deletee</button>
      
        </div>
    )
}