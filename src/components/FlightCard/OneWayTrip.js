import moment from 'moment'
import 'moment/locale/ru'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLongArrowAltRight} from "@fortawesome/free-solid-svg-icons"
import {faClock} from "@fortawesome/free-regular-svg-icons"
import classes from './FlightCard.module.scss'

moment.locale('ru')

const OneWayTrip = ({ leg }) => {
    const firstSegment = leg.segments[0]
    const { length } = leg.segments
    const lastSegment = length > 0 ? leg.segments[length - 1] : firstSegment
    const transfer = length > 1 ? <span>{length - 1} пересадка</span> : ''

    return (
        <div className={classes.leg}>
            <div className={classes.line}>
                <span>{firstSegment.departureCity.caption},&nbsp;</span>
                <span>{firstSegment.departureAirport.caption}&nbsp;</span>
                <span className={classes.info}>({firstSegment.departureAirport.uid})&nbsp;</span>
                <FontAwesomeIcon className={classes.arrow} size="1x" icon={faLongArrowAltRight}/>&nbsp;
                <span>{lastSegment.arrivalCity ? lastSegment.arrivalCity.caption : ''},&nbsp;</span>
                <span>{lastSegment.arrivalAirport.caption}&nbsp;</span>
                <span className={classes.info}>({lastSegment.arrivalAirport.uid})</span>
            </div>
            <div className={classes.underline}/>
            <div className={classes.scheduleLine}>
                <div>
          <span>
            {moment(firstSegment.departureDate).format('LT')}&nbsp;
          </span>
                    <span className={classes.info}>
            {moment(firstSegment.departureDate).format('D MMM dd')}
          </span>
                </div>
                <div>
                    <FontAwesomeIcon size="1x" icon={faClock}/>&nbsp;
                    <span>
            {Math.floor(leg.duration / 60)}&nbsp;ч&nbsp;
                        {leg.duration % 60}&nbsp;мин
          </span>
                </div>
                <div>
          <span className={classes.info}>
            {moment(lastSegment.arrivalDate).format('D MMM dd')}
              &nbsp;</span>
                    <span>
            {moment(lastSegment.arrivalDate).format('LT')}
            </span>
                </div>
            </div>
            <div className={classes.transferLine}>
                {transfer}
            </div>
            <div className={classes.line}>
                <span>Рейс выполняет: {firstSegment.airline.airlineCode}&nbsp;{firstSegment.airline.caption}</span>
            </div>
        </div>
    )
};

export default OneWayTrip;