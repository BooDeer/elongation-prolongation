import React, { useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './options.css'


const storage = chrome.storage.sync;
// storage.set({list: []}, function() {});

function App() {
	
	const [input, setInput] = React.useState("")
	const [list, setList] = React.useState([])
	
	useEffect(() => {
		// get the list of users from storage first render only
		storage.get(['list'], function(result) {
			if (result.list) {
			setList(result.list)
		}
		else {
			setList([])
		}
	})
	}, []);
	
	
	  const handleSubmit = function (e) {
		e.preventDefault();
		if (input === "" || input.length > 39) {
			return ; 
		}
		setList(prevState => {
				if (!prevState.includes(input.trim())) {
					storage.set({list: [...prevState, input.trim()]}, function() {
					})
					return [...prevState, input.trim()]
				}
				else
					return [...prevState]
			})
		setInput("")
	}


	const handleDelete = function (e) {
		e.preventDefault();
		// console.log("delete button clicked")
		setList(prevState => {
			storage.set({list: prevState.filter(item => item !== e.target.value)}, function() {
			})
			return prevState.filter(item => item !== e.target.value)
		})
	}
	const table = list.map(e => {
		return <tr key={e}><td>{e}</td><td><span className='wip'>(WIP)</span></td><td><button onClick={handleDelete} value={e}>remove user</button></td></tr>
	})

  return (
    <div className="App">
		<h1>List of ignored users</h1>
		<div>
			<form
			// action="#"
			onSubmit= {handleSubmit}
			>
				<label htmlFor="user">Add user to ignore:</label>
				<input
					onChange={e => {
						// console.log(e.target.value)
						setInput(e.target.value)}
					}
					value={input}
					type="text"
					name='user'
					id='user'
					placeholder="Enter the github username"
					autoFocus
					/>
				<button type="submit" className="">Add</button>
			</form>
		</div>
		{/* <h1>debugging value ===> {input}</h1> */}
		<div>
			<table border="1">
				<thead>
					<tr>
						<th>Username</th>
						<th>State</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{table}
				</tbody>
			</table>
		</div>
    </div>
  );
}

const root = createRoot(document.getElementById('root'))
root.render(<App />)