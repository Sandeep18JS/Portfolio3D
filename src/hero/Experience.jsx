import { Text, useFont } from '@react-three/drei'
import React from 'react'



const Experience = () => {
    return (
        <Text
            font='/CabinetGrotesk-Black.woff'
            textAlign='center'
            letterSpacing={.02}
            fontSize={1.}
            lineHeight={1.5}
            characters="abcdefghijklmnopqrstuvwxyz0123456789!"
        >
            Hi,I'm Sandeep,
            {'\n'}Front End Web Developer
            <meshBasicMaterial toneMapped={false} />
        </Text>
    )
}

export default Experience

useFont.preload("/CabinetGrotesk-Black.woff")