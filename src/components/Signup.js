import React,{ useState , useEffect}  from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
export default function Signup() {
    const [value, setvalue] = useState("")
    const [allData, setData] = useState([]);
    const [select, setselect] = useState('')
     const [showpass, setshowpass] = useState(true)
    const hidepass=()=>{
       setshowpass(!showpass)
     }
   useEffect(() => {
   fetch(`data/iranstates.json`).then((data)=> data.json())
   .then(data=>{
       setData(data)
     console.log(data)})
   }, [])
   
   

  return (
    <>
    {console.log(allData[select])}
    
      <Form>
        <Form.Group className="mb-3" controlId="formBasicfirstname">
          <Form.Control type="text" placeholder="نام"required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasiclastname">
          <Form.Control type="text" placeholder=" نام خانوادگی" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="پست الکترونیک" required />
        </Form.Group>
        <Form.Group> 
          <Form.Label> تحصیلات</Form.Label>
        <Form.Select onChange={(el)=>setvalue(el.target.value)} aria-label="Default select example">
            <option value={""}>انتخاب کنید</option>
          <option value="1">کارشناسی</option>
          <option value="2">کارشناسی ارشد</option>
          <option value="3">دکتری</option>
        </Form.Select>
        </Form.Group>
        {value!==''?<Form.Group className="mb-3" controlId="university">
          <Form.Control type="text" placeholder="دانشگاه" required />
        </Form.Group>:""}
        <Form.Group> 
          <Form.Label> استان</Form.Label>
        <Form.Select onChange={(el)=>setselect(el.target.value)} aria-label="Default select example" required>
        <option value={""}>انتخاب کنید</option>
        {Object.keys(allData).map((value)=>{
          return <option value={value}>{value}</option>
        })}
        </Form.Select>
        </Form.Group>

        {select?<Form.Group> 
          <Form.Label> شهر</Form.Label>
        <Form.Select  aria-label="Default select example" required>
        <option value={""}>انتخاب کنید</option>
        {allData[select].map((item)=>{
          return <option value={item}>{item}</option>
        })}
        </Form.Select>
        </Form.Group>:""}
        
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="رمز عبور" required />
          <Button onClick={hidepass}>icon</Button>
        </Form.Group>
        <Button variant="primary" type="submit">
          ورود
        </Button>
      </Form>
    </>
  );
}
