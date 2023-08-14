import Style from '../page.module.css';

export default function Score() {
  return (
    <>
      <p className={Style.title} style={{color: 'hsl(241, 100%, 89%)'}}>Your Result</p>
      <div className={Style.score}>
        <p>76</p><p>of 100</p>
      </div>
      <p className={Style.scoreStatus}>Great</p>
      <p className={Style.desc}>You scored higher than 65% of <br className='lg-visible'/> the <br className='sm-visible' /> people who have taken<br className='lg-visible'/> these tests</p>
    </>
  )
}
