import Style from '../page.module.css';
import Image from "next/image";


const summaries = [
    {
        category: "Reaction",
        score: 80,
        icon: "/icon-reaction.svg",
        color: 'hsla(0, 100%, 67%)',
    },
    {
        category: "Memory",
        score: 92,
        icon: "/icon-memory.svg",
        color: "hsl(39, 100%, 56%)"
    },
    {
        category: "Verbal",
        score: 61,
        icon: "/icon-verbal.svg",
        color: "hsl(166, 100%, 37%)"
    },
    {
        category: "Visual",
        score: 72,
        icon: "/icon-visual.svg",
        color: "hsl(234, 85%, 45%)"
    }
];


export default function Summary() {

    const listSummary = summaries.map(summary =>
        
        <div key={summary.category}>
            <p style={{ color: summary.color }}>
                <Image
                    src={summary.icon}
                    width={16}
                    height={16}
                    alt="icon"
                />
                <span style={{ fontWeight: '500', fontSize: '18px', marginLeft: '8px' }}>{summary.category}</span>
            </p>
            <p style={{ fontWeight: 'bold' }}>
                <span style={{ color: 'hsl(224, 30%, 27%)' }}>{summary.score} </span>
                <span style={{ margin: '0 5px', color: '#a5a1b3' }}>/</span>
                <span style={{ color: '#a5a1b3' }}>100</span> </p>
        </div>
    )

    return (

        <div className={Style.SummaryContent}>
            <p className={Style.title}>Summary</p>
            <div className={Style.summaryBox}>
                {listSummary}
            </div>
            <button className={Style.BtnContinue}>Continue</button>
        </div>

    )
}

