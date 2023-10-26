import "../pages/pageCss/AcceptedDeal.css"
import mascot from "../assets/images/maskot.svg"

export default function AcceptedDeal() {
    return (
        <main>
            <div className="accpted-deal-wrapper">
                <p>Tillykke med din nye aftle!</p>
                <div className="l-quote">
                    <div className="quote">
                        <p>Du har netop sparet planeten for ca. 20 kg CO2-udledning ved at udleje din kuffert i stedet for at der skal produceres en ny!</p>
                    </div>
                </div>
                <img src={mascot} alt="maskot" className="mascot-accept" />
            </div>

        </main>
    )
}