export default function TabButton({lable,isSelected,...props}){
    return(
        <li>
        <button className={isSelected ? 'active' : null} {...props}>{lable}</button>
        </li>
    )
}