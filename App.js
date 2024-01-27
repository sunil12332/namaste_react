const heading=React.createElement("h1",{
    id:'heading',
},"hello sunil");

 console.log("sunil");


 const heading1=React.createElement("h1",{},React.createElement("h2",{},React.createElement("h3",{},[React.createElement("h4",{},"hello Aman"),React.createElement("h4",{},"hello sunil")])))





const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
root.render(heading1);