import React from 'react'
import { createRoot } from 'react-dom/client'
const storage = chrome.storage.sync;

import './options.css'
  
function App() {
	storage.get("test", () => {
		console.log("test")
	})


	const [input, setInput] = React.useState("")
	const [list, setList] = React.useState([])


  return (
    <div className="App">
		<h1>List of ignored users</h1>
		<div>
			<form
			action="#"
			onSubmit= {e => {
				console.log("submit form")
				e.preventDefault();
				console.log(e.target.value)
			}}>
				<label htmlFor="user">Add user to ignore:</label>
				<input
					onChange={e => {
						console.log(e.target.value)
						setInput(e.target.value)}
					}
					value={input}
					type="text"
					name='user'
					id='user'
					placeholder="Enter the username"
					
					/>
				<button type="submit" className=""> Add</button>
			</form>
		</div>

		<div>
			{/* <ul>
				<li><span>user 1</span> <span><input type="checkbox" /></span><button>delete</button></li>
				<li><span>user 1 user 1  user 1a</span> <span><input type="checkbox" /></span><button>delete</button></li>
				<li><span>user 1</span> <span><input type="checkbox" /></span><button>delete</button></li>
				<li><span>user 1 user 1user 1user 1</span> <span><input type="checkbox" /></span><button>delete</button></li>
				<li><span>user 1 user 1</span> <span><input type="checkbox" /></span><button>delete</button></li>
				<li><span>user 1</span> <span><input type="checkbox" /></span><button>delete</button></li>
				<li><span>user 1</span> <span><input type="checkbox" /></span><button>delete</button></li>
				<li><span>user 1</span> <span><input type="checkbox" /></span><button>delete</button></li>
				<li><span>user 1</span> <span><input type="checkbox" /></span><button>delete</button></li>
				<li><span>user 1</span> <span><input type="checkbox" /></span><button>delete</button></li>
				<li><span>user 1</span> <span><input type="checkbox" /></span><button>delete</button></li>
				<li><span>user 1</span> <span><input type="checkbox" /></span><button>delete</button></li>
			</ul> */}

			<table border="1">
				<thead>
					<tr>
						<th>Username</th>
						<th>State</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
				</tbody>
			</table>
		</div>
    </div>
  );
}

const root = createRoot(document.getElementById('root'))
root.render(<App />)