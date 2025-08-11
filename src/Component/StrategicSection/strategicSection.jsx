import "./strategicSection.css";
const StrategicSection = () =>{
    return(
        <div className="strategicSection" id="locations">
            <div className="strategicInfo">
                <h1>Strategic Locations</h1>
                <p>Global expertise with local presence across India's technology hubs</p>
            </div>
            <div className="strategicCards">
                <div className="innerCard">
                    <div className="cardBackground"></div>
                    <div className="stratLocation locationLogo1">
                        <h1>Noida Hub</h1>
                        <p>Agentic AI FinTech Center</p>
                    </div>
                    <div className="locationInfo">
                        <p><strong>Address</strong>: Green Boulevard, Tower A, 5th Floor, Noida, Uttar Pradesh 201309</p>
                        <p><strong>Specialization</strong>: MCA Solutions, Agentic Risk Analytics</p>
                        <p><strong>Team Size</strong>:100+ AI Specialists</p>
                        <ul>
                            <li>MCA Platform Development Center</li>
                            <li>Agentic AI Risk Assessment Lab</li>
                            <li>Alternative Lending Solutions</li>
                            <li>Autonomous Credit Analytics</li>
                            <li>24/7 US Client Support</li>
                        </ul>
                    </div>
                </div>
                <div className="innerCard">
                    <div className="cardBackground"></div>
                    <div className="stratLocation locationLogo2">
                        <h1>Bangalore Operations</h1>
                        <p>Agentic AI FinTech Center</p>
                    </div>
                    <div className="locationInfo">
                        <p><strong>Address</strong>: Tower-B, Novel Office Brigade Tech Park, Pattandur Agrahara, Whitefield, Bengaluru, Karnataka 560066</p>
                        <p><strong>Specialization</strong>: FinTech Agentic AI/ML, Financial Services Solutions</p>
                        <p><strong>Team Size</strong>:150+ Engineers</p>
                        <ul>
                            <li>Agentic AI Development Labs</li>
                            <li>FinTech Technology Center</li>
                            <li>Payment Gateway Testing Lab</li>
                            <li>Compliance & Security Division</li>
                            <li>API Development Hub</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default StrategicSection;