import classes from './FlightCard.module.scss'

const Header = ({ carrier, price }) => {
    return (
        <div className={classes.header}>
            <div className={classes.carrier}>
                <img
                    src={`https://www.skyscanner.net/images/airlines/small/${carrier.airlineCode}.png`}
                    alt={carrier.airlineCode}
                />
            </div>
            <div className={classes.cost}>
                <span>
                    {Math.round(
                        price.passengerPrices[0].singlePassengerTotal.amount
                    )}
                    &nbsp;
                    {price.passengerPrices[0].singlePassengerTotal.currency}
                </span>
                <small>Стоимость для одного взрослого пассажира</small>
            </div>
        </div>
    )
}

export default Header
