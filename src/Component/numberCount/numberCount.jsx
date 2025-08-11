import "./numberCount.css"
import CountUp from "react-countup";
import { useInView } from 'react-intersection-observer';
const NumberCount = () => {

const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.5,     // 50% of the element must be visible
  });

    return(
        <div ref={ref} className="numberCount">
            <div className="nCount">
                <h1>{inView &&<CountUp start={300}  end={500} duration={4} />}+</h1>
                <p>Projects Delivered</p>
            </div>
            <div className="nCount">
                <h1>{inView && <CountUp end={98} duration={4} />}%</h1>
                <p>Client Satisfaction</p>
            </div>
            <div className="nCount">
                <h1>24/7</h1>
                <p>US Support</p>
            </div>
            <div className="nCount">
                <h1>{inView && <CountUp end={15} duration={4} />}</h1>
                <p>Years Experience</p>
            </div>
        </div>
    )
}
export default NumberCount;