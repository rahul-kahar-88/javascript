

//   API   --   application programming interface
        
// fatch(url,{method})


// HTTP  - hyper text transfer protocol

// http method =================
//  get  ---  access
//  post ---  insert
//  delete  --- delete
//  put  --- update
//  patch  --- 



// promise ====================
//   - ek object hai

//  1 - reject     -------  [ .catch ( fun() )]
//  2 - pending    -------| 
//  3 - fullfill          | [ .then ( fun() )]



// Sync  -  it read code line by line
// Async -  

// async await - 






async function access() {
    let data = await fetch('https://jsonplaceholder.typicode.com/posts')
    let res = await data.json()
    let result = res.map((e)=>`
    <tr> 
    <td> ${e.userId}</td>
    <td> ${e.id}</td>
    <td> ${e.title}</td>
    </tr>
    `).join("")
  document.querySelector("#showdata").innerHTML = result

}
access()



