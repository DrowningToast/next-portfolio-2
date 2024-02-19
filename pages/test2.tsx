import { NextPage } from "next"
import { motion } from 'framer-motion'
import ContactScene from "../components/r3f/ContactScene"

const Page: NextPage = () => {
    return (
        <div className="w-screen h-screen relative">
            <ContactScene />
        </div>
    )
}

export default Page