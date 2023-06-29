import "./style.scss"

export default function MySkill({name, icon} : MySkillProps){
    return(
        <div className="mySkill">
            <img className="mySkill-icon" src={icon} alt={name}/>
            <span className="mySkill-name">{name}</span>
        </div>
    )
}

interface MySkillProps{
    name:string;
    icon:string;
}