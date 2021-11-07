import classes from './SortFilter.module.scss'
import { useState } from 'react'

export const Tab = ({ caption, children }) => (
    <div className={classes.tab}>
        <p>{ caption }</p>
        { children }
    </div>
)

export const Checker = ({ checked, label, onClick, disabled }) => {
    const cls = disabled ?
        [classes.checker, classes.disabled].join(' ') : classes.checker

    const checkerClick = () => onClick(checked)

    return (
        <div className={cls} onClick={checkerClick}>
            <input type="checkbox" checked={checked} onChange={() => {}}/>
            <span>&nbsp;&nbsp;{label}</span>
        </div>
    )
}

export const Radio = ({checked, label, onClick, disabled}) => {
    const cls = disabled ?
        [classes.radio, classes.disabled].join(' ') : classes.radio

    const radioClick = () => onClick(!checked)

    return (
        <div className={cls} onClick={radioClick}>
            <input type="radio" checked={checked} onChange={radioClick}/>
            <span>&nbsp;&nbsp;{label}</span>
        </div>
    )
}

export const NumberInput = ({value, label, onChange, disabled}) => {
    const [input, setInput] = useState(value)
    const [error, setError] = useState(false)
    const [delay, setDelay] = useState(null)

    const cls = [classes.input, disabled ? classes.disabled : '']

    const debounce = (value) => {
        if (delay)
            clearTimeout(delay)

        const _delay = setTimeout(() => {
            onChange(value)
        }, 500)
        setDelay(_delay)
    }

    const onChangeHandler = (e) => {
        const value = e.target.value

        if (isNaN(Number(value))) {
            setInput(value)
            setError(true)
        } else {
            setError(false)
            setInput(Number(value))
            debounce(Number(value))
        }
    }

    return (
        <div className={cls.join(' ')}>
            <span>{label}&nbsp;</span>
            <input className={error ? classes.error : ''}
                   type="text"
                   value={input}
                   onChange={onChangeHandler}/>
        </div>
    )
}