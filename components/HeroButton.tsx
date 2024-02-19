import { motion } from 'framer-motion'
import { useAtom } from 'jotai'
import { showNavAtom } from './Hero'

export const HeroButton = () => {

    const [showNav, setNav] = useAtom(showNavAtom)

    return (
        <motion.button
            whileHover={{
                scale: 1.15,
                transition: {
                    duration: 0.3,
                },
            }}
            onClick={() => setNav(!showNav)}
            className="relative bg-gradient-to-tr rounded-full border-transparent from-blue-400 to-blue-700 p-1 w-48 h-auto focus:ring-0 focus:from-blue-600 focus:to-blue-900"
        >
            <motion.div
                animate={{
                    opacity: 0,
                    transition: {
                        duration: 0.8,
                        ease: "easeOut",
                    },
                }}
                whileHover={{
                    opacity: 1,
                    transition: {
                        duration: 0.8,
                        ease: "easeOut",
                    },
                }}
                className="scale-105 blur-2xl rounded-full from-blue-400 to-blue-700 bg-gradient-to-tr absolute inset-0"
            ></motion.div>
            <div className="rounded-full font-bold bg-black transition-all duration-300 py-2 relative z-10 pointer-events-none">
                {"Explore"}
            </div>
        </motion.button>
    )
}