import './ExItem.css'
function ExpenciveItem(props){
    
    return <div className='expense-item '>
        <h2>{props.date.toISOString}</h2 >
        <div className='expense-item__description'><h2>{props.title}</h2>
            <div className='expense-item__price'>${props.amount}</div>
        </div><div className='expense-item__location'>{props.location}</div>
        
      <div>
        title={props.title}
        amount={props.amount}
        location={props.location}</div></div>
}
export default ExpenciveItem;