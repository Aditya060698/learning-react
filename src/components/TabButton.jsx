export default function TabButton({lable,onSelect,isSelected}){
    return(
        <li>
        <button className={isSelected ? 'active' : null} onClick={onSelect}>{lable}</button>
        </li>
    )
}