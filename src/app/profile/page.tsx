import { Metadata } from "next";

// the template metadata suffix/prefix is added
// before/after this
export const metadata: Metadata = {
    title: 'Profile'
}
const Profile = () => {
    return (<h1>Profile Page</h1>)
}
 
export default Profile;