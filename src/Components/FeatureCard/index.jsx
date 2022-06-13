import './feature.css'

function FeatureCard(card) {
    const config = card.config
    return (
        <div className="feature-item">
            <img src={config.image.source} alt={config.image.alt} className="feature-icon" />
            <h3 className="feature-item-title">{config.h3}</h3>
            <p className="feature-item-text">{config.p}</p>
        </div>
    )
    
}

export default FeatureCard