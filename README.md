This is a demo made with Vue and ant-design-vue of sales data visualisation dashboard.

Structure:
FrameWork serves as the framework, and content of the page depends on the router direction.

Clone the repository:
git clone https://github.com/UOA-CS732-SE750-Students-2023/cs732-se75-assignment-Leo-Ma0502.git
cd UOA-CS732-SE750-Students-2023/cs732-se75-assignment-Leo-Ma0502

Start the backend:
cd backend
npm install
npm run start

Start the front end:
cd vue-demo or cdd ../vue-demo
npm install
npm run dev
open http://127.0.0.1:5173/ in browser

Users should be in default directed to the welcome page saying "welcome to demo page".

When they try to navigate to profile or chart pages, they will be redirected to login page,
where they may login with either of these:
[
{
"id": 0,
"username": "user0",
"password": "pwd0"
},
{
"id": 1,
"username": "user1",
"password": "pwd1"
},
{
"id": 2,
"username": "user2",
"password": "pwd2"
}
]

They may also choose to create a new use and then login.

After logging in, users could see their login status in the profile page, or logout by simply clicking the logout in menu,
they may browse the data chart from menu bar to see charts, where they could add something to the chart by clicking on "update".
