import { Edges, Html, Image, } from '@react-three/drei'
import React, { useEffect, useRef, useState } from 'react'
import './util'
import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'
import { links, texts } from './util'

const Experience = () => {
    const containerRef = useRef()
    const [scrollTop, setScrollTop] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const newScrollTop = window.scrollY || document.documentElement.scrollTop;
            setScrollTop(newScrollTop);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useFrame((state, delta) => {
        if (containerRef.current) {
            containerRef.current.rotation.y += (scrollTop * 0.0014 - containerRef.current.rotation.y) * 0.1;
        }
    });

    return (
        <>
            <group ref={containerRef} position={[0, 0.1, 0]}>
                <Carousel links={links} texts={texts} />
            </group>
        </>
    )
}

export default Experience



const Carousel = ({ texts, radius = 2.8, count = 12, links }) => {
    const handleClick = (i) => {
        const link = links[i]
        if (link) {
            window.open(link.link, '_blank')
        }
    }

    return (
        Array.from({ length: count }, (_, i) => (
            <Card
                key={i}
                i={i}
                texts={texts}
                onClick={() => handleClick(i)}
                url={`/projects/img${Math.floor(i % 12) + 1}.png`}
                position={[Math.sin((i / count) * Math.PI * 2.0) * radius, 0, Math.cos((i / count) * Math.PI * 2.0) * radius]}
                rotation={[0, Math.PI + (i / count) * Math.PI * 2.0, 0]}
            />
        ))
    )
}


const Card = ({ url, texts, i, radius = 2.8, count = 12, ...props }) => {
    const [hovered, hover] = useState(false)
    const ref = useRef()
    const ponitOver = (e) => (e.stopPropagation(), hover(true))
    const pointOut = () => hover(false)
    useFrame((state, delta) => {
        easing.damp(ref.current.material, 'radius', hovered ? 0.02 : 0.03, 0.2, delta)
        easing.damp(ref.current.material, 'zoom', hovered ? 0.65 : 0.75, 0.2, delta)
    })

    return (
        <>
            <Image
                ref={ref}
                url={url}
                transparent
                onPointerOver={ponitOver}
                onPointerOut={pointOut}
                {...props}
                toneMapped={false}>
                <bentPlaneGeometry args={[0.02, 1.25, 0.95, 20, 20]} />
            </Image>

            {hovered && (
                <Html
                    center
                    rotation={[0, (Math.PI + (i / count) * Math.PI * 2.0), 0]}
                    position={[Math.sin((i / count) * Math.PI * 2.0) * radius, -0.72, Math.cos((i / count) * Math.PI * 2.0) * radius]}
                >
                    <div className='flex flex-col gap-1'>
                        <h1 className=' text-white text-xl lg:text-2xl font-cabinet font-bold'>{texts[i].text}</h1>
                        <p className='mb-2 w-[300px] lg:w-[400px] text-gray-400 text-[13px] lg:text-[15px] font-satoshi font-normal '>{texts[i].about}</p>
                        <div className='flex gap-6 justify-center'>
                            <p className='border-gray-400 border flex w-[100px] lg:w-[130px] justify-center font-cabinet text-sm lg:text-base rounded-lg items-center text-white h-[24px] lg:h-[30px] bg-[#00000030]  shadow-sm saturate-100 backdrop-blur-md'>
                                {texts[i].tech1}
                            </p>
                            <p className='border-gray-400 border  flex w-[100px] lg:w-[130px] justify-center font-cabinet text-sm lg:text-base  rounded-lg items-center text-white h-[24px] lg:h-[30px] bg-[#00000030]  shadow-sm saturate-100 backdrop-blur-md'>
                                {texts[i].tech2}
                            </p>
                        </div>
                    </div>

                </Html>
            )}
            <Image
                url='/image.jpg'

                us={0.03}
                color='#000050'
                transparent={true}
                opacity={0.3}
                onPointerOver={ponitOver}
                onPointerOut={pointOut}
                {...props}
                toneMapped={false}>
                <bentPlaneGeometry args={[0.03, 1.4, 1.1, 20, 20]} />
                <Edges
                    color='#150b46'
                    linewidth={1.5}

                />

            </Image>

        </>
    )
}


