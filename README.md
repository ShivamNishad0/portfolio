🗳️ Poll Voting App
A simple React-based web application for creating and voting on polls. Users can register, log in, vote, and view poll results. Admins have additional capabilities to create, close, or delete polls.

🚀 Getting Started
1. Clone the Repository
git clone https://github.com/yourusername/poll-voting-app.git
cd poll-voting-app
2. Install Dependencies
bash
Copy
Edit
npm install
3. Run the Application
bash
Copy
Edit
npm start
Open your browser and visit: http://localhost:3000

🛠️ Technologies Used
Technology	Purpose
React.js	Building reusable UI components and handling routing
localStorage	Persisting data (polls, votes, users) on the client side
React Router	Managing navigation between pages
CSS	Custom styling for responsive and user-friendly design

📊 ER Diagram
[User]
username: string

password: string

role: 'admin' | 'user'

[Poll]
id: number

question: string

options: string[]

votes: number[]

closingDate: datetime string

isClosed: boolean

📡 API Endpoints
Method	Route	Purpose
POST	/register	Register a new user
POST	/login	Authenticate user and redirect
POST	/create-poll	Admin creates a new poll
PUT	/vote/:pollId	User votes on a poll
PUT	/close-poll/:pollId	Admin manually closes a poll
DELETE	/delete-poll/:pollId	Admin deletes a poll

✅ Features
User registration and login

Role-based access (Admin/User)

Poll creation and voting functionality

Vote tracking and poll closing

Client-side data persistence using localStorage

Responsive and clean UI
portfolio/README.md
