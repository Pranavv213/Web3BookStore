import { PageHeader, Button, Input, Space, Badge } from 'antd';
import { useMoralis } from "react-moralis";
import './Header.css'
import Amazon from '../images/logo.png'
import BookStore from '../images/bookstore.png'
import USA from "../images/usa.png";

const { Search } = Input;
const Header = () => {
  const { authenticate } = useMoralis();
  return(
    <div className="site-page-header-ghost-wrapper">
      <PageHeader
        ghost={false}
        title="Amazon Clone"
        extra={[<>
          <img src={Amazon} className='logo'/>
          <img src={BookStore} className='logo'/>
          <Search
      placeholder="input search text"
      onSearch={value => console.log(value)}
      style={{ width: 200 }}
    />
         <Button className='login' key="1" type="primary" onClick={() => authenticate()}>
          Login with Metamask
          </Button>
         
              
             
          </>
        ]}>
      </PageHeader>
    </div>
  )
}

export default Header;