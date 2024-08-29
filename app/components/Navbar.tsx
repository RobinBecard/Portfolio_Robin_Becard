import logo from "../assets/Robin_photo.jpg";
import {LinkedinFilled} from '@ant-design/icons'
import {GithubFilled} from '@ant-design/icons'
import {InstagramOutlined} from '@ant-design/icons'
import {TwitterOutlined} from '@ant-design/icons'

export const Navbar = () => {
    return <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center text-4xl" style={{ fontFamily: 'Ethnocentric RG, sans-serif' }}>
            RB
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <LinkedinFilled/>
            <GithubFilled/>
            <InstagramOutlined/> 
            <TwitterOutlined/>
        </div>
    </nav>
}