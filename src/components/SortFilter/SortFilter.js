import classes from './SortFilter.module.scss'
import React from 'react'
import {connect} from 'react-redux'
import {Checker, NumberInput, Tab, Radio} from './SortFilter.utils'
import {updateAirlineFilter, updatePriceFilter,
    updateSegmentFilter, updateSortOrder} from '../../store/actions/actions'

const SortFilter = ({ airlines, availableAirlines, updateAirlineFilter,
                         updateSortOrder, availablePrices, updatePriceFilter,
                         availableSegments, updateSegmentFilter, filters
                     }) => {

    const sortLabels = ['по возрастанию цены', 'по убыванию цены', 'по времени в пути']
    const segmentLabels = ['1 пересадка', 'без пересадок']

    return (
        <>
            <div className={classes.panel}>
                <Tab caption='Сортировать'>
                    {sortLabels.map((el, index) => (
                        <Radio checked={filters.sortOrder === el}
                               disabled={false}
                               label={el}
                               key={index}
                               onClick={() => updateSortOrder(el)}/>
                    ))}
                </Tab>

                <Tab caption='Фильтровать'>
                    {segmentLabels.map((el, index) => (
                        <Checker checked={filters.segment.indexOf(index + 1) !== -1}
                                 disabled={availableSegments.indexOf(index + 1) === -1}
                                 label={el}
                                 key={index}
                                 onClick={() => updateSegmentFilter(index + 1)}/>
                    ))}
                </Tab>

                <Tab caption='Цена'>
                    <NumberInput value={filters.price.from}
                                 disabled={false}
                                 label={`От (${availablePrices.from})`}
                                 onChange={(input) => updatePriceFilter({from: input + 1})}/>

                    <NumberInput value={filters.price.to}
                                 disabled={false}
                                 label={`До (${availablePrices.to})`}
                                 onChange={(input) => updatePriceFilter({to: input + 1})}/>
                </Tab>

                <Tab caption='Авиакомпании'>
                    {airlines.map((el, index) => (
                        <Checker checked={filters.airline.indexOf(el) !== -1}
                                 disabled={availableAirlines.indexOf(el) === -1}
                                 label={el} key={index}
                                 onClick={() => updateAirlineFilter(el)}/>
                    ))}
                </Tab>
            </div>
        </>
    )
}

const mapStateToProps = state => ({
    airlines: state.search.airlines,
    availableAirlines: state.search.availableAirlines,
    availableSegments: state.search.availableSegments,
    availablePrices: state.search.availablePrices,
    filters: state.search.filters
})

const mapDispatchToProps = {
    updateAirlineFilter,
    updateSortOrder,
    updateSegmentFilter,
    updatePriceFilter
}

export default connect(mapStateToProps, mapDispatchToProps)(SortFilter)