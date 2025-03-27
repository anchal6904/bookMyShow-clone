import Navbar from '../components/Navbar/Navbar'

const DefaultLayoutHoc = (Component) =>({...props})=> {
  return (
    <div>
        <Navbar/>
      <Component {...props}/>
    </div>
  )
}

export default DefaultLayoutHoc
