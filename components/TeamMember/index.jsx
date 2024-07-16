import Image from "next/image";
import hopeHeadshot from "../../public/images/hope_philip.png";
import styles from "./TeamMember.module.css";

const defaultTeamMember = {
  headshot: hopeHeadshot,
  name: "Hope Philip",
  role: "Founder",
  location: "Ibadan, Nigeria"
}

const TeamMember = ({teamMember}) => {

  if (!teamMember) {
    teamMember = defaultTeamMember
  }

  return (
    <div className={styles.container}>
      <div className={styles.memberImage}>
        <Image 
          src={teamMember.headshot}
          alt={`Headshot of the ${teamMember.role}, ${teamMember.name}`}
        />
      </div>
      <div className={styles.memberDetails}>
        <p>{teamMember.name}</p>
        <p>{teamMember.role}</p>
        <p>{teamMember.location}</p>
      </div>
    </div>
  );
}
 
export default TeamMember;