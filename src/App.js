import './App.css'
import FlightCard from './components/FlightCard/FlightCard'
import SortFilter from './components/SortFilter/SortFilter'
import { paginatorAddElements } from './store/actions/actions'
import { connect } from 'react-redux'

function App({ filtered, paginator, paginatorAddElements }) {
    const filteredWithPaginator = filtered.slice(0, paginator)

    return (
        <div className="App">
            <SortFilter />
            <div className="container">
                {filteredWithPaginator.map((el, id) => (
                    <FlightCard flight={el.flight} key={id} />
                ))}
                <div className="showMore">
                    <button onClick={() => paginatorAddElements(1)}>
                        Показать еще
                    </button>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    filtered: state.search.filtered,
    paginator: state.search.paginator,
})

const mapDispatchToProps = {
    paginatorAddElements,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
