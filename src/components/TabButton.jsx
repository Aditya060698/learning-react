export default function TabButton({lable,onSelect}){
    return(
        <li>
        <button onClick={onSelect}>{lable}</button>
        </li>
    )
}