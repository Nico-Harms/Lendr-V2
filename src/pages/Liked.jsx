import { HeartStraight } from "@phosphor-icons/react";
// import app css 
import '../App.css'


export default function Liked() {
    return (
        <section>
            <div className="favoritWrapper" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
                <h2>Dine favoritter</h2>
                
                <HeartStraight size={32} color="#72ca81" weight="fill" />
                </div>
            


        </section>
    )
}