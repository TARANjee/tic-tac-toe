import React, { useState } from 'react'

export default function TicTacToe() {

    const [turn, setTurn] = useState('X')
    const [cells, setCells] = useState(Array(9).fill(''))
    const [winner, setWinner] = useState('')

    function checkForWinner(squares) {

        let combos = {
            across: [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8]
            ],
            down: [
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8]
            ],
            diagonal: [
                [0, 4, 8],
                [2, 4, 6]
            ]
        }

        for (let combo in combos) {
            combos[combo].forEach((pattern) => {
                if (squares[pattern[0]] === '' ||
                    squares[pattern[1]] === '' ||
                    squares[pattern[2]] === ''
                ) {
                    //do nothing
                }
                else if (
                    squares[pattern[0]] === squares[pattern[1]] &&
                    squares[pattern[1]] === squares[pattern[2]]
                ) {
                    console.log("winner")
                    setWinner(squares[pattern[0]])
                }

            })
        }
       
    }


    function handleClick(num) {
        if (cells[num] !== '') {
            alert("already filled")
            return
        }


        let squares = [...cells]
        if (turn === 'X') {
            squares[num] = 'X'
            setTurn('O')
        }
        else {
            squares[num] = 'O'
            setTurn('X')
        }
        checkForWinner(squares)
        setCells(squares)

    }

    function handleRestart() {
        setWinner('')
        setCells(Array(9).fill(''))
    }

    const Cell = ({ num }) => {
        return (
            <td onClick={() => handleClick(num)}>
                <h1 className=' text-center'>{cells[num]}</h1>
            </td>
        )
    }


    return (
        <div className='container'>
            <h1 className='text-center'>Tic Tac Toe</h1>
            Turn :{turn}
            <table>
                <tr>
                    <Cell num={0} handleClick={handleClick} />
                    <Cell num={1} handleClick={handleClick} />
                    <Cell num={2} handleClick={handleClick} />
                </tr>
                <tr>
                    <Cell num={3} handleClick={handleClick} />
                    <Cell num={4} handleClick={handleClick} />
                    <Cell num={5} handleClick={handleClick} />
                </tr>
                <tr>
                    <Cell num={6} handleClick={handleClick} />
                    <Cell num={7} handleClick={handleClick} />
                    <Cell num={8} handleClick={handleClick} />
                </tr>
            </table>
            {winner && (
                <>
                    <p>{winner} is a winner!</p>
                    <button onClick={handleRestart}>Play Again</button>
                </>
            )}
        </div>
    )
}
