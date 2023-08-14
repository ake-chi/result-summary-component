
import Style from './page.module.css';
import Score from "./Result/Score";
import Summary from "./Result/Summary";


export default function Home() {
  return (
    <div className={Style.resultSummaryBox}>
      <div className={Style.result}>
        <Score />
      </div>
      <div className={Style.summary}>
        <Summary />
      </div>      
    </div>
  )
}
