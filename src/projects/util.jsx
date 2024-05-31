import * as THREE from 'three'
import { extend } from '@react-three/fiber'
// Paul West @prisoner849 https://discourse.threejs.org/u/prisoner849
// https://discourse.threejs.org/t/simple-curved-plane/26647/10
class BentPlaneGeometry extends THREE.PlaneGeometry {
    constructor(radius, ...args) {
        super(...args)
        let p = this.parameters
        let hw = p.width * 0.5
        let a = new THREE.Vector2(-hw, 0)
        let b = new THREE.Vector2(0, radius)
        let c = new THREE.Vector2(hw, 0)
        let ab = new THREE.Vector2().subVectors(a, b)
        let bc = new THREE.Vector2().subVectors(b, c)
        let ac = new THREE.Vector2().subVectors(a, c)
        let r = (ab.length() * bc.length() * ac.length()) / (2 * Math.abs(ab.cross(ac)))
        let center = new THREE.Vector2(0, radius - r)
        let baseV = new THREE.Vector2().subVectors(a, center)
        let baseAngle = baseV.angle() - Math.PI * 0.5
        let arc = baseAngle * 2
        let uv = this.attributes.uv
        let pos = this.attributes.position
        let mainV = new THREE.Vector2()
        for (let i = 0; i < uv.count; i++) {
            let uvRatio = 1 - uv.getX(i)
            let y = pos.getY(i)
            mainV.copy(c).rotateAround(center, arc * uvRatio)
            pos.setXYZ(i, mainV.x, y, -mainV.y)
        }
        pos.needsUpdate = true
    }
}



extend({ BentPlaneGeometry })

export const texts = [
    {
        text: "Finserve",
        about: "A Finance Dashboard website for tracking and analyzing financial data to facilitate informed decision-making",
        tech1: "Next js",
        tech2: "Shadcn UI",
        link: 'https://fin-serve.vercel.app/',


    },
    {
        text: "Furniture",
        about: "A Furniture website with captivating animations, offering a delightful browsing experience",
        tech1: "Next js",
        tech2: "GSAP",
        link: 'https://furniture-two-eta.vercel.app/',

    },
    {
        text: "Blog Website",
        about: "A Blog Website, where I share my latest adventures and discoveries.",
        tech1: "Next js",
        tech2: "Sanity CMS",
        link: 'https://sandeep-blog-eight.vercel.app/',

    },
    {
        text: "Pawsofindia",
        about: "An Indian dog breeds website with captivating visuals, providing an immersive experience for enthusiasts",
        tech1: "React",
        tech2: "Tailwind CSS",
        link: 'https://paws-of-india.vercel.app/',

    },
    {
        text: "Shop Co",
        about: "A beautifully designed e-commerce store that provides a seamless shopping experience",
        tech1: "Next js",
        tech2: "Sanity CMS",
        link: 'https://shop-co-e-commerce.vercel.app/',


    },

    {
        text: "Oakhaven",
        about: " Immersive landing page incorporating Three.js effects for beer aficionados",
        tech1: "Three js",
        tech2: "React",
        link: 'https://oak-haven.vercel.app/',

    },
    {
        text: "Finserve",
        about: "A Finance Dashboard website for tracking and analyzing financial data to facilitate informed decision-making",
        tech1: "Next js",
        tech2: "Shadcn UI",
        link: 'https://fin-serve.vercel.app/',


    },
    {
        text: "Furniture",
        about: "A Furniture website with captivating animations, offering a delightful browsing experience",
        tech1: "Next js",
        tech2: "GSAP",
        link: 'https://furniture-two-eta.vercel.app/',


    },
    {
        text: "Blog Website",
        about: "A Blog Website,where I share my latest adventures and discoveries.",
        tech1: "Next js",
        tech2: "Sanity CMS",
        link: 'https://sandeep-blog-eight.vercel.app/',

    },
    {
        text: "Pawsofindia",
        about: "An Indian dog breeds website with captivating visuals, providing an immersive experience for enthusiasts",
        tech1: "React",
        tech2: "Tailwind CSS",
        link: 'https://paws-of-india.vercel.app/',


    },
    {
        text: "Shop Co",
        about: "A beautifully designed e-commerce store that provides a seamless shopping experience",
        tech1: "Next js",
        tech2: "Sanity CMS",
        tech3: "Framer Motion",
        link: 'https://shop-co-e-commerce.vercel.app/',

    },

    {
        text: "Oakhaven",
        about: " Immersive landing page incorporating Three.js effects for beer aficionados",
        tech1: "Three js",
        tech2: "React",
        link: 'https://oak-haven.vercel.app/',


    },
]


export const projects = [
    {
        text: "Finserve",
        about: "A Finance Dashboard website for tracking and analyzing financial data to facilitate informed decision-making",
        tech1: "Next js",
        tech2: "Shadcn UI",
        link: 'https://fin-serve.vercel.app/',
        i: 1

    },
    {
        text: "Furniture",
        about: "A Furniture website with captivating animations, offering a delightful browsing experience",
        tech1: "Next js",
        tech2: "GSAP",
        link: 'https://furniture-two-eta.vercel.app/',
        i: 2

    },
    {
        text: "Pawsofindia",
        about: "An Indian dog breeds website with captivating visuals, providing an immersive experience for enthusiasts",
        tech1: "React",
        tech2: "Tailwind CSS",
        link: 'https://paws-of-india.vercel.app/',
        i: 3

    },
    {
        text: "Shop Co",
        about: "A beautifully designed e-commerce store that provides a seamless shopping experience",
        tech1: "Next js",
        tech2: "Sanity CMS",
        link: 'https://shop-co-e-commerce.vercel.app/',
        i: 4


    },
    {
        text: "Roommates",
        about: "Expense Tracker: Easily manage shared expenses and bills, fostering financial harmony in shared living spaces",
        tech1: "React",
        tech2: "Tailwind CSS",
        link: 'https://mern-roommates.vercel.app/',
        i: 5

    },
    {
        text: "Oakhaven",
        about: " Immersive landing page incorporating Three.js effects for beer aficionados",
        tech1: "Three js",
        tech2: "React",
        link: 'https://oak-haven.vercel.app/',
        i: 6

    },
]


export const Homeprojects = [
    {
        text: "Finserve",
        about: "A Finance Dashboard website for tracking and analyzing financial data to facilitate informed decision-making",
        tech1: "Next js",
        tech2: "Shadcn UI",
        link: 'https://fin-serve.vercel.app/',
        i: 1

    },
    {
        text: "Furniture",
        about: "A Furniture website with captivating animations, offering a delightful browsing experience",
        tech1: "Next js",
        tech2: "GSAP",
        link: 'https://furniture-two-eta.vercel.app/',
        i: 2

    },
    {
        text: "Shop Co",
        about: "A beautifully designed e-commerce store that provides a seamless shopping experience",
        tech1: "Next js",
        tech2: "Sanity CMS",
        link: 'https://shop-co-e-commerce.vercel.app/',
        i: 3
    },

]