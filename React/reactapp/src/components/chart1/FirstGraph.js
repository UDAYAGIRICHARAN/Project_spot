import React , {useState, useEffect} from 'react';
import axios from 'axios';
import Chart from 'react-apexcharts'
const  FirstGraph =()=> {
  const [category, setCategory] = useState([])
  const [data, setData] = useState([])

  useEffect(() => {
      const age = [];
      const salary = [];

      axios.get("https://dummy.restapiexample.com/api/v1/employees").then(response =>{
          console.log("response", response)
          response.data.data.map(item => {
            console.log("item", item)
              age.push(item.employee_age);
              salary.push(item.employee_name)
          })
          setCategory(salary)
          setData(age)
          console.log("age", age, salary)
      }).catch(e => {
          alert(e);
      })
  }, [])
  
    return (

        <React.Fragment>
            <div>
                <h3 style={{fontSize : "25px", paddingLeft: "317px", fontWeight: "bolder"}}>INDIVIDUAL TASK PROGRESS CHART</h3>
                <br></br>
      <Chart options={{
        theme: { mode: "dark" },
        chart: {
          id: 'apexchart-example'
        },
        xaxis: {
          categories: category
        }
      }} 
      series={[{
        name: 'Completion Percentage ',
        data: data
      }]} type="line" width={1000} height={250} />
      </div>

</React.Fragment>
    )
}

export default FirstGraph