const Data = [
    {
        projectName: "Event and Landing Page",
        startDate: "2021-10-02",
        status: "Completed",
        members: "https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-1.jpg",
        progress: 100
    },
    {
        projectName: "Rock & Paper Scissors",
        startDate: "2021-10-07",
        status: "Completed",
        members: "https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-2.jpg",
        progress: 78
    },
    {
        projectName: "Dice Game",
        startDate: "2021-10-10",
        status: "Completed",
        members: "https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-3.jpg",
        progress: 100
    },{
        projectName: "Weather App",
        startDate: "2021-10-15",
        status: "Completed",
        members: "https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-4.jpg",
        progress: 100
    },
    {
        projectName: "User Mangamenet System",
        startDate: "2021-10-20",
        status: "Pending",
        members: "https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-5.jpg",
        progress: 54
    },
    {
        projectName: "Image Gallery",
        startDate: "2021-10-25",
        status: "Pending",
        members: "https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-2.jpg",
        progress: 41
    }
  ]
  
  
  function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
      let th = document.createElement("th");
      let text = document.createTextNode(key);
      th.appendChild(text);
      row.appendChild(th);
    }
    let th = document.createElement('th')
    let text = document.createTextNode('Actions')
    th.appendChild(text)
    row.appendChild(th)
  }
    
  function generateTable(table, data) {
    for (let element of data) {
      let row = table.insertRow();
      for (let key in element) {
          if(typeof element[key] === 'string' && element[key].includes('https://')) {
              let cell = row.insertCell()
              let image = document.createElement('img')
              image.src = element[key]
              cell.appendChild(image)
          } else if(typeof element[key] === 'number') {
              let cell = row.insertCell()
              let div = document.createElement('div')
              let innerDiv = document.createElement('div')
              innerDiv.style.width = element[key] + "%";
              div.appendChild(innerDiv)
              cell.appendChild(div)
          } else {
              let cell = row.insertCell();
              let text = document.createTextNode(element[key]);
              cell.appendChild(text);
          }
      }
      let cell = row.insertCell();
      let newCell = row.insertCell(-1);
      let edit = document.createElement('button')
      edit.addEventListener('click', () => {
        alert("not yet working")
      })
      let remove = document.createElement('button')
      remove.addEventListener('click', (event) => {
        let td = event.target.parentNode; 
        let tr = td.parentNode; 
        tr.parentNode.removeChild(tr)
      })
      cell.appendChild(edit);
      newCell.appendChild(remove)
    }
  }
    
  let table = document.querySelector("table");
  let data = Object.keys(Data[0]);
  generateTableHead(table, data);
  generateTable(table, Data);
    
  
  function addData(event) {
    const newData = []
    const obj = {};
    event.preventDefault()
    const getData = document.querySelectorAll('#addData input')
    console.log(getData[1].value)
    obj.projectName = getData[0].value
    obj.startDate = getData[1].value
    obj.status = getData[2].value < 100 ? 'Pending' : 'Completed'
    obj.members = "https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-3.jpg"
    obj.progress = parseInt(getData[2].value)
    newData.unshift(obj)
    generateTable(table, newData);
    document.querySelector('#addData').style.display = 'none'
  }
  
  
  const searchInput = document.querySelector('#searchForm')
  function searchTable(event) {
    event.preventDefault()
    const res = []
    let val = event.target.value
    for(let element of Data) {
      if(element.projectName.toLowerCase() === val.toLowerCase()) {
        res.push(element)
      }
    }
    let oldTable = document.querySelector('table')
    oldTable.innerHTML = ""
    generateTableHead(table, data)
    generateTable(table, res)
  }
  
  function showForm() {
    document.querySelector('#addData').style.display = 'flex'
  }