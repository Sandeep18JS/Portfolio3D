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
    },
    {
        text: "Furniture",
        about: "A Furniture website with captivating animations, offering a delightful browsing experience",
        tech1: "Next js",
        tech2: "GSAP",
    },
    {
        text: "Pawsofindia",
        about: "An Indian dog breeds website with captivating visuals, providing an immersive experience for enthusiasts",
        tech1: "React",
        tech2: "Tailwind CSS",
    },
    {
        text: "Portfolio",
        about: "My previous Portfolio, a glimpse into my journey and achievements",
        tech1: "React",
        tech2: "SASS",
    },
    {
        text: "Roommates",
        about: "Expense Tracker: Easily manage shared expenses and bills, fostering financial harmony in shared living spaces",
        tech1: "React",
        tech2: "Tailwind CSS",
    },
    {
        text: "Oakhaven",
        about: " Immersive landing page incorporating Three.js effects for beer aficionados",
        tech1: "Three js",
        tech2: "React",
    },
    {
        text: "Finserve",
        about: "A Finance Dashboard website for tracking and analyzing financial data to facilitate informed decision-making",
        tech1: "Next js",
        tech2: "Shadcn UI",
    },
    {
        text: "Furniture",
        about: "A Furniture website with captivating animations, offering a delightful browsing experience",
        tech1: "Next js",
        tech2: "GSAP",
    },
    {
        text: "Pawsofindia",
        about: "An Indian dog breeds website with captivating visuals, providing an immersive experience for enthusiasts",
        tech1: "React",
        tech2: "Tailwind CSS",
    },
    {
        text: "Portfolio",
        about: "My previous Portfolio, a glimpse into my journey and achievements",
        tech1: "React",
        tech2: "SASS",
    },
    {
        text: "Roommates",
        about: "Expense Tracker: Easily manage shared expenses and bills, fostering financial harmony in shared living spaces",
        tech1: "React",
        tech2: "Tailwind CSS",
    },
    {
        text: "Oakhaven",
        about: " Immersive landing page incorporating Three.js effects for beer aficionados",
        tech1: "Three js",
        tech2: "React",
    },
]

export const links = [
    {
        link: 'https://fin-serve.vercel.app/',
    },
    {
        link: 'https://furniture-two-eta.vercel.app/',
    },
    {
        link: 'https://paws-of-india.vercel.app/',
    },
    {
        link: 'https://sandeep-portfolio1.netlify.app/',
    },
    {
        link: 'https://mern-roommates.vercel.app/',
    },
    {
        link: 'https://oak-haven.vercel.app/',
    },
    {
        link: 'https://fin-serve.vercel.app/',
    },
    {
        link: 'https://furniture-two-eta.vercel.app/',
    },
    {
        link: 'https://paws-of-india.vercel.app/',
    },
    {
        link: 'https://sandeep-portfolio1.netlify.app/',
    },
    {
        link: 'https://mern-roommates.vercel.app/',
    },
    {
        link: 'https://oak-haven.vercel.app/',
    },
]