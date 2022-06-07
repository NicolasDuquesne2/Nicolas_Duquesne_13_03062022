import './features.css'
import FeatureCard from '../FeatureCard'
import chatIcon from '../../img/icon-chat.png'
import moneyIcon from '../../img/icon-money.png'
import securityIcon from '../../img/icon-security.png'

function FeaturesWrapper() {

    const cards = [
        {image: {source: chatIcon, alt: 'Chat Icon'}, h3: "You are our #1 priority", 
        p: "Need to talk to a representative? You can get in touch through our24/7 chat or through a phone call in less than 5 minutes."},
        {image: {source: moneyIcon, alt: 'Chat Icon'}, h3: "More savings means higher rates", 
        p: "The more you save with us, the higher your interest rate will be!"},
        {image: {source: securityIcon, alt: 'Chat Icon'}, h3: "Security you can trust", 
        p: "We use top of the line encryption to make sure your data and money is always safe."}
    ]

    return (
        <section className="features">
             <h2 className="sr-only">Features</h2>
             {cards.map((card, index) => (
                 <FeatureCard
                    key={`Card-${index + 1}`}
                    config={card}
                 />
             ))}
        </section>
    )
}

export default FeaturesWrapper