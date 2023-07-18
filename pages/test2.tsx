import { NextPage } from "next"
import { motion } from 'framer-motion'

const Page: NextPage = () => {
    return (
        <motion.h1 className="text-white font-bold text-2xl inline-block" whileHover={{
            scale: 2
        }} >
            Hello World
        </motion.h1>
    )
}

export default Page