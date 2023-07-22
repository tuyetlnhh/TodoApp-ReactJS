import React from 'react'
import Button from './Button'
import PropTypes from 'prop-types'; // ES6
import styles from './todoForm.module.css'

function TodoForm({ handleAdd }) {
  const [item, setItem] = React.useState('');

  return (
    <div className={styles.todo_form}>
      <input className={styles.todo_input} type="text" onChange={e => setItem(e.target.value)} />
      <Button 
        buttonText='Add' 
        onClick={() => {
          handleAdd(item)
        }}
      />

    </div>
  )
}

export default TodoForm
TodoForm.propTypes = {
    handleAdd: PropTypes.func,
}